import { useRef, useState, useEffect } from "react";

export default function Carousel({ children, className = "" }) {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = () => {
        const el = scrollRef.current;
        if (!el) return;

        const { scrollLeft, scrollWidth, clientWidth } = el;

        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    };

    const scroll = (direction) => {
        const el = scrollRef.current;
        if (!el) return;

        const scrollAmount = el.clientWidth * 0.8;

        el.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        updateScrollState();
    }, []);

    return (
        <div className={`relative ${className}`}>

            {/* Left Button */}
            <button
                onClick={() => scroll("left")}
                className={`md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 flex items-center justify-center bg-gradient-to-r from-white/60 to-transparent transition-opacity duration-200 ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Right Button */}
            <button
                onClick={() => scroll("right")}
                className={`md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 flex items-center justify-center bg-gradient-to-l from-white/60 to-transparent transition-opacity duration-200 ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                onScroll={updateScrollState}
                className="overflow-x-auto md:overflow-x-visible"
            >
                <div className="flex md:grid md:grid-cols-4 gap-10 px-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
