"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import logo from "../public/logo.jpg";
import frontend from "../public/frontend.jpg";
import project1 from "../public/project1.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Services = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div
      id="Services"
      className="bg-black dark:bg-white pb-[3rem] overflow-x-hidden"
    >
      <p className="ml-22 lg:ml-97 text-left pt-25 text-[28px] sm:text-[33px] md:text-[45px] font-bold">
        {" "}
        <span className="bg-clip-text text-zinc-300 dark:text-black semi-bold ">
          {" "}
          My Services{" "}
        </span>{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[60%] mx-auto items-center justify-center gap-[3rem] mt-[3rem] text-zinc-300">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="rounded-2xl h-[400px] md:h-[380px] bg-zinc-900 dark:bg-gray-100 hover:scale-110 font-semibold text-center p-[2rem]"
        >
          {" "}
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] dark:text-zinc-900 ">
            {" "}
            Frontend{" "}
          </h1>
          <div className="items-center justify-center flex pb-6">
            {" "}
            <Image src={frontend} alt="" width={70} />
          </div>
          <p className="text-[15px] dark:text-zinc-900 ">
            {" "}
            Gain an advantage by owning a modern website built with the latest
            technologies and solutions, taking your website—and your business—to
            the next level.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="rounded-2xl h-[380px] items-center justify-center bg-zinc-900 dark:bg-gray-100  hover:scale-[1.1]  transition-all duration-300 font-semibold text-center p-[2rem]"
        >
          {" "}
          <h1 className="dark:text-zinc-900 text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">
            {" "}
            Azure
          </h1>
          <div className="items-center justify-center flex pb-6">
            <Image src={logo} alt="" width={70} className="" />
          </div>
          <p className="text-[15px] dark:text-zinc-900">
            Microsoft Azure provides cutting-edge solutions for securing,
            backing up, and ensuring your business remains highly reliable.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="700"
          className="rounded-2xl bg-zinc-900 dark:bg-gray-100 hover:scale-[1.1] transition-all duration-300 font-semibold text-center p-[2rem] h-[380px]"
        >
          {" "}
          <h1 className="dark:text-zinc-900 text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">
            {" "}
            MERN stack{" "}
          </h1>
          <div className="items-center justify-center flex pb-6">
            <Image src={project1} alt="" width={170} className="" />
          </div>
          <p className="dark:text-zinc-900 text-[15px] pb-4 ">
            {" "}
            E-commerce website - online shop where you can sell your products
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
