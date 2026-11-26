export function ProductHeaderSection() {
  return (
    <section className="border-b border-border-hairline swiss-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-border-hairline">
            <span className="w-2 h-2 bg-signal" />
            <span className="font-mono text-xs font-semibold tracking-wider text-ink-primary">
              SPESIFIKASI TEKNIS &amp; ARSITEKTUR MODEL 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-ink-primary leading-[1.1]">
            Tiga Mesin Kecerdasan untuk Setiap Fase Rekayasa.
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-3xl">
            Vexel.ai memisahkan beban kerja komputasi ke dalam tiga model
            terkalibrasi agar developer mendapatkan keseimbangan optimal antara
            kecepatan eksekusi (latency), presisi visual, dan kedalaman
            arsitektur sistem.
          </p>
        </div>
      </div>
    </section>
  );
}
