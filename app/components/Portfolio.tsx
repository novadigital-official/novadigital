"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Balancer from "react-wrap-balancer";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  category: "standart" | "kurumsal" | "profesyonel";
  tag: string;
  badge: string;
  image: string;
  desc: string;
  url: string;
}

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "standart" | "kurumsal" | "profesyonel">("all");
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
      badge: "39.999 TL",
      image: "/images/sacekimi-preview.png",
      desc: "Çok dilli Norwood saç analiz sihirbazı ve medikal turizm dönüşüm altyapısı.",
      url: "https://antalya-dhi.vercel.app",
    },
    {
      title: "Netero Giyim E-Ticaret Mağazası",
      category: "profesyonel",
      tag: "E-Ticaret & İyzico",
      badge: "39.999 TL",
      image: "/images/eticaret-ui-preview.jpg",
      desc: "İyzico 3D güvenli ödeme, anlık stok takibi ve admin yönetim paneli.",
      url: "https://novaeticaret.vercel.app/",
    },
    {
      title: "Antalya'da Tadilat & Villa Renovasyonu",
      category: "kurumsal",
      tag: "Mimarlık & Tadilat",
      badge: "14.999 TL",
      image: "/images/tadilat-preview.jpg",
      desc: "Anahtar teslim villa tadilatı ve 10 saniyede keşif hesaplama sihirbazı.",
      url: "https://antalyadatadilat.com.tr",
    },
    {
      title: "Antalya Epoksi Zemin Kaplama",
      category: "kurumsal",
      tag: "Endüstriyel Zemin",
      badge: "14.999 TL",
      image: "/images/nova-epoksi-preview.jpg",
      desc: "Fabrikalar için epoksi kaplama, m² bütçe sihirbazı ve teklif altyapısı.",
      url: "https://antalyaepoksizemin.com.tr",
    },
    {
      title: "Nova Emlak & Gayrimenkul Portalı",
      category: "kurumsal",
      tag: "Gayrimenkul & Portföy",
      badge: "14.999 TL",
      image: "/images/gayrimenkul-ui-preview.jpg",
      desc: "Lüks konut portföyü, m² değerleme sihirbazı ve dinamik vitrin sistemi.",
      url: "https://nova-emlak.vercel.app/",
    },
    {
      title: "Kocaeli Kelebek Mobilya",
      category: "kurumsal",
      tag: "Mobilya & Mağaza",
      badge: "14.999 TL",
      image: "/images/kocaelikelebek.png",
      desc: "Özel koleksiyon sergileme ve kurumsal mağaza tanıtım sistemi.",
      url: "https://kocaeli-kelebek.vercel.app",
    },
    {
      title: "Nova Estetik & Güzellik Merkezi",
      category: "kurumsal",
      tag: "Güzellik & Estetik",
      badge: "14.999 TL",
      image: "/images/guzellik-preview.png",
      desc: "7/24 online randevu altyapısı ve teyitli salon web altyapısı.",
      url: "https://nova-guzellik-phi.vercel.app/",
    },
    {
      title: "Antalya'da Nakliyat & Lojistik",
      category: "standart",
      tag: "Nakliyat & Taşıma",
      badge: "4.999 TL",
      image: "/images/nakliyat-preview.png",
      desc: "Sigortalı ve asansörlü evden eve nakliyat dönüşüm altyapısı.",
      url: "https://antalyadanakliyat.com.tr",
    },
    {
      title: "Antalya'da Klima Servisi",
      category: "standart",
      tag: "İklimlendirme & Servis",
      badge: "4.999 TL",
      image: "/images/klima-preview.png",
      desc: "30 dakikada acil servis çağrısı ve kimyasal klima bakım altyapısı.",
      url: "https://antalyadaklimaservisi.com.tr",
    },
    {
      title: "Nova Cafe & Bistro Restoran",
      category: "standart",
      tag: "Restoran & Kafe",
      badge: "4.999 TL",
      image: "/images/restoran.png",
      desc: "Online masa rezervasyonu, QR menü ve anlık WhatsApp siparişi.",
      url: "https://nova-cafe-one.vercel.app/",
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
    <section id="portfoy" className="py-12 sm:py-14 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Controls Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              <Balancer>
                Sektörünüze Özel <span className="text-shimmer">Canlı Demolar</span>
              </Balancer>
            </h2>
          </div>

          {/* Categories & Navigation Controls */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filter === "all"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Tümü ({projects.length})
              </button>
              <button
                onClick={() => setFilter("standart")}
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  filter === "standart"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                4.999 TL
              </button>
              <button
                onClick={() => setFilter("kurumsal")}
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  filter === "kurumsal"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                14.999 TL
              </button>
              <button
                onClick={() => setFilter("profesyonel")}
                className={`px-2.5 py-1.5 rounded-lg transition-all ${
                  filter === "profesyonel"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                39.999 TL
              </button>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                aria-label="Önceki"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition active:scale-95 border border-white/10 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                aria-label="Sonraki"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition active:scale-95 border border-white/10 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Embla Responsive Controlled Snapping */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 py-2">
            {filtered.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-[0_0_86%] sm:flex-[0_0_320px] md:flex-[0_0_340px] glass-box overflow-hidden flex flex-col justify-between"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-white/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 86vw, 340px"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-bold text-white border border-white/10 shadow-md flex items-center gap-1">
                    <span>Test Et</span>
                    <ExternalLink className="w-2.5 h-2.5 text-blue-400" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-1.5 mb-2">
                      <span className="text-[11px] font-medium text-slate-400">
                        {item.tag}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 text-blue-300 border border-white/10">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-snug line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-blue-400">
                    <span>Siteyi Canlı İncele</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
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
