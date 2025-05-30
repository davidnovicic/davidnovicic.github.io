"use client";

import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import azure from "../public/azure.jpg";
import expert from "../public/expert.jpg";
import associate from "../public/associate.jpg";
import cisco from "../public/cisco.jpg";

interface Props {
  images: string;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = () => {
  return (
    <div className="mt-6 rounded-2xl px-3 py-3 w-140 h-60 max-w-2xl mx-auto item-center">
      <Carousel responsive={responsive} autoPlay={true} infinite={true}>
        <Image
          src={azure}
          width={350}
          height={350}
          alt=""
          className="rounded-2xl ml-23 mt-7"
        />
        <Image
          src={cisco}
          width={350}
          height={350}
          alt=""
          className="rounded-2xl ml-23"
        />
        <Image
          src={expert}
          width={350}
          height={350}
          alt=""
          className="rounded-2xl ml-23"
        />
        <Image
          src={associate}
          width={350}
          height={350}
          alt=""
          className="rounded-2xl ml-23"
        />
      </Carousel>
    </div>
  );
};

export default Slider;
