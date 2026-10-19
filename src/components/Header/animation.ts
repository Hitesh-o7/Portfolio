import { Variants, cubicBezier } from "framer-motion";

const easing = cubicBezier(0.76, 0, 0.24, 1);

export const menuSlide: Variants = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0",
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};
