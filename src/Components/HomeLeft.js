import React from "react";
import { Link } from "react-router-dom";

function HomeLeft(props) {
  const { Shurtcuts, SideLeftHomeTop } = props;
  return (
    <div className="mt-0 w-full overflow-hidden hover:overflow-y-auto z-20">
      <div className="hieght space-y-4 z-10 p-5">
        <div className=" space-y-4">
          <div className=" flex space-x-1 items-center">
            <img
              src={require(`../assets/user.png`)}
              alt=""
              className="w-9 h-9 rounded-full object-cover object-center"
            />
            <p>TITB Group</p>
          </div>
          <ul className=" space-y-4">
            {SideLeftHomeTop.length > 0 &&
              SideLeftHomeTop.map((e, i) => (
                <li key={e + i} className=" flex space-x-1 items-center">
                  <img
                    src={require(`../assets/${e.logo}`)}
                    alt=""
                    className="w-8 h-8 rounded-lg"
                  />
                  <p>{e.name}</p>
                </li>
              ))}
            <div className=" flex space-x-2 items-center select-none -ml-1">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 cursor-pointer ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 8.625L12 15.375L18.75 8.625"
                    stroke="black"
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>See more</p>
            </div>
          </ul>
        </div>
        <div className="  border border-gray-300  w-12/12"></div>
        <div className="flex justify-between items-center w-12/12">
          <p>Your shortcuts </p>
          <span className=" text-blue-400 cursor-pointer">Edit</span>
        </div>
        <div>
          <ul className=" space-y-4 space-x-1">
            {Shurtcuts.length > 0 &&
              Shurtcuts.map((ele, i) => (
                <li
                  key={i + ele}
                  className=" cursor-pointer flex items-center space-x-1"
                >
                  <div>
                    <img
                      src={require(`../assets/${ele.photo}`)}
                      alt=""
                      className=" w-10 h-auto rounded-lg"
                    />
                  </div>
                  <div>
                    <h3>{ele.name}</h3>
                  </div>
                </li>
              ))}
            <div className=" flex space-x-2 items-center select-none">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 8.625L12 15.375L18.75 8.625"
                    stroke="black"
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>See more</p>
            </div>
          </ul>
        </div>
        <div className=" flex space-x-1 items-center md:flex md:flex-col">
          <p className=" flex space-x-1 text-blue-900 text-sm">
            <Link className=" border-blue-900 border-b">Privacy </Link>
            <span>.</span>
            <Link className=" border-blue-900 border-b">Terms </Link>
            <span>.</span>
            <Link className=" border-blue-900 border-b">Advertising </Link>
            <span>.</span>
            <Link className=" border-blue-900 border-b">Ad </Link>
          </p>
          <p className="text-sm flex items-center space-x-1 text-blue-900">
            <Link className=" border-blue-900 border-b">Choices </Link>
            <span>.</span>
            <Link className=" border-blue-900 border-b">Cookies </Link>
            <span>.</span>
            <Link className=" ">More </Link>
            <Link className="rounded-full w-4 h-4 flex items-center justify-center border-blue-900 border">
              <span className="flex items-center justify-center ">C </span>
            </Link>
            <Link className=" ">2024</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeLeft;
