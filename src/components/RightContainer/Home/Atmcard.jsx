import React from "react";
import { motion } from "framer-motion";
import atmcard from "./atmcard1.png";

function Atmcard({ className }) {
  return (
    <div>
      <img src={atmcard} className={`${className}`} alt="" />
    </div>
  );
}

export default Atmcard;

// h-[12.8vw] m-auto drop-shadow-2xl shadow-2xl  absolute left-[36vw] top-8
