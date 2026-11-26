import { TEAM_ROLES } from "../../data/vexelData";

export function TeamSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-10">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
            STRUKTUR TIM KUNCI
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink-primary">
            Tim Kreatif &amp; Rekayasa Produk.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border-hairline">
          {TEAM_ROLES.map((item) => (
            <div
              key={item.role}
              className="p-6 sm:p-8 bg-canvas border-r border-b border-border-hairline space-y-2.5"
            >
              <p className="font-mono text-xs text-ink-muted">{item.unit}</p>
              <h3 className="text-xl font-bold text-ink-primary">
                {item.role}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {item.responsibility}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
