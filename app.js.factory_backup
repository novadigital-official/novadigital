/* ═══════════════════════════════════════════════════════════════
   NOVA DIGITAL — APP.JS (SAFE PRODUCTION ENGINE)
   ═══════════════════════════════════════════════════════════════ */

// ─── SAFE CONFIG FALLBACK GUARD ──────────────────────────────
if (typeof SITE_CONFIG === 'undefined') {
    window.SITE_CONFIG = {
        firma: {
            ad: "Nova Digital",
            eposta: "info@novadigital.com.tr",
            telefon: "+90 507 087 17 89"
        },
        whatsapp: {
            numara: "905070871789",
            mesaj: "Merhaba, Nova Digital hizmetleriniz hakkında bilgi almak istiyorum."
        }
    };
    console.warn('config.js loading fallback activated.');
}

// ─── UPCOMING TOAST NOTIFICATION ────────────────────────────
window.showUpcomingToast = function(e, title) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    let toast = document.getElementById('upcomingToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'upcomingToast';
        toast.style.cssText = 'position:fixed; bottom:28px; left:50%; transform:translateX(-50%) translateY(20px); opacity:0; visibility:hidden; background:#0F172A; color:#FFFFFF; padding:14px 28px; border-radius:14px; font-weight:700; font-size:0.92rem; z-index:99999; box-shadow:0 12px 36px rgba(0,0,0,0.3); transition:all 0.35s cubic-bezier(0.16,1,0.3,1); display:flex; align-items:center; gap:10px; border:1px solid rgba(255,255,255,0.2); font-family:inherit; pointer-events:none;';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-rocket" style="color:#60A5FA; font-size:1.1rem;"></i> <span><strong>${title} Demomuz</strong> Çok Yakında Hizmetinizde!</span>`;
    requestAnimationFrame(() => {
        toast.style.visibility = 'visible';
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    clearTimeout(window._upcomingToastTimer);
    window._upcomingToastTimer = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => {
            toast.style.visibility = 'hidden';
        }, 350);
    }, 2000);
};

document.addEventListener('DOMContentLoaded', () => {


    // ─── Preloader (Bekleme Ekranı) ──────────────────────────
    const preloader = document.getElementById('preloader');
    if (preloader) {
        const hidePreloader = () => {
            preloader.classList.add('fade-out');
            setTimeout(() => preloader.remove(), 400);
        };
        window.addEventListener('load', hidePreloader);
        setTimeout(hidePreloader, 1000); // Max 1sn bekleme koruması
    }

    // ─── WhatsApp Linklerini Config'den Oluştur ──────────────
    const wpUrl = `https://wa.me/${SITE_CONFIG.whatsapp.numara}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.mesaj)}`;

    const wpElements = ['whatsappFab', 'whatsappCta', 'contactWhatsapp', 'footerWhatsapp'];
    wpElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = wpUrl;
            el.target = '_blank';
            el.rel = 'noopener noreferrer';
        }
    });

    // E-posta linkini config'den al
    const emailEl = document.getElementById('contactEmail');
    if (emailEl) {
        emailEl.href = `mailto:${SITE_CONFIG.firma.eposta}`;
        emailEl.textContent = SITE_CONFIG.firma.eposta;
    }

    // ─── Paket CTA → iletişim formunda hizmet + mesaj ön seçimi ──────
    const packagePrefillMessages = {
        baslangic: 'Başlangıç Web Sitesi (4.999 TL) hakkında bilgi almak istiyorum.',
        kurumsal:  'Kurumsal Web Sistemi (14.999 TL) detaylarını incelemek istiyorum.',
        premium:   'Premium Dijital Sistem için projemizi konuşmak istiyorum.',
    };

    document.querySelectorAll('[data-package]').forEach(cta => {
        cta.addEventListener('click', () => {
            const packageKey = cta.getAttribute('data-package');
            const serviceSelect = document.getElementById('formService');
            const messageField = document.getElementById('formMessage');
            if (serviceSelect && packageKey) {
                const option = serviceSelect.querySelector(`option[value="${packageKey}"]`);
                if (option) serviceSelect.value = packageKey;
            }
            if (messageField && packagePrefillMessages[packageKey]) {
                const current = (messageField.value || '').trim();
                const isEmptyOrPrefill = !current || Object.values(packagePrefillMessages).includes(current);
                if (isEmptyOrPrefill) {
                    messageField.value = packagePrefillMessages[packageKey];
                }
            }
        });
    });

    // ─── Kimler için? metin tetikleyici → panel ───────────────
    const audienceRoots = document.querySelectorAll('.pricing-audience');

    const closeAudiencePanel = (root) => {
        const btn = root.querySelector('.pricing-audience-btn');
        const panel = root.querySelector('.pricing-audience-panel');
        if (!btn || !panel) return;
        btn.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
        root.classList.remove('is-open');
    };

    const closeAllAudiencePanels = (exceptRoot = null) => {
        audienceRoots.forEach((root) => {
            if (root !== exceptRoot) closeAudiencePanel(root);
        });
    };

    audienceRoots.forEach((root) => {
        const btn = root.querySelector('.pricing-audience-btn');
        const panel = root.querySelector('.pricing-audience-panel');
        if (!btn || !panel) return;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const willOpen = btn.getAttribute('aria-expanded') !== 'true';
            closeAllAudiencePanels(willOpen ? root : null);
            if (willOpen) {
                btn.setAttribute('aria-expanded', 'true');
                panel.hidden = false;
                root.classList.add('is-open');
            } else {
                closeAudiencePanel(root);
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.pricing-audience')) {
            closeAllAudiencePanels();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllAudiencePanels();
    });


    // ─── Mobil Menü Drawer ───────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    const closeMobileMenu = () => {
        if (hamburger) hamburger.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    const openMobileMenu = () => {
        if (hamburger) hamburger.classList.add('active');
        if (mobileMenu) mobileMenu.classList.add('active');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = mobileMenu.classList.contains('active');
            if (isActive) closeMobileMenu();
            else openMobileMenu();
        });
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenu) {
        // Menü içi linkler tıklanınca kapat
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // ESC tuşuna basılınca kapat
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }


    // ─── Nav Scroll Efekti ───────────────────────────────────
    const siteNav = document.getElementById('siteNav');

    if (siteNav) {
        let lastScroll = 0;
        const onScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                siteNav.classList.add('scrolled');
            } else {
                siteNav.classList.remove('scrolled');
            }
            lastScroll = scrollY;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }


    // ─── Smooth Scroll (Anchor Links) ────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = siteNav ? siteNav.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });


    // ─── Scroll Reveal (IntersectionObserver) ────────────────
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback: Observer yoksa hepsini göster
        revealElements.forEach(el => el.classList.add('visible'));
    }


    // ─── Portfolio Filter ────────────────────────────────────
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            portfolioCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                    // Re-trigger reveal
                    setTimeout(() => card.classList.add('visible'), 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });


    // ─── ScrollSpy (Sayfa Kaydırıldıkça Menü Vurgulama) ─────
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    if (sections.length > 0 && navLinks.length > 0 && 'IntersectionObserver' in window) {
        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(sec => spyObserver.observe(sec));
    }


    // ─── İletişim Formu ──────────────────────────────────────
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Girdi yapılınca hatayı kaldır
        contactForm.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('input', () => input.classList.remove('invalid'));
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('formName');
            const phone = document.getElementById('formPhone');

            let isValid = true;

            if (!name.value.trim() || name.value.trim().length < 2) {
                name.classList.add('invalid');
                name.focus();
                isValid = false;
            }

            const cleanPhone = phone.value.replace(/\D/g, '');
            if (!phone.value.trim() || cleanPhone.length < 10) {
                phone.classList.add('invalid');
                if (isValid) phone.focus();
                isValid = false;
            }

            if (!isValid) return;

            // WhatsApp'a yönlendir (form verilerini mesaja ekle)
            const service = document.getElementById('formService');
            const business = document.getElementById('formBusiness');
            const message = document.getElementById('formMessage');

            let wpMessage = `Merhaba, Nova Digital üzerinden iletişime geçiyorum.\n\n`;
            wpMessage += `Ad: ${name.value.trim()}\n`;
            if (business && business.value.trim()) wpMessage += `İşletme: ${business.value.trim()}\n`;
            wpMessage += `Telefon: ${phone.value.trim()}\n`;
            if (service && service.value && service.options?.[service.selectedIndex]) {
                wpMessage += `Hizmet: ${service.options[service.selectedIndex].text}\n`;
            }
            if (message && message.value.trim()) wpMessage += `\nMesaj: ${message.value.trim()}`;

            const formWpUrl = `https://wa.me/${SITE_CONFIG.whatsapp.numara}?text=${encodeURIComponent(wpMessage)}`;
            window.open(formWpUrl, '_blank', 'noopener,noreferrer');

            // Formu temizle
            contactForm.reset();
        });
    }



                // ─── Horizontal Portfolio Carousel (Strict Hold & Drag, Immediate Release Lock) ───
    const track = document.getElementById('portfolioTrack');
    const prevBtn = document.getElementById('portfolioPrev');
    const nextBtn = document.getElementById('portfolioNext');
    const dots = document.querySelectorAll('.carousel-dot');

    if (track && prevBtn && nextBtn) {
        const getSlideWidth = () => {
            const slide = track.querySelector('.portfolio-slide');
            return slide ? slide.offsetWidth + 24 : 340;
        };

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            track.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            track.scrollBy({ left: getSlideWidth(), behavior: 'smooth' });
        });

        // Indicators update
        track.addEventListener('scroll', () => {
            const index = Math.round(track.scrollLeft / getSlideWidth());
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }, { passive: true });

        // Strict Hold-and-Drag Logic
        let isDragging = false;
        let startX = 0;
        let startScrollLeft = 0;
        let hasMoved = false;

                const stopDrag = () => {
            if (!isDragging) return;
            isDragging = false;
            track.classList.remove('dragging');

            // Eğer kullanıcı gerçekten sürüklemediyse (sadece tıkladıysa) karuseli hareket ettirme!
            if (hasMoved) {
                track.style.scrollSnapType = 'x mandatory';
                track.style.scrollBehavior = 'smooth';
                const nearestIndex = Math.round(track.scrollLeft / getSlideWidth());
                track.scrollTo({ left: nearestIndex * getSlideWidth(), behavior: 'smooth' });
            } else {
                track.style.scrollSnapType = 'x mandatory';
                track.style.scrollBehavior = 'smooth';
            }
        };

        const startDrag = (pageX) => {
            isDragging = true;
            hasMoved = false;
            track.classList.add('dragging');
            track.style.scrollSnapType = 'none';
            track.style.scrollBehavior = 'auto';
            startX = pageX - track.offsetLeft;
            startScrollLeft = track.scrollLeft;
        };

        const moveDrag = (pageX) => {
            if (!isDragging) return;
            const x = pageX - track.offsetLeft;
            const distance = (x - startX);
            if (Math.abs(distance) > 4) {
                hasMoved = true;
                track.scrollLeft = startScrollLeft - distance;
            }
        };

                // Touch Events: Mobilde tamamen yerel CSS 60fps swipe bırakan temiz mantık
        const isMobileDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

        if (!isMobileDevice) {
            track.addEventListener('mousedown', (e) => {
                if (e.button !== 0) return;
                startDrag(e.pageX);
            });
            track.addEventListener('mouseleave', stopDrag);
            track.addEventListener('mouseup', stopDrag);
            track.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    e.preventDefault();
                    moveDrag(e.pageX);
                }
            });
        }

        track.addEventListener('touchend', stopDrag, { passive: true });
        track.addEventListener('touchcancel', stopDrag, { passive: true });
        track.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches.length === 1) {
                moveDrag(e.touches[0].pageX);
            }
        }, { passive: true });

        // Link Tıklama Koruması: Sadece sürükleme yoksa link açılır
        track.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (hasMoved) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                track.scrollTo({ left: i * getSlideWidth(), behavior: 'smooth' });
            });
        });
    }

    // ─── Blog Article Reader Modal ───────────────────────────
    const blogModal = document.getElementById('blogModal');
    const blogModalClose = document.getElementById('blogModalClose');
    const blogModalBody = document.getElementById('blogModalBody');
    const blogBtns = document.querySelectorAll('.open-blog-btn');

    const articlesData = {
        fiyatlar: {
            badge: "2026 Web Rehberi",
            title: "2026 Web Sitesi Fiyatları Rehberi",
            html: `
                <p>İşletmeniz için bir web sitesi yaptırırken karşılaştığınız fiyat farkları kafa karıştırıcı olabilir. 4.000 TL'den başlayıp 100.000 TL'ye kadar çıkan bu skalada doğru kararı nasıl vermelisiniz?</p>
                <p><strong>Bütçenizi Belirlerken Dikkat Etmeniz Gereken 3 Temel Kriter:</strong></p>
                <ul>
                    <li><strong>Altyapı ve Lisans Maliyeti:</strong> SSL sertifikası, alan adı ve yüksek hızlı sunucu dahiliyeti.</li>
                    <li><strong>Mobil & SEO Uyumluluğu:</strong> Web sitenizin Google arama sonuçlarında üst sıralara çıkması için gerekli kodlama kalitesi.</li>
                    <li><strong>Yönetim Paneli Kolaylığı:</strong> İçeriklerinizi ve ürünlerinizi kendinizin kolayca güncelleyebilmesi.</li>
                </ul>
                <p>Nova Digital olarak <strong>Başlangıç Web Sitesini 4.999 TL</strong>, <strong>Kurumsal Web Sistemini 14.999 TL</strong>, <strong>Premium Dijital Sistemi ise 39.999 TL</strong> olarak şeffaf fiyatlandırma politikasıyla sunuyoruz.</p>
                <div class="blog-article-cta">
                    <span>Siteniz için hemen teklif almak ister misiniz?</span>
                    <a href="#iletisim" onclick="document.getElementById('blogModal').classList.remove('active');" class="btn btn-primary btn-sm">Teklif Al</a>
                </div>
            `
        },
        turizm: {
            badge: "Turizm & Otel SEO",
            title: "Turizm & Otel Web Sitesi Nasıl Yapılmalı?",
            html: `
                <p>Otel ve konaklama tesisleri için web sitesi sadece bir tanıtım aracı değil, komisyonsuz doğrudan rezervasyon getiren bir satış kanalıdır.</p>
                <p><strong>Başarılı Bir Otel Web Sitesinin 4 Olmazsa Olmazı:</strong></p>
                <ul>
                    <li><strong>Çok Dilli Altyapı:</strong> Türkçe, İngilizce, Almanca ve Rusça dil seçenekleri.</li>
                    <li><strong>Yüksek Çözünürlüklü Oda Galerileri:</strong> Misafirlerin odaları ve tesis imkanlarını saniyeler içinde keşfetmesi.</li>
                    <li><strong>Hızlı WhatsApp / Rezervasyon Yönlendirmesi:</strong> Acentelere komisyon ödemeden doğrudan müşteriyle iletişim kurma.</li>
                    <li><strong>Google Harita ve Konum Entegrasyonu:</strong> Tesisin ulaşım kolaylığını net şekilde gösterme.</li>
                </ul>
                <p>Nova Digital kurumsal otel web altyapıları ile tesisinizin doluluk oranını doğrudan dijitalden artırıyoruz.</p>
                <div class="blog-article-cta">
                    <span>Oteliniz için profesyonel web altyapısını konuşalım:</span>
                    <a href="#iletisim" onclick="document.getElementById('blogModal').classList.remove('active');" class="btn btn-primary btn-sm">Projenizi Konuşalım</a>
                </div>
            `
        },
        reklam: {
            badge: "Google Ads & Meta Rehberi",
            title: "Google Ads ile Müşteri Kazanma Yolları",
            html: `
                <p>Dijital reklamcılıkta en büyük hata, bütçeyi doğru hedef kitleye ulaştırmadan harcamaktır. Google Ads reklamları ile doğrudan ürün ve hizmetinizi arayan müşterilere ulaşırsınız.</p>
                <p><strong>Reklam Bütçenizi Katlayan 3 Önemli Strateji:</strong></p>
                <ul>
                    <li><strong>Negatif Anahtar Kelime Kullanımı:</strong> Gereksiz aramalarda reklamınızın çıkmasını engelleyerek bütçenizi korur.</li>
                    <li><strong>Açılış Sayfası (Landing Page) Uyumu:</strong> Reklama tıklayan müşterinin aradığı cevabı saniyeler içinde bulması dönüşümü %300 artırır.</li>
                    <li><strong>WhatsApp ve Arama Dönüşüm Takibi:</strong> Hangi kelimeden kaç telefon geldiğini ölçerek bütçeyi kazandıran kelimelere aktarma.</li>
                </ul>
                <p>Nova Digital reklam yönetimi hizmetimizle bütçenizi boşa harcamadan dönüşüm odaklı kampanyalar kurguluyoruz.</p>
                <div class="blog-article-cta">
                    <span>Reklam bütçenizi büyütmek için ücretsiz analiz isteyin:</span>
                    <a href="#iletisim" onclick="document.getElementById('blogModal').classList.remove('active');" class="btn btn-primary btn-sm">Ücretsiz Analiz Al</a>
                </div>
            `
        }
    };

    if (blogModal && blogModalClose) {
        blogBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const key = btn.getAttribute('data-article');
                const article = articlesData[key];
                if (article) {
                    blogModalBody.innerHTML = `
                        <span class="article-badge">${article.badge}</span>
                        <h2>${article.title}</h2>
                        ${article.html}
                    `;
                    blogModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeBlogModal = () => {
            blogModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        blogModalClose.addEventListener('click', closeBlogModal);
        blogModal.addEventListener('click', (e) => {
            if (e.target === blogModal) closeBlogModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && blogModal.classList.contains('active')) {
                closeBlogModal();
            }
        });
    }
});
// ─── HERO INTERACTIVE SECTOR SWITCHER ─────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const sectorPills = document.querySelectorAll('.sector-pill');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    const sectorTexts = {
        'restoran': 'Restoranınız için sipariş ve online masa rezervasyonunu anında başlatan dijital vitrin.',
        'guzellik': 'Danışanlarınızın 7/24 randevu alabildiği ve hizmet paketi incelediği şık salon altyapısı.',
        'emlak': 'Gayrimenkul ilanlarınızı doğrudan WhatsApp teklifine dönüştüren hızlı portföy altyapısı.',
        'klinik': 'Hastalarınızın güvenle danışmanlık ve online randevu talep ettiği sağlık altyapısı.',
        'otel': 'Acentelere komisyon ödemeden doğrudan misafir çeken konaklama ve oda altyapısı.',
        'eticaret': '7/24 kesintisiz ödeme alan ve stok takibi yapan online satış mağazası.'
    };

    sectorPills.forEach(pill => {
        pill.addEventListener('click', () => {
            sectorPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const sector = pill.getAttribute('data-sector');
            if (heroSubtitle && sectorTexts[sector]) {
                heroSubtitle.textContent = sectorTexts[sector];
            }
        });
    
    // ─── SIGNATURE INTERACTION LOGIC — 2026-08-06 ─────────────

    // 1. Hero Blur-To-Focus Title Activation
    const heroH1 = document.querySelector('.hero-content h1');
    if (heroH1) {
        heroH1.classList.add('hero-title-blur-focus');
    }

    // 2. Magnetic Button Effect (Desktop Only)
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isTouchDevice && !prefersReducedMotion) {
        const magneticBtns = document.querySelectorAll('.btn-primary, .hero-cta-group .btn');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const btnCenterX = rect.left + rect.width / 2;
                const btnCenterY = rect.top + rect.height / 2;
                const deltaX = (e.clientX - btnCenterX) * 0.25;
                const deltaY = (e.clientY - btnCenterY) * 0.25;
                const maxMove = 7;
                const moveX = Math.max(-maxMove, Math.min(maxMove, deltaX));
                const moveY = Math.max(-maxMove, Math.min(maxMove, deltaY));
                btn.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate3d(0, 0, 0)';
            });
        });
    }

    // 3. Animated Number Counter
    const statNumbers = document.querySelectorAll('.stat-number, .trust-number, [data-count]');
    if (statNumbers.length > 0) {
        const animateCount = (el) => {
            const target = parseFloat(el.getAttribute('data-count') || el.textContent.replace(/[^0-9.]/g, ''));
            if (isNaN(target)) return;
            const duration = 1500;
            const start = 0;
            const startTime = performance.now();
            const suffix = el.textContent.replace(/[0-9.]/g, '');

            const updateNumber = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuad = progress * (2 - progress);
                const currentVal = Math.floor(start + (target - start) * easeOutQuad);
                el.textContent = currentVal + suffix;
                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                }
            };
            requestAnimationFrame(updateNumber);
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(num => counterObserver.observe(num));
    }
});

    // ─── CREATIVE LAYER LOGIC — 2026-08-06 ─────────────────────

    // 1. Top Scroll Progress Bar Update
    const progressBar = document.getElementById('scrollProgressBar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        }, { passive: true });
    }

    // 2. Hero Interactive Parallax Mesh Movement
    const heroMesh = document.getElementById('heroMeshBg');
    const heroSectionEl = document.querySelector('.hero-section');
    const isTouchDev = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (heroMesh && heroSectionEl && !isTouchDev) {
        heroSectionEl.addEventListener('mousemove', (e) => {
            const rect = heroSectionEl.getBoundingClientRect();
            const moveX = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
            const moveY = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
            heroMesh.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });

        heroSectionEl.addEventListener('mouseleave', () => {
            heroMesh.style.transform = 'translate3d(0, 0, 0)';
        });
    }


    // ─── CREATIVE IDENTITY LOGIC — 2026-08-06 ──────────────────

    // 2. Contact Form Micro-Success Animation State Intercept with Strict Validation
    const contactFormEl = document.getElementById('contactForm');
    if (contactFormEl) {
        contactFormEl.addEventListener('submit', (e) => {
            // Check native HTML5 validity
            if (!contactFormEl.checkValidity()) {
                e.preventDefault();
                contactFormEl.reportValidity();
                return;
            }

            // Check KVKK consent checkbox
            const kvkkConsent = document.getElementById('formKvkkConsent');
            if (kvkkConsent && !kvkkConsent.checked) {
                e.preventDefault();
                alert('Lütfen devam etmek için KVKK Onay Kutusu\'nu işaretleyiniz.');
                return;
            }

            e.preventDefault();

            // Format WhatsApp Message
            const name = document.getElementById('formName')?.value || '';
            const business = document.getElementById('formBusiness')?.value || '';
            const phone = document.getElementById('formPhone')?.value || '';
            const service = document.getElementById('formService')?.value || 'Genel';
            const message = document.getElementById('formMessage')?.value || '';

            const waText = `Merhaba Nova Digital, sitemizden yeni bir teklif talebi geldi:%0A%0A👤 Ad Soyad: ${encodeURIComponent(name)}%0A🏢 Firma: ${encodeURIComponent(business)}%0A📞 Telefon: ${encodeURIComponent(phone)}%0A💼 Hizmet: ${encodeURIComponent(service)}%0A💬 Mesaj: ${encodeURIComponent(message)}`;
            const waUrl = `https://wa.me/${SITE_CONFIG.company.whatsappRaw}?text=${waText}`;

            // Open WhatsApp in new tab
            window.open(waUrl, '_blank');

            // Render clean success state inside form
            contactFormEl.innerHTML = `
                <div class="form-success-state" style="padding: 40px 20px; text-align: center; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.04);">
                    <div class="form-success-icon" style="width: 56px; height: 56px; background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #10B981; font-size: 1.5rem;">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <h3 style="font-size: 1.25rem; font-weight: 700; color: #0F172A; margin-bottom: 8px;">Talebiniz Alındı!</h3>
                    <p style="font-size: 0.9rem; color: #64748B; line-height: 1.5; margin: 0;">WhatsApp üzerinden yönlendirildiniz. Ekibimiz 15 dakika içinde sizinle iletişime geçecektir.</p>
                </div>
            `;
        });
    }


    // ─── AURORA & TRUST LOGIC — 2026-08-06 ─────────────────────

    // Animated Live Counter for Trust Strip
    const liveCounters = document.querySelectorAll('.stat-number');
    if (liveCounters.length > 0) {
        const runCounter = (el) => {
            const targetVal = parseFloat(el.getAttribute('data-count'));
            if (isNaN(targetVal)) return;
            const duration = 1600;
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuad = progress * (2 - progress);
                const current = Math.floor(targetVal * easeOutQuad);
                el.textContent = current;
                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    el.textContent = targetVal;
                }
            };
            requestAnimationFrame(updateCount);
        };

        const trustObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
    }

    // ─── HIGH CONVERSION EVENT TRACKING ENGINE (GA4, GTM, Ads, Meta) ─
    window.trackEvent = function(eventName, eventParams = {}) {
        console.log('[Analytics Engine] Event:', eventName, eventParams);

        // 1. Google Analytics 4 (GA4) & Google Ads
        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, eventParams);
        }

        // 2. Google Tag Manager (GTM DataLayer)
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: eventName,
            ...eventParams
        });

        // 3. Meta Pixel (Facebook & Instagram Ads)
        if (typeof window.fbq === 'function') {
            window.fbq('trackCustom', eventName, eventParams);
        }
    };

    // Track WhatsApp, Phone, Package & Demo Clicks
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href') || '';
        const id = link.id || '';

        // WhatsApp Clicks (click_whatsapp)
        if (id.includes('whatsapp') || href.includes('wa.me') || href.includes('whatsapp.com')) {
            window.trackEvent('click_whatsapp', {
                location: id || 'body_whatsapp_link',
                href: href
            });
        }

        // Phone Call Clicks (phone_call)
        if (href.startsWith('tel:')) {
            window.trackEvent('phone_call', {
                phone_number: href
            });
        }

        // Package Clicks (click_package)
        const packageAttr = link.getAttribute('data-package') || link.closest('[data-package]')?.getAttribute('data-package');
        if (packageAttr) {
            window.trackEvent('click_package', {
                package_id: packageAttr
            });
        }

        // Portfolio Demo Clicks (click_demo)
        if (link.classList.contains('portfolio-card') || href.includes('vercel.app')) {
            const demoTitle = link.querySelector('h3')?.innerText || 'Demo Link';
            window.trackEvent('click_demo', {
                demo_title: demoTitle,
                demo_url: href
            });
        }
    });

    // Track Form Submissions (form_submit & Google Ads Conversion)
    if (contactFormEl) {
        contactFormEl.addEventListener('submit', () => {
            const selectedService = document.getElementById('formService')?.value || 'Genel';
            window.trackEvent('form_submit', {
                form_id: 'contactForm',
                service: selectedService
            });

            // Google Ads Conversion Specific Event
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                    'send_to': SITE_CONFIG.tracking.googleAdsConversionId
                });
            }
        });
    }

    // ─── LIGHTWEIGHT DESKTOP HERO MOUSE SPOTLIGHT (ZERO LAG) ──────
    if (window.innerWidth >= 993) {
        const heroEl = document.getElementById('hero');
        if (heroEl) {
            const spotlight = document.createElement('div');
            spotlight.className = 'hero-mouse-spotlight';
            heroEl.appendChild(spotlight);

            let ticking = false;
            heroEl.addEventListener('mousemove', (e) => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        const rect = heroEl.getBoundingClientRect();
                        spotlight.style.left = `${e.clientX - rect.left}px`;
                        spotlight.style.top = `${e.clientY - rect.top}px`;
                        ticking = false;
                    });
                    ticking = true;
                }
            });
        }
    }
    // ─── ÇEREZ YÖNETİMİ & HUKUKİ MODAL ENTEGRASYONU ─────────────
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');

    if (cookieBanner && !localStorage.getItem('nova_cookie_consent')) {
        setTimeout(() => {
            cookieBanner.style.display = 'block';
        }, 1200);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('nova_cookie_consent', 'accepted');
            cookieBanner.style.display = 'none';
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            localStorage.setItem('nova_cookie_consent', 'essential_only');
            cookieBanner.style.display = 'none';
        });
    }

});

// ─── HUKUKİ METİNLER DİNAMİK MODAL AÇMA FONKSİYONU ──────────────────
window.openLegalModal = function(type) {
    const modal = document.getElementById('blogModal');
    const modalBody = document.getElementById('blogModalBody');
    if (!modal || !modalBody) return;

    let content = '';

    if (type === 'kvkk') {
        content = `
            <h2>6698 Sayılı KVKK Aydınlatma Metni</h2>
            <p><strong>Veri Sorumlusu:</strong> Nova Digital Yazılım & Dijital Pazarlama ("Nova Digital")</p>
            <p>Nova Digital olarak kişisel verilerinizin güvenliğine ve gizliliğine azami önem veriyoruz. 6698 Sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") m. 10 uyarınca sizleri bilgilendiriyoruz.</p>
            <h3>1. İşlenen Kişisel Verileriniz ve İşleme Amaçları</h3>
            <p>İletişim formlarımız ve hizmet talepleriniz kapsamında toplanan Ad-Soyad, Telefon Numarası, E-posta Adresi ve Firma Bilgileri;</p>
            <ul>
                <li>Sizlerle iletişim kurulması ve hizmet tekliflerinin iletilmesi,</li>
                <li>Müşteri ilişkileri süreçlerinin yürütülmesi,</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.</li>
            </ul>
            <h3>2. Kişisel Verilerin Aktarımı</h3>
            <p>Verileriniz, yasal zorunluluklar saklı kalmak kaydıyla 3. şahıslarla paylaşılmamaktadır.</p>
            <h3>3. KVKK m. 11 Kapsamındaki Haklarınız</h3>
            <p>Veri sahibi olarak info@novadigital.com.tr adresine başvurarak verilerinizin işlenip işlenmediğini öğrenme, silinmesini veya düzeltilmesini talep etme hakkına sahipsiniz.</p>
        `;
    } else if (type === 'privacy') {
        content = `
            <h2>Gizlilik Politikası</h2>
            <p>Nova Digital, kullanıcılarının gizlilik haklarını korumayı taahhüt eder. Bu politika, sitemizi ziyaret ettiğinizde toplanan bilgilerin nasıl kullanıldığını açıklar.</p>
            <h3>1. Bilgi Toplama ve Kullanım</h3>
            <p>Sitemizde doldurulan iletişim formları vasıtasıyla sağladığınız kişisel bilgiler, yalnızca hizmet taleplerinize yanıt vermek ve sözleşmesel süreçleri yürütmek için kullanılır.</p>
            <h3>2. Veri Güvenliği</h3>
            <p>Verileriniz endüstri standardı SSL şifreleme ve güvenli sunucu altyapıları ile korunmaktadır.</p>
        `;
    } else if (type === 'cookies') {
        content = `
            <h2>Çerez (Cookie) Politikası</h2>
            <p>Nova Digital web sitesinde kullanıcı deneyimini artırmak ve performans analizi yapmak amacıyla çerezler kullanılmaktadır.</p>
            <h3>1. Kullanılan Çerez Türleri</h3>
            <ul>
                <li><strong>Zorunlu Çerezler:</strong> Sitenin temel fonksiyonlarının çalışması için gereklidir.</li>
                <li><strong>Analitik Çerezler:</strong> Ziyaretçi trafiğini ve davranışlarını anonim olarak ölçümler.</li>
            </ul>
            <p>Tarayıcı ayarlarınız üzerinden dilediğiniz zaman çerezleri engelleyebilirsiniz.</p>
        `;
    } else if (type === 'disclaimer') {
        content = `
            <h2>Yasal Uyarı & Telif Hakkı (FSEK) Beyanı</h2>
            <p><strong>5846 Sayılı Fikir ve Sanat Eserleri Kanunu Uyarınca İkaz:</strong></p>
            <p>Bu web sitesinde yer alan tüm yazılım kodları, arayüz tasarımları, grafikler, metinler ve kurumsal materyaller Nova Digital'in mülkiyetindedir.</p>
            <p>Yazılı izin olmaksızın kopyalanması, dağıtılması veya başka mecralarda kullanılması durumunda FSEK m. 71 uyarınca yasal ve cezai işlem başlatılacaktır.</p>
        `;
    }

    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

// ─── STANDALONE PORTFOLIO CATEGORY FILTERING (STANDART / KURUMSAL / PROFESYONEL) ───
function initPortfolioFilterBar() {
    const filterBar = document.getElementById('portfolioFilterBar');
    if (!filterBar) return;

    const filterBtns = filterBar.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const targetCat = btn.getAttribute('data-filter');
            if (!targetCat) return;

            // Reset active state for all buttons and activate clicked button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter all slides strictly to selected category
            const allSlides = document.querySelectorAll('#portfolioTrack .portfolio-slide');
            allSlides.forEach(slide => {
                const slideCat = slide.getAttribute('data-category');
                if (slideCat === targetCat) {
                    slide.style.setProperty('display', 'flex', 'important');
                    slide.classList.remove('hidden-slide');
                } else {
                    slide.style.setProperty('display', 'none', 'important');
                    slide.classList.add('hidden-slide');
                }
            });

            // Scroll back to track origin
            const trackEl = document.getElementById('portfolioTrack');
            if (trackEl) {
                trackEl.scrollTo({ left: 0, behavior: 'smooth' });
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolioFilterBar);
} else {
    initPortfolioFilterBar();
}



