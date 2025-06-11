"use client";

import React, { useState } from "react";

interface Props {
  title: string;
  year: string;
  des: string;
  moreInfo: Function;
  stateInfo: boolean;
}

const SkillsItem = ({ title, year, des, moreInfo, stateInfo }: Props) => {
  return (
    <div className="mt-12 md:mt-15 ml-15 mb-10 items-center justify-center ">
      <span className="px-[2rem] text-zinc-300 py-[0.9rem] font-bold text-[20px] border-[2px]">
        {year}
      </span>
      <h1 className=" capitalize font-semibold mb-[1rem] mt-9 text-[20px] sm:text-[25px] md:text-[25px] text-zinc-300 ">
        {title}
      </h1>
      <p
        className={`pt-2 text-zinc-300 font-normal w-[80%] md:text-[17px] opacity-80 ${
          stateInfo ? "line-clamp-3" : ""
        }`}
      >
        {des}
      </p>
      <button
        onClick={() => moreInfo(!stateInfo)}
        className=" mt-10 bg bg-gray-300 text-zinc-800 text-sm rounded-full w-[85px] h-[30px] overflow-hidden"
      >
        {" "}
        {stateInfo ? "More Info" : "Hide"}{" "}
      </button>
    </div>
  );
};

export default SkillsItem;
