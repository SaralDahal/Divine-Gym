import { useState } from "react";
import { NAV_ITEMS } from "../constants/navItems";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
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

                    <Button className="hidden lg:block bg-[#982716] text-[#fff] px-8 py-3 hover:scale-105 cursor-pointer transition-transform">
                        Join Now
                    </Button>

                    <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1">
                        <div className="w-6 h-0.5 bg-white" />
                        <div className="w-6 h-0.5 bg-white" />
                        <div className="w-6 h-0.5 bg-white" />
                    </button>
                </div>
            </div>

            <MobileMenu open={open} />
        </nav>
    );
}
