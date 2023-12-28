import React from "react";

function LeftSidebar() {
  return (
    <div className="m-auto  h-screen ">
      <div className="py-10 text-4xl  mx-[3vw] flex items-center gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="38"
          viewBox="0 -960 960 960"
          width="38"
          fill="#0536fa"
        >
          <path d="M260-160q-92 0-156-64T40-380q0-78 48.5-137.5T210-594q25-90 99-148t171-58q119 0 199.5 82.5T760-520q75 8 117.5 62T920-341q0 75-52.5 128T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-63 0-112 34.5T296-597q78 13 131 73.5T480-380h-80q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Z" />
        </svg>
        airtm
        <p className="absolute text-[8px] left-[11vw] top-7">TM</p>
      </div>
      <div>
        <li className="list-none pl-[2.5vw] tracking-widest py-6 font-bold flex gap-2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#cbd5e0"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          Home
        </li>
        <li className="list-none pl-[2.5vw] flex gap-2 tracking-widest py-6 font-bold text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#cbd5e0"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </svg>
          Add / Withdraw
        </li>
        <li className="list-none pl-[2.5vw] flex gap-2 tracking-widest py-6 font-bold text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#cbd5e0"
          >
            <g>
              <rect fill="none" height="24" width="24" />
              <path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M15,12h-4v1h3c0.55,0,1,0.45,1,1v3 c0,0.55-0.45,1-1,1h-1v1h-2v-1H9v-2h4v-1h-3c-0.55,0-1-0.45-1-1v-3c0-0.55,0.45-1,1-1h1V9h2v1h2V12z M13,8V3.5L17.5,8H13z" />
            </g>
          </svg>
          Send / Request
        </li>
        <li className="list-none pl-[2.5vw] flex gap-2 tracking-widest py-6 font-bold ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#0536fa"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
          </svg>
          Virtual Card
          <p className="absolute text-[10px] left-[11vw] top-[42.5vh]">New</p>
        </li>
        <li className="list-none pl-[2.5vw] flex gap-2 tracking-widest py-6 font-bold text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#cbd5e0"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z" />
          </svg>
          Activity
        </li>
        <li className="list-none pl-[2.5vw] flex gap-2 tracking-widest py-6 font-bold text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#cbd5e0"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <path d="M17.06,11.57C17.65,10.88,18,9.98,18,9c0-1.86-1.27-3.43-3-3.87L15,3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2 c2.21,0,4-1.79,4-4C19,13.55,18.22,12.27,17.06,11.57z M10,7h4c1.1,0,2,0.9,2,2s-0.9,2-2,2h-4V7z M15,17h-5v-4h5c1.1,0,2,0.9,2,2 S16.1,17,15,17z" />
            </g>
          </svg>
          Crypto
        </li>
        <li className="list-none pl-[2.5vw] flex gap-2 tracking-widest py-6 font- text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#cbd5e0"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
          </svg>
          invite and earn
        </li>
      </div>
      <div></div>
    </div>
  );
}

export default LeftSidebar;
