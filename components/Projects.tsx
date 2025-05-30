"use client";

import React, { useEffect, useState } from "react";
import project1 from "../public/project1.jpg";
import project2 from "../public/project2.jpg";
import project3 from "../public/project3.jpg";
import project4 from "../public/project4.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import Image from "next/image";

const Projects = () => {
  const images = [
    {
      src: project1,
      name: "MERN stack",
      des: "A software solution for building applications that take your business to the next level by giving your customers the ability to purchase products online.",
    },
    {
      src: project2,
      name: "Computer Service",
      des: "A sleek, responsive website designed for businesses that specialize in laptop and desktop computer repairs.",
    },
    {
      src: project3,
      name: "E-commerce",
      des: "An e-commerce website and mobile application where customers can browse and purchase products online.",
    },
    {
      src: project4,
      name: "Real Estate Website",
      des: "A one-stop platform for everything related to real estate—buy, rent, or sell properties all in one place.",
    },
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= images.length) {
        clearInterval(interval);
      } else {
        setCount((count) => count + 1);
        counter++;
      }
    }, 250);
    return () => clearInterval(interval);
  }, [images, count]);

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
    <div className="">
      <div className="pt-[4rem] md:pt-[8rem] pb-40 bg-black flex flex-col items-center">
        <h1 className="mb-25 text-5xl text-zinc-200"> Projects </h1>

        <div className="bg-black gap-x-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-6 w-[60%] rounded-4xl">
          {images.slice(0, count).map((image, index) => {
            return (
              <div
                data-aos="fade-left"
                data-aos-delay="500"
                key={index}
                className="transform cursor-pointer hover:-translate-y-4 transition-all duration-500 bg-zinc-900 h-[450px] pt-10 p-4 rounded-2xl overflow-hidden mx-auto place-items-center items-center"
              >
                <h1 className="text-zinc-200 ml-2 pb-5 text-2xl">
                  {" "}
                  {image.name}{" "}
                </h1>

                <Image
                  src={image.src}
                  key={index}
                  alt=""
                  width={200}
                  height={200}
                  className="object-cover rounded-3xl pt-3"
                />
                <h1 className="text-zinc-200 pt-5"> {image.des} </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
