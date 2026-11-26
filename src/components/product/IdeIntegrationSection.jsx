import { useState } from "react";
import { IDE_FEATURES } from "../../data/vexelData";

export function IdeIntegrationSection() {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const vsCodeCommand = "ext install vexel-labs.vexel-ai";

  const copyCommand = () => {
    navigator.clipboard?.writeText(vsCodeCommand);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 1800);
  };

  return (
    <section className="border-b border-border-hairline bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
            VEXEL UNTUK IDE • EKSTENSI EDITOR LOKAL
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink-primary">
            Bawa Kekuatan Vexel.ai ke Dalam Editor Kodemu.
          </h2>
          <p className="text-base text-ink-secondary">
            Sinkronkan akun, riwayat chat, dan akses model antara Web Workshop
            dengan lingkungan pengembangan lokalmu.
          </p>
        </div>

        {/* 3 Fitur Utama IDE */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-hairline">
          {IDE_FEATURES.map((feat) => (
            <div
              key={feat.code}
              className="p-6 sm:p-7 bg-canvas border-r border-b border-border-hairline space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-white border border-border-hairline">
                  {feat.code.toUpperCase()}
                </span>
                <span className="font-mono text-xs text-signal font-medium">
                  {feat.engine}
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink-primary">
                {feat.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Perintah Instalasi Cepat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-border-hairline bg-canvas">
          <div className="p-6 border-b lg:border-b-0 lg:border-r border-border-hairline space-y-2">
            <p className="font-mono text-xs font-semibold text-ink-muted">
              INSTALASI CEPAT — VISUAL STUDIO CODE
            </p>
            <div className="flex items-center justify-between gap-3 px-4 py-3 bg-code-bg text-white font-mono text-xs sm:text-sm">
              <code>{vsCodeCommand}</code>
              <button
                type="button"
                onClick={copyCommand}
                className="px-2.5 py-1 bg-code-border hover:bg-signal text-xs transition-colors shrink-0"
              >
                {copiedCmd ? "Tersalin ✓" : "Salin"}
              </button>
            </div>
          </div>

          <div className="p-6 space-y-2">
            <p className="font-mono text-xs font-semibold text-ink-muted">
              INSTALASI CEPAT — ANDROID STUDIO / JETBRAINS IDES
            </p>
            <div className="px-4 py-3 bg-white border border-border-hairline font-mono text-xs sm:text-sm text-ink-primary">
              Settings → Plugins → Marketplace → Cari{" "}
              <strong>&quot;Vexel.ai&quot;</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
