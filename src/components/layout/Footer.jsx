import { Link } from "../../router/Router";
import { VexelLogo } from "../ui/VexelLogo";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com/vexel.ai",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/vexel-labs",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/vexel.ai",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.5 22v-8.25h2.77l.415-3.22H13.5V8.475c0-.932.259-1.568 1.596-1.568h1.705V4.027A22.84 22.84 0 0 0 14.316 3.9c-2.46 0-4.144 1.501-4.144 4.259v2.371H7.386v3.22h2.786V22h3.328Z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/vexel_ai",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border-hairline">
          {/* Kolom 1: Identitas & Media Sosial */}
          <div className="md:col-span-5 space-y-4">
            <VexelLogo />
            <p className="text-sm text-ink-secondary max-w-sm">
              Ekosistem asisten pemrograman berbasis AI untuk mengubah rancangan
              UI/UX menjadi kode Web dan Mobile standar produksi.
            </p>
            <div className="pt-1 space-y-1 font-mono text-xs text-ink-primary">
              <p className="font-semibold">Vexel Labs</p>
              <p className="text-ink-secondary">Jakarta, Indonesia</p>
              <p>
                <a
                  href="mailto:support@vexel-ai.dev"
                  className="text-signal hover:underline"
                >
                  support@vexel-ai.dev
                </a>
              </p>
            </div>

            {/* Ikon Media Sosial Swiss-Grid (IG, GitHub, FB, X) */}
            <div className="pt-2">
              <div
                className="inline-flex border-t border-l border-border-hairline"
                aria-label="Media Sosial Vexel Labs"
              >
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="w-10 h-10 bg-canvas border-r border-b border-border-hairline flex items-center justify-center text-ink-primary hover:bg-ink-primary hover:text-white transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom 2: Tautan Navigasi */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              Navigasi
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-ink-secondary hover:text-ink-primary"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/produk"
                  className="text-ink-secondary hover:text-ink-primary"
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  to="/harga"
                  className="text-ink-secondary hover:text-ink-primary"
                >
                  Harga
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang-kami"
                  className="text-ink-secondary hover:text-ink-primary"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/#kontak"
                  className="text-ink-secondary hover:text-ink-primary"
                >
                  Kontak Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/workspace"
                  className="font-medium text-signal hover:underline"
                >
                  Workshop
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Ekstensi & Komunitas */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              Ekstensi &amp; Komunitas
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/produk"
                  className="inline-flex items-center gap-2 text-ink-secondary hover:text-ink-primary"
                >
                  <span className="font-mono text-xs text-signal">[EXT]</span>
                  <span>VS Code Marketplace</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/produk"
                  className="inline-flex items-center gap-2 text-ink-secondary hover:text-ink-primary"
                >
                  <span className="font-mono text-xs text-signal">[EXT]</span>
                  <span>Android Studio Plugin</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.gg/vexel-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-ink-secondary hover:text-ink-primary"
                >
                  <span className="font-mono text-xs text-signal">[COM]</span>
                  <span>Discord Developer</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Baris Hak Cipta */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs text-ink-muted">
          <p>© 2026 Vexel Labs. Seluruh hak cipta dilindungi.</p>
          <p>REFRACT SWISS-GRID ARCHITECTURE • ENGINE V2.6</p>
        </div>
      </div>
    </footer>
  );
}
