import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="bg-[#dad7cd] min-h-screen p-5 overflow-x-hidden">
      <div className="flex justify-between px-5 pt-2 md:px-10 md:pt-5 items-center relative z-10">
        <button className="w-14 h-14 md:w-20 md:h-20 glass hover:bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer">
          <Image src="/assets/logo.svg" width={100} height={100} alt="logo" />
        </button>
        <div
          className={`glass py-4 px-6 md:py-6 md:px-8 max-h-10 rounded-xl text-white text-md md:text-xl font-semibold `}
        >
          Contact Me
        </div>
      </div>
      <div className="p-10 translate-y-16 md:-translate-y-32 relative -translate-x-[25%] w-[200%]">
        <Image
          src={"/assets/hero.svg"}
          alt="hero"
          width={1000}
          height={1000}
          className="w-[50rem] 2xl:h-[55rem] 3xl:h-[60rem] -translate-x-8 md:w-auto mx-auto"
        />
        <div className="glass text-white absolute top-[13%] left-[25%] md:top-[27%] md:right-[55%] px-6 py-5 rounded-2xl flex-col items-start">
          <div className="text-xs md:text-base pl-1">I&apos;m</div>
          <div className="text-2xl md:text-3xl font-semibold">Subrahmanyam</div>
        </div>
        <div className="glass text-white absolute top-[55%] right-[22%] md:right-[18%] px-5 py-4 rounded-2xl flex-col items-start">
          <div className="text-base md:text-2xl font-semibold">FullStack Developer</div>
        </div>
        <div className="glass text-white absolute top-[75%] left-[25%] md:top-[60%] md:right-[65%] px-5 py-4 rounded-2xl flex-col items-start">
          <div className="text-base md:text-2xl font-semibold">UI/UX Designer</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
