import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className=" relative pt-20 h-screen w-full overflow-hidden px-6">
      <Image
        className="blur-md"
        src="/home4.jpg"
        layout="fill"
        objectFit="cover"
        alt="Background"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start h-full p-10">
        <h1 className="text-5xl font-bold text-white mb-30">JOE DevTech</h1>
        {/* <p className="text-white max-w-xl mt-10 mb-5">
          Welcome to JOE DevTech, where innovation meets expertise! As a leading
          development company, we take pride in crafting digital solutions that
          transcend the ordinary and empower businesses to thrive in the
          ever-evolving digital landscape.
        </p> */}
        <h1 className="text-5xl font-bold text-white mb-30">
          Transforming Ideas, Creating Digital Excellence
        </h1>
        {/* <Link href="/product">
          <button className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-cyan-600 transition duration-300 ease-in-out">
            Our Services
          </button>
        </Link> */}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex"></div>
      ;
    </section>
  );
};

export default Hero;
