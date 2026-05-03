import Button from "../ui/Button";
import { contactInfo } from "../constants/contact";
import WhatsappIcon from "../ui/WhatsappIcon";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto px-10 py-8 md:pt-16 font-[Alan Sans]">
        <div
          id="contact"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
        >
          {/* left column */}
          <div className="flex flex-col gap-1 items-start justify-between">
            <p className="text-2xl md:text-5xl font-medium text-[#000] uppercase tracking-wide">
              Get started <span className="text-[#982716]">today</span>
            </p>
            <p className="text-xl md:text-5xl font-medium text-[#936F33] tracking-wide">
              First Class Discount
            </p>
            <p className="text-sm md:text-lg font-medium text-[#818181] tracking-wide">
              Start your fitness journey with a free first session and see the
              difference. Our coaches will tailor a plan to your goals.
            </p>
            <a href="https://wa.me/+9779811049592" target="_blank" rel="noopener noreferrer">
              <button className="hidden lg:block bg-[#982716] text-white text-lg md:text-xl py-3 px-6 hover:bg-[#7a1f12] cursor-pointer transition-colors duration-300 flex items-center gap-2 rounded-md mt-4">
                Contact us
                <WhatsappIcon /> 
              </button>
            </a>
          </div>

          {/* right column */}
          <div className="flex flex-col md:text-right">
            {contactInfo.map((item, index) => (
              <div key={index}>
                <h3 className="text-[#936F33] pt-3 text-2xl md:text-3xl">
                  {item.title}
                </h3>
                <p className="text-sm md:text-lg font-medium tracking-wider">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <a href="https://wa.me/+9779811049592" target="_blank" rel="noopener noreferrer">
            <button className="lg:hidden bg-[#982716] text-[#fff] px-4 py-2 self-start">
              Contact us
              <WhatsappIcon />
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
