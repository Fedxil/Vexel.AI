import { useState } from "react";
import { FAQ_ITEMS } from "../../data/vexelData";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="border-b border-border-hairline bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Kolom Kiri */}
          <div className="lg:col-span-4 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
              FAQ TEKNIS
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary">
              Pertanyaan yang Sering Diajukan.
            </h2>
            <p className="text-sm text-ink-secondary">
              Detail dukungan framework, integrasi IDE lokal, model AI, dan
              keamanan kode sumber.
            </p>
          </div>

          {/* Kolom Kanan: Accordion Swiss-Grid */}
          <div className="lg:col-span-8 border-t border-l border-r border-border-hairline bg-white">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.question}
                  className="border-b border-border-hairline"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-canvas transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-semibold text-signal pt-1">
                        0{idx + 1}
                      </span>
                      <span className="font-heading font-semibold text-base sm:text-lg text-ink-primary">
                        {item.question}
                      </span>
                    </div>
                    <span className="font-mono text-sm font-bold text-ink-primary shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pl-12 text-sm sm:text-base text-ink-secondary leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
