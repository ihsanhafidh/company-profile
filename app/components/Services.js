import React from "react";

const Services = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 flex justify-center h-screen">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div className="aspect-[1097/845] w-[68.5625rem] bg-white opacity-20"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="flex justify-center text-3xl font-bold tracking-tight text-white sm:text-6xl">
            Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-center">
            Explore a new era of digital possibilities with our standout
            products at JOE DevTech. Each product is a testament to our
            commitment to pushing the boundaries of what technology can achieve.
            Welcome to a world of innovation and excellence!
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"></div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse"></div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;
