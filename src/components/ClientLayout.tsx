"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { AnimationProvider } from "@/context/AnimationContext";
import TransitionOverlay from "@/components/Transition/TransitionOverlay";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <ErrorBoundary>
      <AnimationProvider>
        <TransitionOverlay />
        {children}
        <Analytics />
        <SpeedInsights />
      </AnimationProvider>
    </ErrorBoundary>
  );
}
