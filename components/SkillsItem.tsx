import React from "react";

interface Props {
  title: string;
  year: string;
}

const SkillsItem = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem] ">
      <span className="px-[2rem] text-zinc-300 py-[0.9rem] font-bold text-[18px] border-[2px]">
        {year}
      </span>
      <h1 className="mt-[2rem] capitalize font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-zinc-300">
        {title}
      </h1>
      <p className="text-zinc-300 font-normal w-[80%] text-[17px] opacity-80">
        Developed websites for small and medium business and e-commerce
        applications using React as frontend tool and Firebase for backend.
      </p>
    </div>
  );
};

export default SkillsItem;
