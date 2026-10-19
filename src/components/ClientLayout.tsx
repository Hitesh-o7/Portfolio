"use client";

import { useEffect } from "react";
import Lenis from "lenis";
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
    // autoRaf drives the animation loop internally and stops it on destroy()
    const lenis = new Lenis({
      lerp: 0.1,
      autoRaf: true,
    });

    return () => {
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
