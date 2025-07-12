// useSectionObserver.js
import { useEffect, useRef } from "react";
import { useSection } from './ScrollContext';

export const useScrollObserver = (sectionName) => {
  const ref = useRef(null);
  const { setActiveSection } = useSection();

  useEffect(() => {
    // const observer = new IntersectionObserver(
    //   ([entry]) => {
    //     if (entry.isIntersecting) {
    //       setActiveSection(sectionName);
    //       console.log(sectionName);
    //     }
    //   },
    //   {
    //     threshold: 0.5, // 50% in view
    //   }
    // );
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const section = entry.target.getAttribute('data-section');
            console.log(
              `Section: ${section}, IsIntersecting: ${entry.isIntersecting}, Ratio: ${entry.intersectionRatio.toFixed(4)}`
            );
          });
    
          // Now find the most visible section
          const visibleSections = entries
            .filter((entry) => entry.isIntersecting && entry.target.getAttribute('data-section'))
            .map((entry) => ({
              section: entry.target.getAttribute('data-section'),
              ratio: entry.intersectionRatio,
            }));
    
          visibleSections.sort((a, b) => b.ratio - a.ratio);
    
          if (visibleSections.length > 0) {
            const topSection = visibleSections[0].section;
            setActiveSection(topSection);
          }
        },
        {
          threshold: [0.1, 0.25, 0.5, 0.75],
          rootMargin: '0px 0px -20% 0px',
        }
      );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [sectionName, setActiveSection]);

  return ref;
};
