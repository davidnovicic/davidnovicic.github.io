import React from "react";
import SkillsItem from "./SkillsItem";

import SecondSlider from "./SecondSlider";

const Skills = () => {
  return (
    <div className="bg-black pb-7">
      <div className="pt-[4rem] md:pt-[6rem] pb-[1rem] bg-zinc-800 mx-auto w-[60%] place-items-top">
        <h1 className="text-center justify-center text-zinc-300 text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
          {" "}
          Education & <span> Skill </span>{" "}
        </h1>
        <div className="w-[68%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-top ">
          <div>
            <SkillsItem title="React Developer" year="2024" />
          </div>
          <div>
            <SkillsItem title="Azure Administrator Associate" year="2023" />
          </div>
          <div>
            <SkillsItem title="Cisco Certified Network Associate" year="2023" />
          </div>
          <div>
            <SkillsItem
              title="Microsoft Certificate Solution Expert"
              year="2019"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
