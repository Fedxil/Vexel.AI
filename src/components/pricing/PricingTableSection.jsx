import { PRICING_PLANS } from "../../data/vexelData";
import { Link } from "../../router/Router";

export function PricingTableSection({ billingCycle }) {
  const isAnnual = billingCycle === "annual";

  return (
    <section className="border-b border-border-hairline bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-12">
        {/* Kartu Paket 3 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-border-hairline">
          {PRICING_PLANS.map((plan) => {
            const activePrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const activePeriod = isAnnual
              ? plan.annualPeriod
              : plan.monthlyPeriod;

            return (
              <div
                key={plan.id}
                className={`p-6 sm:p-8 border-r border-b border-border-hairline flex flex-col justify-between space-y-6 ${
                  plan.featured
                    ? "bg-white ring-2 ring-inset ring-[#0052FF]"
                    : "bg-canvas"
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-xl font-bold text-ink-primary">
                      {plan.name}
                    </h2>
                    {plan.badge && (
                      <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 bg-signal text-white">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="pb-5 border-b border-border-hairline">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-heading text-3xl sm:text-4xl font-bold text-ink-primary tabular-metric">
                        {activePrice}
                      </span>
                      <span className="font-mono text-xs text-ink-muted">
                        {activePeriod}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-ink-secondary mt-1.5">
                      {isAnnual
                        ? plan.annualNote
                        : `Target: ${plan.targetUser}`}
                    </p>
                  </div>

                  {/* Spesifikasi Kuota Model */}
                  <dl className="space-y-2.5 text-xs font-mono">
                    <div className="flex justify-between gap-2">
                      <dt className="text-ink-muted">Target Pengguna</dt>
                      <dd className="text-ink-primary font-semibold text-right">
                        {plan.targetUser}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-ink-muted">Vexel Trace</dt>
                      <dd className="text-ink-primary font-semibold text-right">
                        {plan.traceQuota}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-ink-muted">Vexel Frame</dt>
                      <dd className="text-ink-primary font-semibold text-right">
                        {plan.frameQuota}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-ink-muted">Vexel Kernel</dt>
                      <dd className="text-ink-primary font-semibold text-right">
                        {plan.kernelQuota}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-ink-muted">Ekstensi IDE</dt>
                      <dd className="text-ink-primary font-semibold text-right">
                        {plan.ideExtension}
                      </dd>
                    </div>
                  </dl>

                  {/* Fitur Kunci */}
                  <div className="pt-4 border-t border-border-hairline space-y-2.5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      Fitur Kunci
                    </p>
                    <ul className="space-y-2 text-sm text-ink-secondary">
                      {plan.keyFeatures.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <span className="font-mono text-signal font-bold">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={plan.ctaTo}
                  className={`block w-full text-center py-3.5 text-sm font-semibold border transition-colors ${
                    plan.featured
                      ? "bg-signal text-white border-signal hover:bg-signal-hover"
                      : "bg-ink-primary text-white border-ink-primary hover:bg-signal hover:border-signal"
                  }`}
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Tabel Matriks Perbandingan Lengkap (Desktop) */}
        <div className="overflow-x-auto border border-border-hairline">
          <table className="w-full text-left border-collapse min-w-190">
            <thead>
              <tr className="bg-canvas border-b border-border-hairline font-mono text-xs uppercase text-ink-primary">
                <th className="p-4 border-r border-border-hairline">
                  Komponen
                </th>
                <th className="p-4 border-r border-border-hairline">
                  Starter (Mahasiswa)
                </th>
                <th className="p-4 border-r border-border-hairline text-signal">
                  Pro Developer [Paling Populer]
                </th>
                <th className="p-4">Studio / Tim</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-hairline text-sm">
              <tr>
                <td className="p-4 font-semibold border-r border-border-hairline">
                  Harga Bulanan
                </td>
                <td className="p-4 font-mono text-xs border-r border-border-hairline">
                  Rp 0 / selamanya
                </td>
                <td className="p-4 font-mono text-xs font-semibold border-r border-border-hairline">
                  Rp 149.000 / bulan
                </td>
                <td className="p-4 font-mono text-xs">Rp 499.000 / bulan</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border-r border-border-hairline">
                  Harga Tahunan
                </td>
                <td className="p-4 font-mono text-xs border-r border-border-hairline">
                  Rp 0 / selamanya
                </td>
                <td className="p-4 font-mono text-xs font-semibold text-signal border-r border-border-hairline">
                  Rp 119.000 / bulan
                </td>
                <td className="p-4 font-mono text-xs">Rp 399.000 / bulan</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border-r border-border-hairline">
                  Target Pengguna
                </td>
                <td className="p-4 text-ink-secondary border-r border-border-hairline">
                  Mahasiswa IT &amp; pembelajar mandiri
                </td>
                <td className="p-4 text-ink-primary border-r border-border-hairline">
                  Freelancer &amp; programmer aktif
                </td>
                <td className="p-4 text-ink-secondary">
                  Software house &amp; tim startup
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border-r border-border-hairline">
                  Vexel Trace
                </td>
                <td className="p-4 font-mono text-xs border-r border-border-hairline">
                  Tanpa Batas
                </td>
                <td className="p-4 font-mono text-xs border-r border-border-hairline">
                  Tanpa Batas
                </td>
                <td className="p-4 font-mono text-xs">Tanpa Batas</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border-r border-border-hairline">
                  Vexel Frame
                </td>
                <td className="p-4 font-mono text-xs border-r border-border-hairline">
                  15 kredit konversi / hari
                </td>
                <td className="p-4 font-mono text-xs font-semibold border-r border-border-hairline">
                  Tanpa Batas
                </td>
                <td className="p-4 font-mono text-xs font-semibold">
                  Tanpa Batas
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border-r border-border-hairline">
                  Vexel Kernel
                </td>
                <td className="p-4 font-mono text-xs border-r border-border-hairline">
                  5 kredit arsitektur / minggu
                </td>
                <td className="p-4 font-mono text-xs border-r border-border-hairline">
                  100 kredit arsitektur / bulan
                </td>
                <td className="p-4 font-mono text-xs font-semibold">
                  Tanpa Batas (Prioritas Server)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold border-r border-border-hairline">
                  Ekstensi IDE
                </td>
                <td className="p-4 text-xs text-ink-secondary border-r border-border-hairline">
                  Termasuk (VS Code &amp; Android Studio)
                </td>
                <td className="p-4 text-xs text-ink-primary border-r border-border-hairline">
                  Termasuk + Sinkronisasi Cloud &amp; Multi-IDE
                </td>
                <td className="p-4 text-xs text-ink-secondary">
                  Termasuk + Manajemen Kebijakan Tim &amp; SSO
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
