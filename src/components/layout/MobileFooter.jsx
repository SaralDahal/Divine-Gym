import { useState } from "react";
import Logo from "../ui/Logo";
import { socialLinks, menuSections } from "../constants/footer";
import WhatsappIcon from "../ui/WhatsappIcon";

export default function MobileFooter() {
  const [text, setText] = useState("");

  return (
    <div className=" bg-[#0D2332] relative overflow-hidden md:hidden">

      {/* MOBILE FOOTER ABOVE SVG */}
      <footer className="relative z-10 text-slate-50 pt-24 font-[Alan Sans]">
        <div className="container mx-auto px-10 py-4">
          <div className="grid gap-12">

            <div>
              <Logo
                href="#home"
                alt="Divine Gym Home"
                size={40}
                className="hover:scale-105 transition-transform duration-300"
              />

              <p className="text-slate-400 text-normal mt-2">
                Divine Gym is committed to helping you build a stronger,
                healthier, and more confident version of yourself.
              </p>

              <ul className="flex gap-4 my-4">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href="#"
                      className="flex items-center bg-neutral-900 w-8 h-8 p-2 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-full fill-slate-50"
                        viewBox={social.viewBox}
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="grid gap-8 mt-8">
                {menuSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-gray-300 pb-2 text-lg font-semibold">
                      {section.title}
                    </h3>

                    <ul className="space-y-3 text-normal text-white">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a href={`#${link.toLowerCase()}`}>{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Reach Us */}
              <div className="mt-8">
                <div className="text-slate-50 bg-[#982716] px-4 py-2 rounded-tl-lg inline-block text-sm font-semibold">
                  Reach Us
                </div>

                <div className="flex flex-col gap-3">
                  <textarea
                    placeholder="Enter a Message...."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="text-slate-50 text-sm w-full bg-[#0D2332] border border-[#982716] p-3 rounded-lg rounded-tl-none resize-none h-32"
                  />

                  <a
                    href={`https://wa.me/+9779811049592?text=${encodeURIComponent(
                      text
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="py-2 px-3.5 text-sm rounded-md font-semibold text-white bg-[#982716] w-full"
                    >
                      Send Message <WhatsappIcon />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8 border-neutral-700" />

          <p className="text-slate-400 text-sm text-center">
            © Divine Gym. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
