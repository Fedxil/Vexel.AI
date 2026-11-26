import { MODEL_SERIES } from "../../data/vexelData";

export function ModelSeriesSection() {
  return (
    <section className="border-b border-border-hairline bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
            ARSITEKTUR 3 SERI MODEL AI
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary mt-2">
            Spesialisasi Terkalibrasi untuk Kecepatan, Visual, dan Sistem.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-border-hairline">
          {MODEL_SERIES.map((model) => (
            <article
              key={model.id}
              className="p-6 sm:p-8 bg-canvas border-r border-b border-border-hairline flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border-hairline">
                  <span className="font-mono text-sm font-bold text-signal">
                    MODEL {model.number}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    {model.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-ink-primary">
                  {model.name}
                </h3>

                {/* Lencana Spesifikasi */}
                <div className="flex flex-wrap gap-1.5">
                  {model.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 bg-white border border-border-hairline font-mono text-xs font-medium text-ink-primary"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  {model.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border-hairline space-y-1.5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  Manfaat Utama
                </p>
                <p className="text-sm font-medium text-ink-primary leading-relaxed">
                  {model.benefit}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
