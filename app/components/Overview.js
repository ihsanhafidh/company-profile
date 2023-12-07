import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div className="bg-zinc-600 h-full">
      <div className=" m-auto ">
        <div className="md:flex justify-between py-20 px-8">
          <div className=" items-center">
            <Image
              src="/home3.webp"
              width={2000}
              height={900}
              quality={100}
              className=""
              objectFit="cover"
              alt="Picture of the author"
              placeholder="blur"
            ></Image>
          </div>
          <div className="flex flex-col text-white flex-1.5 justify-center px-10 md:px-30 mb-20 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold pt-5">
              Company Overview
            </h1>
            <p className="my-8">
              Welcome to JOE DevTech, where innovation meets expertise! As a
              leading development company, we take pride in crafting digital
              solutions that transcend the ordinary and empower businesses to
              thrive in the ever-evolving digital landscape. At Joe DevTech, we
              are not just developer, we are architects of digital excellence.
              Established 2023, we have been at the forefront of the technology
              landscape, transforming ideas into innovative solutions that
              propel businesses forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
