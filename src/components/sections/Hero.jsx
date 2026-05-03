import Button from "../ui/Button";
import gymHero from "../../assets/gymHeroImg.png";
import Navbar from "../layout/Navbar";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden">
                <Navbar />

            {/* Background Image */}
            <img
                src={gymHero}
                alt="Gym Hero"
                className="absolute inset-0 h-full w-full object-cover -z-10"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 -z-5" />

            {/* Content */}
            <div className=" container mx-auto px-8 pt-0 pb-8 w-full flex flex-col justify-evenly items-start h-screen">
                <div>
                    <p className="text-[#fff] text-xs mb-0 uppercase tracking-widest">
                        DIVINEGYM.com
                    </p>

                    <h1 className="mb-8 leading-tight">
                        <span className="block text-[#fff] text-4xl tracking-widest">
                            TRAIN HARD
                        </span>
                        <span className="block text-[#fff] text-4xl tracking-widest">
                            STAY STRONG
                        </span>
                    </h1>
                </div>
                <div>
                    <p className="text-gray-300 text-lg mb-1">
                        Divine, Where strength meets ambition
                    </p>
                    <div className="flex gap-1">
                        <Button className="px-4 py-2 text-[#fff] font-[icebreg] bg-[#936F33] hover:scale-105 cursor-pointer transition-transform">
                            Start Training
                        </Button>
                        <button className="px-4 py-2 text-[#fff] bg-[#982716] hover:scale-105 cursor-pointer transition-transform">
                            &#10532;
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
}
