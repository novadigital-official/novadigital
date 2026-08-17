"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Balancer from "react-wrap-balancer";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
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
      service: "Kurumsal Paket (9.999 TL)",
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
    <section id="iletisim" className="py-16 md:py-24 relative bg-[#0f172a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-cyan-400 uppercase mb-2">
            Doğrudan İletişim
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            <Balancer>
              İşletmenizin Dijital Müşteri Sistemini{" "}
              <span className="text-shimmer">Birlikte Kuralım</span>
            </Balancer>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2.5">
            10 dakika görüşme, ücretsiz ön analiz. Satış baskısı yok.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="https://wa.me/905070871789?text=Merhaba%2C%20%C3%BCcretsiz%20dijital%20analiz%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl flex items-center gap-4 border border-emerald-500/30 bg-emerald-950/20 hover:border-emerald-500/50 hover:bg-emerald-950/30 transition-all duration-300 block shadow-lg shadow-emerald-950/30"
            >
              <div className="p-3.5 rounded-xl bg-emerald-500/15 text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 mb-0.5">
                  En Hızlı Yanıt (7/24)
                </p>
                <h3 className="text-sm font-extrabold text-white">WhatsApp ile Yazın</h3>
                <p className="text-xs text-slate-400">Anında ücretsiz dijital analiz</p>
              </div>
            </a>

            <a
              href="tel:05070871789"
              className="p-5 rounded-2xl flex items-center gap-4 border border-cyan-500/30 bg-cyan-950/20 hover:border-cyan-500/50 hover:bg-cyan-950/30 transition-all duration-300 block shadow-lg shadow-cyan-950/30"
            >
              <div className="p-3.5 rounded-xl bg-cyan-500/15 text-cyan-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-0.5">
                  Doğrudan Telefon Hattı
                </p>
                <h3 className="text-sm font-extrabold text-white">0507 087 17 89</h3>
                <p className="text-xs text-slate-400">09:00 – 20:00 Doğrudan Arama</p>
              </div>
            </a>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>info@novadigital.com.tr</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Kültür Mah. 3856 Sok. Kepez / Antalya</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl">
            <h3 className="text-base font-extrabold text-white mb-1 tracking-tight">
              Ücretsiz Teklif Al
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Projenizi doğrudan WhatsApp üzerinden iletelim.
            </p>

            {submitted ? (
              <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-center space-y-2">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-sm">Talebiniz Alındı!</h4>
                <p className="text-xs text-slate-300">
                  WhatsApp üzerinden mesajınız iletildi. En kısa sürede dönüş sağlıyoruz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Örn: Ahmet Yılmaz"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-xs focus:outline-none focus:bg-slate-950 transition ${
                        errors.name
                          ? "border-rose-500"
                          : "border-slate-800 focus:border-cyan-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Telefon / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="05XX XXX XX XX"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-xs focus:outline-none focus:border-cyan-500 transition ${
                        errors.phone
                          ? "border-rose-500"
                          : "border-slate-800 focus:border-cyan-500"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    İlgilendiğiniz Paket
                  </label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Standart Paket (1.999 TL) — Lansman">Standart Paket (1.999 TL) 🔥 Lansman</option>
                    <option value="Kurumsal Paket (9.999 TL)">Kurumsal Paket (9.999 TL) ⭐</option>
                    <option value="Profesyonel Paket (19.999 TL)">Profesyonel Paket (19.999 TL)</option>
                    <option value="Google & Meta Reklam Yönetimi">Google & Meta Reklam Yönetimi</option>
                    <option value="Özel Yazılım / CRM">Özel Yazılım / CRM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Kısa Not (Opsiyonel)
                  </label>
                  <textarea
                    rows={2}
                    {...register("notes")}
                    placeholder="Sektörünüz veya özel talepleriniz..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Ücretsiz Teklif Al</span>
                </button>

                <p className="text-[10px] text-slate-400 text-center pt-1 leading-relaxed">
                  Formu ileterek{" "}
                  <button
                    type="button"
                    onClick={() => onOpenLegal && onOpenLegal("kvkk")}
                    className="text-cyan-400 underline hover:text-cyan-300 transition"
                  >
                    KVKK Aydınlatma Metni
                  </button>
                  'ni okuduğunuzu kabul etmiş olursunuz.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
