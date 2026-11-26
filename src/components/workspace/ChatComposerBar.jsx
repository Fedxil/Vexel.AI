import { useRef, useState } from "react";

const REPOS = ["monorepo", "vexel-web", "api-service"];
const BRANCHES = ["main", "feature/slicing", "staging"];
const MODELS = [
  { name: "Vexel Frame", tier: "Vision" },
  { name: "Vexel Trace", tier: "Fast" },
  { name: "Vexel Kernel", tier: "200K" },
];

export function ChatComposerBar({
  repo,
  onChangeRepo,
  branch,
  onChangeBranch,
  platform,
  onChangePlatform,
  model,
  onChangeModel,
  attachedFile,
  onAttachFile,
  onSendMessage,
}) {
  const [text, setText] = useState("");
  const [plusMenuOpen, setPlusMenuOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onAttachFile(file.name);
      setPlusMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() && !attachedFile) return;
    onSendMessage(
      text.trim() ||
        `Konversi desain ${attachedFile} menjadi komponen ${platform} responsif`,
    );
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="px-4 pb-5 pt-2 bg-white shrink-0">
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="border border-border-hairline focus-within:border-ink-primary bg-white transition-colors"
        >
          {/* Strip Atas Bar Chat: Repo, Branch, Target Platform, & Lampiran Aktif */}
          <div className="px-3.5 py-2 bg-canvas border-b border-border-hairline flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-3">
              {/* Dropdown Repo */}
              <label className="inline-flex items-center gap-1.5 text-ink-secondary hover:text-ink-primary">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z" />
                </svg>
                <select
                  value={repo}
                  onChange={(e) => onChangeRepo(e.target.value)}
                  aria-label="Pilih Repositori"
                  className="bg-transparent font-medium text-ink-primary focus:outline-none cursor-pointer"
                >
                  {REPOS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>

              <span className="text-border-strong">/</span>

              {/* Dropdown Branch */}
              <label className="inline-flex items-center gap-1.5 text-ink-secondary hover:text-ink-primary">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="6" y1="3" x2="6" y2="15" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
                <select
                  value={branch}
                  onChange={(e) => onChangeBranch(e.target.value)}
                  aria-label="Pilih Branch Git"
                  className="bg-transparent font-medium text-signal focus:outline-none cursor-pointer"
                >
                  {BRANCHES.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Kanan Strip: Lampiran File & Sakelar Web/Mobile */}
            <div className="flex items-center gap-2">
              {attachedFile && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white border border-border-hairline text-[11px] text-ink-primary">
                  <span className="text-signal font-bold">FIG</span>
                  <span className="max-w-35 truncate">{attachedFile}</span>
                  <button
                    type="button"
                    onClick={() => onAttachFile("")}
                    className="text-ink-muted hover:text-ink-primary ml-0.5"
                    title="Hapus lampiran"
                  >
                    ×
                  </button>
                </span>
              )}

              <div className="inline-flex border border-border-hairline bg-white">
                {["Web", "Mobile"].map((target) => (
                  <button
                    key={target}
                    type="button"
                    onClick={() => onChangePlatform(target)}
                    className={`px-2 py-0.5 text-[11px] font-semibold transition-colors ${
                      platform === target
                        ? "bg-ink-primary text-white"
                        : "text-ink-muted hover:text-ink-primary"
                    }`}
                  >
                    {target}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Area Input Teks Utama */}
          <div className="px-4 pt-3 pb-2">
            <textarea
              rows={2}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tulis instruksi ngoding, tempel tautan Figma, atau unggah desain..."
              className="w-full resize-none text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none leading-relaxed"
            />
          </div>

          {/* Bar Kontrol Bawah: Tanda (+) Kiri | Pemilih Model & Kirim Kanan */}
          <div className="px-3 pb-3 flex items-center justify-between gap-2 relative">
            {/* Kiri: Tombol + Tambah File / Konteks */}
            <div className="relative">
              <input
                ref={fileInputRef}
                type="file"
                accept=".fig,.png,.jpg,.jpeg,.json,.jsx,.tsx,.dart"
                onChange={handleFileChange}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => setPlusMenuOpen((prev) => !prev)}
                title="Tambahkan file desain, wireframe, atau konteks repositori"
                className="w-8 h-8 flex items-center justify-center border border-border-hairline bg-canvas hover:bg-ink-primary hover:text-white hover:border-ink-primary text-ink-primary font-mono text-base transition-colors"
              >
                +
              </button>

              {plusMenuOpen && (
                <div className="absolute bottom-10 left-0 w-64 bg-white border border-ink-primary shadow-md z-20 py-1 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full px-3.5 py-2.5 text-left hover:bg-canvas flex items-center justify-between text-ink-primary"
                  >
                    <span>+ Unggah Desain (.fig / PNG)</span>
                    <span className="text-signal">FRAME</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onAttachFile("wireframe-checkout.fig");
                      setPlusMenuOpen(false);
                    }}
                    className="w-full px-3.5 py-2.5 text-left hover:bg-canvas flex items-center justify-between text-ink-primary border-t border-border-hairline"
                  >
                    <span>+ Lampirkan Sample .fig</span>
                    <span className="text-ink-muted">DEMO</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onAttachFile("schema.prisma");
                      setPlusMenuOpen(false);
                    }}
                    className="w-full px-3.5 py-2.5 text-left hover:bg-canvas flex items-center justify-between text-ink-primary border-t border-border-hairline"
                  >
                    <span>+ Konteks Skema Database</span>
                    <span className="text-ink-muted">KERNEL</span>
                  </button>
                </div>
              )}
            </div>

            {/* Kanan: Pemilih Model di Kolom Chat + Tombol Kirim */}
            <div className="flex items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-canvas border border-border-hairline font-mono text-xs">
                <span className="w-1.5 h-1.5 bg-signal" />
                <label htmlFor="chat-model-picker" className="sr-only">
                  Pilih Model AI
                </label>
                <select
                  id="chat-model-picker"
                  value={model}
                  onChange={(e) => onChangeModel(e.target.value)}
                  className="bg-transparent font-semibold text-ink-primary focus:outline-none cursor-pointer"
                >
                  {MODELS.map((m) => (
                    <option key={m.name} value={m.name}>
                      {m.name} ({m.tier})
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                title="Kirim instruksi"
                className="w-8 h-8 flex items-center justify-center bg-ink-primary hover:bg-signal text-white transition-colors"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M12 19V5" />
                  <path d="M5 12l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
