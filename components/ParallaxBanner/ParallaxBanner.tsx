"use client";
import { useEffect, useRef } from "react";
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
            if (midelRef.current && frontRef.current) {
              midelRef.current.style.transform = `translateY(${-0.1 * scrollY}px)`;
              frontRef.current.style.transform = `translateY(${-0.2 * scrollY}px)`;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // فقط وقتی سکشن در دید است، اسکرول را فعال کن
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", onScroll, { passive: true });
        } else {
          window.removeEventListener("scroll", onScroll);
        }
      },
      { threshold: 0 } // وقتی حتی یک پیکسل در دید بود فعال شود
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
      <img
        src="/svgbanner/city_back.svg"
        alt="back"
        className={styles.back_banner}
      />
      <img
        src="/svgbanner/city_midel.svg"
        alt="midel"
        className={styles.midel_banner}
        ref={midelRef}
      />
      <img
        src="/svgbanner/city_front.svg"
        alt="front"
        className={styles.front_banner}
        ref={frontRef}
      />
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

//     const onScroll = () => {
//       const scrollY = window.scrollY;
//       const rect = container.getBoundingClientRect();

//       // فقط وقتی کامپوننت داخل viewport است، transform اعمال شود
//       if (rect.bottom > 0 && rect.top < window.innerHeight) {
//         if (midelRef.current && frontRef.current) {
//           midelRef.current.style.transform = `translateY(${-0.1 * scrollY}px)`;
//           frontRef.current.style.transform = `translateY(${-0.2 * scrollY}px)`;
//         }
//       }
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
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










// "use client";
// import { useEffect, useRef } from "react";
// import styles from "./ParallaxBanner.module.css";

// export default function ParallaxBanner() {
//   const midelRef = useRef<HTMLImageElement>(null);
//   const frontRef = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     let ticking = false;

//     const onScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const scrollY = window.scrollY;

//           if (midelRef.current && frontRef.current && scrollY < 525) {
//             midelRef.current.style.transform = `translateY(${-0.1 * scrollY}px)`;
//             frontRef.current.style.transform = `translateY(${-0.2 * scrollY}px)`;
//           }

//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <section className={styles.svg_banner}>
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



