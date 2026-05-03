"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import { reviews } from "../constants/data";
import StarRating from "../layout/StarRating";

function ReviewCard({ review, animating, direction }) {
    return (
        <div
            className={` transition-all duration-300 ${animating
                ? direction === "next"
                    ? "opacity-0 translate-x-6"
                    : "opacity-0 -translate-x-6"
                : "opacity-100 translate-x-0"
                }`}
        >

            <StarRating rating={review.rating} />

            <p className="text-gray-300 italic mb-6">
                “{review.text}”
            </p>

            <p className="text-white font-bold">{review.name}</p>
        </div>
    );
}


export default function Testmonial() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("next");
    const touchStartX = useRef(null);
    const autoScrollRef = useRef(null);

    const goTo = useCallback(
        (index, dir = "next") => {
            if (animating) return;
            setDirection(dir);
            setAnimating(true);
            setTimeout(() => {
                setCurrent(index);
                setAnimating(false);
            }, 300);
        },
        [animating],
    );

    const next = useCallback(() => {
        goTo((current + 1) % reviews.length, "next");
    }, [current, goTo]);

    const prev = useCallback(() => {
        goTo((current - 1 + reviews.length) % reviews.length, "prev");
    }, [current, goTo]);

    // Auto-scroll every 3 seconds
    useEffect(() => {
        autoScrollRef.current = setInterval(() => {
            setCurrent((c) => (c + 1) % reviews.length);
        }, 3000);
        return () => clearInterval(autoScrollRef.current);
    }, []);

    // Reset timer on manual nav
    const resetTimer = useCallback((fn) => {
        clearInterval(autoScrollRef.current);
        fn();
        autoScrollRef.current = setInterval(() => {
            setCurrent((c) => (c + 1) % reviews.length);
        }, 3000);
    }, []);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) resetTimer(next);
            else resetTimer(prev);
        }
        touchStartX.current = null;
    };

    const review = reviews[current];

    return (
        <div
            id="testimonials"
            className="px-4 py-16 bg-cover bg-center bg-fixed relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80')",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Card Wrapper */}
            <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >

                {/* Review Card */}
                <div
                    className={`px-8 py-10 text-center transition-all duration-300 ${animating
                        ? direction === "next"
                            ? "opacity-0 translate-x-6"
                            : "opacity-0 -translate-x-6"
                        : "opacity-100 translate-x-0"
                        }`}
                    style={{ transform: animating ? undefined : "translateX(0)" }}
                >

                    {/* Stars */}
                    <StarRating rating={review.rating} />

                    {/* Review Text */}
                    <p className="text-gray-300 text-base font-bold  leading-relaxed">
                        &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Author */}
                    <p className="text-white font-normal text-lg">{review.name}</p>
                </div>


                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() =>
                                resetTimer(() => goTo(i, i > current ? "next" : "prev"))
                            }
                            className={`rounded-full border-none cursor-pointer transition-all duration-300 ${i === current
                                ? "w-8 h-2.5 bg-[#C0392B]"
                                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
