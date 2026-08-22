"use client";

import { ExternalLink, TrendingUp } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface OwnProject {
  name: string;
  domain: string;
  url: string;
  sector: string;
  problem: string;
  solution: string;
  system: string;
  result: string;
  resultColor: string;
  preview: string;
}

export default function CaseStudies() {
  const { ref, isVisible } = useScrollReveal();

  const projects: OwnProject[] = [
    {
      name: "Nova Tadilat",
      domain: "antalyadatadilat.com.tr",
      url: "https://antalyadatadilat.com.tr",
      sector: "Villa & Konut Renovasyonu",
      problem: "Yüksek bütçeli müşteriye güven veremeyen, telefon trafiğini ölçemeyen jenerik web varlığı.",
      solution: "Premium görsel dil + anlık keşif maliyet hesaplayıcısı + WhatsApp teklif akışı.",
      system: "Keşif Formu → WhatsApp → Teklif → Sözleşme",
      result: "3.4× keşif talebi",
      resultColor: "text-emerald-400",
      preview: "/images/tadilat-preview.jpg",
    },
    {
      name: "Nova Klima",
      domain: "antalyadaklimaservisi.com.tr",
      url: "https://antalyadaklimaservisi.com.tr",
      sector: "HVAC Servis & Bakım",
      problem: "Acil servis taleplerini kaçıran, rakiplerden ayırt edilemeyen düz rehber sayfası.",
      solution: "30 dk acil servis butonu + hizmet fiyatlandırma kartları + tek tıkla arama.",
      system: "Servis Talebi → Doğrudan Arama → Onay",
      result: "+%62 doğrudan arama",
      resultColor: "text-blue-400",
      preview: "/images/klima-preview.png",
    },
    {
      name: "Nova Nakliyat",
      domain: "antalyadanakliyat.com.tr",
      url: "https://antalyadanakliyat.com.tr",
      sector: "Asansörlü Ev & Ofis Taşıma",
      problem: "Belirsiz fiyatlandırma, rakipler karşısında kaybedilen lead'ler.",
      solution: "Şeffaf fiyat + sıfır hasar garantisi + WhatsApp anlık teklif akışı.",
      system: "Taşıma Talebi → WhatsApp Teklif → Ödeme",
      result: "%50 düşen terk oranı",
      resultColor: "text-amber-400",
      preview: "/images/nakliyat-preview.png",
    },
    {
      name: "Nova Epoksi",
      domain: "antalyaepoksizemin.com.tr",
      url: "https://antalyaepoksizemin.com.tr",
      sector: "Endüstriyel Epoksi Zemin Kaplama",
      problem: "B2B müşteriye ulaşamayan, teknik projeleri fiyatlandırmakta zorlanan site.",
      solution: "Fabrika galerileri + m² bütçe hesaplayıcısı + kurumsal keşif formu.",
      system: "m² Hesap → Keşif Formu → Sahaya İniş",
      result: "+%187 organik trafik",
      resultColor: "text-purple-400",
      preview: "/images/nova-epoksi-preview.jpg",
    },
  ];

  return (
    <section id="projeler" className="py-12 sm:py-14 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={isVisible ? "reveal-up in-view" : "reveal-up"}>
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Kendi İşletmelerimizde Uyguladığımız Sistemler
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-2xl mb-2">
            Bu sistemleri önce kendimiz kuruyoruz,{" "}
            <span className="text-shimmer">sonra müşterilerimize.</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl leading-relaxed mb-8">
            NovaDigital; teoride değil, sahadaki kendi işletmelerinde gerçek lead ve
            satış verileriyle test edilmiş sistemler kurar.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className={`glass-box overflow-hidden flex flex-col ${
                isVisible ? `reveal-up in-view stagger-${idx + 1}` : "reveal-up"
              }`}
            >
              {/* Preview */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/5 bg-slate-900 group">
                <img
                  src={p.preview}
                  alt={p.name}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-1 rounded-md bg-black/80 backdrop-blur-sm text-[10px] font-mono text-slate-300 border border-white/10">
                  {p.domain}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-white">{p.name}</h3>
                    <p className="text-[11px] text-slate-400">{p.sector}</p>
                  </div>
                  <span className={`text-sm font-extrabold font-mono ${p.resultColor} shrink-0 text-right`}>
                    {p.result}
                  </span>
                </div>

                <div className="grid gap-2">
                  <div className="flex gap-2 text-xs">
                    <span className="font-bold text-slate-600 uppercase tracking-wider shrink-0 pt-0.5 w-14 text-[10px]">Problem</span>
                    <span className="text-slate-300 leading-relaxed">{p.problem}</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="font-bold text-slate-600 uppercase tracking-wider shrink-0 pt-0.5 w-14 text-[10px]">Çözüm</span>
                    <span className="text-slate-300 leading-relaxed">{p.solution}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 pt-2 border-t border-white/5">
                  <TrendingUp className="w-3 h-3 text-blue-400 shrink-0" />
                  <span className="text-[10px] font-mono text-slate-400">{p.system}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
