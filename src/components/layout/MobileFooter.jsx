import Logo from "../ui/Logo";
import { socialLinks, menuSections } from "../constants/footer";
export default function MobileFooter() {
    return (
        <footer className=" md:hidden bg-[#0D2332] text-slate-50 pt-6 font-[Alan Sans]">
            <div className="container mx-auto px-10 py-4 md:py-16">
                <div className="grid min-[600px]:grid-cols-3 gap-12 xl:gap-12">
                    <div className="flex flex-row items-center gap-4">
                        {/* Logo and Socials Column */}
                        <div>
                            <Logo
                                href="#home"
                                alt="Divine Gym Home"
                                size={40}
                                className="hover:scale-105 transition-transform duration-300"
                            />
                            <p className="text-slate-400 text-sm mt-2">
                                Divine Gym is committed to helping you build a stronger, healthier, and more confident version of yourself through expert coaching, modern equipment, and a welcoming fitness community.
                            </p>
                            <div className="flex gap-4 my-4">
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
                            </div>
                            {/* Links Grid Column */}
                            <div className=" grid grid-row-2 gap-y-12 gap-x-6 sm:gap-x-8">
                                {menuSections.map((section) => (
                                    <div key={section.title} className="space-y">
                                        <h3 className="text-gray-300 pb-2 text-lg font-semibold">
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
                            <div class="max-lg:col-span-full max-w-md mt-6">
                                <div class="text-slate-50 bg-[#982716] px-4 py-2 rounded-tl-lg inline-block text-sm font-semibold">
                                    Reach Us
                                </div>
                                <div class="flex flex-col gap-3">
                                    <textarea
                                        placeholder="Enter a Message...."
                                        class="text-slate-50 text-sm w-full bg-[#0D2332] border border-[#982716] p-3 rounded-lg rounded-tl-none outline-none focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 resize-none h-32"
                                    />
                                    <button
                                        type="button"
                                        class="py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white bg-[#982716] hover:bg-red-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                    >
                                        Send Message →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <hr className="my-8 border-neutral-700" />
                <div className="flex flex-wrap gap-4 flex-col">
                    <p className="text-slate-400 text-sm md:ml-auto">
                        © Divine Gym. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}