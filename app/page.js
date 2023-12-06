import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Overview from "./components/Overview";
import Testimonial from "./components/Testimonial";

export const metadata = {
  title: "JOE DevTech",
  description:
    "Embark on a journey of digital transformation with JOE DevTech. Let's turn your vision into reality!",
  openGraph: {
    title: "JOE DevTech",
    description:
      "Embark on a journey of digital transformation with JOE DevTech. Let's turn your vision into reality!",
    images: "/home4.jpg",
  },
};

const page = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Services />
      <Testimonial />
    </>
  );
};

export default page;
