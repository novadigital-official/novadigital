"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Balancer from "react-wrap-balancer";
import { ExternalLink, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Project {
  title: string;
  category: "standart" | "kurumsal" | "profesyonel";
  tag: string;
  badge: string;
  image: string;
  desc: string;
  url: string;
  domain: string;
}

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "standart" | "kurumsal" | "profesyonel">("all");
  const { ref, isVisible } = useScrollReveal();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const projects: Project[] = [
    {
      title: "Antalya DHI Saç Ekimi & Sağlık",
      category: "profesyonel",
      tag: "Sağlık & Medikal",
      badge: "Profesyonel Paket",
      image: "/images/sacekimi-preview.png",
      desc: "Çok dilli Norwood saç analiz testi ve hasta başvuru modülü.",
      url: "https://antalya-dhi.vercel.app",
      domain: "antalya-dhi.vercel.app",
    },
    {
      title: "Netero Giyim E-Ticaret Mağazası",
      category: "profesyonel",
      tag: "E-Ticaret & İyzico",
      badge: "Profesyonel Paket",
      image: "/images/eticaret-ui-preview.jpg",
      desc: "İyzico 3D güvenli ödeme, anlık stok sayacı ve sipariş yönetim paneli.",
      url: "https://novaeticaret.vercel.app/",
      domain: "novaeticaret.vercel.app",
    },
    {
      title: "Antalya'da Tadilat & Villa Renovasyonu",
      category: "kurumsal",
      tag: "Mimarlık & Tadilat",
      badge: "Kurumsal Paket",
      image: "/images/tadilat-preview.jpg",
      desc: "Anahtar teslim villa yenileme ve 10 saniyede keşif maliyet hesaplama aracı.",
      url: "https://antalyadatadilat.com.tr",
      domain: "antalyadatadilat.com.tr",
    },
    {
      title: "Antalya Epoksi Zemin Kaplama",
      category: "kurumsal",
      tag: "Endüstriyel Zemin",
      badge: "Kurumsal Paket",
      image: "/images/nova-epoksi-preview.jpg",
      desc: "Fabrikalar için zemin kaplama, m² bütçe çıkartıcı ve kurumsal keşif formu.",
      url: "https://antalyaepoksizemin.com.tr",
      domain: "antalyaepoksizemin.com.tr",
    },
    {
      title: "Nova Emlak & Gayrimenkul Portalı",
      category: "kurumsal",
      tag: "Gayrimenkul & Portföy",
      badge: "Kurumsal Paket",
      image: "/images/gayrimenkul-ui-preview.jpg",
      desc: "Lüks konut vitrini, değerleme motoru ve dinamik portföy listeleme.",
      url: "https://nova-emlak.vercel.app/",
      domain: "nova-emlak.vercel.app",
    },
    {
      title: "Kocaeli Kelebek Mobilya",
      category: "kurumsal",
      tag: "Mobilya & Mağaza",
      badge: "Kurumsal Paket",
      image: "/images/kocaelikelebek.png",
      desc: "Özel koleksiyon sergileme ve mağaza lokasyon navigasyonu.",
      url: "https://kocaeli-kelebek.vercel.app",
      domain: "kocaeli-kelebek.vercel.app",
    },
    {
      title: "Nova Estetik & Güzellik Merkezi",
      category: "kurumsal",
      tag: "Güzellik & Estetik",
      badge: "Kurumsal Paket",
      image: "/images/guzellik-preview.png",
      desc: "7/24 online randevu takvimi ve SMS teyitli salon rezervasyon sistemi.",
      url: "https://nova-guzellik-phi.vercel.app/",
      domain: "nova-guzellik.vercel.app",
    },
    {
      title: "Antalya'da Nakliyat & Lojistik",
      category: "standart",
      tag: "Nakliyat & Taşıma",
      badge: "Standart Paket",
      image: "/images/nakliyat-preview.png",
      desc: "Sigortalı ve asansörlü ev taşıma için hızlı fiyat alma kiti.",
      url: "https://antalyadanakliyat.com.tr",
      domain: "antalyadanakliyat.com.tr",
    },
    {
      title: "Antalya'da Klima Servisi",
      category: "standart",
      tag: "İklimlendirme & Servis",
      badge: "Standart Paket",
      image: "/images/klima-preview.png",
      desc: "30 dakikada acil servis çağrısı ve kimyasal bakım talep hattı.",
      url: "https://antalyadaklimaservisi.com.tr",
      domain: "antalyadaklimaservisi.com.tr",
    },
    {
      title: "Nova Cafe & Bistro Restoran",
      category: "standart",
      tag: "Restoran & Kafe",
      badge: "Standart Paket",
      image: "/images/restoran.png",
      desc: "Online masa rezervasyon sistemi, dijital QR menü ve anlık sipariş ekranı.",
      url: "https://nova-cafe-one.vercel.app/",
      domain: "nova-cafe.vercel.app",
    },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="portfoy" className="py-16 md:py-24 relative bg-[#0f172a] overflow-hidden">
      {/* Ambient Blue Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Integrated Controls Row */}
        <div ref={ref} className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 ${isVisible ? "reveal-up in-view" : "reveal-up"}`}>
          <div>
            <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-cyan-400 uppercase mb-2">
              Canlı Proje Vitrini
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              <Balancer>
                Sektörünüze Özel <span className="text-shimmer">Canlı Demolar</span>
              </Balancer>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              Hazır şablon değil; her sektöre özel tasarlanmış ve canlıda çalışan gerçek sistemler.
            </p>
          </div>

          {/* Integrated Compact Filter Bar + Arrow Navigation */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold overflow-x-auto no-scrollbar w-full sm:w-auto shrink-0 shadow-lg">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Tümü ({projects.length})
            </button>
            <button
              onClick={() => setFilter("standart")}
              className={`px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === "standart"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Standart
            </button>
            <button
              onClick={() => setFilter("kurumsal")}
              className={`px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === "kurumsal"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Kurumsal
            </button>
            <button
              onClick={() => setFilter("profesyonel")}
              className={`px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === "profesyonel"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Profesyonel
            </button>

            {/* Compact Arrows right beside filter tabs */}
            <div className="flex items-center gap-1 pl-1 ml-auto sm:ml-1 border-l border-slate-800 shrink-0">
              <button
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                aria-label="Önceki"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                aria-label="Sonraki"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Embla Responsive Controlled Snapping with Safari/Browser Mockup Frames */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 py-2">
            {filtered.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-[0_0_88%] sm:flex-[0_0_330px] md:flex-[0_0_350px] bg-[#121c32]/90 rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-700/60 hover:border-cyan-500/50 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* 3. Safari/Browser Mockup Frame Header */}
                <div className="bg-[#0b1222] px-3.5 py-2 border-b border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  {/* Address Bar Simulation */}
                  <div className="flex-1 max-w-[190px] mx-auto px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center gap-1 truncate">
                    <Globe className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{item.domain}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                </div>

                {/* Screenshot Area */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-800/80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 88vw, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1324]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    {/* Pill Badges */}
                    <div className="flex items-center justify-between gap-1.5 mb-2.5 flex-wrap">
                      <span className="bg-blue-500/10 text-cyan-400 border border-blue-500/20 text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                        {item.tag}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/5 text-slate-300 border border-white/10">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors line-clamp-1 mb-1.5">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                    <span>Canlı Demoyu İncele</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
