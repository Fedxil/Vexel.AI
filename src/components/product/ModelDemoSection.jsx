import { useState } from "react";
import { MODEL_DEMOS } from "../../data/vexelData";
import { Link } from "../../router/Router";

const TAB_KEYS = ["trace", "frame", "kernel"];

export function ModelDemoSection() {
  const [activeTab, setActiveTab] = useState("trace");
  const demo = MODEL_DEMOS[activeTab];

  return (
    <section className="border-b border-border-hairline bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
              DEMONSTRASI INTERAKTIF INPUT KE OUTPUT
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-ink-primary">
              Lihat Bagaimana Setiap Model Bekerja.
            </h2>
          </div>

          {/* 3 Tab Model */}
          <div className="inline-flex border border-border-hairline bg-white">
            {TAB_KEYS.map((key, idx) => {
              const isSelected = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-mono font-semibold transition-colors ${
                    idx > 0 ? "border-l border-border-hairline" : ""
                  } ${
                    isSelected
                      ? "bg-ink-primary text-white"
                      : "bg-white text-ink-secondary hover:text-ink-primary"
                  }`}
                >
                  Tab {idx + 1}: {MODEL_DEMOS[key].tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Split-Panel Input vs Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-border-hairline bg-white">
          {/* Panel Kiri: Input Desain / Prompt */}
          <div className="lg:col-span-5 p-6 border-b lg:border-b-0 lg:border-r border-border-hairline flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-signal">
                  {demo.inputType}
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink-primary">
                {demo.inputTitle}
              </h3>
              <pre className="p-4 bg-canvas border border-border-hairline font-mono text-xs text-ink-primary whitespace-pre-wrap leading-relaxed">
                {demo.inputContent}
              </pre>
            </div>

            <div className="pt-4 border-t border-border-hairline flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] text-ink-muted">
                {demo.badge}
              </span>
              <Link
                to="/workspace"
                className="px-4 py-2 bg-ink-primary text-white text-xs font-mono font-semibold hover:bg-signal transition-colors shrink-0"
              >
                Uji di Workshop →
              </Link>
            </div>
          </div>

          {/* Panel Kanan: Hasil Kode Bersih */}
          <div className="lg:col-span-7 bg-code-bg text-[#E6EDF3] flex flex-col">
            <div className="px-4 py-2.5 border-b border-code-border flex items-center justify-between font-mono text-xs text-[#8B949E]">
              <span>OUTPUT // {demo.outputFile}</span>
              <span className="text-[#58A6FF]">SYNTHESIZED READY</span>
            </div>
            <pre className="p-5 text-xs leading-relaxed overflow-x-auto code-scroll font-mono flex-1">
              <code>{demo.outputCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
