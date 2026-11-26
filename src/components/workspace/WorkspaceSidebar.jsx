import { useState } from "react";
import { Link } from "../../router/Router";
import { VexelLogo } from "../ui/VexelLogo";

const PROJECTS = ["monorepo", "vexel-web", "api-service"];

export function WorkspaceSidebar({
  isOpen,
  onToggle,
  sessions,
  activeSessionId,
  onSelectSession,
  onNewChat,
  activeRepo,
  onSelectRepo,
  onOpenSettings,
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllRecents, setShowAllRecents] = useState(false);

  if (!isOpen) return null;

  const filteredSessions = sessions.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.project.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const visibleSessions = showAllRecents
    ? filteredSessions
    : filteredSessions.slice(0, 7);

  return (
    <aside className="w-72 bg-canvas border-r border-border-hairline flex flex-col h-full shrink-0 select-none">
      {/* Header Sidebar: Brand, Search, & Collapse */}
      <div className="px-4 pt-4 pb-3 flex items-center justify-between">
        <Link
          to="/"
          title="Kembali ke Beranda Vexel.ai"
          className="focus:outline-none"
        >
          <VexelLogo size={22} />
        </Link>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => {
              setSearchOpen((prev) => !prev);
              setSearchQuery("");
            }}
            title="Cari riwayat chat"
            className={`p-1.5 border transition-colors ${
              searchOpen
                ? "bg-white border-ink-primary text-ink-primary"
                : "border-transparent text-ink-secondary hover:text-ink-primary hover:bg-white"
            }`}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </button>

          <button
            type="button"
            onClick={onToggle}
            title="Sembunyikan sidebar"
            className="p-1.5 text-ink-secondary hover:text-ink-primary hover:bg-white border border-transparent transition-colors"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="16" />
              <line x1="9" y1="4" x2="9" y2="20" />
            </svg>
          </button>
        </div>
      </div>

      {/* Input Pencarian Histori (Opsional saat ikon cari diklik) */}
      {searchOpen && (
        <div className="px-3 pb-2.5">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari sesi atau repositori..."
            autoFocus
            className="w-full px-3 py-1.5 bg-white border border-border-hairline font-mono text-xs text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-signal"
          />
        </div>
      )}

      {/* Tombol New Chat */}
      <div className="px-3 pb-3">
        <button
          type="button"
          onClick={onNewChat}
          className="w-full px-3 py-2 bg-white hover:bg-ink-primary text-ink-primary hover:text-white border border-border-hairline hover:border-ink-primary flex items-center gap-2.5 text-sm font-medium transition-colors"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
          <span>New chat</span>
        </button>
      </div>

      {/* Area Scroll: Recents (Histori Chat) & Projects */}
      <div className="flex-1 overflow-y-auto px-3 space-y-6">
        {/* Daftar Recents */}
        <div className="space-y-1">
          <p className="px-2 pb-1 font-mono text-[11px] font-medium text-ink-muted">
            Recents
          </p>

          {visibleSessions.length === 0 ? (
            <p className="px-2 py-2 font-mono text-xs text-ink-muted">
              Tidak ada sesi ditemukan.
            </p>
          ) : (
            visibleSessions.map((session) => {
              const isActive = session.id === activeSessionId;
              return (
                <button
                  key={session.id}
                  type="button"
                  onClick={() => onSelectSession(session.id)}
                  className={`w-full px-2.5 py-2 text-left flex items-center justify-between gap-2 transition-colors border ${
                    isActive
                      ? "bg-white border-border-hairline text-ink-primary"
                      : "border-transparent text-ink-primary hover:bg-white/80"
                  }`}
                >
                  <div className="truncate text-[13px] leading-snug">
                    <span
                      className={isActive ? "font-semibold" : "font-normal"}
                    >
                      {session.title}
                    </span>{" "}
                    <span className="text-ink-muted font-normal">
                      {session.project}
                    </span>
                  </div>

                  {session.hasUpdate && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-signal shrink-0"
                      title="Sintesis siap"
                    />
                  )}
                </button>
              );
            })
          )}

          {filteredSessions.length > 7 && (
            <button
              type="button"
              onClick={() => setShowAllRecents((prev) => !prev)}
              className="px-2.5 py-1.5 text-xs text-ink-muted hover:text-ink-primary font-medium"
            >
              {showAllRecents ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        {/* Daftar Projects */}
        <div className="space-y-1">
          <p className="px-2 pb-1 font-mono text-[11px] font-medium text-ink-muted">
            Projects
          </p>

          {PROJECTS.map((proj) => {
            const isSelected = activeRepo === proj;
            return (
              <button
                key={proj}
                type="button"
                onClick={() => onSelectRepo(proj)}
                className={`w-full px-2.5 py-1.5 text-left flex items-center gap-2.5 text-[13px] transition-colors border ${
                  isSelected
                    ? "bg-white border-border-hairline font-semibold text-ink-primary"
                    : "border-transparent text-ink-secondary hover:text-ink-primary hover:bg-white/80"
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className={isSelected ? "text-signal" : "text-ink-muted"}
                >
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z" />
                </svg>
                <span className="truncate">{proj}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Sidebar: Settings & Beranda */}
      <div className="p-3 border-t border-border-hairline space-y-1 bg-canvas">
        <button
          type="button"
          onClick={onOpenSettings}
          className="w-full px-2.5 py-2 text-left flex items-center justify-between text-xs font-medium text-ink-secondary hover:text-ink-primary hover:bg-white border border-transparent hover:border-border-hairline transition-colors"
        >
          <span className="inline-flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
            </svg>
            <span>Settings</span>
          </span>
          <span className="font-mono text-[10px] px-1.5 py-0.5 bg-white border border-border-hairline text-signal">
            v2.6
          </span>
        </button>

        <Link
          to="/"
          className="w-full px-2.5 py-1.5 flex items-center justify-between text-xs text-ink-muted hover:text-ink-primary transition-colors"
        >
          <span>← Kembali ke Beranda</span>
          <span className="font-mono text-[10px]">ESC</span>
        </Link>
      </div>
    </aside>
  );
}
