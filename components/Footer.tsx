import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="text-zinc-300 pt-[2rem] bg-black ">
      <div className="bg-black lg:ml-95 grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[60%] mx-auto gap-[3rem] p-10">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5.rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full bg-black">
            <FaMapMarkedAlt className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-green-600" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              {" "}
              Address{" "}
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              {" "}
              Ratka Mitrovica 56{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5.rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full bg-black">
            <IoIosPhonePortrait className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-green-600" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              {" "}
              Phone{" "}
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              {" "}
              +381613309555{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5.rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full bg-black">
            <MdOutlineMailOutline className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-green-600" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              {" "}
              Send Us Email{" "}
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              {" "}
              davidnovicic3@gmail.com{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="ml-95 pb-3 w-[70%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-30">
          Developed by Davidn | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
