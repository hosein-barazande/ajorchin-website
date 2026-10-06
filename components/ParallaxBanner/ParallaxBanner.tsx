"use client";

import {useEffect, useRef} from "react";
import styles from "./ParallaxBanner.module.css";

export default function ParallaxBanner() {
    const midelRef = useRef<HTMLImageElement>(null);
    const frontRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (!container) return;

                    const scrollY = window.scrollY - container.offsetTop;

                    if (scrollY >= 0 && scrollY <= container.offsetHeight) {
                        const viewportWidth = window.innerWidth;

                        /*
                         * ضریب اصلی در دسکتاپ
                         */
                        const desktopWidth = 1920;

                        /*
                         * ضریب مقیاس بر اساس عرض صفحه
                         * در دسکتاپ = 1
                         * در موبایل کمتر می‌شود
                         */
                        const scale = Math.min(viewportWidth / desktopWidth, 1);

                        /*
                         * حداقل ضریب برای اینکه حرکت در موبایل
                         * بیش از حد کم نشود
                         */
                        const mobileScale = Math.max(scale, 2.5);

                        if (midelRef.current) {
                            midelRef.current.style.transform = `translateY(${-0.1 * scrollY * mobileScale}px)`;
                        }

                        if (frontRef.current) {
                            frontRef.current.style.transform = `translateY(${-0.2 * scrollY * mobileScale}px)`;
                        }
                    }

                    ticking = false;
                });

                ticking = true;
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.addEventListener("scroll", onScroll, {passive: true});
                } else {
                    window.removeEventListener("scroll", onScroll);
                }
            },
            {threshold: 0}
        );

        observer.observe(container);

        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <section ref={containerRef} className={styles.svg_banner}>
            <div className={styles.logoInBanner}>
                <img src="/logo/goldajorchin.svg" alt="Logo" />
            </div>

            <img src="/svgbanner/city_back.svg" alt="back" className={styles.back_banner} />

            <img src="/svgbanner/city_midel.svg" alt="midel" className={styles.midel_banner} ref={midelRef} />

            <img src="/svgbanner/city_front.svg" alt="front" className={styles.front_banner} ref={frontRef} />
        </section>
    );
}

// "use client";
// import { useEffect, useRef } from "react";
// import styles from "./ParallaxBanner.module.css";

// export default function ParallaxBanner() {
//   const midelRef = useRef<HTMLImageElement>(null);
//   const frontRef = useRef<HTMLImageElement>(null);
//   const containerRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     let ticking = false;

//     const onScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           if (!container) return;

//           const scrollY = window.scrollY - container.offsetTop;
//           if (scrollY >= 0 && scrollY <= container.offsetHeight) {
//             if (midelRef.current && frontRef.current) {
//               midelRef.current.style.transform = `translateY(${-0.1 * scrollY}px)`;
//               frontRef.current.style.transform = `translateY(${-0.2 * scrollY}px)`;
//             }
//           }

//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     // فقط وقتی سکشن در دید است، اسکرول را فعال کن
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           window.addEventListener("scroll", onScroll, { passive: true });
//         } else {
//           window.removeEventListener("scroll", onScroll);
//         }
//       },
//       { threshold: 0 } // وقتی حتی یک پیکسل در دید بود فعال شود
//     );

//     observer.observe(container);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <section ref={containerRef} className={styles.svg_banner}>
//       <div className={styles.logoInBanner}>
//         <img src="/logo/goldajorchin.svg" alt="Logo" />
//       </div>
//       <img
//         src="/svgbanner/city_back.svg"
//         alt="back"
//         className={styles.back_banner}
//       />
//       <img
//         src="/svgbanner/city_midel.svg"
//         alt="midel"
//         className={styles.midel_banner}
//         ref={midelRef}
//       />
//       <img
//         src="/svgbanner/city_front.svg"
//         alt="front"
//         className={styles.front_banner}
//         ref={frontRef}
//       />
//     </section>
//   );
// }
