import { METRICS_DATA, USER_SEGMENTS } from "../../data/vexelData";

export function MetricsSegmentsSection() {
  return (
    <section className="border-b border-border-hairline bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-12">
        <div className="max-w-3xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
            SEGMEN PENGGUNA &amp; TOLOK UKUR PERFORMA
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink-primary">
            Dirancang untuk Mahasiswa IT hingga Software Engineer.
          </h2>
        </div>

        {/* 2 Kartu Segmen Pengguna */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-border-hairline">
          {USER_SEGMENTS.map((seg) => (
            <div
              key={seg.title}
              className="p-6 sm:p-8 bg-canvas border-r border-b border-border-hairline space-y-4"
            >
              <span className="inline-block font-mono text-xs font-semibold px-2.5 py-1 bg-white border border-border-hairline text-ink-primary">
                {seg.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-ink-primary">
                {seg.title}
              </h3>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                {seg.description}
              </p>
              <div className="pt-3 border-t border-border-hairline font-mono text-xs text-signal font-semibold">
                → {seg.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Baris Angka Statistik Tabular */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-hairline bg-white">
          {METRICS_DATA.map((metric) => (
            <div
              key={metric.label}
              className="p-6 sm:p-7 border-r border-b border-border-hairline space-y-2"
            >
              <p className="font-heading text-3xl sm:text-4xl font-bold text-ink-primary tabular-metric">
                {metric.value}
              </p>
              <p className="text-sm text-ink-secondary">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
