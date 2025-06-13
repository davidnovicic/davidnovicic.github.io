"use client";

interface Props {
  title: string;
  year: string;
  des: string;
  moreInfo: () => void;
  stateInfo: boolean;
}

const SkillsItem = ({ title, year, des, moreInfo, stateInfo }: Props) => {
  return (
    <div className=" mt-15 md:mt-15 ml-10 mb-10 items-center justify-center ">
      <span className=" px-[2rem] text-zinc-300 dark:text-black py-[0.9rem] font-bold text-[20px] border-[2px]">
        {year}
      </span>
      <h1 className=" capitalize font-semibold mb-[1rem] mt-9 text-[20px] sm:text-[25px] md:text-[25px] text-zinc-300 dark:text-black ">
        {title}
      </h1>
      <p
        className={`pt-2 text-zinc-300 dark:text-black font-normal w-[80%] md:text-[17px] opacity-80 ${
          stateInfo ? "line-clamp-3" : ""
        }`}
      >
        {des}
      </p>
      <button
        onClick={() => moreInfo()}
        className=" group-hover:translate-x-1 group-hover:-translate-y-1 hover:scale-120  hover:bg-transparent hover:border-1 duration-300 hover:text-white mt-10 bg-zinc-800 dark:bg-gray-200 dark:border dark:border-gray-500 dark:text-gray-700 text-white text-sm rounded-full w-[85px] h-[30px]"
      >
        {" "}
        {stateInfo ? "More Info" : "Hide"}{" "}
      </button>
    </div>
  );
};

export default SkillsItem;
