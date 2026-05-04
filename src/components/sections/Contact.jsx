import { contactInfo } from "../constants/contact";
// import Logo from "../ui/Logo";
import WhatsappIcon from "../ui/WhatsappIcon";

const Contact = () => {
  return (<>
        
      <div className="bg-[#F5F5F5] relative overflow-hidden">
        <div
          id="contact"
          className="container mx-auto px-10 pt-8 md:pt-16 relative z-10 grid grid-cols-1 md:grid-cols-2"
        >
          {/* left column */}
          <div className="flex flex-col items-start gap-3">
            <p className="text-2xl md:text-4xl font-medium text-[#000] uppercase">
              Get started <span className="text-[#982716]">today</span>
            </p>
            <p className="text-2xl md:text-4xl font-medium text-[#936F33]">
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
       <svg
        className="top-0 left-0 w-full h-full z-0 bg-[#F5F5F5]"
        viewBox="0 0 1440 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.2278 24.5C17.4177 20.9 5.7384 6.66667 0 0V717H1440V180C1434.43 175.5 1420.46 168.7 1409.11 177.5C1394.94 188.5 1390.89 180 1364.56 180C1338.23 180 1347.34 167 1321.01 180C1299.95 190.4 1277.81 188 1269.37 185.5C1206.08 164 1181.27 173.5 1171.14 177.5C1161.01 181.5 1169.11 169.5 1123.04 173.5C1076.96 177.5 1070.89 221 1061.27 210.5C1053.57 202.1 1033.08 207 1023.8 210.5C1002.03 203 989.873 218.5 961.519 215C933.165 211.5 870.38 218.5 862.279 227C854.177 235.5 818.228 241 813.671 232.5C809.114 224 790.886 208.5 778.228 222.5C765.57 236.5 757.975 243.5 737.721 249.5C717.485 255.495 715.446 254.002 686.149 232.553L686.076 232.5C656.709 211 624.81 233 617.215 218.5C609.62 204 602.532 204.5 598.987 197C595.443 189.5 566.076 193 557.975 182C549.873 171 531.139 163.5 503.291 173C475.443 182.5 475.949 174 471.392 182L471.348 182.077C466.816 190.035 463.714 195.481 437.975 189.5C412.152 183.5 417.721 176.5 379.747 185C341.772 193.5 318.481 157.5 300.253 168.5C282.025 179.5 254.684 170 237.975 157.5C221.266 145 213.671 150 203.544 152.5C193.418 155 168.101 147 142.278 143.5C116.456 140 129.114 163.5 96.2025 163C69.8734 162.6 66.3291 159.167 67.8481 157.5C65.3165 130.5 61.2658 142 49.1139 122.5C36.962 103 29.3671 117.5 20.7595 93C12.1519 68.5 19.2405 29 18.2278 24.5Z"
          fill="#0D2332"
        />
      </svg>
      </>
  );
};

export default Contact;
