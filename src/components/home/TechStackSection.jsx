import { TECH_ECOSYSTEMS } from "../../data/vexelData";
import { IdeLogo, TechLogo } from "../ui/TechIcons";

export function TechStackSection() {
  return (
    <section className="border-b border-border-hairline bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Header Bagian */}
        <div className="max-w-3xl mb-10 space-y-3">
          <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
            EKOSISTEM &amp; INTEGRASI LOKAL
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink-primary">
            Bekerja Mulus dengan Stack dan Editor Favoritmu.
          </h2>
          <p className="text-base text-ink-secondary">
            Gunakan Vexel.ai melalui Web Workshop atau instal langsung sebagai
            ekstensi di editor kode lokalmu.
          </p>
        </div>

        {/* Kelompok Kartu Spesifikasi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-border-hairline">
          {TECH_ECOSYSTEMS.map((group) => (
            <div
              key={group.code}
              className="p-6 sm:p-8 bg-canvas border-r border-b border-border-hairline flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block font-mono text-xs font-semibold text-ink-muted">
                  {group.code}
                </span>
                <h3 className="text-xl font-bold text-ink-primary">
                  {group.title}
                </h3>
                <p className="text-sm text-ink-secondary">
                  {group.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-hairline">
                {group.isDetailedList ? (
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm font-mono text-ink-primary"
                      >
                        <span className="text-signal mt-0.5 shrink-0">
                          <IdeLogo label={item} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border-hairline hover:border-ink-primary font-mono text-xs font-medium text-ink-primary transition-colors"
                      >
                        <TechLogo name={tech} />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
