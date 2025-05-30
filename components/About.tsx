import React from "react";

import Slider from "@/components/Slider";

const About = () => {
  return (
    <div className="flex h-150 w-full">
      <div className="px-20 bg-white w-full flex h-150 space-x-3 items-center justify-center">
        <div className="bg-gray-300 w-full ml-3 h-140 rounded-4xl">
          <p className="text-gray-900 text-left mt-20 ml-80 text-4xl">
            <span className="break-normal bg-clip-text bg-gradient-to-r  from-purple-600 via-blue-700 to-blue-500 text-transparent font-semibold text-center">
              {" "}
              Certificates,
            </span>{" "}
            <br />
            <span className="text-xl -ml-8">
              {" "}
              i got over the past few years.
            </span>
          </p>
          <div className="">
            <Slider />
          </div>
        </div>
        <div className="bg-black mr-3 p-8 w-full h-140 rounded-4xl relative ">
          <div className="">
            <video
              autoPlay={true}
              muted
              loop
              className="px-5 ml-5 flex items-center mt-3"
            >
              <source src="/brain.mp4" />
            </video>
            <h2 className="text-white bottom-0 mb-10 text-sm ml-55 absolute z-10">
              {" "}
              Experience the modern technology in the right way.{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
