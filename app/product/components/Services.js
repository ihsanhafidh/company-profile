import React from "react";

const ServicesComp = () => {
  return (
    <section>
      <header className="text-center p-12 ">
        <h1 className="font-bold text-4xl text-zinc-800 pb-4 pt-10">
          Our Services
        </h1>
      </header>
      <section className="bg-zinc-700 flex justify-center">
        <ul className=" grid grid-cols-2 max-md:grid-cols-1 mt-6 gap-4 text-center xl:p-20 max-md:p-8">
          <li className="xl:hover:bg-white max-md:bg-white max-xl:bg-white  xl:w-96 h-64 max-md:p-2 max-xl:p-2 xl:hover:shadow-xl max-xl:shadow-xl max-md:shadow-xl group xl:hover:rounded-xl max-md:rounded-xl max-xl:rounded-xl flex flex-col items-center justify-center">
            <h2 className="font-bold my-1">Web Development</h2>
            <p>
              In the realm of web development, we are more than just coders, we
              are storytellers. Our expertise extends from crafting visually
              stunning websites to developing dynamic web applications that
              drive user engagement.
            </p>
          </li>
          <li className="xl:hover:bg-white max-md:bg-white max-xl:bg-white  xl:w-96 h-64 max-md:p-2 max-xl:p-2 xl:hover:shadow-xl max-xl:shadow-xl max-md:shadow-xl group xl:hover:rounded-xl max-md:rounded-xl max-xl:rounded-xl flex flex-col items-center justify-center">
            <h2 className="font-bold my-1 ">Mobile Development</h2>
            <p>
              Mobile apps are the heartbeat of the modern digital experience,
              and our mobile app development team is at the forefront of this
              revolution.
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default ServicesComp;
