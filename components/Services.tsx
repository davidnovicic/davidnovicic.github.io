import Image from "next/image";
import React from "react";
import azurelogo from "../public/azurelogo.jpg";
import mern from "../public/mern.jpg";
import saas from "../public/saas.jpg";
import webdev from "../public/webdev.jpg";
import webdeveloping from "../public/webdeveloping.jpg";

const Services = () => {
  return (
    <div className="mb-30 w-full h-150 mt-20">
      <h2 className=" text-gray-500 text-left ml-25 text-5xl font-semibold">
        {" "}
        Those are some of{" "}
        <span className="text-gray-900">
          {" "}
          many
          <br />
        </span>{" "}
        <span className=""> services my team and I could help you with. </span>
      </h2>
      <div className="space-x-3 mt-20 flex justify-center items-center">
        <div className="text-3xl w-210 h-110 text-gray-400 relative ">
          <button className="bottom-10 ml-75 rounded-4xl absolute bg-blue-500 hover:bg-blue-800 text-white text-sm w-30 h-10 z-10">
            {" "}
            Learn More{" "}
          </button>
          <button className="bottom-10 ml-110 rounded-4xl absolute bg-blue-500 hover:bg-blue-800 text-white text-sm w-30 h-10 z-10">
            {" "}
            Contact{" "}
          </button>
          <Image
            src={saas}
            alt=""
            className="h-full w-full object-center brightness-50"
          />{" "}
          {/* <h1 className="ml-10 mt-7">
            {" "}
            <span className="text-xl"> Got ideas for software, </span>
            <br />
            <span className="text-2xl font-semibold">
              {" "}
              we can make it TRUE through SaaS{" "}
            </span>
          </h1> */}
        </div>

        <div className="text-left text-3xl w-210 h-110 text-gray-800 relative items-center">
          <button className="ml-75 bg-blue-500 hover:bg-blue-800 rounded-4xl w-30 h-10 text-white text-sm absolute z-10 bottom-10">
            Learn more
          </button>
          <button className="ml-110 bg-blue-500 hover:bg-blue-800 rounded-4xl w-30 h-10 text-white  text-sm absolute z-10 bottom-10">
            {" "}
            Contact{" "}
          </button>
          <Image
            src={webdev}
            alt=""
            className="h-full w-full object-center brightness-60"
          />

          {/* 
            <h1 className="mt-7 ml-10">
              <span className="text-xl ">
                Find and choose any website and we can make it yours,
                <br />
                or let us
                <span className="text-3xl font-semibold"> Design it. </span>
              </span>
            </h1> */}
        </div>
        {/* <div className=" text-3xl w-150 h-110 text-gray-800 rounded-4xl">
          <Image
            src={azurelogo}
            alt=""
            className="h-full w-full object-none brightness-50 "
          />
          <h1 className="mt-7 text-left ml-10">
            {" "}
            <span className="text-xl">Find out how </span>
            <span className="text-2x text-blue-500 font-semibold">
              {" "}
              Azure,{" "}
            </span>
            <br />
            <span> can help you achieve your goals. </span>
          </h1>
        </div> */}
        {/* <div className="text-3xl w-150 h-110 text-gray-800 rounded-4xl">
          <Image
            src={saas}
            alt=""
            className="w-full h-full object-none brightness-60 "
          />

          <h1 className="mt-7 ml-10 text-left">
            {" "}
            <span className="text-2xl font-semibold"> MERN </span>{" "}
            <span className="text-xl"> Stack, </span>
            <br />
            <span className="text-xl">
              {" "}
              get your modern e-commerce{" "}
              <span className="text-2xl font-semibold "> Online Shop </span> and
              get your business to the next level.{" "}
            </span>
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
