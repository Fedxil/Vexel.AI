import { WORKFLOW_STEPS } from "../../data/vexelData";

export function WorkflowSection() {
  return (
    <section className="border-b border-border-hairline bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-3xl mb-12 space-y-3">
          <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
            ALUR KERJA END-TO-END
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink-primary">
            Dari Sketsa Mentah ke Repositori Produksi dalam 4 Langkah.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-hairline bg-white">
          {WORKFLOW_STEPS.map((item) => (
            <div
              key={item.step}
              className="p-6 sm:p-7 border-r border-b border-border-hairline flex flex-col justify-between hover:bg-canvas transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border-hairline">
                  <span className="font-mono text-2xl font-bold text-ink-primary tabular-metric">
                    {item.step}
                  </span>
                  <span className="font-mono text-[11px] font-semibold px-2 py-0.5 bg-canvas border border-border-hairline text-signal">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
