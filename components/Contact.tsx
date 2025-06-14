"use client";

import React from "react";

import form from "../public/form.jpg";
import Image from "next/image";
import { FaMapMarkedAlt, FaPaperPlane } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { sendEmail } from "@/app/actions/sendEmail";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="md:py-30 bg-blue-500 dark:bg-white flex flex-col-1 md:flex-cols-2"
    >
      <div className="grid grid-col-1 md:grid-cols-2 w-[60%] justify-center mx-auto gap-[2rem]">
        <div className="flex items-center">
          <div className="absolute z-10 flex flex-col ml-12 mt-17 ">
            <div className="flex -ml-5 md:ml-5 w-fit">
              <div className=" md:w-[6.5.rem] md:h-[6.5rem] w-[5rem] h-[5rem]">
                <FaMapMarkedAlt className="md:w-[4rem] md:h-[2rem] w-[2.5rem] h-[2.5rem] text-white" />
              </div>
              <div>
                <h1 className=" text-[17px] md:text-[25px] mb-[0.2rem] font-semibold text-white">
                  {" "}
                  Address{" "}
                </h1>
                <p className="text-[12px] md:text-[17px] text-white opacity-60 dark:text-white dark:opacity-90 w-fit">
                  Ratka Mitrovica 56
                </p>
              </div>
            </div>
            <div className="flex -ml-5 md:ml-5">
              <div className=" md:w-[6.5.rem] md:h-[6.5rem] w-[4rem] h-[3rem] rounded-full">
                <IoIosPhonePortrait className="md:w-[4rem] md:h-[2rem] w-[2.5rem] h-[2.5rem] text-white" />
              </div>
              <div>
                <h1 className="ml-5 text-[18px] md:text-[25px] mb-[0.2rem] font-semibold text-white">
                  {" "}
                  Phone{" "}
                </h1>
                <p className="ml-5 text-[12px] md:text-[17px]  text-green-500 opacity-60 dark:text-white dark:opacity-90">
                  {" "}
                  +381613309555{" "}
                </p>
              </div>
            </div>
            <div className="flex -ml-5 md:ml-5 mt-7 md:mt-1">
              <div className="md:w-[6.5.rem] md:h-[6.5rem] w-[5rem] rounded-full">
                <MdOutlineMailOutline className="md:w-[4rem] md:h-[2rem] w-[2.5rem] h-[2.5rem] text-white" />
              </div>
              <div>
                <h1 className="text-[18px] md:text-[25px] mb-[0.2rem] font-semibold text-white">
                  {" "}
                  Send Us Email{" "}
                </h1>
                <p className="text-[12px] md:text-[17px] text-green-500 opacity-60 dark:text-white dark:opacity-90">
                  {" "}
                  davidnovicic3@gmail.com{" "}
                </p>
              </div>
            </div>
          </div>
          <Image
            src={form}
            alt=""
            height={0}
            width={0}
            className="mt-10 h-150 w-110 object-fill brightness-15 dark:brightness-70"
          />
        </div>

        <div className="py-30 flex flex-col md:h-[600px] ">
          <h2 className="text-4xl text-white mt-15 dark:text-black">
            {" "}
            Contact Me{" "}
          </h2>
          <div className="pt-3">
            <p className="text-white dark:text-black">
              {" "}
              directly at{" "}
              <a
                className="underline dark:text-black"
                href="mailto:davidnovicic3@gmail.com"
              >
                {" "}
                davidnovicic3@gmail.com{" "}
              </a>{" "}
              or through this form.
            </p>

            <section className="">
              <form
                className="flex flex-col p-10 -ml-10"
                action={async (formData) => {
                  await sendEmail(formData);
                }}
              >
                <input
                  type="email"
                  name="senderEmail"
                  required
                  maxLength={500}
                  placeholder="Your email address here"
                  className="h-14 rounded-lg border border-gray-300 bg-gray-300 dark:bg-gray-100 dark:border-gray-300 dark:text-black p-2"
                />
                <textarea
                  name="message"
                  required
                  maxLength={5000}
                  placeholder="Message"
                  className="text-black h-52 my-3 rounded-lg borderBlack p-2 bg-gray-300 dark:bg-gray-100 dark:border-gray-300 dark:border"
                />
                <button
                  type="submit"
                  className="mt-1 group focus:scale-110 hover:scale-105 hover:bg-gray-400 active:scale-105 flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-300 text-gray-700 dark:bg-gray-200 rounded-full outline-none transition-all"
                >
                  Submit{" "}
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 hover:scale-110 active:scale-105 text-xs opacity-70 transition-all" />
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
