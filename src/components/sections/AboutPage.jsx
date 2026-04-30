import React from "react";
import { Dumbbell } from "lucide-react";
import { features } from "../constants/features";


export default function AboutPage() {
    return (
        <div id="about" className=" min-h-screen bg-[#111111] text-white font-sans selection:bg-[#D13415]">
            <div className="container mx-auto px-10 py-8 md:py-16 flex flex-col lg:flex-row items-center gap-16">
                {/* Left Content Side */}
                <div className="flex-1 left-0 space-y-8 z-10">
                    <div className=" relative inline-flex items-center">
                        <svg className="absolute -top-5 -left-5 z-10" width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.0056 22.1802C37.8974 22.6365 37.6346 23.244 37.0433 23.8523C36.4519 24.4607 35.8521 24.7406 35.3991 24.8617C34.7014 25.0483 34.1174 24.7401 33.7879 24.4326C33.1298 23.8187 30.9675 21.7869 26.9767 17.9078C22.9859 14.0287 20.8937 11.9248 20.2613 11.2845C19.9446 10.9638 19.62 10.3887 19.7867 9.68604C19.895 9.22979 20.1577 8.62231 20.7491 8.01395C21.3404 7.40558 21.9402 7.12569 22.3932 7.00455C23.0909 6.81796 23.6749 7.12615 24.0045 7.43363C24.6625 8.04758 26.8248 10.0793 30.8156 13.9585C34.8064 17.8376 36.8986 19.9414 37.531 20.5818C37.8477 20.9025 38.1723 21.4775 38.0056 22.1802ZM23.3341 37.2739C23.7871 37.1528 24.3869 36.8729 24.9783 36.2645C25.5696 35.6562 25.8324 35.0487 25.9406 34.5924C26.1073 33.8897 25.7827 33.3147 25.466 32.994C24.8336 32.3537 22.7414 30.2498 18.7506 26.3707C14.7598 22.4915 12.5975 20.4598 11.9394 19.8459C11.6099 19.5384 11.0259 19.2302 10.3282 19.4168C9.87519 19.5379 9.27542 19.8178 8.68407 20.4262C8.09272 21.0345 7.82996 21.642 7.72172 22.0983C7.555 22.8009 7.87963 23.376 8.19634 23.6967C8.8287 24.337 10.9209 26.4409 14.9117 30.32C18.9025 34.1992 21.0648 36.2309 21.7229 36.8448C22.0524 37.1523 22.6364 37.4605 23.3341 37.2739ZM38.8954 16.3259C39.2571 15.9539 39.48 15.5896 39.614 15.2751C39.9497 14.4875 39.5817 13.784 39.228 13.4243C38.7347 12.9226 37.4651 11.6439 35.2029 9.44493C32.9406 7.24597 31.6264 6.01311 31.1109 5.53428C30.7413 5.19098 30.0277 4.84301 29.2499 5.20092C28.9394 5.3438 28.5816 5.57698 28.2199 5.94907C27.8582 6.32117 27.6353 6.68543 27.5012 6.99991C27.1655 7.78753 27.5336 8.491 27.8873 8.85072C28.3805 9.35244 29.6502 10.6311 31.9124 12.8301C34.1747 15.029 35.4888 16.2619 36.0043 16.7407C36.3739 17.084 37.0876 17.432 37.8654 17.0741C38.1759 16.9312 38.5337 16.698 38.8954 16.3259ZM16.4774 39.0776C16.788 38.9347 17.1458 38.7015 17.5074 38.3294C17.8691 37.9573 18.0921 37.593 18.2261 37.2786C18.5618 36.491 18.1937 35.7875 17.8401 35.4278C17.3468 34.926 16.0772 33.6474 13.8149 31.4484C11.5527 29.2494 10.2385 28.0166 9.72297 27.5377C9.3534 27.1944 8.63974 26.8465 7.86196 27.2044C7.55142 27.3473 7.19361 27.5805 6.83194 27.9525C6.47026 28.3246 6.2473 28.6889 6.1133 29.0034C5.7776 29.791 6.14565 30.4945 6.49932 30.8542C6.99257 31.3559 8.26221 32.6346 10.5245 34.8335C12.7867 37.0325 14.1009 38.2654 14.6164 38.7442C14.986 39.0875 15.6996 39.4355 16.4774 39.0776ZM24.2749 17.4761L27.4852 20.5966C28.0181 21.1146 27.872 21.8243 27.4584 22.3295C27.3722 22.4346 27.2442 22.5876 27.0684 22.7895C26.7168 23.1931 26.1738 23.7927 25.3921 24.5969C24.6104 25.4011 24.0264 25.9609 23.6329 26.3239C23.4361 26.5053 23.2868 26.6376 23.1842 26.7267C22.6908 27.1546 21.9855 27.3203 21.4526 26.8025L18.2419 23.6817C17.7093 23.1637 17.8554 22.4542 18.269 21.949C18.3551 21.8438 18.4831 21.6909 18.6589 21.489C19.0105 21.0853 19.5535 20.4858 20.3353 19.6816C21.117 18.8774 21.7009 18.3175 22.0944 17.9546C22.2912 17.7732 22.4405 17.6408 22.5431 17.5518C23.0366 17.1238 23.7419 16.958 24.2749 17.4761Z" fill="white" />
                        </svg>

                        <span className="bg-[#982716] text-white px-4 py-1 text-lg  tracking-wider uppercase">
                            Who Are We?
                        </span>
                    </div>

                    <h1 className="text-lg md:text-2xl font-[Aldrich] font-black tracking-wider max-w-2xl uppercase">
                        Transforming bodies,
                        strengthening<br />
                        minds, shaping lifestyles.
                        <div className="relative mx-0 w-[80px] h-[3px] bg-[#982716] 
                                    sm:w-[100px] sm:h-[4px] 
                                    lg:w-[150px] lg:h-[5px]"/>
                    </h1>

                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                        Fitness is more than just working out it's a commitment to growth,
                        discipline, and long-term wellness. Our goal is to guide you through
                        every step of your journey with expert coaching, smart training
                        plans, and a supportive environment that pushes you beyond limits.
                    </p>

                    {/* Mapped Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {features.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="space-y-3">
                                <div className="flex items-center gap-2 text-[#D13415]">
                                    <Icon size={20} />
                                    <h3 className="font-bold text-white uppercase tracking-wider">
                                        {title}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Collage Side */}
                {/* <div className="flex-1 relative w-full h-[500px] md:h-[600px] mt-12 lg:mt-0">
                    <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                        <Dumbbell className="absolute top-0 right-1/4 text-white opacity-50 -rotate-45" size={40} />
                        <Dumbbell className="absolute bottom-0 left-1/4 text-white opacity-50 -rotate-45" size={40} />

                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute top-[10%] left-[10%] w-48 h-64 border-2 border-white/20 transform -rotate-12 overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                                    alt="Fitness 1"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-72 border-2 border-[#D13415] transform rotate-6 overflow-hidden z-20 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
                                    alt="Fitness 2"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            <div className="absolute bottom-[10%] right-[10%] w-44 h-60 border-2 border-white/20 transform -rotate-6 overflow-hidden z-10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1571731956622-39cb495262f7?q=80&w=1974&auto=format&fit=crop"
                                    alt="Fitness 3"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#D13415] -m-4 opacity-30"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#D13415] -m-4 opacity-30"></div>
                        </div>
                    </div>
                </div> */}
            </div>

        </div>
    );
}