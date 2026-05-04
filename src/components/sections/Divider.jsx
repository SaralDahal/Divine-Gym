import { useRef } from "react";
import { FEATURE_CARDS } from "../constants/featureCard";

export default function Divider() {
    const scrollRef = useRef(null);
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
        <section className=" bg-gray-200">
            {/* Cards Section */}
            <div className="max-w-7xl px-10 py-6 md:py-10 mx-auto">
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