import { useState } from "react";
import { VexelLogo } from "../ui/VexelLogo";

const QUICK_STARTERS = [
  {
    tag: "FIG",
    label:
      "Konversi wireframe-app.fig menjadi halaman dashboard Next.js + Tailwind CSS",
    model: "Vexel Frame",
    platform: "Web",
  },
  {
    tag: "API",
    label:
      "Rancang skema database PostgreSQL dan endpoint REST API autentikasi JWT",
    model: "Vexel Kernel",
    platform: "Web",
  },
  {
    tag: "UI",
    label:
      "Bangun layar profil responsif dengan Flutter & Dart sesuai grid Swiss-style",
    model: "Vexel Trace",
    platform: "Mobile",
  },
];

function CodeBlockCard({ fileName, code, repo, branch, onCommit }) {
  const [copied, setCopied] = useState(false);
  const [committedHash, setCommittedHash] = useState("");

  const handleCopy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleCommit = () => {
    const hash = Math.random().toString(16).substring(2, 9);
    setCommittedHash(hash);
    if (onCommit) onCommit(hash, fileName);
  };

  return (
    <div className="border border-border-hairline bg-code-bg text-[#E6EDF3] overflow-hidden">
      <div className="px-4 py-2.5 bg-[#161B22] border-b border-code-border flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-signal" />
          <span className="text-white font-semibold">{fileName}</span>
          <span className="text-[#8B949E] hidden sm:inline">
            ({repo} @ {branch})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="px-2.5 py-1 bg-code-border hover:bg-[#30363D] text-white border border-[#30363D] transition-colors"
          >
            {copied ? "Tersalin ✓" : "Salin Kode"}
          </button>

          <button
            type="button"
            onClick={handleCommit}
            className="px-2.5 py-1 bg-signal hover:bg-signal-hover text-white font-semibold transition-colors"
          >
            {committedHash
              ? `Committed (${committedHash}) ✓`
              : `Commit ke ${branch}`}
          </button>
        </div>
      </div>

      <pre className="p-4 text-xs leading-relaxed overflow-x-auto code-scroll font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function ChatMessageFeed({
  messages,
  repo,
  branch,
  onQuickPrompt,
  onCommitSuccess,
}) {
  // Tampilan awal bersih saat belum ada pesan (Empty State)
  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 overflow-y-auto">
        <div className="w-full max-w-2xl flex flex-col items-center text-center space-y-8">
          {/* Ikon & Judul Utama */}
          <div className="space-y-4 flex flex-col items-center">
            <VexelLogo size={42} showText={false} />
            <h1 className="text-2xl sm:text-3xl font-bold text-ink-primary tracking-tight">
              Apa yang ingin kita bangun?
            </h1>
          </div>

          {/* 3 Baris Saran Cepat di Atas Bar Chat */}
          <div className="w-full max-w-xl space-y-2 text-left">
            {QUICK_STARTERS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => onQuickPrompt(item)}
                className="w-full px-3.5 py-2.5 flex items-center gap-3 text-xs sm:text-sm text-ink-secondary hover:text-ink-primary hover:bg-canvas border border-transparent hover:border-border-hairline transition-colors"
              >
                <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-canvas border border-border-hairline text-signal shrink-0">
                  {item.tag}
                </span>
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Tampilan Percakapan Aktif
  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 pt-8 pb-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {messages.map((msg) => {
          if (msg.role === "user") {
            return (
              <div key={msg.id} className="flex justify-end">
                <div className="max-w-xl bg-canvas border border-border-hairline p-4 space-y-2">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-ink-muted">
                    <span>{msg.repo}</span>
                    <span>•</span>
                    <span>{msg.branch}</span>
                    <span>•</span>
                    <span className="text-ink-primary font-semibold">
                      {msg.platform}
                    </span>
                  </div>

                  {msg.attachment && (
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-border-hairline font-mono text-xs text-ink-primary">
                      <span className="text-signal font-bold">[FILE]</span>
                      <span>{msg.attachment}</span>
                    </div>
                  )}

                  <p className="text-sm text-ink-primary leading-relaxed">
                    {msg.text}
                  </p>
                </div>
              </div>
            );
          }

          return (
            <div key={msg.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <VexelLogo size={18} showText={false} />
                  <span className="font-mono text-xs font-bold text-ink-primary">
                    {msg.model}
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 bg-canvas border border-border-hairline text-signal">
                    {msg.latency}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-ink-muted">
                  {msg.time}
                </span>
              </div>

              <p className="text-sm text-ink-secondary leading-relaxed">
                {msg.summary}
              </p>

              {msg.code && (
                <CodeBlockCard
                  fileName={msg.fileName}
                  code={msg.code}
                  repo={repo}
                  branch={branch}
                  onCommit={onCommitSuccess}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
