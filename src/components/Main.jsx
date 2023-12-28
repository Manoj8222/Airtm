import React from "react";
import LeftSidebar from "./sidebar/LeftSidebar";
import Navbar from "./Navbar";
import MainHome from "./RightContainer/Home/MainHome";
function Main() {
  return (
    <>
      <div className="flex">
        <div className="w-1/6 h-screen border-r-2">
          <LeftSidebar />
        </div>
        <div className="w-5/6 h-screen bg-gray-100">
          <div className="h-1/6 ">
            <Navbar />
          </div>
          <div className="h-5/6 ">
            <MainHome />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Main;
