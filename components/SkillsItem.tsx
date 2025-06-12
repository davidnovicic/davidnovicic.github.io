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
        onClick={() => moreInfo()}
        className=" group-hover:translate-x-1 group-hover:-translate-y-1 hover:scale-120  hover:bg-transparent hover:border-1 duration-300 hover:text-white mt-10 bg bg-gray-300 text-zinc-800 text-sm rounded-full w-[85px] h-[30px]"
      >
        {" "}
        {stateInfo ? "More Info" : "Hide"}{" "}
      </button>
    </div>
  );
};

export default SkillsItem;
