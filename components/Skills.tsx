"use client";

import React, { useState } from "react";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  const [moreInfo, setMoreInfo] = useState(true);

  function handleInfo() {
    setMoreInfo(!moreInfo);
  }

  return (
    <div id="About" className="bg-black dark:bg-white pb-7 overflow-x-hidden ">
      <div className="pt-[4rem] md:pt-[3rem] mx-auto w-[100%] md:w-[60%] items-top ">
        <h1 className="text-center justify-center text-zinc-300 dark:text-black text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
          {" "}
          Education & <span> Skill </span>{" "}
        </h1>
        <div className=" w-[100%] items-center justify-center pt-[4rem] md:pt-[5rem] grid grid-col-1 md:grid-cols-2 gap-[2rem]">
          <div
            className={`bg-zinc-900 dark:bg-gray-100 rounded-3xl md:rounded-none ${
              moreInfo
                ? "w-[320px] h-[370px] md:w-[560px] md:h-[380px]"
                : "w-[400px] h-[450px] md:w-[560px] md:h-[480px]"
            } `}
          >
            <SkillsItem
              moreInfo={handleInfo}
              stateInfo={moreInfo}
              title="React Developer"
              year="2024"
              des="Developed websites and e-commerce applications using React and Next.js for frontend and Firebase for backend solution. I am also experimented with MongoDB and Django writing simple models using Python."
            />
          </div>
          <div
            className={`bg-zinc-900 dark:bg-gray-100  rounded-3xl md:rounded-none ${
              moreInfo
                ? "w-[320px] h-[370px] md:w-[560px] md:h-[380px]"
                : "w-[400px] h-[540px] md:w-[560px] md:h-[480px]"
            } `}
          >
            <SkillsItem
              moreInfo={handleInfo}
              stateInfo={moreInfo}
              des="Since the modern system administration for most businesses evolved and went to cloud, I decided to learn about Azure and I got my certificate.I saw the real power in Cloud computing after I started programming and using tools like Terraform integrated with Azure to build environments along side with Azure Web Apps and Azure Devops to deploy and test my applications."
              title="Azure Administrator Associate"
              year="2023"
            />
          </div>
          <div
            className={`bg-zinc-900 dark:bg-gray-100  rounded-3xl md:rounded-none ${
              moreInfo
                ? "w-[320px] h-[370px] md:w-[560px] md:h-[380px]"
                : "w-[400px] h-[470px] md:w-[560px] md:h-[460px]"
            } `}
          >
            <SkillsItem
              moreInfo={handleInfo}
              stateInfo={moreInfo}
              des="True learning for me started here. During studying for my Microsoft Certificate Solution Associate exam networking was introduced to me and I loved it, so i decided to go further. It helped me later a lot on my Azure journey to build environments and connect the various systems together."
              title="Cisco Certified Network Associate"
              year="2023"
            />
          </div>
          <div
            className={`bg-zinc-900 dark:bg-gray-100  rounded-3xl md:rounded-none ${
              moreInfo
                ? "w-[320px] h-[370px] md:w-[560px] md:h-[380px]"
                : "w-[400px] h-[450px] md:w-[560px] md:h-[460px]"
            } `}
          >
            <SkillsItem
              moreInfo={handleInfo}
              stateInfo={moreInfo}
              des="This was the next step after MCSA (first exam in Microsoft journey) exam, went for it not because it was necessary for my job, I just wanted to learn a bit more."
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
