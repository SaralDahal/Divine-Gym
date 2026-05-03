import { useState, useEffect } from "react";
import Logo from "../ui/Logo";

const NavLink = ({ href = "#", children }) => (
    <a
        href={href}
        className="relative overflow-hidden h-6 group flex items-center"
    >
        <span className="block group-hover:-translate-y-full transition-transform duration-300">
            {children}
        </span>
        <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            {children}
        </span>
    </a>
);

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const links = ["About", "Pricing", "Facility", "Testimonials", "Gallery", "Contact"];

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed z-50 flex justify-center pt-4 transition-all duration-500 ease-in-out ${hasScrolled ? 'w-full' : 'w-full'}`}>
            {/* <nav className={`flex items-center justify-between border border-white/40 mx-4 px-6 rounded-full text-white text-sm relative bg-white/10 backdrop-blur-md shadow-lg shadow-black/10 transition-all duration-500 ease-in-out ${hasScrolled ? 'w-full md:w-1/2 md:mx-auto' : 'w-full container mx-4'
                }`}> */}
            <nav className={`flex items-center justify-between border border-gray/60 mx-4 px-6 py-2 rounded-full text-white text-sm relative bg-black/20 backdrop-blur-md transition-all duration-500 ease-in-out ${hasScrolled ? 'w-full md:w-1/2 md:mx-auto' : 'w-full container mx-4'
                }`}>
                {/* Logo - Left */}
                    <Logo />


                {/* Desktop Links - Center */}
                <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
                    {links.map((link) => (
                        <NavLink key={link} href={`#${link.toLowerCase()}`}>
                            {link}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Buttons - Right */}
                <div className="hidden md:flex items-center gap-4 flex-shrink-0">
                    <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                        Get Started
                    </button>
                </div>

                {/* Hamburger Button for mobile */}
                <button
                    onClick={() => setMobileOpen((o) => !o)}
                    className="md:hidden text-white-600"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="absolute top-20 left-0 bg-black w-full flex flex-col items-center gap-4 py-6 z-50">
                        {links.map((link) => (
                            <a
                                key={link}
                                className="hover:text-indigo-600 text-base"
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link}
                            </a>
                        ))}
                        <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_15px_8px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                            Get Started
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;