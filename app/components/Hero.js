import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" relative pt-20 h-screen w-full overflow-hidden px-6">
      <Image
        className="blur-md"
        src="/home4.webp"
        layout="fill"
        objectFit="cover"
        alt="Background"
        placeholder="blur"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start h-full p-10">
        <h1 className="text-5xl font-bold text-white mb-30">JOE DevTech</h1>

        <h1 className="text-5xl font-bold text-white mb-30">
          Transforming Ideas, Creating Digital Excellence
        </h1>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex"></div>
    </section>
  );
};

export default Hero;
