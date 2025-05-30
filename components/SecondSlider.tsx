"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";

import azure from "../public/azure.jpg";
import expert from "../public/expert.jpg";
import associate from "../public/associate.jpg";
import cisco from "../public/cisco.jpg";

const SecondSlider = () => {
  const images = [azure, expert, associate, cisco];

  return (
    <div className="bg-black md:pt-[1rem]">
      <div className=" bg-zinc-800 mx-auto p-10 w-[60%] flex items-top justify-center">
        <div className=" bg-blue-100 flex h-[300px] w-[70%] items-center justify-center overflow-x-hidden ">
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
    </div>
  );
};

export default SecondSlider;
