import { useState } from "react";
import { Link } from "../../router/Router";
import { VexelLogo } from "../ui/VexelLogo";

const SAMPLE_NEXTJS_CODE = `import React from 'react';

export function DashboardHeader({ user, activeBranch = 'main' }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-border-hairline">
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 bg-signal" />
        <h1 className="font-semibold text-ink-primary tracking-tight">
          Analytics Overview
        </h1>
      </div>
      <div className="flex items-center gap-2 font-mono text-xs">
        <span className="px-2.5 py-1 bg-canvas border border-border-hairline">
          branch: {activeBranch}
        </span>
        <button className="px-3 py-1.5 bg-ink-primary text-white">
          Deploy Release
        </button>
      </div>
    </header>
  );
}`;

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(SAMPLE_NEXTJS_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="border-b border-border-hairline swiss-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Kolom Kiri (7 kolom): Narasi Utama & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-border-hairline">
              <span className="w-2 h-2 bg-signal" />
              <span className="font-mono text-xs font-semibold tracking-wider text-ink-primary">
                VEXEL ENGINE V2.6 • WEB &amp; MOBILE AI
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-ink-primary leading-[1.08]">
              Ubah Desain UI/UX Menjadi Aplikasi Web &amp; Mobile Siap Rilis.
            </h1>

            <p className="text-base sm:text-lg text-ink-secondary max-w-2xl leading-relaxed">
              Asisten ngoding berbasis AI yang mengawal siklus pengembangan
              secara menyeluruh mulai dari konversi wireframe, arsitektur
              back-end, hingga debugging dalam satu alur kerja terpadu.
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/workspace"
                className="px-6 py-3.5 bg-ink-primary text-white text-sm font-semibold border border-ink-primary hover:bg-signal hover:border-signal transition-colors"
              >
                Mulai Ngoding Gratis
              </Link>
              <Link
                to="/produk"
                className="px-6 py-3.5 bg-white text-ink-primary text-sm font-semibold border border-border-hairline hover:border-ink-primary transition-colors"
              >
                Eksplorasi Model AI
              </Link>
            </div>

            {/* Baris Status Bawah */}
            <div className="pt-4 border-t border-border-hairline flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink-secondary">
              <span className="text-ink-primary font-semibold">
                STATUS RILIS:
              </span>
              <span>
                Tersedia di Web Workshop &amp; Ekstensi IDE (VS Code • Android
                Studio • JetBrains)
              </span>
            </div>
          </div>

          {/* Kolom Kanan (5 kolom): Kartu Mockup Antarmuka Vexel.ai Chat Workspace */}
          <div className="lg:col-span-5 bg-white border border-border-hairline">
            {/* Header Kartu Mockup */}
            <div className="px-4 py-3 border-b border-border-hairline flex items-center justify-between bg-canvas">
              <VexelLogo size={20} />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-signal" />
                <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-white border border-border-hairline text-ink-primary">
                  Vexel Frame
                </span>
              </div>
            </div>

            {/* Lampiran File Wireframe & Prompt */}
            <div className="p-4 border-b border-border-hairline space-y-3">
              <div className="flex items-center justify-between px-3 py-2 bg-canvas border border-border-hairline">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] font-bold px-1.5 py-0.5 bg-signal text-white">
                    FIG
                  </span>
                  <div>
                    <p className="font-mono text-xs font-semibold text-ink-primary">
                      wireframe-app.fig
                    </p>
                    <p className="font-mono text-[11px] text-ink-muted">
                      Frame: Desktop_Dashboard_v2 • 1440×900
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-signal font-medium">
                  98,4% MATCH
                </span>
              </div>

              <p className="text-xs text-ink-secondary font-mono">
                &gt; Slicing komponen header responsif ke Next.js + Tailwind CSS
                sesuai grid token.
              </p>
            </div>

            {/* Keluaran Kode Next.js Responsif */}
            <div className="bg-code-bg text-[#E6EDF3]">
              <div className="px-4 py-2 border-b border-code-border flex items-center justify-between font-mono text-[11px] text-[#8B949E]">
                <span>components/DashboardHeader.jsx</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-white hover:text-[#58A6FF] transition-colors"
                >
                  {copied ? "TERSALIN ✓" : "SALIN KODE"}
                </button>
              </div>
              <pre className="p-4 text-xs leading-relaxed overflow-x-auto code-scroll font-mono">
                <code>{SAMPLE_NEXTJS_CODE}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
