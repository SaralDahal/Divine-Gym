import { useState, useCallback, useEffect, useRef } from "react";
import { reviews } from "../constants/data";
import StarRating from "../layout/StarRating";
import img from "../../assets/imageMarquee/6.jpeg";

export default function Testimonial() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("next");
    const autoScrollRef = useRef(null);

    const goTo = useCallback(
        (index, dir = "next") => {
            if (animating) return;
            setDirection(dir);
            setAnimating(true);
            setTimeout(() => {
                setCurrent(index);
                setAnimating(false);
            }, 30);
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
            next();
        }, 3000);
        return () => clearInterval(autoScrollRef.current);
    }, [next]);

    const review = reviews[current];

    return (
        <div
            id="testimonials"
            className="px-4 py-20 bg-cover bg-center bg-local relative z-10"
            style={{
                backgroundImage: `url('${img}')`,
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Card Wrapper */}
            <div className="relative z-10 mx-auto text-center">
                {/* Review Card */}
                <div
                    className={`px-8 py-20 text-center transition-all duration-300 ${
                        animating
                            ? direction === "next"
                                ? "opacity-0 translate-x-6"
                                : "opacity-0 -translate-x-6"
                            : "opacity-100 translate-x-0"
                    }`}
                >
                    {/* Stars */}
                    <StarRating rating={review.rating} />

                    {/* Review Text */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                        &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Author */}
                    <p className="text-white font-normal text-lg">{review.name}</p>
                </div>
            </div>
        </div>
    );
}
