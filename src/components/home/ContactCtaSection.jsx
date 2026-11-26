import { useState } from "react";

export function ContactCtaSection() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Mahasiswa");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-border-hairline">
          {/* Kolom Kiri (Mulai Cepat) */}
          <div className="lg:col-span-7 p-6 sm:p-10 bg-canvas border-r border-b border-border-hairline space-y-6">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
                MULAI CEPAT • AKSES INSTAN
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary">
                Siap Bangun Aplikasi Web &amp; Mobile Pertamamu?
              </h2>
              <p className="text-sm sm:text-base text-ink-secondary">
                Buat akun gratis dalam hitungan detik untuk mengakses Web
                Workshop dan kunci lisensi plugin IDE.
              </p>
            </div>

            {submitted ? (
              <div className="p-5 bg-white border border-signal space-y-2">
                <p className="font-mono text-xs font-bold text-signal">
                  AKUN TERDAFTAR • KUNCI LISENSI DIKIRIM
                </p>
                <p className="text-sm text-ink-primary">
                  Tautan aktivasi Web Workshop dan token plugin IDE untuk peran{" "}
                  <strong>{role}</strong> telah dikirim ke{" "}
                  <strong>{email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setEmail("");
                  }}
                  className="font-mono text-xs underline text-ink-secondary hover:text-ink-primary"
                >
                  Daftarkan email lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-7">
                    <label htmlFor="quick-email" className="sr-only">
                      Alamat Email
                    </label>
                    <input
                      id="quick-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="developer@domain.com"
                      className="w-full px-4 py-3 bg-white border border-border-hairline text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-signal"
                    />
                  </div>
                  <div className="sm:col-span-5">
                    <label htmlFor="quick-role" className="sr-only">
                      Pilihan Peran
                    </label>
                    <select
                      id="quick-role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-border-hairline text-sm text-ink-primary focus:outline-none focus:border-signal"
                    >
                      <option value="Mahasiswa">Mahasiswa</option>
                      <option value="Developer">Developer</option>
                      <option value="Tim">Tim</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 bg-ink-primary text-white text-sm font-semibold border border-ink-primary hover:bg-signal hover:border-signal transition-colors"
                >
                  Buat Akun Gratis
                </button>
              </form>
            )}
          </div>

          {/* Kolom Kanan (Hubungi Tim Vexel Labs) */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-white border-r border-b border-border-hairline flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                HUBUNGI TIM VEXEL LABS
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-ink-primary">
                Butuh Lisensi Tim, Kerja Sama Kampus, atau Bantuan Teknis?
              </h3>
            </div>

            <dl className="space-y-3.5 text-sm border-t border-border-hairline pt-5">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="font-mono text-xs text-ink-muted">
                  Email Dukungan
                </dt>
                <dd className="font-mono font-medium text-ink-primary">
                  <a
                    href="mailto:support@vexel-ai.dev"
                    className="hover:text-signal"
                  >
                    support@vexel-ai.dev
                  </a>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="font-mono text-xs text-ink-muted">
                  Kemitraan &amp; Kampus
                </dt>
                <dd className="font-mono font-medium text-ink-primary">
                  <a
                    href="mailto:partnership@vexel-ai.dev"
                    className="hover:text-signal"
                  >
                    partnership@vexel-ai.dev
                  </a>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="font-mono text-xs text-ink-muted">
                  Komunitas Developer
                </dt>
                <dd className="font-mono font-medium text-signal">
                  discord.gg/vexel-ai
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="font-mono text-xs text-ink-muted">
                  Kantor Operasional
                </dt>
                <dd className="font-medium text-ink-primary">
                  Vexel Labs, Jakarta Selatan, Indonesia
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
