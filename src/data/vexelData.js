export const NAV_LINKS = [
  { label: "Beranda", to: "/" },
  { label: "Produk", to: "/produk" },
  { label: "Harga", to: "/harga" },
  { label: "Tentang Kami", to: "/tentang-kami" },
  { label: "Kontak Kami", to: "/#kontak" },
];

export const TECH_ECOSYSTEMS = [
  {
    code: "01 / WEB",
    title: "Ekosistem Web",
    description:
      "Generasi komponen SSR, SPA, dan API backend modern dengan struktur modular.",
    items: [
      "React",
      "Next.js",
      "Vue",
      "Tailwind CSS",
      "Node.js",
      "Laravel",
      "PostgreSQL",
    ],
  },
  {
    code: "02 / MOBILE & GIT",
    title: "Ekosistem Mobile & Git",
    description:
      "Slicing tata letak lintas layar smartphone dan sinkronisasi branch otomatis.",
    items: ["Flutter", "React Native", "Kotlin", "SwiftUI", "GitHub", "GitLab"],
  },
  {
    code: "03 / IDE PLUGINS",
    title: "Plugin & Ekstensi IDE Resmi",
    description:
      "Integrasi langsung di dalam editor lokal dengan konteks repositori penuh.",
    items: [
      "Visual Studio Code (Vexel Extension v2.6)",
      "Android Studio (Vexel Plugin for Compose & Flutter)",
      "JetBrains IDEs (IntelliJ IDEA, WebStorm, PhpStorm)",
      "Cursor & VSCodium (Kompatibel via Open VSX)",
    ],
    isDetailedList: true,
  },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    tag: "INPUT MULTIMODAL",
    title: "Unggah Desain & Wireframe",
    description:
      "Masukkan tautan Figma, tangkapan layar desain, atau deskripsi fitur.",
  },
  {
    step: "02",
    tag: "VEXEL FRAME",
    title: "Slicing Otomatis Web & Mobile",
    description:
      "Model Vexel Frame menyusun komponen antarmuka responsif untuk layar desktop maupun smartphone.",
  },
  {
    step: "03",
    tag: "VEXEL KERNEL",
    title: "Logika Back-End & API",
    description:
      "Model Vexel Kernel membangun skema database, sistem autentikasi, dan endpoint REST API.",
  },
  {
    step: "04",
    tag: "GIT SYNC",
    title: "Audit & Commit ke Branch",
    description:
      "Uji kode di sandbox bawaan, lalu simpan langsung ke branch Git proyekmu tanpa copy-paste manual.",
  },
];

export const USER_SEGMENTS = [
  {
    badge: "AKADEMIK & PEMBELAJARAN",
    title: "Untuk Mahasiswa & Pembelajar",
    description:
      "Dilengkapi Mode Penjelas Kode yang membedah alur logika baris demi baris agar mudah dipahami saat pengerjaan tugas kuliah maupun sidang proyek akhir.",
    highlight: "Mode Penjelas Kode Interaktif + Paket Gratis Selamanya",
  },
  {
    badge: "PRODUKSI & KOMERSIAL",
    title: "Untuk Freelancer & Programmer Aktif",
    description:
      "Memangkas waktu slicing tampilan berulang hingga 70%, menjaga struktur folder tetap modular, dan mempercepat pengiriman proyek klien.",
    highlight: "Efisiensi Slicing Hingga 70% + Multi-File Repo Diff",
  },
];

export const METRICS_DATA = [
  {
    value: "0,38 dtk",
    label: "Latensi respons rata-rata (Vexel Trace)",
  },
  {
    value: "98,4%",
    label: "Akurasi konversi tata letak UI (Vexel Frame)",
  },
  {
    value: "200K",
    label: "Kapasitas context window proyek (Vexel Kernel)",
  },
  {
    value: "100%",
    label: "Privasi kode terenkripsi & menjadi hak milik pengguna",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Framework Web dan Mobile apa saja yang didukung Vexel.ai?",
    answer:
      "Vexel.ai mendukung penuh ekosistem modern seperti React, Next.js, Vue, Tailwind CSS, Node.js, dan Laravel untuk Web, serta Flutter, React Native, Kotlin, dan SwiftUI untuk Mobile.",
  },
  {
    question:
      "Apakah Vexel.ai bisa diinstal langsung di VS Code atau Android Studio?",
    answer:
      "Ya. Vexel.ai tersedia sebagai ekstensi resmi di Visual Studio Code Marketplace, Android Studio, dan ekosistem JetBrains. Kamu dapat menikmati inline code completion, chat konteks repositori lokal, dan konversi desain langsung di sidebar IDE.",
  },
  {
    question:
      "Apa perbedaan utama antara model Vexel Trace, Frame, dan Kernel?",
    answer:
      "Vexel Trace dioptimalkan untuk kecepatan prototyping dan autocomplete; Vexel Frame adalah spesialis multimodal untuk mengubah desain visual (Figma/gambar) menjadi kode UI; sedangkan Vexel Kernel menangani penalaran arsitektur full-stack skala besar.",
  },
  {
    question:
      "Apakah kode yang dibuat aman untuk proyek klien dan tugas kuliah?",
    answer:
      "Sepenuhnya aman. Seluruh kode sumber dan aset desain yang diunggah terenkripsi, menjadi hak milikmu 100%, dan tidak pernah digunakan untuk melatih model AI publik kami.",
  },
  {
    question: "Apakah tersedia paket gratis untuk mahasiswa?",
    answer:
      "Ya. Paket Starter (Mahasiswa) gratis selamanya dengan akses tanpa batas ke model Vexel Trace, kuota harian Vexel Frame, serta dukungan ekstensi VS Code dan Android Studio.",
  },
];

export const MODEL_SERIES = [
  {
    id: "trace",
    number: "01",
    name: "Vexel Trace",
    subtitle: "Lightweight & Rapid Prototyping",
    specs: [
      "Latensi 0,38 dtk",
      "Context Window 32.000 token",
      "Inline Autocomplete",
    ],
    description:
      "Model berkecepatan tinggi yang dirancang untuk merespons instruksi pemrograman secara instan tanpa jeda.",
    benefit:
      "Mempercepat pembuatan komponen UI satuan, eksperimen algoritma harian, dan dilengkapi Mode Penjelas Kode baris demi baris bagi mahasiswa.",
  },
  {
    id: "frame",
    number: "02",
    name: "Vexel Frame",
    subtitle: "Multimodal Design-to-Code Specialist",
    specs: [
      "Akurasi Slicing 98,4%",
      "Input Figma, PNG, JPG, Sketch",
      "Output Web & Mobile",
    ],
    description:
      "Model penglihatan komputer (vision) yang membaca hierarki layout, jarak (padding/margin), warna, dan tipografi dari berkas desain, lalu menerjemahkannya menjadi kode antarmuka responsif.",
    benefit:
      "Memangkas waktu slicing front-end (Next.js, Tailwind CSS, Flutter, Jetpack Compose) hingga 70% dengan struktur komponen yang rapi.",
  },
  {
    id: "kernel",
    number: "03",
    name: "Vexel Kernel",
    subtitle: "Full-Stack & Production Architect",
    specs: [
      "Context Window 200.000 token",
      "Multi-File Repo Reasoning",
      "Security Audit",
    ],
    description:
      "Mesin penalaran tingkat lanjut yang mampu membaca ratusan file dalam satu repositori sekaligus untuk merancang arsitektur aplikasi secara menyeluruh.",
    benefit:
      "Menghasilkan skema database relasional, sistem autentikasi, integrasi REST API, serta melakukan refactoring lintas file dan audit celah keamanan sebelum aplikasi dirilis.",
  },
];

export const MODEL_DEMOS = {
  trace: {
    tabLabel: "Vexel Trace",
    badge: "LATENSI 0,38 DTK • INLINE + PENJELAS KODE",
    inputType: "PROMPT & KURSOR AKTIF (useDebounce.js)",
    inputTitle:
      "Buat custom hook debounce React 19 + penjelasan baris demi baris",
    inputContent: `// Instruksi di editor:
// "Buatkan hook useDebounce(value, delay) yang aman dari memory leak
//  dan jelaskan cara kerjanya untuk tugas pemrograman web."`,
    outputFile: "src/hooks/useDebounce.js",
    outputCode: `import { useState, useEffect } from 'react';

export function useDebounce(value, delay = 300) {
  // 1. Simpan state nilai tertunda agar render tidak terpicu setiap ketikan
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 2. Jadwalkan pembaruan nilai setelah jeda 'delay' milidetik
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 3. Cleanup: batalkan timer lama jika 'value' berubah sebelum jeda selesai
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
}`,
  },
  frame: {
    tabLabel: "Vexel Frame",
    badge: "AKURASI 98,4% • MULTIMODAL VISION",
    inputType: "LAMPIRAN DESAIN (checkout-card.fig)",
    inputTitle:
      "Frame: Kartu Ringkasan Pembayaran (Padding 24px, Border 1px #E2E5E9)",
    inputContent: `[Layer Tree Terdeteksi]
├── Container (width: 380px, bg: #FFFFFF, border: 1px solid #E2E5E9)
│   ├── HeaderRow ("Ringkasan Tagihan", badge: "INV-2026")
│   ├── LineItem ("Lisensi Vexel Pro", "Rp 149.000")
│   ├── Divider (1px solid #E2E5E9)
│   └── PrimaryButton (bg: #0B0D10, text: "Konfirmasi Pembayaran")`,
    outputFile: "src/components/CheckoutSummaryCard.jsx",
    outputCode: `export function CheckoutSummaryCard({ invoiceId = 'INV-2026', total = 'Rp 149.000', onConfirm }) {
  return (
    <div className="w-full max-w-95 bg-white border border-border-hairline p-6">
      <div className="flex items-center justify-between pb-4 border-b border-border-hairline">
        <h3 className="font-semibold text-ink-primary text-base">Ringkasan Tagihan</h3>
        <span className="font-mono text-xs px-2 py-0.5 bg-canvas border border-border-hairline">
          {invoiceId}
        </span>
      </div>
      <div className="py-4 flex justify-between text-sm">
        <span className="text-ink-secondary">Lisensi Vexel Pro</span>
        <span className="font-mono font-semibold text-ink-primary">{total}</span>
      </div>
      <button
        onClick={onConfirm}
        className="w-full py-2.5 bg-ink-primary text-white text-sm font-medium hover:bg-signal transition-colors"
      >
        Konfirmasi Pembayaran
      </button>
    </div>
  );
}`,
  },
  kernel: {
    tabLabel: "Vexel Kernel",
    badge: "200K TOKEN • MULTI-FILE ARCHITECT",
    inputType: "KONTEKS REPOSITORI (142 FILE TERINDEKS)",
    inputTitle:
      "Rancang endpoint REST API autentikasi JWT + skema PostgreSQL + audit keamanan",
    inputContent: `[Analisis Lintas File]
• Membaca prisma/schema.prisma, src/middleware/auth.js, src/routes/projects.js
• Ditemukan 1 celah: IDOR pada GET /api/projects/:id tanpa validasi ownerId
• Menyusun migrasi SQL + middleware RBAC terenkripsi`,
    outputFile: "src/api/projects/getProjectSecure.js",
    outputCode: `import { db } from '../../lib/db.js';
import { verifySessionToken } from '../../middleware/auth.js';

export async function getProjectSecure(req, res) {
  const session = await verifySessionToken(req.headers.authorization);
  if (!session) return res.status(401).json({ error: 'Unauthorized' });

  const { projectId } = req.params;
  // Audit Fix: Pastikan query memfilter berdasarkan tenant/ownerId pengguna aktif
  const project = await db.project.findFirst({
    where: { id: projectId, ownerId: session.userId },
    select: { id: true, name: true, branch: true, updatedAt: true },
  });

  if (!project) return res.status(404).json({ error: 'Repositori tidak ditemukan' });
  return res.status(200).json({ data: project });
}`,
  },
};

export const IDE_FEATURES = [
  {
    code: "a",
    engine: "Ditenagai Vexel Trace",
    title: "Inline Ghost-Text Completion",
    description:
      "Saran penyelesaian kode kontekstual saat mengetik dengan latensi sub-detik langsung di posisi kursor.",
  },
  {
    code: "b",
    engine: "Ditenagai Vexel Frame",
    title: "Sidebar Design-to-Code",
    description:
      "Drag-and-drop gambar desain langsung ke panel samping VS Code atau Android Studio untuk menghasilkan komponen siap pakai.",
  },
  {
    code: "c",
    engine: "Ditenagai Vexel Kernel",
    title: "Multi-File Diff & Apply",
    description:
      "Terapkan perubahan kode di banyak file lokal sekaligus dengan pratinjau perbandingan baris hijau/merah sebelum disimpan.",
  },
];

export const SPEC_MATRIX_ROWS = [
  {
    parameter: "Fokus Utama",
    trace: "Prototyping & Autocomplete",
    frame: "Konversi Desain UI/UX ke Kode",
    kernel: "Arsitektur Full-Stack & Audit",
  },
  {
    parameter: "Kecepatan Respons",
    trace: "Sangat Cepat (0,38 dtk)",
    frame: "Cepat (1,2 dtk)",
    kernel: "Mendalam (2,5 dtk)",
  },
  {
    parameter: "Input Gambar / Figma",
    trace: "Tidak",
    frame: "Ya (Multimodal Vision)",
    kernel: "Ya (Referensi Skema & UI)",
  },
  {
    parameter: "Kapasitas Konteks",
    trace: "32.000 token",
    frame: "64.000 token",
    kernel: "200.000 token (Multi-File)",
  },
  {
    parameter: "Dukungan Plugin IDE",
    trace: "Inline Completion & Chat",
    frame: "Sidebar Visual-to-Code",
    kernel: "Multi-File Refactor & Diff",
  },
  {
    parameter: "Ketersediaan Paket",
    trace: "Semua Paket (Gratis)",
    frame: "Semua Paket (Kuota / Unlimited)",
    kernel: "Pro Developer & Studio",
  },
];

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter (Mahasiswa)",
    badge: null,
    monthlyPrice: "Rp 0",
    monthlyPeriod: "/ selamanya",
    annualPrice: "Rp 0",
    annualPeriod: "/ selamanya",
    annualNote: "Gratis tanpa batas waktu",
    targetUser: "Mahasiswa IT & pembelajar mandiri",
    traceQuota: "Tanpa Batas",
    frameQuota: "15 kredit konversi / hari",
    kernelQuota: "5 kredit arsitektur / minggu",
    ideExtension: "Termasuk (VS Code & Android Studio)",
    keyFeatures: [
      "Mode Penjelas Kode baris demi baris",
      "Konversi Figma/gambar presisi (kuota harian)",
      "Sandbox Web Workshop & ekspor kode lokal",
    ],
    ctaLabel: "Daftar Gratis",
    ctaTo: "/workspace",
    featured: false,
  },
  {
    id: "pro",
    name: "Pro Developer",
    badge: "Paling Populer",
    monthlyPrice: "Rp 149.000",
    monthlyPeriod: "/ bulan",
    annualPrice: "Rp 119.000",
    annualPeriod: "/ bulan",
    annualNote: "Ditagih Rp 1.428.000 / tahun (Hemat 20%)",
    targetUser: "Freelancer & programmer aktif",
    traceQuota: "Tanpa Batas",
    frameQuota: "Tanpa Batas",
    kernelQuota: "100 kredit arsitektur / bulan",
    ideExtension: "Termasuk + Sinkronisasi Cloud & Multi-IDE",
    keyFeatures: [
      "Slicing UI/UX tanpa batas (Next.js, Tailwind, Flutter, Compose)",
      "Multi-file diff & refactor langsung di IDE lokal",
      "Privasi repositori terenkripsi & jalur komputasi cepat",
    ],
    ctaLabel: "Coba Pro 14 Hari",
    ctaTo: "/workspace",
    featured: true,
  },
  {
    id: "studio",
    name: "Studio / Tim",
    badge: null,
    monthlyPrice: "Rp 499.000",
    monthlyPeriod: "/ bulan",
    annualPrice: "Rp 399.000",
    annualPeriod: "/ bulan",
    annualNote: "Ditagih Rp 4.788.000 / tahun (Hemat 20%)",
    targetUser: "Software house & tim startup",
    traceQuota: "Tanpa Batas",
    frameQuota: "Tanpa Batas",
    kernelQuota: "Tanpa Batas (Prioritas Server)",
    ideExtension: "Termasuk + Manajemen Kebijakan Tim & SSO",
    keyFeatures: [
      "Kapasitas konteks penuh 200K token lintas repositori",
      "Audit keamanan otomatis & standarisasi design system tim",
      "Akses API khusus & dukungan engineer prioritas",
    ],
    ctaLabel: "Hubungi Tim Sales",
    ctaTo: "/#kontak",
    featured: false,
  },
];

export const ABOUT_MISSIONS = [
  {
    code: "a",
    title: "Spesialisasi Model Visual-ke-Kode",
    description:
      "Menghadirkan model AI spesialisasi yang mampu menerjemahkan rancangan visual menjadi kode standar industri.",
  },
  {
    code: "b",
    title: "Edukasi & Transparansi Logika",
    description:
      "Menyediakan alat bantu yang edukatif sehingga developer pemula tetap memahami setiap logika di balik kode yang dihasilkan.",
  },
  {
    code: "c",
    title: "Integrasi Alur Kerja Nyata",
    description:
      "Terintegrasi mulus dengan alur kerja nyata developer melalui Web Workshop, Git version control, dan ekstensi IDE lokal.",
  },
];

export const CORE_PILLARS = [
  {
    code: "a",
    title: "Presisi Visual",
    description:
      "Setiap piksel dan jarak pada wireframe harus diterjemahkan secara akurat ke dalam kode responsif.",
  },
  {
    code: "b",
    title: "Keterbacaan & Edukasi",
    description:
      "Kode yang baik adalah kode yang bersih, modular, dan mudah dipelajari kembali oleh manusia.",
  },
  {
    code: "c",
    title: "Kedaulatan Kode Pengguna",
    description:
      "Seluruh kode sumber dan repositori pengguna terenkripsi penuh dan tidak pernah dijadikan data latih publik.",
  },
];

export const TEAM_ROLES = [
  {
    unit: "DIVISI 01 // CORE AI",
    role: "Product & AI Architecture Lead",
    responsibility:
      "Memimpin riset model Vexel Kernel & integrasi penalaran multi-file.",
  },
  {
    unit: "DIVISI 02 // VISUAL SYSTEM",
    role: "UI/UX & Design Systems",
    responsibility:
      "Mengembangkan standar slicing visual Vexel Frame & sistem antarmuka Refract.",
  },
  {
    unit: "DIVISI 03 // ECOSYSTEM",
    role: "Brand & Creative Communication",
    responsibility:
      "Mengelola narasi produk, komunikasi komunitas, dan kemitraan kampus.",
  },
  {
    unit: "DIVISI 04 // TOOLING",
    role: "Frontend & IDE Integration",
    responsibility:
      "Mengembangkan ekstensi VS Code, JetBrains plugin, dan Web Workshop engine.",
  },
];
