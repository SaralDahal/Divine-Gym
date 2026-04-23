export default function Divider() {
    return (
        <section className="w-full">

            {/* Divider */}
            <div className="relative w-full h-[60px]">
                <svg
                    className="w-full h-[60px]"
                    viewBox="0 0 1000 60"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon points="0,0 1000,60 1000,0" fill="#982716" />
                    <line x1="0" y1="0" x2="1000" y2="60" stroke="white" strokeWidth="5" />
                </svg>
            </div>

            {/* Cards Section */}
            <div className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Card 1 – Strength */}
                    <div>
                        <svg className="w-12 h-12 text-[#B57500] mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="20" width="6" height="8" rx="2" fill="currentColor" />
                            <rect x="38" y="20" width="6" height="8" rx="2" fill="currentColor" />
                            <rect x="10" y="17" width="5" height="14" rx="2" fill="currentColor" />
                            <rect x="33" y="17" width="5" height="14" rx="2" fill="currentColor" />
                            <rect x="15" y="22" width="18" height="4" rx="2" fill="currentColor" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Strength</h3>
                        <p className="text-gray-700 text-sm">Build power, endurance, and confidence through every session.</p>
                    </div>

                    {/* Card 2 – Focus */}
                    <div>
                        <svg className="w-12 h-12 text-[#982716] mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                            <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                            <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" opacity="0.7" />
                            <circle cx="24" cy="24" r="2.5" fill="currentColor" />
                            <line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                            <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                            <line x1="4" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                            <line x1="38" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Focus</h3>
                        <p className="text-gray-700 text-sm">Structured training plans designed to keep you consistent.</p>
                    </div>

                    {/* Card 3 – Recovery */}
                    <div>
                        <svg className="w-12 h-12 text-[#982716] mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 40 C24 40 8 30 8 19 C8 13.5 12.5 9 18 9 C21 9 23.5 10.5 24 12 C24.5 10.5 27 9 30 9 C35.5 9 40 13.5 40 19 C40 30 24 40 24 40Z" fill="currentColor" opacity="0.15" />
                            <path d="M24 36 C24 36 10 27 10 18.5 C10 14 13.5 10.5 18 10.5 C20.5 10.5 22.5 11.8 24 13.5 C25.5 11.8 27.5 10.5 30 10.5 C34.5 10.5 38 14 38 18.5 C38 27 24 36 24 36Z" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M18 20 L22 24 L30 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Recovery</h3>
                        <p className="text-gray-700 text-sm">Rest, mobility, and guided support for long term results.</p>
                    </div>

                    {/* Card 4 – Result */}
                    <div>
                        <svg className="w-12 h-12 text-[#982716] mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8 H32 V22 C32 29 24 33 24 33 C24 33 16 29 16 22 Z" fill="currentColor" opacity="0.15" />
                            <path d="M16 8 H32 V22 C32 29 24 33 24 33 C24 33 16 29 16 22 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M16 12 C10 12 10 22 16 22" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M32 12 C38 12 38 22 32 22" stroke="currentColor" strokeWidth="2" fill="none" />
                            <line x1="24" y1="33" x2="24" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <rect x="17" y="38" width="14" height="3" rx="1.5" fill="currentColor" opacity="0.7" />
                            <path d="M24 14 L25.2 17.6 H29 L26 19.8 L27.2 23.4 L24 21.2 L20.8 23.4 L22 19.8 L19 17.6 H22.8 Z" fill="currentColor" opacity="0.7" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Result</h3>
                        <p className="text-gray-700 text-sm">Track progress and celebrate every transformation.</p>
                    </div>

                </div>
            </div>

        </section>
    );
}