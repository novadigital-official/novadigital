import Link from "next/link";
import {
  Apple,
  Smartphone,
  Server,
  Bell,
  CreditCard,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export default function MobileAppFeature() {
  const features = [
    { icon: Apple, text: "iOS & iPadOS Uygulama" },
    { icon: Smartphone, text: "Android Uygulama & APK" },
    { icon: Server, text: "Yüksek Hızlı API & Backend" },
    { icon: Bell, text: "Push Bildirim Sistemi" },
    { icon: CreditCard, text: "Güvenli Ödeme Entegrasyonu" },
    { icon: UserCheck, text: "Kullanıcı & Yetkilendirme" },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-3">
              Mobil & Özel Yazılım
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Fikriniz Varsa, Onu{" "}
              <span className="text-gradient">Ürüne Dönüştürelim.</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-xl">
              İster işletmenize özel bir iç operasyon paneli, ister App Store ve Google Play'de
              milyonlara ulaşacak bir mobil uygulama projesi. Modern mimari ile hayata geçirelim.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-7">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80"
                  >
                    <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-700">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <Link
              href="#iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Projenizi Konuşalım</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Clean Phone Frame with NO OVERLAID TEXT */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm relative">
              <div className="rounded-2xl p-2 bg-white border border-slate-200 shadow-xl overflow-hidden">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900">
                  <video
                    src="/images/5585983-hd_1080_1920_30fps.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
