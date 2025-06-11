"use client";

import React, { useEffect, useRef, useState } from "react";

import project2 from "../public/project2.jpg";

import project4 from "../public/project4.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

const Projects = () => {
  const images = [
    {
      src: project2,
      name: "Marketing Agency",
      des: "A sleek, responsive website designed for marketing agency.",
    },
    {
      src: project4,
      name: "Real Estate Website",
      des: "A one-stop platform for everything related to real estate—buy, rent, or sell properties all in one place.",
    },
  ];

  const [moreInfo, setMoreInfo] = useState(-1);

  const handleInfo = (divId: any) => {
    setMoreInfo(divId);
  };

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
    <div className="overflow-x-hidden">
      {moreInfo === -1 && (
        <div className="">
          <div id="Projects" className=" bg-black py-10">
            <h1
              data-aos="fade-right"
              data-aos-delay="600"
              className="text-zinc-300 ml-25 md:ml-95 py-20 text-5xl"
            >
              {" "}
              Projects{" "}
            </h1>

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 md:w-[60%] mx-auto justify-center items-center gap-[3rem]">
              {images.map((image, index) => {
                return (
                  <div key={index} className="">
                    <h1 className=" text-zinc-300 whitespace-nowrap text-[20px] md:text-[18px]">
                      {" "}
                      {image.name}{" "}
                    </h1>
                    <div
                      data-aos="fade-left"
                      data-aos-delay="800"
                      className="-mt-1 md:-mt-3 relative h-[270px] bg-zinc-800  hover:scale-105 transform transition-all duration-700 font-semibold"
                    >
                      <Image
                        src={image.src}
                        alt=""
                        priority
                        className="h-[220px] w-[250px] mt-6 pt-10 flex justify-center items-center"
                      />
                      <button
                        onClick={() => handleInfo(index)}
                        className="absolute bottom-0 left-0 ml-6 mb-3 mt-1 group focus:scale-110 hover:scale-105 hover:bg-gray-400 active:scale-105 flex items-center justify-center gap-2 h-[1.5rem] w-[5rem] bg-gray-200 text-zinc-900 border-1 border-gray-300 rounded-full outline-none transition-all text-xs"
                      >
                        {" "}
                        More Info
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Marketing Agency More Info div */}

      {moreInfo === 0 && (
        <div className="bg-black py-12">
          <Link href="#Projects">
            {" "}
            <button
              onClick={() => handleInfo(-1)}
              className="ml-25 md:ml-95 bg-zinc-800 text-zinc-300 text-4xl h-[50px] w-[50px] items-center justify-center flex rounded-full"
            >
              {" "}
              <FaArrowLeftLong />{" "}
            </button>{" "}
          </Link>
          <div className="ml-3 md:ml-103 bg-black mt-3 pb-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 w-[40%]">
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="mt-2 ml-25 md:-ml-7 bg-zinc-800 w-[340px] h-[350px] md:w-[450px] md:h-[350px] "
            >
              <div className="mt-10 ml-10">
                <h1 className="text-xl md:text-3xl text-zinc-200 font-semibold">
                  {" "}
                  Marketing Agency{" "}
                  <span className="text-xl md:text-3xl text-zinc-400">
                    {" "}
                    Website{" "}
                  </span>{" "}
                </h1>
                <p className="my-3 text-zinc-400 text-[0.9rem] ">
                  Basic website with multiple pages, but modern and
                  representative, designed to attract future clients and get
                  your business to the next level.
                  <br />
                </p>
                <div className="flex items-center -mt-5 -ml-5 md:-ml-10">
                  <Image
                    src={project2}
                    alt=""
                    className="h-40 w-50 justify-center flex rounded-full"
                  />
                  <a
                    className="text-zinc-300 underline"
                    href="https://www.youtube.com/"
                  >
                    {" "}
                    link to the website{" "}
                  </a>
                </div>
              </div>
              <div className="flex">
                <p className="ml-10 bg-zinc-300 text-zinc-800 text-[0.7rem] rounded-full w-[50px] md:w-[75px] md:h-[25px] flex justify-center items-center">
                  {" "}
                  REACT{" "}
                </p>
                <p className="ml-2 bg-zinc-300 text-zinc-800 text-[0.7rem] rounded-full w-[60px] md:w-[75px] md:h-[25px] flex justify-center items-center">
                  {" "}
                  TAILWIND{" "}
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="ml-27 md:ml-70 mt-7 md:mt-12 w-[270px] "
            >
              <h1 className="ml-1 text-zinc-300 whitespace-nowrap text-[20px] md:text-[18px]">
                Real Estate Website
              </h1>
              <div className="-mt-1 md:-mt-3 relative h-[270px] bg-zinc-800  hover:scale-105 transform transition-all duration-700 font-semibold">
                <Image
                  src={project4}
                  alt=""
                  priority
                  className="h-[220px] w-[250px] mt-6 pt-10 flex justify-center items-center"
                />
                <button
                  onClick={() => handleInfo(1)}
                  className="absolute bottom-0 left-0 ml-6 mb-3 mt-1 group focus:scale-110 hover:scale-105 hover:bg-gray-400 active:scale-105 flex items-center justify-center gap-2 h-[1.5rem] w-[5rem] bg-gray-200 text-zinc-900 border-1 border-gray-300 rounded-full outline-none transition-all text-xs"
                >
                  {" "}
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Real Estate More Info div */}

      {moreInfo === 1 && (
        <div className="bg-black py-12">
          <Link href="#Projects">
            {" "}
            <button
              onClick={() => handleInfo(-1)}
              className="ml-25 md:ml-95 bg-zinc-800 text-zinc-300 text-4xl h-[50px] w-[50px] items-center justify-center flex rounded-full"
            >
              {" "}
              <FaArrowLeftLong />{" "}
            </button>{" "}
          </Link>
          <div className="w-[40%] ml-27 md:ml-98 bg-black pt-2 md:pt-10 pb-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h1 className="mt-1 md:mt-10 text-zinc-300 whitespace-nowrap text-[20px] md:text-[18px]">
                Marketing Agency
              </h1>
              <div
                data-aos="fade-left"
                data-aos-delay="400"
                className="-mt-1 relative h-[270px] w-[280px] bg-zinc-800  hover:scale-105 transform transition-all duration-100 font-semibold"
              >
                <Image
                  src={project2}
                  alt=""
                  priority
                  className="h-[220px] w-[250px] mt-6 pt-10 flex justify-center items-center"
                />
                <button
                  onClick={() => handleInfo(0)}
                  className="absolute bottom-0 left-0 ml-6 mb-3 mt-1 group focus:scale-110 hover:scale-105 hover:bg-gray-400 active:scale-105 flex items-center justify-center gap-2 h-[1.5rem] w-[5rem] bg-gray-200 text-zinc-900 border-1 border-gray-300 rounded-full outline-none transition-all text-xs"
                >
                  {" "}
                  More Info
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="mt-7 md:mt-14 md:ml-30 bg-zinc-800 w-[340px] h-[400px] md:w-[500px] md:h-[300px] "
            >
              <div className="py-10 mt-7 md:py-1 ml-10 ">
                <h1 className="text-2xl md:text-3xl text-zinc-200 font-semibold">
                  {" "}
                  Real Estate{" "}
                  <span className="text-2xl md:text-3xl text-zinc-400">
                    {" "}
                    Website{" "}
                  </span>{" "}
                </h1>
                <p className="my-3 mt-3 text-zinc-400 text-sm md:text-[15px] ">
                  Place where you can rent, buy or sell real estate.
                  <br />
                  You will be able to login using google account and manage your
                  profile page and your real estate from there.
                </p>
                <div className="flex items-center -ml-6">
                  <Image
                    src={project4}
                    alt=""
                    className="h-20 w-20 md:h-20 md:w-22 justify-center flex rounded-full"
                  />
                  <a
                    className="text-zinc-300 underline"
                    href="https://www.youtube.com/"
                  >
                    {" "}
                    link to the website{" "}
                  </a>
                </div>
              </div>
              <div className="flex mt-5">
                <p className="ml-10 bg-zinc-300 text-zinc-800 text-[0.7rem] rounded-full w-[50px] md:w-[75px] md:h-[25px] flex justify-center items-center">
                  {" "}
                  REACT{" "}
                </p>
                <p className="ml-2 bg-zinc-300 text-zinc-800 text-[0.7rem] rounded-full w-[60px] md:w-[75px] md:h-[25px] flex justify-center items-center">
                  {" "}
                  TAILWIND{" "}
                </p>
                <p className="ml-2 bg-zinc-300 text-zinc-800 text-[0.7rem] rounded-full w-[60px] md:w-[75px] md:h-[25px] flex justify-center items-center">
                  {" "}
                  FIREBASE{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
