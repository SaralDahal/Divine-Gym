import Button from "../ui/Button";
import gymHero from "../../assets/gymHeroImg.png";

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto">

            {/* Background Image */}
            <img
                src={gymHero}
                alt="Gym Hero"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85 -z-10" /> */}

            {/* Content */}
            <div className="relative z-10 px-8 py-20 w-full">

                <p className="text-[#fff] tracking-widest text-sm mb-5 uppercase">
                    DIVINEGYM.com
                </p>

                <h1 className="mb-8 leading-tight">
                    <span className="block text-[#fff] font-black tracking-widest">
                        TRAIN HARD
                    </span>
                    <span className="block text-[#fff] font-black tracking-widest">
                        STAY STRONG
                    </span>
                </h1>

                <p className="text-gray-300 text-lg mb-10">
                    Divine, Where strength meets ambition
                </p>

                <Button className="px-4 py-2 text-[#fff] font-[icebreg] bg-[#936F33] hover:scale-105 cursor-pointer transition-transform">
                    Start Training →
                </Button>

            </div>
        </section>
    );
}
