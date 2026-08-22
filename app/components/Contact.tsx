"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { LegalTab } from "./LegalModal";

const formSchema = z.object({
  name: z.string().min(2, "Ad Soyad en az 2 karakter olmalıdır"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  service: z.string().min(1, "Lütfen bir hizmet seçiniz"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactProps {
  onOpenLegal?: (tab: LegalTab) => void;
}

export default function Contact({ onOpenLegal }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "Kurumsal Paket (14.999 TL)",
      notes: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const msg = `Merhaba Nova Digital,\nİsim: ${data.name}\nTelefon: ${data.phone}\nİlgilenilen Hizmet: ${data.service}\nNot: ${data.notes || "Belirtilmedi"}`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/905070871789?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className="py-12 sm:py-14 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
            Projenizi Birlikte <span className="text-shimmer">Hayata Geçirelim</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            WhatsApp'tan anında yazın veya formu doldurun. 15 dakika içinde size özel yol haritası sunalım.
          </p>
        </div>

        {/* Full-Width Symmetrical Grid inside max-w-6xl */}
        <div className="grid lg:grid-cols-12 gap-6 items-start w-full">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Quick CTA */}
            <a
              href="https://wa.me/905070871789?text=Merhaba,%20web%20sitesi%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="glass-box p-5 rounded-2xl flex items-center gap-4 transition-all hover:scale-[1.02] border-emerald-500/30 bg-emerald-950/20 block"
            >
              <div className="p-3.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  En Hızlı Yanıt
                </span>
                <h3 className="text-base font-bold text-white">WhatsApp ile Yazın</h3>
                <p className="text-xs text-slate-400">Anında canlı teklif & analiz</p>
              </div>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:05070871789"
              className="glass-box p-5 rounded-2xl flex items-center gap-4 transition-all hover:scale-[1.02] border-blue-500/30 bg-blue-950/20 block"
            >
              <div className="p-3.5 rounded-xl bg-blue-500/20 text-blue-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
                  Telefon Hattı
                </span>
                <h3 className="text-base font-bold text-white">0507 087 17 89</h3>
                <p className="text-xs text-slate-400">09:00 - 20:00 Doğrudan Arama</p>
              </div>
            </a>

            {/* Address & Email Info */}
            <div className="glass-box p-5 rounded-2xl space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>info@novadigital.com.tr</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Kültür Mah. 3856 Sok. Kepez / Antalya</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols) */}
          <div className="lg:col-span-7 glass-box p-6 sm:p-7">
            <h3 className="text-lg font-bold text-white mb-1">Hızlı Teklif & Analiz Formu</h3>
            <p className="text-xs text-slate-400 mb-5">
              Bilgilerinizi bırakın, projenizi inceleyip WhatsApp üzerinden iletelim.
            </p>

            {submitted ? (
              <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-sm">Talebiniz Alındı!</h4>
                <p className="text-xs text-slate-300">
                  WhatsApp üzerinden mesajınız iletildi. En kısa sürede dönüş sağlıyoruz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Örn: Ahmet Yılmaz"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-white text-xs focus:outline-none focus:bg-slate-900 transition ${
                        errors.name ? "border-rose-500" : "border-white/10 focus:border-blue-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name.message}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="05XX XXX XX XX"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-white text-xs focus:outline-none focus:border-blue-500 transition ${
                        errors.phone ? "border-rose-500" : "border-white/10 focus:border-blue-500"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="service-select" className="block text-xs font-bold text-slate-300 mb-1">
                    İlgilendiğiniz Paket / Çözüm
                  </label>
                  <select
                    id="service-select"
                    aria-label="İlgilendiğiniz Paket / Çözüm"
                    {...register("service")}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                  >
                    <option value="Standart Paket (4.999 TL)">Standart Paket (4.999 TL)</option>
                    <option value="Kurumsal Paket (14.999 TL)">Kurumsal Paket (14.999 TL)</option>
                    <option value="Profesyonel Paket (39.999 TL)">Profesyonel Paket (39.999 TL)</option>
                    <option value="Google & Meta Reklam Yönetimi">Google & Meta Reklam Yönetimi</option>
                    <option value="Mobil Uygulama / Özel Yazılım">Mobil Uygulama / Özel Yazılım</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Kısa Not (Opsiyonel)
                  </label>
                  <textarea
                    rows={2}
                    {...register("notes")}
                    placeholder="Sektörünüz veya özel talepleriniz..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Ücretsiz Teklif Al</span>
                </button>

                {/* KVKK Legal Micro-Copy */}
                <p className="text-[10px] text-slate-400 text-center pt-1 leading-relaxed">
                  Formu ileterek{" "}
                  <button
                    type="button"
                    onClick={() => onOpenLegal && onOpenLegal("kvkk")}
                    className="text-blue-400 underline hover:text-blue-300 transition"
                  >
                    KVKK Aydınlatma Metni
                  </button>
                  ’ni okuduğunuzu ve teklif süreçleri kapsamında iletişime geçilmesini kabul etmiş olursunuz.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
