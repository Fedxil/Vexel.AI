import { SPEC_MATRIX_ROWS } from "../../data/vexelData";

export function SpecMatrixSection() {
  return (
    <section className="bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-8">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
            MATRIKS SPESIFIKASI TEKNIS
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary">
            Perbandingan Parameter Antar Model Vexel.ai.
          </h2>
        </div>

        <div className="overflow-x-auto border border-border-hairline bg-white">
          <table className="w-full text-left border-collapse min-w-170">
            <thead>
              <tr className="bg-ink-primary text-white font-mono text-xs uppercase">
                <th className="p-4 border-r border-code-border">
                  Parameter Teknis
                </th>
                <th className="p-4 border-r border-code-border">Vexel Trace</th>
                <th className="p-4 border-r border-code-border text-[#79C0FF]">
                  Vexel Frame
                </th>
                <th className="p-4">Vexel Kernel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-hairline text-sm">
              {SPEC_MATRIX_ROWS.map((row) => (
                <tr key={row.parameter} className="hover:bg-canvas">
                  <td className="p-4 font-semibold text-ink-primary border-r border-border-hairline">
                    {row.parameter}
                  </td>
                  <td className="p-4 font-mono text-xs text-ink-secondary border-r border-border-hairline">
                    {row.trace}
                  </td>
                  <td className="p-4 font-mono text-xs text-ink-primary font-medium border-r border-border-hairline">
                    {row.frame}
                  </td>
                  <td className="p-4 font-mono text-xs text-ink-secondary">
                    {row.kernel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
