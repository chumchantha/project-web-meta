import React from "react";
import { NavLink } from "react-router-dom";
// import { DefaultPlayer as Video } from "react-html5video";
// import "react-html5video/dist/styles.css";
// import introVideo from "../videos/video1.mp4";
// const videos = [
//   {
//     name: introVideo,
//   },
// ];
function HeaderHome() {
  return (
    <div>
      <div className="w-full space-y-3 mb-3">
        <div>
          <ul className=" flex items-center justify-center md:space-x-2 space-x-3">
            <li className=" bg-white flex flex-col justify-center items-center relative w-36 lg:w-40 lg:h-56 xl:h-52 h-52 rounded-lg shadow-lg border">
              <NavLink>
                <img
                  src={require(`../assets/user.png`)}
                  alt=""
                  className="rounded-t-lg top-0 h-40 w-36 lg:w-40"
                />
              </NavLink>
              <div className=" rounded-b-lg bottom-1 w-36 h-12">
                <div className=" -mt-5">
                  <div className=" flex flex-col items-center justify-center">
                    <h1 className="w-10 h-10 rounded-full flex justify-center items-center text-xl bg-blue-500 text-white border-white border-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 font-semibold"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </h1>
                    <p className="">Create story</p>
                  </div>
                </div>
              </div>
            </li>
            <li className=" bg-white flex flex-col justify-center items-center relative w-36 h-52 lg:w-40 lg:h-56 xl:h-52 rounded-lg shadow-lg border">
              <div className=" relative">
                <NavLink>
                  <img
                    src={require(`../assets/user3.jpg`)}
                    alt=""
                    className="rounded-lg top-0  lg:w-40 lg:h-56 xl:h-52 h-52 w-36 overflow-x-hidden"
                  />
                  <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-blue-500 flex  items-center justify-center shadow">
                    <img
                      src={require(`../assets/user3.jpg`)}
                      alt=""
                      className="rounded-full w-11 h-11"
                    />
                  </div>
                  <div className=" absolute flex items-center justify-center bottom-1 left-2">
                    <h1 className=" font-semibold text-white">Ah Lyna</h1>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className=" bg-white flex flex-col justify-center items-center relative lg:w-40 lg:h-56 xl:h-52 w-36 h-52 rounded-lg shadow-lg border">
              <div className=" relative">
                <NavLink>
                  <img
                    src={require(`../assets/user4.jpg`)}
                    alt=""
                    className="rounded-lg top-0  lg:w-40 lg:h-56 xl:h-52 h-52 w-36 overflow-x-hidden"
                  />
                  <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-blue-500 flex  items-center justify-center shadow">
                    <img
                      src={require(`../assets/user4.jpg`)}
                      alt=""
                      className="rounded-full w-11 h-11"
                    />
                  </div>
                  <div className=" absolute flex items-center justify-center bottom-1 left-2">
                    <h1 className=" font-semibold text-white">Ah Lyna</h1>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className="hidden xl:flex bg-white flex-col justify-center items-center relative lg:w-40 lg:h-56 xl:h-52 w-36 h-52 rounded-lg shadow-lg border">
              <div className=" relative">
                <NavLink>
                  <img
                    src={require(`../assets/user7.avif`)}
                    alt=""
                    className="rounded-lg top-0 lg:w-40 lg:h-56 xl:h-52 h-52 w-36 overflow-x-hidden"
                  />
                  <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-blue-500 flex  items-center justify-center shadow">
                    <img
                      src={require(`../assets/user6.jpg`)}
                      alt=""
                      className="rounded-full w-11 h-11"
                    />
                  </div>
                  <div className=" absolute flex items-center justify-center bottom-1 left-2">
                    <h1 className=" font-semibold text-white">Boy</h1>
                  </div>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div className=" space-y-4 w-full p-4  bg-white shadow-lg border rounded-lg">
          <div className="w-full flex items-center space-x-4">
            <div>
              <NavLink>
                <img
                  src={require(`../assets/user.png`)}
                  alt=""
                  className=" rounded-full w-11 h-11"
                />
              </NavLink>
            </div>
            <div className="w-full">
              <input
                className=" w-full focus:outline-none rounded-full pl-3 py-2 shadow  bg-gray-100"
                type="text"
                placeholder="What's onyour mind, TITb Group?"
              />
            </div>
          </div>
          <div className="w-full border border-gray-300"></div>
          <div className=" flex justify-between items-center text-gray-500 object-cover object-center">
            <div className=" flex items-center space-x-4">
              <img
                src={require(`../assets/Camara.png`)}
                className=" rounded w-6 h-auto"
                alt=""
              />
              <p>Live Video</p>
            </div>
            <div className=" flex items-center space-x-4">
              <img
                src={require(`../assets/Photo.png`)}
                className=" rounded w-6 h-auto"
                alt=""
              />
              <p>Photo/Video</p>
            </div>
            <div className=" flex items-center space-x-4">
              <img
                src={require(`../assets/Emoji.png`)}
                className=" rounded w-6 h-auto"
                alt=""
              />{" "}
              <p>Feeling/activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderHome;
