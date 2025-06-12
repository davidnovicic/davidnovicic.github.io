"use client";

import Image from "next/image";

import { motion } from "motion/react";

import azure from "../public/azure.jpg";
import expert from "../public/expert.jpg";
import associate from "../public/associate.jpg";
import cisco from "../public/cisco.jpg";

const SecondSlider = () => {
  const images = [azure, expert, associate, cisco];

  return (
    <div className="bg-black overflow-x-hidden py-20">
      <div className="relative">
        <div className=" rounded-md relative z-20 w-[80%] md:w-[60%] mx-auto">
          <div className="bg-black md:pt-[1rem] flex md:w-[100%] mx-auto overflow-hidden rounded-lg">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="h-[300px] flex flex-shrink-0 items-center"
            >
              {images.map((image, index) => {
                if (image === azure) {
                  return (
                    <Image
                      src={image}
                      key={index}
                      alt=""
                      width={440}
                      height={440}
                      className="pr-12"
                    />
                  );
                } else {
                  return (
                    <Image
                      src={image}
                      key={index}
                      alt=""
                      width={380}
                      height={380}
                      className="pr-12"
                    />
                  );
                }
              })}
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="h-[300px] flex flex-shrink-0 items-center"
            >
              {images.map((image, index) => {
                if (image === azure) {
                  return (
                    <Image
                      src={image}
                      key={index}
                      alt=""
                      width={440}
                      height={440}
                      className="pr-12"
                    />
                  );
                } else {
                  return (
                    <Image
                      src={image}
                      key={index}
                      alt=""
                      width={380}
                      height={380}
                      className="pr-12"
                    />
                  );
                }
              })}
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="h-[300px] flex flex-shrink-0 items-center"
            >
              {images.map((image, index) => {
                if (image === azure) {
                  return (
                    <Image
                      src={image}
                      key={index}
                      alt=""
                      width={440}
                      height={440}
                      className="pr-12"
                    />
                  );
                } else {
                  return (
                    <Image
                      src={image}
                      key={index}
                      alt=""
                      width={380}
                      height={380}
                      className="pr-12"
                    />
                  );
                }
              })}
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="h-[300px] flex flex-shrink-0 items-center"
            >
              {images.map((image, index) => {
                if (image === azure) {
                  return (
                    <Image
                      src={image}
                      key={index}
                      alt=""
                      width={440}
                      height={440}
                      className="pr-12"
                    />
                  );
                } else {
                  return (
                    <Image
                      src={image}
                      key={index}
                      alt=""
                      width={380}
                      height={380}
                      className="pr-12"
                    />
                  );
                }
              })}
            </motion.div>
          </div>
        </div>
        <div className="w-[83%] md:w-[60%] mx-auto absolute -inset-1 rounded-md blur-md bg-gradient-to-br bg-gray-400 z-10"></div>
      </div>
    </div>
  );
};

export default SecondSlider;
