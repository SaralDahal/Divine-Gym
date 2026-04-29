import { useState } from "react";
import { NAV_ITEMS } from "../constants/navItems";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            {/* overlay */}
            <div className="absolute inset-0 bg-[#000]/60 blur-b-xs -z-5" />
            <div className="container mx-auto px-4 ">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between h-16">
                    <Logo />
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_ITEMS.map(item => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-[#fff] hover:text-gray-400 text-sm"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <Button className="hidden lg:block bg-[#982716] text-[#fff] px-4 py-1 hover:scale-105 cursor-pointer transition-transform">
                        Join Now
                    </Button>

                    <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1">
                        <div className="w-6 h-0.5 bg-white" />
                        <div className="w-6 h-0.5 bg-white" />
                        <div className="w-6 h-0.5 bg-white" />
                    </button>
                </div>
            </div>

            <MobileMenu open={open} setOpen={setOpen} />
        </nav>
    );
}
