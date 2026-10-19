"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
  isParagraph?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 150,
  delay = 0,
  startOnView = false,
  isParagraph = false,
  ...props
}: TypingAnimationProps) {
  // Static motion components: the original called motion.create() during render, which gave React a new
  // component type on every typed letter, so the element was unmounted and remounted each tick
  const MotionComponent = isParagraph ? motion.span : motion.div;

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement & HTMLSpanElement>(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;

    let typingEffect: ReturnType<typeof setInterval> | undefined;
    // Wait for the preloader's opening clip-path animation before typing
    const initialDelay = setTimeout(() => {
      let i = 0;
      typingEffect = setInterval(() => {
        if (i < children.length) {
          setDisplayedText(children.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, duration);
    }, 1550);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "inline-block",
        isParagraph ? "text-base leading-7" : "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
}
