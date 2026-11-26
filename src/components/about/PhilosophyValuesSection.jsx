import { CORE_PILLARS } from "../../data/vexelData";

export function PhilosophyValuesSection() {
  return (
    <section className="border-b border-border-hairline bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
            FILOSOFI UTAMA • HUMAN-IN-THE-LOOP ENGINEERING
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary">
            AI Mengambil Alih Pekerjaan Repetitif, Engineer Memegang Kendali
            Arsitektur.
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed">
            Kami percaya AI hadir bukan untuk menggantikan peran software
            engineer, melainkan mengambil alih pekerjaan mekanis yang berulang
            agar manusia dapat berfokus pada arsitektur sistem dan pengalaman
            pengguna.
          </p>
        </div>

        {/* 3 Pilar Nilai */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-hairline bg-white">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.code}
              className="p-6 sm:p-8 border-r border-b border-border-hairline space-y-3"
            >
              <span className="font-mono text-xs font-bold text-signal">
                PILAR {pillar.code.toUpperCase()}
              </span>
              <h3 className="text-xl font-bold text-ink-primary">
                {pillar.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
