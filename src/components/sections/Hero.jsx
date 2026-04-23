import Button from "../ui/Button";
import gymHero from "../../assets/gymHeroImg.png";
import Divider from "./Divider";

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
            <div className="absolute inset-0 bg-[#000]/30 -z-5" />

            {/* Content */}
            <div className="relative z-10 px-8 py-20 w-full flex flex-col justify-between items-start h-screen">
                <div />
                <div>
                    <p className="text-[#fff] text-xs mb-0 uppercase tacking-widest">
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
                            ↗
                        </button>
                    </div>
                </div>
                {/* <Divider /> */}
            </div>
        </section >
    );
}
