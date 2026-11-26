import { ABOUT_MISSIONS } from "../../data/vexelData";

export function VisionMissionSection() {
  return (
    <section className="border-b border-border-hairline bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-10">
        {/* Visi */}
        <div className="p-6 sm:p-8 bg-canvas border border-border-hairline space-y-2">
          <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
            VISI VEXEL LABS
          </p>
          <p className="font-heading text-xl sm:text-2xl font-bold text-ink-primary leading-snug">
            Menjadikan pengembangan aplikasi Web dan Mobile lebih cepat,
            presisi, dan mudah diakses oleh setiap kreator digital maupun
            mahasiswa teknologi.
          </p>
        </div>

        {/* Misi */}
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            MISI STRATEGIS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-hairline">
            {ABOUT_MISSIONS.map((mission) => (
              <div
                key={mission.code}
                className="p-6 sm:p-7 bg-white border-r border-b border-border-hairline space-y-3"
              >
                <span className="inline-block font-mono text-xs font-bold px-2 py-0.5 bg-canvas border border-border-hairline text-signal">
                  MISI {mission.code.toUpperCase()}
                </span>
                <h2 className="text-lg font-bold text-ink-primary">
                  {mission.title}
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
