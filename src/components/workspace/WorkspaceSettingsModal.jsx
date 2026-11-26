import { useState } from "react";

export function WorkspaceSettingsModal({ isOpen, onClose }) {
  const [explainMode, setExplainMode] = useState(true);
  const [autoCommit, setAutoCommit] = useState(false);
  const [ideSync, setIdeSync] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-ink-primary/40 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
    >
      <div className="w-full max-w-lg bg-white border border-ink-primary shadow-xl">
        <div className="px-6 py-4 bg-canvas border-b border-border-hairline flex items-center justify-between">
          <div>
            <p className="font-mono text-[11px] text-signal font-semibold">
              WORKSPACE PREFERENCES
            </p>
            <h2
              id="settings-title"
              className="text-lg font-bold text-ink-primary"
            >
              Pengaturan Vexel Workshop
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 border border-border-hairline bg-white font-mono text-xs hover:border-ink-primary"
          >
            TUTUP [X]
          </button>
        </div>

        <div className="p-6 space-y-5 text-sm">
          {/* Opsi 1 */}
          <label className="flex items-start justify-between gap-4 cursor-pointer">
            <div>
              <p className="font-semibold text-ink-primary">
                Mode Penjelas Kode (Mahasiswa)
              </p>
              <p className="text-xs text-ink-secondary">
                Sertakan komentar alur logika baris demi baris pada setiap hasil
                sintesis.
              </p>
            </div>
            <input
              type="checkbox"
              checked={explainMode}
              onChange={(e) => setExplainMode(e.target.checked)}
              className="mt-1 accent-signal w-4 h-4"
            />
          </label>

          {/* Opsi 2 */}
          <label className="flex items-start justify-between gap-4 pt-4 border-t border-border-hairline cursor-pointer">
            <div>
              <p className="font-semibold text-ink-primary">
                Sinkronisasi Plugin IDE Lokal
              </p>
              <p className="text-xs text-ink-secondary">
                Hubungkan sesi Web Workshop dengan ekstensi VS Code &amp;
                Android Studio.
              </p>
            </div>
            <input
              type="checkbox"
              checked={ideSync}
              onChange={(e) => setIdeSync(e.target.checked)}
              className="mt-1 accent-signal w-4 h-4"
            />
          </label>

          {/* Opsi 3 */}
          <label className="flex items-start justify-between gap-4 pt-4 border-t border-border-hairline cursor-pointer">
            <div>
              <p className="font-semibold text-ink-primary">
                Auto-Stage Commit ke Branch Aktif
              </p>
              <p className="text-xs text-ink-secondary">
                Siapkan diff otomatis setiap kali Vexel Frame menyelesaikan
                slicing komponen.
              </p>
            </div>
            <input
              type="checkbox"
              checked={autoCommit}
              onChange={(e) => setAutoCommit(e.target.checked)}
              className="mt-1 accent-signal w-4 h-4"
            />
          </label>
        </div>

        <div className="px-6 py-3.5 bg-canvas border-t border-border-hairline flex items-center justify-between">
          <span className="font-mono text-xs text-ink-muted">
            Enkripsi Lokal Aktif (100%)
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-ink-primary hover:bg-signal text-white font-mono text-xs font-semibold transition-colors"
          >
            Simpan Pengaturan
          </button>
        </div>
      </div>
    </div>
  );
}
