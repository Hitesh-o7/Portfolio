"use client";

import { useEffect, useRef } from "react";

type Props = Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "src"> & { src: string };

// An autoPlay <video> downloads the whole file on page load, even with preload="metadata".
// This one only attaches its src and plays once it scrolls near the viewport, and pauses off-screen.
export default function LazyVideo({ src, ...props }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute("src")) video.src = src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return <video ref={ref} muted loop playsInline preload="none" {...props} />;
}
