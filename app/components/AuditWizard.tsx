"use client";

import { useState } from "react";
import {
  Sparkles,
  Send,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function AuditWizard() {
  const [sector, setSector] = useState("Klinik / Sağlık");
  const [hasWebsite, setHasWebsite] = useState("var");
  const [siteUrl, setSiteUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("Aylık 30+ Yeni Müşteri Araması");
  const [analyzed, setAnalyzed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert("Lütfen geçerli bir telefon numarası giriniz.");
      return;
    }

    setAnalyzed(true);

    const message = `Merhaba Nova Digital,\nİşletmem için 60 Saniyelik Ücretsiz Analiz Raporu talep ediyorum:\n- Sektör: ${sector}\n- Web Sitesi: ${hasWebsite === "var" ? siteUrl || "Var (Belirtilmedi)" : "Yok (Yeni Kurulacak)"}\n- Hedef: ${goal}\n- Telefon: ${phone}`;
    const encoded = encodeURIComponent(message);

    setTimeout(() => {
      window.open(`https://wa.me/905070871789?text=${encoded}`, "_blank");
    }, 800);
  };

  return (
    <section id="analiz" className="py-12 sm:py-14 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ücretsiz Dijital Denetim</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
            Web Sitenizi & Rakiplerinizi <span className="text-shimmer">60 Saniyede Analiz Edelim</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Müşteri kaybettiren 15 teknik ve tasarımsal hatayı ücretsiz tespit edelim, özel yol haritanızı WhatsApp'tan iletelim.
          </p>
        </div>

        {/* The Interactive Audit Card */}
        <div className="glass-box p-6 sm:p-8 rounded-2xl border-blue-500/40 relative overflow-hidden">
          {analyzed ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Ön Analiziniz Başarıyla Oluşturuldu!
              </h3>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2 text-slate-300">
                <div className="flex items-center justify-between font-mono">
                  <span>Tahmini Dönüşüm Skoru:</span>
                  <span className="text-amber-400 font-bold">54 / 100</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-300 text-[11px]">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>Sektörünüzde 18 potansiyel müşteri kaçırma noktası bulundu.</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Detaylı analiz raporunuz ve çözüm önerilerimiz WhatsApp hattınıza yönlendiriliyor...
              </p>
              <a
                href="https://wa.me/905070871789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white shadow-lg"
              >
                <span>WhatsApp Raporunu Aç</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Step 1: Sector Choice */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-2">
                  1. İşletmenizin Sektörü Nedir?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    "Klinik / Sağlık",
                    "Villa & Tadilat",
                    "Otel & Turizm",
                    "E-Ticaret",
                    "Restoran & Kafe",
                    "Hukuk / Danışmanlık",
                    "Gayrimenkul / Emlak",
                    "Diğer Hizmetler",
                  ].map((sec) => (
                    <button
                      type="button"
                      key={sec}
                      onClick={() => setSector(sec)}
                      className={`p-2.5 rounded-xl text-xs font-semibold transition text-left border ${
                        sector === sec
                          ? "bg-blue-600 text-white border-blue-500 shadow-md"
                          : "bg-slate-900/70 text-slate-300 border-white/5 hover:border-white/20"
                      }`}
                    >
                      {sec}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Has Website */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-2">
                    2. Mevcut Bir Web Siteniz Var mı?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setHasWebsite("var")}
                      className={`p-2.5 rounded-xl text-xs font-semibold transition text-center border ${
                        hasWebsite === "var"
                          ? "bg-blue-600 text-white border-blue-500 shadow-md"
                          : "bg-slate-900/70 text-slate-300 border-white/5 hover:border-white/20"
                      }`}
                    >
                      Evet, Var
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasWebsite("yok")}
                      className={`p-2.5 rounded-xl text-xs font-semibold transition text-center border ${
                        hasWebsite === "yok"
                          ? "bg-blue-600 text-white border-blue-500 shadow-md"
                          : "bg-slate-900/70 text-slate-300 border-white/5 hover:border-white/20"
                      }`}
                    >
                      Hayır, Sıfırdan
                    </button>
                  </div>
                </div>

                {hasWebsite === "var" ? (
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-2">
                      Mevcut Web Sitenizin Adresi
                    </label>
                    <input
                      type="text"
                      value={siteUrl}
                      onChange={(e) => setSiteUrl(e.target.value)}
                      placeholder="ornekisletme.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-2">
                      Aylık Müşteri Hedefiniz
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option value="Aylık 10-30 Yeni Arama & Müşteri">Aylık 10-30 Yeni Müşteri</option>
                      <option value="Aylık 30-100 Yeni Arama & Müşteri">Aylık 30-100 Yeni Müşteri</option>
                      <option value="100+ Düzenli Satış & Sipariş">100+ Düzenli Sipariş</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Step 3: Contact Phone & Action */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-2">
                  3. Raporun Gönderileceği Telefon / WhatsApp Numaranız *
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05XX XXX XX XX"
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="btn-shimmer px-6 py-3 rounded-xl text-xs font-bold text-white shadow-xl flex items-center justify-center gap-2 shrink-0 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Ücretsiz Analizimi Gönder</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Bilgileriniz %100 gizli tutulur. Spam veya istenmeyen arama yapılmaz.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
