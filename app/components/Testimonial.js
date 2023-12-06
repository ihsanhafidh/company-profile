import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <>
      <section id="testimoni">
        <div className="max-w-6xl px-5 mx-auto mt-20 text-center h-screen">
          <h1 className="text-4xl font-bold text-center">Testimonial</h1>
          <div className="flex flex-col mt-15 md:flex-row md:space-x-6">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <Image
                quality={100}
                loading="eager"
                src="/asep.png"
                width={100}
                height={100}
                className="w-16 mt-5 rounded-full"
                alt="Avatar Testimoni"
              />
              <h3 className="text-lg font-bold text-cyan-700">Asep Surasep</h3>
              <p className="text-sm text-darkGrayishBlue">
                "Working with JOE DevTech has been a game-changer for our
                business. Their innovative approach to web development
                transformed our online presence, and the results exceeded our
                expectations. The team's dedication, attention to detail, and
                commitment to delivering quality solutions make them our go-to
                partner for digital success."
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 ">
              <Image
                quality={100}
                loading="eager"
                src="/ujang.png"
                width={100}
                height={100}
                className="w-16 mt-5 rounded-full"
                alt="Avatar Testimoni"
              />
              <h3 className="text-lg font-bold text-cyan-700">Ujang Kopling</h3>
              <p className="text-sm text-darkGrayishBlue">
                "Choosing JOE DevTech for our custom software development needs
                was one of the best decisions we made. Their team's technical
                expertise, coupled with a deep understanding of our business
                requirements, resulted in a tailored solution that streamlined
                our processes and significantly improved efficiency. The level
                of professionalism and commitment to client success is truly
                commendable."
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <Image
                quality={100}
                loading="eager"
                width={100}
                height={100}
                src="/maman.png"
                className="w-16 mt-5 rounded-full"
                alt="Avatar Testimoni"
              />
              <h3 className="text-lg font-bold text-cyan-700">Maman Resing</h3>
              <p className="text-sm text-darkGrayishBlue">
                "I can't speak highly enough about JOE DevTech. Their mobile app
                development team brought our vision to life with a level of
                creativity and professionalism that is unmatched. The
                collaborative process was seamless, and the final product not
                only met but surpassed our expectations. I highly recommend JOE
                DevTech for anyone seeking top-notch app development."
              </p>
            </div>
          </div>
          <div className="my-8 font-bold"></div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
