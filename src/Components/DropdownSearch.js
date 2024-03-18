import React, { useState } from "react";

function DropdownSearch() {
  const [Event, setEvent] = useState(false);
  const [Event2, setEvent2] = useState(false);
  const [Event3, setEvent3] = useState(false);
  const handleEvent = () => {
    setEvent(true);
    setTimeout(() => {
      setEvent2(true);
    }, 10);

    setTimeout(() => {
      setEvent3(true);
    }, 200);
  };
  const handleClearEvent = () => {
    setEvent(false);
    setEvent2(false);
    setEvent3(false);
  };
  return (
    <div>
      <div>
        <div
          className={`${
            Event3
              ? " w-72 border flex bg-white justify-center relative shadow-xl rounded-xl min-h-32"
              : "col col-span-3 flex items-center justify-start ml-3 space-x-2 "
          }`}
        >
          <div>
            <div className={Event2 ? "w-0 h-0 hidden" : "block -mr-4 mt-3"}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_325)">
                  <path
                    d="M40 20C40 8.95438 31.0456 0 20 0C8.95437 0 0 8.95438 0 20C0 29.9825 7.31375 38.2567 16.875 39.757V25.7813H11.7969V20H16.875V15.5938C16.875 10.5813 19.8609 7.8125 24.4294 7.8125C26.6175 7.8125 28.9062 8.20313 28.9062 8.20313V13.125H26.3844C23.8998 13.125 23.125 14.6667 23.125 16.2484V20H28.6719L27.7852 25.7813H23.125V39.757C32.6862 38.2567 40 29.9827 40 20Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M27.7852 25.7812L28.6719 20H23.125V16.2484C23.125 14.6666 23.8998 13.125 26.3844 13.125H28.9062V8.20312C28.9062 8.20312 26.6175 7.8125 24.4292 7.8125C19.8609 7.8125 16.875 10.5813 16.875 15.5938V20H11.7969V25.7812H16.875V39.757C17.9088 39.919 18.9536 40.0003 20 40C21.0464 40.0003 22.0912 39.9191 23.125 39.757V25.7812H27.7852Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_325">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className=" relative items-center flex w-full">
            <label
              className={
                Event
                  ? "cursor-pointer transition-all duration-75 absolute flex justify-center items-center  translate-x-0  md:left-0  w-10 h-10 xl:w-0 xl:h-0 rounded-full bg-gray-200 xl:bg-gray-100 xl:shadow-none"
                  : "cursor-pointer  absolute flex justify-center items-center  translate-x-8 xl:ml-2   md:left-0 mt-4 xl:mt-0  w-10 h-10 xl:w-0 xl:h-0 rounded-full bg-gray-200 xl:bg-gray-100 xl:shadow-none"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${
                  Event2
                    ? "w-0 h-0 overflow-hidden"
                    : "w-5 text-gray-700 absolute xl:-top-1"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </label>

            <div
              className={`${
                Event3
                  ? " w-60 flex justify-end items-center absolute top-3 left-5"
                  : "w-60 flex justify-end items-center mt-3"
              }`}
            >
              <div
                className={
                  Event2
                    ? "w-10 h-10 z-50 space-x-5 flex justify-end items-center"
                    : "hidden"
                }
              >
                <div onClick={handleClearEvent} className=" cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      Event3
                        ? "w-6 font-semibold mr-2 text-gray-600"
                        : "w-6 font-semibold text-gray-600"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </div>
              </div>
              {Event3 ? (
                <input
                  type="text"
                  className="overflow-hidden text-gray-600 transition-all duration-75 placeholder:text-gray-600 border shadow  focus:outline-none bg-gray-100 rounded-full justify-center sm:h-0 sm:w-0  pl-5 hidden xl:flex xl:w-64 xl:h-10 relative"
                  placeholder="Search Facebook"
                />
              ) : (
                <input
                  onClick={handleEvent}
                  type="text"
                  className={`${
                    Event
                      ? " overflow-hidden text-gray-600 transition-all duration-75 placeholder:text-gray-600 border shadow  focus:outline-none bg-gray-100 rounded-full justify-center sm:h-0 sm:w-0  pl-5 hidden xl:flex xl:w-56 xl:h-10 relative"
                      : " text-gray-600 placeholder:text-gray-600 border shadow  focus:outline-none bg-gray-100 rounded-full justify-center sm:h-0 sm:w-0  pl-10 hidden xl:flex xl:w-56 xl:h-10 right-0"
                  }`}
                  placeholder="Search Facebook"
                />
              )}
            </div>
          </div>
          <div
            className={`${
              Event3 ? "w-full absolute flex justify-between top-14 px-5" : "w-0 h-0 hidden"
            }`}
          >
            <p className=" font-semibold">New</p>
            <p className=" font-semibold text-blue-400">Edit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownSearch;
