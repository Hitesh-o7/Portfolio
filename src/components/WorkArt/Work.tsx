"use client";
import styles from "./style.module.css";
import Image from "next/image";
import TransitionLink from "@/components/Transition/TransitionLink";
import { useRouter } from "next/navigation";
import { performTransitionAndNavigate } from "@/utils/transition";
import { useAnimationContext } from "@/context/AnimationContext";

export default function Work() {
    const router = useRouter();
    const { currentTextColor } = useAnimationContext();
    
    // Two design-led and two engineering-led projects, so the home page speaks to both audiences
    const workItems = [
        {
            src: "/Heart.avif",
            alt: "Heartivity mental well-being website",
            name: "Heartivity",
            url: "/work/heart"
        },
        {
            src: "/projects/Boundary.avif",
            alt: "Boundary Insights IPL analytics dashboard",
            name: "Boundary Insights",
            url: "https://github.com/Hitesh-o7/boundary"
        },
        {
            src: "/Work/Soulscan.avif",
            alt: "SoulScan SaaS platform",
            name: "SoulScan",
            url: "/work/soulscan"
        },
        {
            src: "/Work/PerfumeStore.avif",
            alt: "Perfume Store e-commerce site",
            name: "Perfume Store",
            url: "/work/perfume"
        },
    ];

    return (
        <main className={styles.Main}>
            <div className={styles.title}>WORK OF ART</div>
            <div className={styles.work_container}>
                {workItems.map((work) => (
                    <div
                        key={work.url}
                        className={`${styles.card_wrapper} ${styles.clickable}`}
                        onClick={async () => {
                            if (work.url.startsWith("https://")) {
                                window.open(work.url, '_blank', 'noopener,noreferrer');
                            } else {
                                await performTransitionAndNavigate(router, work.url);
                            }
                        }}
                    >
                        <div className={styles.card}>
                            <div className={styles.image_wrapper}>
                                <Image
                                    src={work.src}
                                    alt={work.alt}
                                    className={styles.work_img}
                                    fill
                                    // two-column grid above 750px (see style.module.css); without this the browser fetches 100vw images
                                    sizes="(max-width: 750px) 100vw, 50vw"
                                    style={{
                                        objectFit: "cover",
                                        willChange: "auto",
                                        transform: "translateZ(0)", // Hardware acceleration for iPad
                                    }}
                                />
                            </div>
                        </div>
                        <div className={styles.title1}>
                            <span className={styles.dashed}>Project Name :</span> {work.name}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                paddingBottom: "100px",
                paddingTop: "50px"
            }}>
                <TransitionLink 
                    href="/work"
                    className={styles.moreProjectsButton}
                    style={{
                        padding: "12px 32px",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: currentTextColor,
                        backgroundColor: "transparent", 
                        borderRadius: "8px",
                        cursor: "pointer",
                        textDecoration: "none",
                        display: "inline-block",
                        transition: "all 0.3s ease",
                        fontFamily: "'Reddit', sans-serif"
                    }} 
                >
                    More Projects
                </TransitionLink>
            </div>
        </main>
    );
}
