"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Only enable Lenis smooth scroll on non-touch desktop devices to avoid locking mobile touch scrolling
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 1024;

    if (isTouchDevice) {
      return; // Use native mobile 120Hz touch scrolling
    }

    let lenis: any = null;
    let rafId: number;

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
      });

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      }

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
