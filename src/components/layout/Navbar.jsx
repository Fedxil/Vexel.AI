import { useState } from "react";
import { Link, useRouter } from "../../router/Router";
import { NAV_LINKS } from "../../data/vexelData";
import { VexelLogo } from "../ui/VexelLogo";

export function Navbar() {
  const { path } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-xs border-b border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Kiri: Logo Geometris Vector-Pixel + Vexel.ai */}
        <Link to="/" className="focus:outline-none">
          <VexelLogo />
        </Link>

        {/* Tengah: Menu Navigasi Desktop */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Navigasi Utama"
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              item.to === "/"
                ? path === "/"
                : !item.to.startsWith("/#") && path === item.to;

            return (
              <Link
                key={item.label}
                to={item.to}
                className={`px-3.5 py-2 text-sm font-medium transition-colors border ${
                  isActive
                    ? "text-ink-primary bg-canvas border-border-hairline"
                    : "text-ink-secondary border-transparent hover:text-ink-primary hover:bg-canvas"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Kanan: Tombol CTA Utama "Buka Workshop" */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/workspace"
            className="inline-flex items-center gap-2 px-4 py-2 bg-ink-primary text-white text-sm font-medium border border-ink-primary hover:bg-signal hover:border-signal transition-colors"
          >
            <span>Buka Workshop</span>
            <span className="font-mono text-xs opacity-80">↗</span>
          </Link>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden px-3 py-1.5 border border-border-hairline bg-canvas font-mono text-xs font-medium text-ink-primary"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "TUTUP [X]" : "MENU [=]"}
        </button>
      </div>

      {/* Drawer Navigasi Mobile */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border-hairline px-4 py-4 space-y-2">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-ink-primary border border-border-hairline bg-canvas"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/workspace"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-4 py-3 bg-ink-primary text-white text-sm font-medium"
          >
            Buka Workshop ↗
          </Link>
        </div>
      )}
    </header>
  );
}
