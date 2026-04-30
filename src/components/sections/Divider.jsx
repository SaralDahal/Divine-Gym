import { useRef, useState } from "react";
import { FEATURE_CARDS } from "../constants/featureCard";
import Carousel from "../layout/Carousel";


export default function Divider() {
    const scrollRef = useRef(null);
    const isScrolling = useRef(false);

    function scroll(direction) {
        if (isScrolling.current) return;
        const el = scrollRef.current;
        if (!el) return;

        const card = el.querySelector(":first-child > *");
        const cardWidth = card ? card.offsetWidth : el.clientWidth;

        isScrolling.current = true;
        el.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });

        setTimeout(() => { isScrolling.current = false; }, 500);
    }

    function FeatureCard({ icon, title, description, className }) {
        return (
            <div className={className}>
                {icon}
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 text-lg">{description}</p>
            </div>
        );
    }

    return (
        <section className="container mx-auto">
            {/* Divider */}
            {/* <div className="w-full leading-none -mt-1 overflow-hidden">
                <svg
                    className="block w-full h-10 md:h-20"
                    viewBox="0 0 1437 71"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M-8 71H1437L-8 0V71Z" fill="#982716" />
                </svg>
            </div> */}

            {/* Cards Section */}
            <div className="max-w-7xl px-10 py-8 md:py-8 mx-auto">
                {/* MOBILE SCROLL / DESKTOP GRID */}
                <div
                    ref={scrollRef}
                    className="overflow-x-auto md:overflow-visible scrollbar-hide"
                >
                    <div className="flex snap-x snap-mandatory min-w-full md:grid md:grid-cols-4">
                        {FEATURE_CARDS.map((card) => (
                            <FeatureCard
                                key={card.id}
                                {...card}
                                className="min-w-full md:min-w-0 md:px-4 flex-wrap snap-start md:snap-none"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}