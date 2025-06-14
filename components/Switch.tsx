"use client";

import React, { useEffect, useState } from "react";

import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";

type Theme = "light" | "dark";

const Switch = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");

      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      if (theme === "dark") {
        setTheme("light");
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else if (localTheme === "light") {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="fixed rounded-full bg-black/50 flex items-center justify-center top-25 right-2 md:top-10 md:right-20 text-white w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] hover:scale-[1.3] active:scale-105 transition-all "
    >
      {theme === "dark" ? (
        <IoIosMoon className="text-xl md:text-2xl" />
      ) : (
        <IoIosSunny className="text-xl md:text-2xl" />
      )}
    </button>
  );
};
export default Switch;
