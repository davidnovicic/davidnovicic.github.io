import { Button } from "../components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-black ">
        <div className="mt-40 text-center space-y-5 max-w-2xl z-10 h-[50%]">
          {/* <p className="py-1 px-2 backdrop-blur-sm font-light bg-transparent text-gray-200 inline-block"> 
          Hello! This is my portfolio page
          </p> */}
          <div className="space-y-3">
            <h1 className="text-7xl tracking-tight bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 text-transparent h-20 font-semibold">
              {" "}
              Welcome{" "}
            </h1>
          </div>
          <p className="text-gray-400 text-lg text-pretty mt-10">
            This is a portfolio page. My name is David. My occupation is
            technology. <br /> I provide services regarding{" "}
            <span className="bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500 text-transparent font-semibold">
              cloud, networking and software development.
            </span>{" "}
          </p>
          <div className="space-x-3 mt-14">
            <Link href="#About">
              <Button
                variant="default"
                className="rounded-lg hover:bg-transparent bg-gray-200 hover:border-1 hover:text-white text-black"
              >
                {" "}
                More info{" "}
              </Button>
            </Link>

            <Link href="#Contact">
              <Button
                variant="secondary"
                className="rounded-lg text-white bg-transparent hover:bg-gray-200 hover:text-black border-1 "
              >
                {" "}
                Contact{" "}
              </Button>
            </Link>

            <Link href="https://github.com/davidnovicic">
              <FaGithub className="text-white text-4xl ml-41 mt-5 md:-mt-9 md:ml-150 absolute" />
            </Link>
            <Link href="https://www.linkedin.com/in/david-novicic-zdravkovic-433060296/">
              <FaLinkedin className=" text-white text-4xl ml-54 mt-5 md:-mt-9 md:ml-139" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
