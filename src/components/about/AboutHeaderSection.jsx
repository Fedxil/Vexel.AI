export function AboutHeaderSection() {
  return (
    <section className="border-b border-border-hairline swiss-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-border-hairline">
            <span className="w-2 h-2 bg-signal" />
            <span className="font-mono text-xs font-semibold tracking-wider text-ink-primary">
              TENTANG VEXEL LABS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-ink-primary leading-[1.1]">
            Menjembatani Kesenjangan Antara Imajinasi Desain dan Kode Produksi.
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            Didirikan pada tahun 2026, Vexel Labs lahir dari pengamatan terhadap
            hambatan klasik dalam pengembangan perangkat lunak: ide aplikasi Web
            dan Mobile sering kali melambat akibat proses slicing antarmuka yang
            repetitif, ketidaksinkronan antara desainer UI/UX dan programmer,
            serta waktu debugging yang panjang. Kami membangun Vexel.ai sebagai
            ekosistem asisten AI yang memahami estetika visual sekaligus
            ketangguhan arsitektur rekayasa perangkat lunak.
          </p>
        </div>
      </div>
    </section>
  );
}
