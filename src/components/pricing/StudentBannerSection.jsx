import { useState } from "react";

export function StudentBannerSection() {
  const [showForm, setShowForm] = useState(false);
  const [campusEmail, setCampusEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    if (!campusEmail.trim().toLowerCase().endsWith(".ac.id")) {
      setErrorMsg(
        "Gunakan alamat email resmi institusi pendidikan berakhiran .ac.id",
      );
      return;
    }
    setErrorMsg("");
    setVerified(true);
  };

  return (
    <section className="bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 sm:p-10 bg-white border border-border-hairline grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="inline-block font-mono text-xs font-semibold px-2.5 py-1 bg-canvas border border-border-hairline text-signal">
              PROGRAM AKADEMIK (.AC.ID)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary">
              Kuliah di Jurusan IT atau Sistem Informasi?
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed max-w-2xl">
              Daftarkan akun menggunakan alamat email akademik (.ac.id) untuk
              mendapatkan tambahan kuota harian Vexel Frame dan Vexel Kernel
              secara gratis selama masa studi berlangsung.
            </p>
          </div>

          <div className="lg:col-span-4">
            {verified ? (
              <div className="p-4 bg-canvas border border-signal space-y-1">
                <p className="font-mono text-xs font-bold text-signal">
                  VERIFIKASI TERKIRIM ✓
                </p>
                <p className="text-xs text-ink-primary">
                  Kode aktivasi kuota akademik telah dikirim ke{" "}
                  <strong>{campusEmail}</strong>.
                </p>
              </div>
            ) : !showForm ? (
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="w-full lg:w-auto px-6 py-3.5 bg-ink-primary text-white text-sm font-semibold border border-ink-primary hover:bg-signal hover:border-signal transition-colors"
              >
                Verifikasi Email Kampus
              </button>
            ) : (
              <form onSubmit={handleVerify} className="space-y-2.5">
                <input
                  type="email"
                  required
                  value={campusEmail}
                  onChange={(e) => setCampusEmail(e.target.value)}
                  placeholder="nim@mahasiswa.kampus.ac.id"
                  className="w-full px-3.5 py-2.5 bg-canvas border border-border-hairline font-mono text-xs text-ink-primary focus:outline-none focus:border-signal"
                />
                {errorMsg && (
                  <p className="font-mono text-[11px] text-red-600">
                    {errorMsg}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full py-2.5 bg-signal text-white font-mono text-xs font-semibold hover:bg-signal-hover"
                >
                  Kirim Tautan Verifikasi
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
