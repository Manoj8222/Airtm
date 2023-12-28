import React  from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
function Pin() {
  const isTrue = useSelector((state) => state.airtm.Pin);

  const [third, setThird] = useState(true);
  const [verifyPin, setVerifyPin] = useState(true);
  return (
    <>
      (
      <AnimatePresence>
        {/* ...................................................................... */}
        {verifyPin && !third && (
          // <Container>
          //   <Pin />
          // </Container>
          <div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{
                x: -200,
                opacity: 0,
                duration: 1,
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
              </div>
            </motion.div>
            <div className="flex gap-[3vw] justify-center items-center mt-[4.5%] ml-4">
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
      )
    </>
  );
}

export default Pin;
