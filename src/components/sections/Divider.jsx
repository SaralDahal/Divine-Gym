import { useRef, useState } from "react";
import { FEATURE_CARDS } from "../constants/featureCard";
import Carousel from "../layout/Carousel";


export default function Divider() {
    const scrollRef = useRef(null);

    function scroll(direction) {
        const el = scrollRef.current;
        if (!el) return;

        const width = el.clientWidth;

        el.scrollBy({
            left: direction === "left" ? -width : width,
            behavior: "smooth",
        });
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
            {/* <div className="relative w-full h-[60px]">
                <svg width="100%" height="80" viewBox="0 0 1437 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-8 71H1437L-8 0V71Z" fill="#982716" />
                </svg>

            </div> */}

            {/* Divider */}
            <div className="w-full leading-none -mt-1 overflow-hidden">
                <svg
                    className="block w-full h-10 md:h-20"
                    viewBox="0 0 1437 71"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M-8 71H1437L-8 0V71Z" fill="#982716" />
                </svg>
            </div>

            {/* Cards Section */}
            <div className="max-w-7xl mx-auto py-10 relative">

                {/* MOBILE SCROLL / DESKTOP GRID */}
                <div
                    ref={scrollRef}
                    className="overflow-hidden md:overflow-visible"
                >
                    <div className="flex snap-x snap-mandatory md:grid md:grid-cols-4">
                        {FEATURE_CARDS.map((card) => (
                            <FeatureCard
                                key={card.id}
                                {...card}
                                className="min-w-full md:min-w-0 px-10 flex-wrap-0 snap-start p-6"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}