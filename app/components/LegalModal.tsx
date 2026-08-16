"use client";

import { useState } from "react";
import { X, ShieldCheck, Lock, FileText } from "lucide-react";

export type LegalTab = "kvkk" | "gizlilik" | "cerez";

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onClose: () => void;
  onTabChange: (tab: LegalTab) => void;
}

export default function LegalModal({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl glass-box border border-white/20 bg-[#0B101E]/95 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <h3 className="font-bold text-sm sm:text-base text-white font-mono">
              Yasal Bilgilendirme & KVKK
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 p-2 bg-black/40 border-b border-white/5 overflow-x-auto no-scrollbar shrink-0 text-xs font-semibold">
          <button
            onClick={() => onTabChange("kvkk")}
            className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap ${
              activeTab === "kvkk"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            KVKK Aydınlatma Metni
          </button>
          <button
            onClick={() => onTabChange("gizlilik")}
            className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap ${
              activeTab === "gizlilik"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Gizlilik & Güvenlik
          </button>
          <button
            onClick={() => onTabChange("cerez")}
            className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap ${
              activeTab === "cerez"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Çerez & Hizmet Şartları
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto text-xs text-slate-300 space-y-4 leading-relaxed">
          {activeTab === "kvkk" && (
            <>
              <h4 className="text-sm font-bold text-white mb-2">
                6698 Sayılı KVKK Kapsamında Kişisel Verilerin Korunması Aydınlatma Metni
              </h4>
              <p>
                <strong>Veri Sorumlusu:</strong> Nova Digital Web Tasarım & Yazılım Stüdyosu (Antalya / Türkiye) —{" "}
                <span className="text-blue-400">info@novadigital.com.tr</span>
              </p>
              <p>
                Nova Digital olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla, ziyaretçilerimizin ve müşterilerimizin kişisel verilerini yasal mevzuata tam uyumlu olarak işlemekteyiz.
              </p>
              <div className="space-y-2">
                <h5 className="font-bold text-white">1. İşlenen Kişisel Veriler</h5>
                <p>İletişim ve teklif formlarımız aracılığıyla toplanan ad, soyad, telefon numarası, e-posta adresi ve talep edilen yazılım hizmeti detayları.</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-bold text-white">2. Veri İşleme Amaçları & Hukuki Sebepler</h5>
                <p>
                  Kişisel verileriniz; KVKK m. 5/2-c (sözleşmenin kurulması ve ifası) ve m. 5/2-f (meşru menfaat) uyarınca web tasarım tekliflerinin sunulması, teknik fizibilite analizi yapılması, faturalandırma ve müşteri destek süreçlerinin yürütülmesi amacıyla işlenir.
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="font-bold text-white">3. Verilerin Aktarılması & Haklarınız</h5>
                <p>
                  Kişisel verileriniz asla 3. şahıslara satılmaz veya pazarlama amaçlı devredilmez. KVKK m. 11 kapsamındaki haklarınızı kullanmak için info@novadigital.com.tr adresine başvurabilirsiniz.
                </p>
              </div>
            </>
          )}

          {activeTab === "gizlilik" && (
            <>
              <h4 className="text-sm font-bold text-white mb-2">
                Gizlilik ve Bilgi Güvenliği Politikası
              </h4>
              <div className="space-y-3">
                <p>
                  <strong>1. SSL & Veri Şifreleme:</strong> novadigital.com.tr üzerinden gönderilen tüm form verileri 256-bit SSL güvenlik sertifikası ve TLS şifreleme protokolleri ile korunur.
                </p>
                <p>
                  <strong>2. İstenmeyen İleti (Spam) Yasağı:</strong> 6563 Sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun (ETK) uyarınca, açık onayınız olmadan pazarlama amaçlı toplu SMS veya e-posta gönderimi yapılmaz. Sizinle yalnızca talep ettiğiniz proje teklifi doğrultusunda iletişime geçilir.
                </p>
                <p>
                  <strong>3. Harici Bağlantılar:</strong> Sitede yer alan WhatsApp ve Google Harita gibi harici entegrasyonların gizlilik politikaları ilgili sağlayıcıların kendi sorumluluğundadır.
                </p>
              </div>
            </>
          )}

          {activeTab === "cerez" && (
            <>
              <h4 className="text-sm font-bold text-white mb-2">
                Çerez Politikası ve Hizmet Taahhüt Şartları
              </h4>
              <div className="space-y-3">
                <p>
                  <strong>1. Çerezler (Cookies):</strong> Sitemizde temel işlevler, Google Analytics (GA4) performans ölçümleri ve Meta dönüşüm etiketleri için çerezler kullanılır. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman yönetebilirsiniz.
                </p>
                <p>
                  <strong>2. 48 Saatte Teslimat Şartı:</strong> 48 saatlik teslimat süresi; logo, kurumsal metinler ve gerekli sektör bilgilerinin müşteri tarafından eksiksiz iletilmesi ve ilk konsept onayının verilmesinin ardından başlar.
                </p>
                <p>
                  <strong>3. Ödeme & Fatura:</strong> Proje bedelinin %50'si başlangıçta, kalan %50 bakiye ise canlı test ortamında müşteri onayı alınarak alan adına yayına alınma aşamasında faturalandırılır.
                </p>
                <p>
                  <strong>4. Fikri Mülkiyet (FSEK):</strong> Hazırlanan kaynak kodlar ve tasarım hakları, fatura bedelinin tamamı ödendiği anda süresiz olarak müşteriye devredilmiş sayılır.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-black/40 border-t border-white/10 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="btn-shimmer px-5 py-2 rounded-xl text-xs font-bold text-white"
          >
            Anladım, Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
