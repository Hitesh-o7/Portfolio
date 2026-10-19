"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import styles from "./Preloader.module.css";
import { TypingAnimation } from "@/components/magicui/typing-animation";

// three.js + Rapier (WASM) are ~2.4MB raw; load them after hydration, while the intro animation plays,
// instead of blocking first paint. Also keeps them out of the "/" prefetch done by every header logo link.
const Lanyard = dynamic(() => import("../Card/Lanyard"), { ssr: false });

// Register CustomEase
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

const Preloader = () => {
  const counterRef = useRef<HTMLSpanElement>(null); 

  useEffect(() => {
    // gsap.context collects every tween below so they are killed if the user navigates away mid-intro
    const ctx = gsap.context(() => {
      const customEase = CustomEase.create("custom", ".87,0,.13,1");

      gsap.to(`.${styles.hero}`, {
        clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
        duration: 1.5,
        ease: customEase,
        delay: 1,
      });

      gsap.to(`.${styles.hero}`, { 
        clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
        duration: 2,
        ease: customEase,
        delay: 3,
        onStart: () => {
          gsap.to(`.${styles.progressBar}`, {
            width: "100vw",
            duration: 2,
            ease: customEase,
          });

          gsap.to(counterRef.current, {
            innerHTML: 100,
            duration: 2,
            ease: customEase,
            snap: { innerHTML: 1 },
          });
        },
      });

      gsap.to(`.${styles.hero}`, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: customEase,
        delay: 5,
      });

      gsap.to(`.${styles.progressBar}`, {
        opacity: 0,
        duration: 0.3,
        delay: 5.5,
      });

      gsap.to(`.${styles.header} span`, {
        y: "0%",
        duration: 1,
        stagger: 0.125,
        ease: "power3.out",
        delay: 5.75,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.hero}>
      <div className="h-full w-full  ">
      <div className={styles.progressBar}>
           <TypingAnimation className={styles.typingWrapper}>LOADING</TypingAnimation>
        <p>
          /<span ref={counterRef}>0</span>
        </p> 
      </div>
      </div>
      <div className={styles.header}>
        <h1>
          <span>Creative</span>
        </h1> 
        <h1>
          <span>Designer</span>
        </h1>
        <h1>
          <span>Developer</span>
        </h1>
        <p>
          <span>( Hitesh Thakur )</span>
        </p>
      </div><div className={styles.lanyardAbsolute}>
        <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} />
      </div>
 
    </div>
  );
};

export default Preloader;
