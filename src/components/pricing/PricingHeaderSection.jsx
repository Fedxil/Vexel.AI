export function PricingHeaderSection({ billingCycle, onChangeCycle }) {
  return (
    <section className="border-b border-border-hairline swiss-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="max-w-3xl space-y-5">
          <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
            PAKET LISENSI &amp; KUOTA KOMPUTASI
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-ink-primary leading-[1.1]">
            Harga Transparan untuk Setiap Skala Proyek.
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary">
            Mulai gratis tanpa batas waktu untuk kebutuhan belajar, atau
            tingkatkan kapasitas untuk proyek komersial dan tim.
          </p>

          {/* Sakelar Interaktif Siklus Tagihan */}
          <div className="pt-2">
            <div
              className="inline-flex border border-border-hairline bg-white p-1"
              role="group"
              aria-label="Siklus Tagihan"
            >
              <button
                type="button"
                onClick={() => onChangeCycle("monthly")}
                className={`px-4 py-2 text-xs sm:text-sm font-mono font-semibold transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-ink-primary text-white"
                    : "text-ink-secondary hover:text-ink-primary"
                }`}
              >
                Tagihan Bulanan
              </button>
              <button
                type="button"
                onClick={() => onChangeCycle("annual")}
                className={`px-4 py-2 text-xs sm:text-sm font-mono font-semibold transition-colors flex items-center gap-2 ${
                  billingCycle === "annual"
                    ? "bg-ink-primary text-white"
                    : "text-ink-secondary hover:text-ink-primary"
                }`}
              >
                <span>Tagihan Tahunan</span>
                <span className="px-1.5 py-0.5 text-[11px] bg-signal text-white">
                  Hemat 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
