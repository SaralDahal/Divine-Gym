"use client";
import { useState } from "react";

const plans = [
    {
        id: "basic",
        label: "Basic",
        name: "Basic Plan",
        description: "Perfect for beginners who want essential gym access",
        price: "NPR 1500",
        period: "/ Month",
        popular: false,
        features: [
            "Gym access during working hours",
            "Cardio zone access",
            "Basic strength equipment usage",
            "Locker room access",
            "Standard workout environment",
        ],
    },
    {
        id: "regular",
        label: "Regular",
        name: "Regular Plan",
        description: "Ideal for consistent training and better progress.",
        price: "NPR 3500",
        period: "/ Month",
        popular: true,
        features: [
            "Full-day gym access",
            "Advanced strength & cardio equipment",
            "Group workout sessions",
            "Free fitness assessment",
            "Locker & shower facilities",
        ],
    },
    {
        id: "premium",
        label: "Premium",
        name: "Premium Plan",
        description: "Complete fitness experience with premium support.",
        price: "NPR 5500",
        period: "/ Month",
        popular: false,
        features: [
            "All Regular plan benefits",
            "Personal trainer guidance",
            "Customized workout plan",
            "Basic diet & nutrition guidance",
            "Priority access to equipment & peak hours",
        ],
    },
];

function CheckIcon() {
    return (
        <span className="inline-flex items-center justify-center w-[22px] h-[22px] min-w-[22px] bg-[#8B1A1A] rounded mr-3">
            <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path
                    d="M1.5 5L5 8.5L11.5 1.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </span>
    );
}

function PlanCard({ plan, highlighted }) {
    return (
        <div
            className={`relative flex-1 min-w-0 rounded-xl px-6 pt-7 pb-8 backdrop-blur-sm bg-black/55 ${highlighted ? "border-2 border-[#C0392B]" : "border border-white/15"
                }`}
        >
            {plan.popular && (
                <div className="absolute -top-4 left-5 bg-[#C0392B] text-white text-[13px] font-bold px-4 py-1 rounded-md">
                    Popular
                </div>
            )}

            <h2 className="text-white text-3xl font-bold mb-2 font-serif">
                {plan.name}
            </h2>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                {plan.description}
            </p>

            <div className="flex items-baseline gap-1.5 mb-5">
                <span className="text-white text-3xl font-extrabold">{plan.price}</span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
            </div>

            {/* <button className="w-full bg-[#C0392B] hover:bg-[#a93226] transition-colors text-white rounded-md py-3.5 text-base font-bold mb-6 tracking-wide cursor-pointer border-none">
                Purchase Now
            </button> */}

            <p className="text-white text-[13px] font-bold mb-3.5">
                What&apos;s Included?
            </p>

            <ul className="list-none p-0 m-0 space-y-3">
                {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                        <CheckIcon />
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState("basic");
    const activePlan = plans.find((p) => p.id === activeTab);

    return (
        <div
            id="pricing"
            className="bg-cover bg-center bg-fixed relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80')",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 px-5 py-16 pb-20">
                {/* ── DESKTOP LAYOUT ── */}
                <div className="hidden md:block">
                    <div className="text-center mb-12">
                        <h1 className="text-white text-4xl font-extrabold mb-3 font-serif">
                            Our Plan
                        </h1>
                        <p className="text-gray-300 text-xl">
                            Choose your plan. Start your transformation.
                        </p>
                    </div>

                    <div className="flex gap-6 max-w-5xl mx-auto items-stretch">
                        {plans.map((plan) => (
                            <PlanCard key={plan.id} plan={plan} highlighted={plan.popular} />
                        ))}
                    </div>
                </div>

                {/* ── MOBILE LAYOUT ── */}
                <div className="block md:hidden">
                    <h1 className="text-white text-2xl font-extrabold text-center mb-6 font-serif">
                        Choose Our Plan
                    </h1>

                    {/* Tab Switcher */}
                    <div className="flex bg-white rounded-full p-1 max-w-xs mx-auto mb-8">
                        {plans.map((plan) => (
                            <button
                                key={plan.id}
                                onClick={() => setActiveTab(plan.id)}
                                className={`flex-1 py-2.5 rounded-full border-none text-sm font-bold cursor-pointer transition-all duration-200 ${activeTab === plan.id
                                    ? "bg-[#C0392B] text-white"
                                    : "bg-transparent text-[#C0392B]"
                                    }`}
                            >
                                {plan.label}
                            </button>
                        ))}
                    </div>

                    {/* Active Plan Card */}
                    <div className="max-w-sm mx-auto">
                        <PlanCard plan={activePlan} highlighted={activePlan.popular} />
                    </div>
                </div>
            </div>
        </div>
    );
}
