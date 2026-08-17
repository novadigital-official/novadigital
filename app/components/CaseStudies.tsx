"use client";

import { ExternalLink, TrendingUp } from "lucide-react";

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
  const projects: OwnProject[] = [
    {
      name: "Nova Tadilat",
      domain: "antalyadatadilat.com.tr",
      url: "https://antalyadatadilat.com.tr",
      sector: "Villa & Konut Renovasyonu",
      problem:
        "Yüksek bütçeli müşteriye güven veremeyen, telefon trafiğini ölçemeyen jenerik web varlığı.",
      solution:
        "Premium görsel dil + anlık keşif maliyet hesaplayıcısı + WhatsApp teklif akışı.",
      system: "Keşif Formu → WhatsApp → Teklif → Sözleşme",
      result: "3.4× daha fazla keşif talebi (60 gün)",
      resultColor: "text-emerald-400",
      preview: "/images/tadilat-preview.jpg",
    },
    {
      name: "Nova Klima",
      domain: "antalyadaklimaservisi.com.tr",
      url: "https://antalyadaklimaservisi.com.tr",
      sector: "HVAC Servis & Bakım",
      problem:
        "Rakiplerden ayırt edilemeyen, acil servis taleplerini kaçıran düz rehber sayfası.",
      solution:
        "30 dk acil servis butonu + hizmet fiyatlandırma kartları + tek tıkla arama.",
      system: "Servis Talebi → Doğrudan Arama → Onay",
      result: "+%62 doğrudan telefon araması",
      resultColor: "text-blue-400",
      preview: "/images/klima-preview.png",
    },
    {
      name: "Nova Nakliyat",
      domain: "antalyadanakliyat.com.tr",
      url: "https://antalyadanakliyat.com.tr",
      sector: "Asansörlü Ev & Ofis Taşıma",
      problem:
        "Müşteri güvensizliği yaratan belirsiz fiyatlandırma, rakipler karşısında kaybedilen lead'ler.",
      solution:
        "Şeffaf fiyat + sıfır hasar garantisi vurgulu landing + WhatsApp anlık teklif akışı.",
      system: "Taşıma Talebi → WhatsApp Teklif → Ödeme",
      result: "%50 daha az terk oranı",
      resultColor: "text-amber-400",
      preview: "/images/nakliyat-preview.png",
    },
    {
      name: "Nova Epoksi",
      domain: "antalyaepoksizemin.com.tr",
      url: "https://antalyaepoksizemin.com.tr",
      sector: "Endüstriyel Epoksi Zemin Kaplama",
      problem:
        "B2B müşteriye ulaşamayan, teknik projeleri fiyatlandırmakta zorlanan kurumsal görünümsüz site.",
      solution:
        "Fabrika & depo proje galerileri + m² bazında bütçe hesaplayıcısı + kurumsal keşif formu.",
      system: "m² Hesap → Keşif Formu → Sahaya İnis",
      result: "+%187 organik Google trafiği",
      resultColor: "text-purple-400",
      preview: "/images/nova-epoksi-preview.jpg",
    },
  ];

  return (
    <section id="projeler" className="py-14 sm:py-16 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Kendi İşletmelerimizde Uyguladığımız Sistemler
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-2xl">
            Bu sistemleri önce kendimiz kuruyoruz,{" "}
            <span className="text-shimmer">sonra müşterilerimize.</span>
          </h2>
          <p className="text-sm text-slate-400 mt-3 max-w-xl leading-relaxed">
            NovaDigital; teoride değil, sahadaki kendi işletmelerinde
            gerçek lead, dönüşüm ve satış verileriyle test edilmiş dijital
            sistemler kurar.
          </p>
        </div>

        {/* 2x2 Case Study Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="glass-box overflow-hidden group flex flex-col"
            >
              {/* Preview image */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/5 bg-slate-900">
                <img
                  src={p.preview}
                  alt={p.name + " ekran görüntüsü"}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                {/* Domain tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-[10px] font-mono text-slate-300 border border-white/10">
                  {p.domain}
                </div>
                {/* Live link */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label={p.name + " sitesini aç"}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Case study body */}
              <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
                {/* Title row */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white">{p.name}</h3>
                    <p className="text-xs text-slate-400">{p.sector}</p>
                  </div>
                  <span className={`text-sm font-extrabold font-mono ${p.resultColor} shrink-0 text-right`}>
                    {p.result}
                  </span>
                </div>

                {/* Case anatomy */}
                <div className="grid grid-cols-1 gap-2.5">
                  <div className="flex gap-2 text-xs">
                    <span className="font-bold text-slate-500 uppercase tracking-wider shrink-0 pt-0.5 w-14">
                      Problem
                    </span>
                    <span className="text-slate-300 leading-relaxed">
                      {p.problem}
                    </span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="font-bold text-slate-500 uppercase tracking-wider shrink-0 pt-0.5 w-14">
                      Çözüm
                    </span>
                    <span className="text-slate-300 leading-relaxed">
                      {p.solution}
                    </span>
                  </div>
                </div>

                {/* System flow */}
                <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-white/5">
                  <TrendingUp className="w-3 h-3 text-blue-400 shrink-0" />
                  <span className="text-[10px] font-mono text-slate-400">
                    {p.system}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
