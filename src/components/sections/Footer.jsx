import { useState } from "react";
import Logo from "../ui/Logo";
import { socialLinks, menuSections } from "../constants/footer";
import MobileFooter from "../layout/MobileFooter";
import WhatsappIcon from "../ui/WhatsappIcon";
export default function Footer() {
  const [text, setText] = useState("");
  return (
    <>
      <div className=" bg-[#0D2332] relative overflow-hidden">
        <footer className="container mx-auto px-10 py-4 md:py-10 relative z-10 hidden md:block text-slate-50">
          <div className="grid min-[1200px]:grid-cols-3 gap-12 xl:gap-2">
            {/* Logo and Socials Column */}
            <div className="min-[1200px]:max-w-sm max-w-lg w-full">
              <div className="font-semibold text-[#fff] tracking-narrow flex items-center gap-2">
              <Logo
                href="#home"
                alt="Divine Gym Home"
                size={56}
                className="hover:scale-105 transition-transfpathorm duration-300"
              />
              Divine Gym
              </div>
              <p className="text-slate-400 text-lg mt-2">
                Divine Gym is committed to helping you build a stronger,
                healthier, and more confident version of yourself through expert
                coaching, modern equipment, and a welcoming fitness community.
              </p>
              <ul className="flex flex-wrap gap-4 mt-6">
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
            <div className="min-[1200px]:col-span-2 grid grid-cols-2 lg:grid-cols-3 ">
              {menuSections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-white text-2xl font-semibold">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 text-normal text-white-300">
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
              {/* Reach Us */}
              <div className="max-lg:col-span-full max-w-md">
                <div className="text-slate-50 bg-[#982716] px-4 py-2 rounded-tl-lg inline-block text-sm font-semibold">
                  Reach Us
                </div>
                <div className="flex flex-col gap-3">
                  <textarea
                    placeholder="Enter a Message...." name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="text-slate-50 text-sm w-full bg-[#0D2332] border border-[#982716] p-3 rounded-lg rounded-tl-none outline-none focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 resize-none h-32"
                  />
                  <a href={`https://wa.me/+9779811049592?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer">
                    <button
                      type="button"
                      className="py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white bg-[#982716] hover:bg-red-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      Send Message <WhatsappIcon />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-2 border-neutral-700" />

          {/* Footer Bottom */}
          <div className="flex flex-wrap gap-3 pt-4 flex-col">
            <p className="text-slate-400 text-sm md:ml-auto">
              © Divine Gym. All rights reserved.
            </p>
          </div>
      </footer>
      </div>
      <MobileFooter />
    </>
  );
}
