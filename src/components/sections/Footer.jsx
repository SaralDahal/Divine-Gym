import Logo from "../ui/Logo";
export default function Footer() {
    const socialLinks = [
        {
            label: "Facebook",
            path: "M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761z",
            viewBox: "0 0 155.139 155.139",
        },
        {
            label: "Tiktok",
            path: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z",
            viewBox: "0 0 24 24",
        },
        {
            label: "Instagram",
            path: "M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67. eight",

            viewBox: "0 0 1226.37 1226.37",
        },

    ];

    const menuSections = [
        {
            title: "Quick Links",
            links: [
                "About",
                "Pricing",
                "Testimonials",
                "Gallery",
                "Contact",
            ],
        },
        {
            title: "Services",
            links: [
                "Strength",
                "Focus",
                "Recovery",
                "Fat Loss",
                "Result",
            ],
        },
        {
            title: "We are Open",
            links: ["Everyday 8 AM to 7 PM", "Contact", "Address",],
        },
    ];

    // const bottomLinks = ["Terms of Service", "Privacy Policy", "Security"];

    return (
        <footer className="bg-[#0D2332] text-slate-50 py-12 font-[Alan Sans]">
            <div className="container max-w-7xl mx-auto">
                <div className="grid min-[1200px]:grid-cols-3 gap-12 xl:gap-16">
                    {/* Logo and Socials Column */}
                    <div className="min-[1200px]:max-w-sm max-w-lg w-full">

                        <Logo
                            href="#home"
                            alt="Divine Gym Home"
                            size={56}
                            className="hover:scale-105 transition-transform duration-300"
                        />

                        <ul className="flex flex-wrap gap-6 mt-6">
                            {socialLinks.map((social) => (
                                <li key={social.label}>
                                    <a
                                        href="#"
                                        className="flex items-center bg-neutral-900 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                        aria-label={social.label}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-full fill-slate-50"
                                            viewBox={social.viewBox}
                                            aria-hidden="true"
                                        >
                                            <path d={social.path} />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Grid Column */}
                    <div className="min-[1200px]:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 sm:gap-x-8">
                        {menuSections.map((section) => (
                            <div key={section.title} className="space-y-6">
                                <h3 className="text-white text-sm font-semibold">
                                    {section.title}
                                </h3>
                                <ul className="space-y-4 text-sm text-white font-normal">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href={`#${link.toLowerCase()}`}
                                                className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="my-8 border-neutral-700" />

                {/* Footer Bottom */}
                <div className="flex flex-wrap gap-4 flex-col md:flex-row">
                    {/* <ul className="flex flex-wrap gap-4 text-sm text-slate-400 font-normal">
                        {bottomLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul> */}
                    <p className="text-slate-400 text-sm md:ml-auto">
                        © Divine Gym. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}