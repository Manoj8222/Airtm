import React, { useState } from "react";
import atmcard from "./atmcard1.png";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import done from "./images/done.jpg";
import mc from "./images/mc.webp";
import fl from "./images/fl.avif";
import lg from "./images/lg.webp";
import ar from "./images/ar.png";
import am from "./images/am.png";
import bb from "./images/bb.png";
import Atmcard from "./Atmcard";
import Button from "./Button";
import Navbar from "../../Navbar";
import Done from "./done.svg";
import { setlast } from "../../../store/Slice";

function MainHome() {
  const dispatch = useDispatch();
  const HandleNextComponent = () => {
    SetGetStarted(!getStarted);
  };

  const NextHandleFunction = () => {
    setNext(false);
  };
  const handleEnd = () => {
    setThanks(false), dispatch(setlast());
  };
  // const lastpage = useSelector((state) => state.thanks);
  // console.log(lastpage);

  const [getStarted, SetGetStarted] = useState(true);
  const [onTap, SetonTap] = useState(false);
  const [next, setNext] = useState(true);
  const [third, setThird] = useState(true);
  const [verifyPin, setVerifyPin] = useState(true);
  const [reType, setRetype] = useState(true);
  const [addmoney, setAddmoney] = useState(true);
  const [thanks, setThanks] = useState(true);
  return (
    <>
      {/* {!addmoney ? <Navbar lastPage={false} /> : <Navbar lastPage={true} />} */}
      <div className=" felx gap-5 ">
        {getStarted && (
          <div className="pt-10">
            <Atmcard className={"h-60 m-auto drop-shadow-2xl shadow-2xl"} />
          </div>
        )}
        <div>
          <AnimatePresence>
            {reType && addmoney && !getStarted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // transition={{ delay: 1.5 }}
                exit={{ opacity: 0, duration: 3, delay: 3 }}
              >
                <div className="">
                  <div className="flex  mx-auto">
                    <svg
                      className="ml-16 text-3xl"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                    <div className="flex ml-[16vw] gap-40">
                      <p>Select card theme</p>
                      <p
                        className={`${third ? "text-gray-400" : "text-black"}`}
                      >
                        Set pin{" "}
                      </p>
                      <p
                        className={`${reType ? "text-gray-400" : "text-black"}`}
                      >
                        Add money
                      </p>
                    </div>
                  </div>
                  <div className="flex ml-[27vw] items-center">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="blue"
                    >
                      <path d="M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
                    </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12"
                      width="12"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#0536fa"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                      />
                    </svg>
                    {third && (
                      <div
                        className={`h-[2px] w-[12vw] rounded-lg bg-gray-300 `}
                      ></div>
                    )}
                    {!third && (
                      <div
                        className={`h-[2px] w-[12vw] rounded-lg bg-blue-600 `}
                      ></div>
                    )}
                    {third && (
                      // <svg
                      //   xmlns="http://www.w3.org/2000/svg"
                      //   height="24"
                      //   viewBox="0 -960 960 960"
                      //   width="24"
                      //   fill="#cbd5e0"
                      // >
                      //   <path d="M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
                      // </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="12"
                        width="12"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#cbd5e0"
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                        />
                      </svg>
                    )}
                    {!third && (
                      // <svg
                      //   xmlns="http://www.w3.org/2000/svg"
                      //   height="24"
                      //   viewBox="0 -960 960 960"
                      //   width="24"
                      // >
                      //   <path d="M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
                      // </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="12"
                        width="12"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#0536fa"
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                        />
                      </svg>
                    )}
                    {reType && (
                      <div
                        className={`h-[2px] w-[12vw] rounded-lg bg-gray-300 `}
                      ></div>
                    )}
                    {!reType && (
                      <motion.div
                        transition={{ delay: 1 }}
                        className={`h-[2px] w-[12vw] rounded-lg bg-blue-600 `}
                      ></motion.div>
                    )}
                    {!reType && (
                      // <svg
                      //   xmlns="http://www.w3.org/2000/svg"
                      //   height="24"
                      //   viewBox="0 -960 960 960"
                      //   width="24"
                      // >
                      //   <path d="M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
                      // </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="12"
                        width="12"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#0536fa"
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                        />
                      </svg>
                    )}
                    {reType && (
                      // <svg
                      //   xmlns="http://www.w3.org/2000/svg"
                      //   height="24"
                      //   viewBox="0 -960 960 960"
                      //   width="24"
                      //   fill="#cbd5e0"
                      // >
                      //   <path d="M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
                      // </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="12"
                        width="12"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#cbd5e0"
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
            {!reType && addmoney && !getStarted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0 }}
              >
                <div className="">
                  <div className="flex  mx-auto">
                    <svg
                      className="ml-16 text-3xl"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12"
                      width="12"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                      />
                    </svg> */}
                    <div className="flex ml-[16vw] gap-40">
                      <p>Select card theme</p>
                      <p
                        className={`${third ? "text-gray-400" : "text-black"}`}
                      >
                        Set pin{" "}
                      </p>
                      <p
                        className={`${reType ? "text-gray-400" : "text-black"}`}
                      >
                        Add money
                      </p>
                    </div>
                  </div>
                  <div className="flex ml-[27vw] items-center">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="blue"
                    >
                      <path d="M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
                    </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12"
                      width="12"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#0536fa"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                      />
                    </svg>
                    {third && (
                      <div
                        className={`h-[2px] w-[12vw] rounded-lg bg-gray-300 `}
                      ></div>
                    )}
                    {!third && (
                      <div
                        className={`h-[2px] w-[12vw] rounded-lg bg-blue-600 `}
                      ></div>
                    )}
                    {third && (
                      // <svg
                      //   xmlns="http://www.w3.org/2000/svg"
                      //   height="24"
                      //   viewBox="0 -960 960 960"
                      //   width="24"
                      //   fill="#cbd5e0"
                      // >
                      //   <path d="M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
                      // </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="12"
                        width="12"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#cbd5e0"
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                        />
                      </svg>
                    )}
                    {!third && (
                      // <svg
                      //   xmlns="http://www.w3.org/2000/svg"
                      //   height="24"
                      //   viewBox="0 -960 960 960"
                      //   width="24"
                      // >
                      //   <path d="M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
                      // </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="12"
                        width="12"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#0536fa"
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                        />
                      </svg>
                    )}
                    {reType && (
                      <div
                        className={`h-[2px] w-[12vw] rounded-lg bg-gray-300 `}
                      ></div>
                    )}
                    {!reType && (
                      <div
                        className={`h-[2px] w-[12vw] rounded-lg bg-blue-600 `}
                      ></div>
                    )}
                    {!reType && (
                      // <svg
                      //   xmlns="http://www.w3.org/2000/svg"
                      //   height="24"
                      //   viewBox="0 -960 960 960"
                      //   width="24"
                      // >
                      //   <path d="M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
                      // </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="12"
                        width="12"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#0536fa"
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                        />
                      </svg>
                    )}
                    {reType && (
                      // <svg
                      //   xmlns="http://www.w3.org/2000/svg"
                      //   height="24"
                      //   viewBox="0 -960 960 960"
                      //   width="24"
                      //   fill="#cbd5e0"
                      // >
                      //   <path d="M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
                      // </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="12"
                        width="12"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#cbd5e0"
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {next && !getStarted && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-lg tracking-wider mx-auto text-center relative top-[2vw]">
                Set your card appearance, choose from template and make it more
                outstanding
              </p>
            </motion.div>
          )}
          {third && !next && !getStarted && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-lg tracking-wider mx-auto text-center relative top-[2vw] ">
                Awesome, this is looking great! So this is how your card will
                look like
              </p>
            </motion.div>
          )}
          <AnimatePresence>
            {next && !getStarted && (
              <motion.div
                initial={{ y: -35 }}
                animate={{ x: -390, y: 25, scale: 0.85 }}
                transition={{
                  duration: 0.5,
                }}
                // whileHover={{ opacity: 0 }}
              >
                {onTap && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.8 }}
                    className="absolute bottom-[14vw] left-[28.3vw]  z-10"
                  >
                    {/* <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_10_90"
                        style="mask-type:alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="72"
                        height="72"
                      >
                        <rect width="72" height="72" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_10_90)">
                        <path
                          d="M31.8 49.8L52.95 28.65L48.75 24.45L31.8 41.4L23.25 32.85L19.05 37.05L31.8 49.8ZM36 66C31.85 66 27.95 65.2125 24.3 63.6375C20.65 62.0625 17.475 59.925 14.775 57.225C12.075 54.525 9.9375 51.35 8.3625 47.7C6.7875 44.05 6 40.15 6 36C6 31.85 6.7875 27.95 8.3625 24.3C9.9375 20.65 12.075 17.475 14.775 14.775C17.475 12.075 20.65 9.9375 24.3 8.3625C27.95 6.7875 31.85 6 36 6C40.15 6 44.05 6.7875 47.7 8.3625C51.35 9.9375 54.525 12.075 57.225 14.775C59.925 17.475 62.0625 20.65 63.6375 24.3C65.2125 27.95 66 31.85 66 36C66 40.15 65.2125 44.05 63.6375 47.7C62.0625 51.35 59.925 54.525 57.225 57.225C54.525 59.925 51.35 62.0625 47.7 63.6375C44.05 65.2125 40.15 66 36 66Z"
                          fill="#00D830"
                        />
                      </g>
                    </svg> */}
                    <img className="h-10" src={Done} alt="" />
                  </motion.div>
                )}
                {/* <motion.img
                  onClick={() => SetonTap(!onTap)}
                  whileTap={{ scale: 0.80 }}
                  src={atmcard}
                  className="h-60 m-auto drop-shadow-2xl shadow-2xl"
                  alt=""
                /> */}
                <motion.div
                  onClick={() => SetonTap(!onTap)}
                  whileTap={{ scale: 0.8 }}
                  // src={atmcard}
                >
                  <Atmcard
                    className={"h-60 m-auto drop-shadow-2xl shadow-2xl"}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {next && !getStarted && (
              <motion.div
                className="pt-4 "
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: -50, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                }}
              >
                <motion.div
                  // onClick={() => SetonTap(!onTap)}
                  whileTap={{ scale: 0.8 }}
                  // src={atmcard}
                >
                  <Atmcard
                    className={
                      "h-[12.8vw] m-auto drop-shadow-2xl shadow-2xl absolute left-[10.2vw] top-12"
                    }
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {next && !getStarted && (
              <motion.div
                className="pt-4"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: -70, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
              >
                <Atmcard
                  className={
                    "h-[12.8vw] m-auto drop-shadow-2xl shadow-2xl  absolute left-[36vw] top-8"
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {next && !getStarted && (
              <motion.div
                className="pt-4"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: -70, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                <Atmcard
                  className={
                    "h-[12.8vw] m-auto drop-shadow-2xl shadow-2xl  absolute left-[36vw] bottom-10"
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {next && !getStarted && (
              <motion.div
                className="pt-4"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: -70, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
              >
                <Atmcard
                  className={
                    "h-[12.8vw] m-auto drop-shadow-2xl shadow-2xl absolute right-[1.75vw] top-0"
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {next && !getStarted && (
              <motion.div
                className="pt-4"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: -70, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
              >
                <Atmcard
                  className={
                    "h-[12.8vw] m-auto drop-shadow-2xl shadow-2xl relative left-[29.7vw] bottom-[17.3vw]"
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>

          {next && !getStarted && (
            <motion.div className="fixed bottom-8 right-[32vw]">
              <div className="flex gap-[3vw] justify-center items-center ">
                <button className=" px-11 py-3 border-[#0536fa] border-2 rounded-lg text-[#0536fa]">
                  Back
                </button>
                <button
                  onClick={NextHandleFunction}
                  className="px-11 py-3 rounded-lg text-white bg-[#0536fa]"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}
          <AnimatePresence>
            {third && !next && (
              <div>
                <motion.div
                  className="flex flex-col   gap-10"
                  initial={{ x: -390, y: 20, scale: 0.85 }}
                  animate={{ x: 0, y: 120, scale: 1 }}
                  transition={{
                    duration: 0.7,
                  }}
                  exit={{ x: -100, opacity: 0, duration: 1 }}
                >
                  <Atmcard
                    className={"h-60 m-auto drop-shadow-2xl shadow-2xl"}
                  />
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-center text-[#0536fa] text-lg"
                  >
                    Pick different card
                  </motion.p>
                </motion.div>
                {/* set pin button  */}
                <div className="flex gap-[3vw] justify-center items-center mt-[16.8%] ml-4">
                  <button className=" px-11 py-3 border-[#0536fa] border-2 rounded-lg text-[#0536fa]">
                    Back
                  </button>
                  <button
                    onClick={() => setThird(!third)}
                    className="px-11 py-3 rounded-lg text-white bg-[#0536fa]"
                  >
                    Next
                  </button>
                  
                </div>
              </div>
            )}
          </AnimatePresence>
          {/* {!next && } */}
        </div>
        <AnimatePresence>
          {getStarted && (
            <motion.div
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.1,
              }}
            >
              <h1 className="text-3xl tracking-wide text-center mt-[8vh]">
                The all new airtm prepaid virtual debit card
              </h1>
              <div className=" text-center mt-[4vh] ">
                <div className="flex items-center ml-[21vw] mt-[1vh] gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    fill="#17C11A"
                  >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  <p className="tracking-wide text-lg">
                    Use it anywhere in the world the accept Visa or Mastercard
                    online
                  </p>
                </div>
                <div className="flex items-center ml-[21vw] mt-[1.3vh] gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    fill="#17C11A"
                  >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  <p className="tracking-wide text-lg">
                    No hidden charges and no transaction fees
                  </p>
                </div>
                <div className="flex items-center ml-[21vw] mt-[1.3vh] gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    fill="#17C11A"
                  >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  <p className="tracking-wide text-lg">
                    Simple, transparent and secure
                  </p>
                </div>

                {/* <p className="mt-[1vh]">
              no hidden chaerges and no transaction fees
            </p>
            <p className="mt-[1vh]">Simple, transparent and secure</p> */}
              </div>

              <div>
                <button
                  className="bg-[#0536fa] tracking-wider text-white py-4 px-24 rounded-lg mb-4 mt-12 mx-auto flex "
                  onClick={HandleNextComponent}
                >
                  Get a Card
                </button>
                {/* <Button
                  label="Get a Card"
                  className={
                    "bg-[#0536fa] tracking-wider text-white py-4 px-24 rounded-lg mb-4 mt-12 mx-auto flex "
                  }
                  state={getStarted}
                /> */}
                <p className="text-[#0536fa]  text-center">
                  Learn more about the card
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {/* ...................................................................... */}
          {verifyPin && !third && (
            // <Container>
            //   <Pin />
            // </Container>
            <div>
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{
                  x: -150,
                  opacity: 0,
                }}
              >
                <div className="flex justify-center items-center flex-col mt-10 ">
                  <p className="py-5">Set your 4 digit Pin</p>
                  <div className="flex  gap-6 ">
                    <input
                      className="h-14 w-14  rounded-md border-gray-300 border-[1.5px] flex text-center text-5xl pb-2"
                      type="password"
                      maxLength="1"
                    />
                    <input
                      className="h-14 w-14  rounded-md border-gray-300 border-[1.5px] flex text-center text-5xl pb-2"
                      type="password"
                      maxLength="1"
                    />
                    <input
                      className="h-14 w-14  rounded-md border-gray-300 border-[1.5px] flex text-center text-5xl pb-2"
                      type="password"
                      maxLength="1"
                    />
                    <input
                      className="h-14 w-14  rounded-md border-gray-300 border-[1.5px] flex text-center text-5xl pb-2"
                      type="password"
                      maxLength="1"
                    />
                  </div>
                  <div>
                    <div className="flex gap-5 mt-6">
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        1
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        2
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        3
                      </button>
                    </div>
                    <div className="flex gap-5 mt-6">
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        4
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        5
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        6
                      </button>
                    </div>
                    <div className="flex gap-5 mt-6">
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        7
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        8
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        9
                      </button>
                    </div>
                    <div className="flex gap-5 mt-6">
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        -
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        0
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        {`<`}
                      </button>
                    </div>
                  </div>
                  <p className="mt-10 text-[#0536fa]">
                    Why i need to set my pin?
                  </p>
                </div>
              </motion.div>
              <div className="flex gap-[3vw] justify-center items-center mt-[1%] ml-4">
                <button className=" px-11 py-3 border-[#0536fa] border-2 rounded-lg text-[#0536fa]">
                  Back
                </button>
                <button
                  onClick={() => setVerifyPin(!verifyPin)}
                  className="px-11 py-3 rounded-lg text-white bg-[#0536fa]"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {/* ...................................................................... */}
          {reType && !verifyPin && !third && (
            // <Container>
            //   <Pin />
            // </Container>
            <div>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                exit={{
                  x: -150,
                  opacity: 0,
                  delay: 0,
                }}
              >
                <div className="flex justify-center items-center flex-col mt-10 ">
                  <p className="py-5">Retype your 4 digit Pin</p>
                  <div className="flex  gap-6 ">
                    <input
                      className="h-14 w-14  rounded-md border-gray-300 border-[1.5px] flex text-center text-5xl pb-2"
                      type="password"
                      maxLength="1"
                    />
                    <input
                      className="h-14 w-14  rounded-md border-gray-300 border-[1.5px] flex text-center text-5xl pb-2"
                      type="password"
                      maxLength="1"
                    />
                    <input
                      className="h-14 w-14  rounded-md border-gray-300 border-[1.5px] flex text-center text-5xl pb-2"
                      type="password"
                      maxLength="1"
                    />
                    <input
                      className="h-14 w-14  rounded-md border-gray-300 border-[1.5px] flex text-center text-5xl pb-2"
                      type="password"
                      maxLength="1"
                    />
                  </div>
                  <div>
                    <div className="flex gap-5 mt-6">
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        1
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        2
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        3
                      </button>
                    </div>
                    <div className="flex gap-5 mt-6">
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        4
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        5
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        6
                      </button>
                    </div>
                    <div className="flex gap-5 mt-6">
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        7
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        8
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        9
                      </button>
                    </div>
                    <div className="flex gap-5 mt-6">
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        -
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        0
                      </button>
                      <button className="h-15 w-15 bg-gray-300 px-6 py-4 rounded-full">
                        {`<`}
                      </button>
                    </div>
                  </div>
                  <p className="mt-10 text-[#0536fa]">
                    Why i need to set my pin?
                  </p>
                </div>
              </motion.div>
              <div className="flex gap-[3vw] justify-center items-center mt-[1%] ml-4">
                <button className=" px-11 py-3 border-[#0536fa] border-2 rounded-lg text-[#0536fa]">
                  Back
                </button>
                <button
                  onClick={() => setRetype(!reType)}
                  className="px-11 py-3 rounded-lg text-white bg-[#0536fa]"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {addmoney && !reType && (
            <div className="flex flex-col items-center justify-center mt-[4%]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                exit={{
                  opacity: 0,
                }}
              >
                <p className="text-center tracking-wider">
                  Yay! this is final step. Add moneya (minimum $50) to your card
                  so that you can <br /> start using it soon after activation.it
                  also confirms your identity.
                </p>

                <div className="flex gap-14 mt-[5vw]">
                  <motion.div
                    initial={{ x: 60, opacity: 0.7 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="-tracking-normal h-[10vw] w-[11vw] bg-white border-2 border-gray-200 rounded-lg p-7 text-center"
                  >
                    <div className="border-b-[0.2vw] relative top-[-1.85vw] border-[#0536fa] w-5 left-[3vw] rounded-md"></div>
                    <h2 className="text-lg text-[#0536fa] mb-4">
                      Airtm wallet
                    </h2>
                    <p className="text-xs">
                      Load your card using airtm wallet instantly and easily{" "}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ x: 80, opacity: 0.7 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.63 }}
                    className="-tracking-normal h-[10vw] w-[11vw] bg-white border-2 border-gray-200 rounded-lg p-7 text-center"
                  >
                    <div className="border-b-[0.2vw] relative top-[-1.85vw] border-[#0536fa] w-5 left-[3vw] rounded-md"></div>
                    <h2 className="text-lg text-[#0536fa] mb-4">
                      Bank account
                    </h2>
                    <p className="text-xs">
                      Add money in your card using your bank account with ease
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ x: 100, opacity: 0.7 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.66 }}
                    className="-tracking-normal h-[10vw] w-[11vw] bg-white border-2 border-gray-200 rounded-lg p-7 text-center"
                  >
                    <div className="border-b-[0.2vw] relative top-[-1.85vw] border-[#0536fa] w-5 left-[3vw] rounded-md"></div>
                    <h2 className="text-lg text-[#0536fa] mb-4">
                      Other method
                    </h2>
                    <p className="text-xs">
                      Load your card from more then 20 types of payment methods
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              <div className="flex gap-[3vw] justify-center items-center mt-[16.4%] ml-4">
                <motion.div className="flex gap-[3vw]">
                  <button className=" px-11 py-3 border-[#0536fa] border-2 rounded-lg text-[#0536fa]">
                    Back
                  </button>
                  <button
                    onClick={() => setAddmoney(!addmoney)}
                    className="px-11 py-3 rounded-lg text-white bg-[#0536fa]"
                  >
                    Next
                  </button>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
        {!addmoney && thanks && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
            >
              <div>
                <div className="flex flex-col items-center justify-center pt-[7%]">
                  <h1 className="text-2xl tracking-wider   pb-10">All Done</h1>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, duration: 0.3 }}
                    exit={{ opacity: 0, duration: 0.5 }}
                  >
                    <img className="h-48 w-48" src={Done} alt="done" />
                  </motion.div>
                  <p className="pt-16 text-center tracking-wider">
                    Perfect! you have setup your personal virtual card which
                    will be availabele <br /> to use shortly. We will notify you
                    soon about card activatio via email.
                  </p>
                  <button
                    onClick={handleEnd}
                    className="px-7 py-3 rounded-lg text-white mt-16 bg-[#0536fa]"
                  >
                    Great! Thanks
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        {!thanks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img
              src={atmcard}
              className="h-60 ml-[20vw] drop-shadow-2xl shadow-2xl"
              alt=""
            />
            <div className="ml-[24%] mt-[3%]">
              <button className="mr-[6%] px-11 py-3 border-[#0536fa] border-2 rounded-lg text-[#0536fa]">
                Reset Pin
              </button>
              <button className=" px-11 py-3 ml-[] border-[#0536fa] border-2 rounded-lg text-[#0536fa]">
                View CVV
              </button>
            </div>
            <h1 className="text-2xl ml-[25vw] mt-[2.5%]">
              Balance : $3000 USD
            </h1>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex gap-[10%] tracking-wider leading-8 ml-[26%] mt-[3%]"
            >
              <div className="">
                <p className="">Name</p>
                <p>Card Status</p>
                <p>Purchase Limit</p>
              </div>
              <div>
                <p>Neel Sharma</p>
                <p>Active</p>
                <p>$3000 USD</p>
              </div>
            </motion.div>
            <div className="flex gap-[21%]">
              <button className="px-14 py-3 rounded-lg text-white bg-[#0536fa] ml-[31%] mt-[3%]">
                Add Money
              </button>
              <p className="mt-[4%] text-gray-400 tracking-wider">Block Card</p>
            </div>
            <motion.div
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="h-[100vh] w-[20%] bg-white flex absolute top-0 right-0 p-7 border-l-2"
            >
              <div className="mt-[35%]">
                <div className="flex gap-[38%] ">
                  <p>Transactions</p>
                  <div className="flex gap-[]">
                    <svg
                      className="mr-6"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="#cbd5e0"
                    >
                      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="#cbd5e0"
                    >
                      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                  </div>
                </div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="flex gap-11 px-6 ml-1 py-3 mt-[15%] shadow-md justify-center items-center border-2 rounded-md font-bold"
                >
                  <div className="flex gap-4 justify-center items-center">
                    <img className="h-10 rounded-full" src={mc} alt="" />
                    <p className="text-xs">
                      {`McDonald's`} <br />
                      <span className="text-[10px] text-[#B3b3b3]">
                        {" "}
                        6 Oct 2019 18:49{" "}
                      </span>
                    </p>
                  </div>
                  <p>$10</p>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="flex gap-11 px-6 ml-1 py-3 mt-[10%] shadow-md justify-center items-center border-2 rounded-md font-bold"
                >
                  <div className="flex gap-4 justify-center items-center">
                    <img className="h-10 rounded-full" src={fl} alt="" />
                    <p className="text-xs">
                      {`Flipkart`} <br />
                      <span className="text-[10px] text-[#B3b3b3]">
                        {" "}
                        5 Oct 2019 06:21{" "}
                      </span>
                    </p>
                  </div>
                  <p>$54</p>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex gap-11 px-6 ml-1 py-3 mt-[10%] shadow-md justify-center items-center border-2 rounded-md font-bold"
                >
                  <div className="flex gap-4 justify-center items-center">
                    <img className="h-10 rounded-full" src={lg} alt="" />
                    <p className="text-xs">
                      {`LG Electronics`} <br />
                      <span className="text-[10px] text-[#B3b3b3]">
                        {" "}
                        3 Oct 2019 13:45{" "}
                      </span>
                    </p>
                  </div>
                  <p>$89</p>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex gap-11 px-6 ml-1 py-3 mt-[10%] shadow-md justify-center items-center border-2 rounded-md font-bold"
                >
                  <div className="flex gap-4 justify-center items-center">
                    <img className="h-10 rounded-full" src={ar} alt="" />
                    <p className="text-xs">
                      {`Airbnb`} <br />
                      <span className="text-[10px] text-[#B3b3b3]">
                        {" "}
                        3 Oct 2019 06:21{" "}
                      </span>
                    </p>
                  </div>
                  <p>$95</p>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="flex gap-11 px-6 ml-1 py-3 mt-[10%] shadow-md justify-center items-center border-2 rounded-md font-bold"
                >
                  <div className="flex gap-4 justify-center items-center">
                    <img className="h-10 rounded-full" src={am} alt="" />
                    <p className="text-xs">
                      {`Amazon`} <br />
                      <span className="text-[10px] text-[#B3b3b3]">
                        {" "}
                        2 Oct 2019 08:49{" "}
                      </span>
                    </p>
                  </div>
                  <p>$99</p>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                  className="flex gap-11 px-6 ml-1 py-3 mt-[10%] shadow-md justify-center items-center border-2 rounded-md font-bold"
                >
                  <div className="flex gap-4 justify-center items-center">
                    <img className="h-10 rounded-full" src={bb} alt="" />
                    <p className="text-xs">
                      {`Baskin Robins`} <br />
                      <span className="text-[10px] text-[#B3b3b3]">
                        {" "}
                        1 Oct 2019 09:54{" "}
                      </span>
                    </p>
                  </div>
                  <p>$21</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default MainHome;
