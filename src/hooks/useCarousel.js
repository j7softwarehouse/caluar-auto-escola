import { useState, useEffect } from 'react';
export function useCarousel(itemCount, autoPlayInterval = 5000) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    useEffect(() => {
        if (!isAutoPlay)
            return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % itemCount);
        }, autoPlayInterval);
        return () => clearInterval(timer);
    }, [isAutoPlay, itemCount, autoPlayInterval]);
    const next = () => setCurrentIndex((prev) => (prev + 1) % itemCount);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
    const goTo = (index) => setCurrentIndex(Math.max(0, Math.min(index, itemCount - 1)));
    return { currentIndex, next, prev, goTo, setIsAutoPlay };
}
//# sourceMappingURL=useCarousel.js.map