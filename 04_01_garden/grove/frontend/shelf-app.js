import { createApp, ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js";

const mountNode = document.getElementById("shelf-vue-app");
if (!mountNode) {
  throw new Error("Missing #shelf-vue-app mount node");
}

const rawBase = mountNode.dataset.apiBase || "/api";
const apiBase = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;
const originBase = typeof window !== "undefined" ? window.location.origin : "";

function api(path) {
  const suffix = path.startsWith("/") ? path : `/${path}`;
  if (apiBase.startsWith("http://") || apiBase.startsWith("https://")) {
    return `${apiBase}${suffix}`;
  }
  return `${originBase}${apiBase}${suffix}`;
}

createApp({
  setup() {
    const command = ref("");
    const busy = ref(false);
    const progress = ref(0);
    const status = ref("");
    const authorQuery = ref("");
    const selectedAuthor = ref("");
    const showRecent = ref(false);
    const authorBusy = ref(false);
    const authorSuggestions = ref([]);
    const shelfBooks = ref([]);
    const shelfBusy = ref(false);
    const editing = ref({});
    const messages = ref([
      {
        role: "assistant",
        text:
          "Napisz polecenie, np.: dodaj wszystkie książki autora Olga Tokarczuk albo dodaj 10 książek o temacie reportaż wojenny.",
      },
    ]);

    const appendMessage = (role, text) => {
      messages.value.push({ role, text });
    };

    const fetchShelfBooks = async (author = "") => {
      shelfBusy.value = true;
      try {
        const qs = new URLSearchParams();
        if (author.trim()) qs.set("author", author.trim());
        qs.set("max_items", "60");

        const response = await fetch(api(`/shelf/list?${qs.toString()}`));
        const data = await response.json();
        if (!response.ok) throw new Error(data?.error || "Błąd pobierania listy shelf");
        shelfBooks.value = Array.isArray(data.items) ? data.items : [];
        const nextEditing = {};
        for (const book of shelfBooks.value) {
          nextEditing[book.slug] = {
            description: book.description || "",
            body: book.body || "",
            review: book.review || "",
            saving: false,
          };
        }
        editing.value = nextEditing;
      } catch (error) {
        status.value = `Błąd: ${error instanceof Error ? error.message : String(error)}`;
      } finally {
        shelfBusy.value = false;
      }
    };

    const fetchAuthors = async () => {
      const query = authorQuery.value.trim();
      authorSuggestions.value = [];
      status.value = "";

      authorBusy.value = true;
      try {
        const response = await fetch(api(`/authors/search?q=${encodeURIComponent(query)}`));
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data?.error || "Błąd pobierania autorów");
        }
        authorSuggestions.value = Array.isArray(data.items) ? data.items : [];
      } catch (error) {
        status.value = `Błąd: ${error instanceof Error ? error.message : String(error)}`;
      } finally {
        authorBusy.value = false;
      }
    };

    const showAuthorBooks = (authorName) => {
      selectedAuthor.value = authorName;
      showRecent.value = false;
      authorQuery.value = authorName;
      void fetchShelfBooks(authorName);
    };

    const prepareAuthorCommand = (authorName) => {
      command.value = `dodaj wszystkie książki autora ${authorName}`;
    };

    const removeAuthor = async (authorName) => {
      const ok = window.confirm(`Usunąć autora ${authorName} wraz z jego pozycjami z shelf?`);
      if (!ok) return;

      busy.value = true;
      progress.value = 10;
      status.value = `Usuwam autora ${authorName}...`;
      try {
        const response = await fetch(api("/authors/remove"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ author: authorName }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data?.error || "Błąd usuwania autora");

        progress.value = 100;
        status.value = `Usunięto ${data.deletedCount ?? 0} plików autora ${authorName}.`;
        if (selectedAuthor.value === authorName) {
          selectedAuthor.value = "";
          authorQuery.value = "";
        }
        await fetchAuthors();
        await fetchShelfBooks(selectedAuthor.value);
      } catch (error) {
        status.value = `Błąd: ${error instanceof Error ? error.message : String(error)}`;
      } finally {
        busy.value = false;
        if (progress.value < 100) progress.value = 0;
      }
    };

    const saveBook = async (book) => {
      const row = editing.value[book.slug];
      if (!row) return;

      row.saving = true;
      status.value = `Zapisuję zmiany: ${book.title}...`;

      try {
        const response = await fetch(api("/shelf/update"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            slug: book.slug,
            description: row.description,
            body: row.body,
            review: row.review,
            source: row.lastSource || "manual",
            note: row.lastSource === "chat-generate" ? "generated via chat" : "edited in UI",
          }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data?.error || "Błąd zapisu MD");

        status.value = data.message || "Zapisano zmiany";
        await fetchShelfBooks(selectedAuthor.value);
      } catch (error) {
        status.value = `Błąd: ${error instanceof Error ? error.message : String(error)}`;
      } finally {
        row.saving = false;
        row.lastSource = "manual";
      }
    };

    const generateBookViaChat = async (book) => {
      const row = editing.value[book.slug];
      if (!row) return;

      row.saving = true;
      status.value = `Generuję nowy opis przez chat: ${book.title}...`;
      try {
        const response = await fetch(api("/shelf/generate"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug: book.slug }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data?.error || "Błąd generowania przez chat");

        const generated = data?.generated ?? {};
        if (typeof generated.description === "string") row.description = generated.description;
        if (typeof generated.body === "string") row.body = generated.body;
        if (typeof generated.review === "string") row.review = generated.review;
        row.lastSource = "chat-generate";
        status.value = "Wygenerowano nową treść. Zapisz zmiany MD, aby utrwalić.";
      } catch (error) {
        status.value = `Błąd: ${error instanceof Error ? error.message : String(error)}`;
      } finally {
        row.saving = false;
      }
    };

    const processStream = async (response) => {
      if (!response.body) {
        throw new Error("Brak strumienia odpowiedzi");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          const chunk = line.trim();
          if (!chunk) continue;
          const payload = JSON.parse(chunk);

          if (payload.event === "progress") {
            progress.value = typeof payload.value === "number" ? payload.value : progress.value;
            continue;
          }

          if (payload.event === "status") {
            status.value = typeof payload.text === "string" ? payload.text : status.value;
            continue;
          }

          if (payload.event === "done") {
            const answer = typeof payload.reply === "string" ? payload.reply : "Brak odpowiedzi agenta.";
            appendMessage("assistant", answer);
            status.value = `OK. Zużycie tokenów: ${payload.totalTokens ?? "-"}`;
            progress.value = 100;
            authorQuery.value = "";
            await fetchAuthors();
            selectedAuthor.value = "";
            showRecent.value = true;
            await fetchShelfBooks("");
            continue;
          }

          if (payload.event === "error") {
            const errorText = typeof payload.text === "string" ? payload.text : "Błąd przetwarzania";
            throw new Error(errorText);
          }
        }
      }
    };

    const sendCommand = async () => {
      const userMessage = command.value.trim();
      if (!userMessage) {
        status.value = "Wpisz polecenie.";
        return;
      }

      busy.value = true;
      progress.value = 5;
      status.value = "Wysyłam polecenie do agenta...";
      appendMessage("user", userMessage);
      try {
        const response = await fetch(api("/chat/stream"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage }),
        });
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data?.error || "Błąd czatu");
        }

        await processStream(response);
        command.value = "";
      } catch (error) {
        status.value = `Błąd: ${error instanceof Error ? error.message : String(error)}`;
        appendMessage("assistant", status.value);
      } finally {
        busy.value = false;
        if (progress.value < 100) progress.value = 0;
      }
    };

    return {
      command,
      busy,
      progress,
      authorQuery,
      authorBusy,
      selectedAuthor,
      showRecent,
      authorSuggestions,
      shelfBooks,
      shelfBusy,
      editing,
      status,
      messages,
      fetchAuthors,
      fetchShelfBooks,
      showAuthorBooks,
      prepareAuthorCommand,
      removeAuthor,
      saveBook,
      generateBookViaChat,
      sendCommand,
    };
  },
  mounted() {
    void this.fetchAuthors();
  },
  template: `
    <div class="shelf-app">
      <h3>Dodawanie książek przez chat</h3>
      <p class="shelf-muted">Dodawanie działa przez agenta, tak jak w lesson16:garden. Możesz wydawać polecenia masowe i tematyczne.</p>

      <label>
        Komenda dla agenta
        <textarea v-model="command" placeholder="np. dodaj wszystkie książki autora Szczepan Twardoch"></textarea>
      </label>
      <div class="shelf-actions">
        <button class="shelf-btn" :disabled="busy" @click="sendCommand">{{ busy ? 'Wysyłanie...' : 'Wyślij do agenta' }}</button>
      </div>
      <div class="shelf-progress-wrap" v-if="busy || progress > 0">
        <div class="shelf-progress-bar" :style="{ width: progress + '%' }"></div>
      </div>

      <div class="shelf-author-list">
        <label>
          Wyszukaj autora
          <input v-model="authorQuery" @input="fetchAuthors" placeholder="np. Olga Tokarczuk" />
        </label>
        <div class="shelf-muted" v-if="authorBusy">Szukam autorów...</div>
        <div class="shelf-author-items" v-if="authorSuggestions.length > 0">
          <div
            class="shelf-author-row"
            v-for="author in authorSuggestions"
            :key="author.key || author.name"
          >
            <button class="shelf-author-chip" @click="showAuthorBooks(author.name)">
              {{ author.name }}
              <span v-if="author.count > 0"> (na półce: {{ author.count }})</span>
            </button>
            <button
              class="shelf-author-delete"
              :disabled="busy || author.count < 1"
              title="Usuń autora i jego pozycje"
              @click="removeAuthor(author.name)"
            >
              ×
            </button>
            <button class="shelf-author-shortcut" @click="prepareAuthorCommand(author.name)">Do czatu</button>
          </div>
        </div>
      </div>

      <div class="shelf-chat-log" v-if="messages.length > 0">
        <div
          v-for="(msg, idx) in messages"
          :key="idx"
          :class="['shelf-msg', msg.role]"
        >
          <strong>{{ msg.role === 'user' ? 'Ty' : 'Agent' }}:</strong>
          <div>{{ msg.text }}</div>
        </div>
      </div>

      <p class="shelf-muted" style="margin-top: 0.65rem;">{{ status }}</p>

      <Teleport to="#shelf-author-results">
        <section class="shelf-results-panel">
          <h3 class="shelf-results-title">
            Książki na półce{{ selectedAuthor ? ' - ' + selectedAuthor : (showRecent ? ' - ostatnio dodane' : '') }}
          </h3>
          <p class="shelf-muted" v-if="!selectedAuthor && !showRecent">Kliknij autora po lewej, aby wyświetlić jego książki.</p>
          <p class="shelf-muted" v-if="shelfBusy">Odświeżam listę...</p>
          <article class="shelf-book-card" v-for="book in shelfBooks" :key="book.slug">
            <h4 class="shelf-book-title">{{ book.title }}</h4>
            <p class="shelf-book-author">{{ book.author }}</p>
            <label class="shelf-edit-label">Opis</label>
            <textarea class="shelf-edit-input" v-model="editing[book.slug].description"></textarea>
            <label class="shelf-edit-label">Treść</label>
            <textarea class="shelf-edit-input shelf-edit-input-lg" v-model="editing[book.slug].body"></textarea>
            <div class="shelf-book-review">
              <strong>Recenzja</strong>
              <textarea class="shelf-edit-input shelf-edit-input-lg" v-model="editing[book.slug].review"></textarea>
            </div>
            <div class="shelf-actions">
              <button class="shelf-btn" :disabled="editing[book.slug].saving" @click="generateBookViaChat(book)">
                {{ editing[book.slug].saving ? 'Generuję...' : 'Wygeneruj opis przez chat' }}
              </button>
              <button class="shelf-btn" :disabled="editing[book.slug].saving" @click="saveBook(book)">
                {{ editing[book.slug].saving ? 'Zapis...' : 'Zapisz zmiany MD' }}
              </button>
            </div>
          </article>
          <p class="shelf-muted" v-if="selectedAuthor && !shelfBusy && shelfBooks.length === 0">Brak pozycji tego autora na półce.</p>
          <p class="shelf-muted" v-if="showRecent && !shelfBusy && shelfBooks.length === 0">Brak nowo dodanych pozycji.</p>
        </section>
      </Teleport>
    </div>
  `,
}).mount("#shelf-vue-app");
