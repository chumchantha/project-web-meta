import React from "react";
function DropdownNotifications(props) {
  const { friends } = props;
  return (
    <div className="w-96">
      <div className="HieghtNotifications overflow-hidden overflow-y-auto p-2 py-5 w-full space-y-4 rounded-lg shadow border  bg-white">
        <div className="flex justify-between items-center px-3">
          <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13C5.26522 13 5.51957 12.8946 5.70711 12.7071C5.89464 12.5196 6 12.2652 6 12C6 11.7348 5.89464 11.4804 5.70711 11.2929C5.51957 11.1054 5.26522 11 5 11C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12ZM11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12ZM18 12C18 12.2652 18.1054 12.5196 18.2929 12.7071C18.4804 12.8946 18.7348 13 19 13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12Z"
                stroke="gray"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="font-semibold flex items-center space-x-5 pl-3">
          <p className="font-semibold py-1 w-12 flex justify-center items-center rounded-full bg-blue-100 shadow text-lg text-blue-500">
            All
          </p>
          <p className="font-semibold text-lg ">Unread</p>
        </div>
        <div className=" flex justify-between items-center px-3">
          <p className="font-semibold ">New</p>
          <p className="font-semibold  text-blue-500">See all</p>
        </div>
        <div>
          <ul className="">
            {friends?.length > 0 &&
              friends.map((e, i) => (
                <li key={e + i} className="w-full">
                  <div
                    className={`${
                      e.comments.length > 0
                        ? "w-full space-y-3 flex space-x-3 justify-between items-center hover:bg-gray-100 hover:transition-all hover:duration-75 rounded-xl px-2 cursor-pointer"
                        : "hidden"
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={require(`../assets/${e.photo}`)}
                        className="w-14 h-14 rounded-full"
                        alt=""
                      />
                      <div className=" border border-white absolute w-7 h-7 rounded-full bg-green-500 flex justify-center items-center z-10 -right-1 -bottom-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 text-white"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <p className=" w-60 font-semibold">
                          {e.name}{" "}
                          <span className=" font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </p>
                        <p className=" text-blue-500">{e.Day}d</p>
                      </div>
                    </div>
                    <div
                      className={`${
                        e.status === 1
                          ? "w-3 h-3 rounded-full shadow bg-blue-600"
                          : " overflow-hidden w-0 h-0"
                      }`}
                    ></div>
                  </div>

                  <div
                    className={`${
                      e.Reacts.like
                        ? "w-full space-y-3 flex space-x-3 items-center justify-between hover:bg-gray-100 hover:transition-all hover:duration-75  rounded-xl px-2 cursor-pointer"
                        : "hidden"
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={require(`../assets/${e.photo}`)}
                        className="w-14 h-14 rounded-full"
                        alt=""
                      />
                      <div className=" border border-white absolute w-7 h-7 rounded-full bg-blue-500 flex justify-center items-center z-10 -right-1 -bottom-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 21H5V8H4C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21ZM20 8H13L14.122 4.632C14.2221 4.33141 14.2494 4.01135 14.2016 3.69815C14.1538 3.38496 14.0322 3.08761 13.847 2.83059C13.6617 2.57358 13.4181 2.36424 13.1361 2.21984C12.8541 2.07543 12.5418 2.00008 12.225 2H12L7 7.438V21H18L21.912 12.404L22 12V10C22 9.46957 21.7893 8.96086 21.4142 8.58579C21.0391 8.21071 20.5304 8 20 8Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <p className=" w-60 font-semibold">
                          {e.name}{" "}
                          <span className=" font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </p>
                        <p className=" text-blue-500">{e.Day}d</p>
                      </div>
                    </div>
                    <div
                      className={`${
                        e.status === 1
                          ? "w-3 h-3 rounded-full shadow bg-blue-600"
                          : " overflow-hidden w-0 h-0"
                      }`}
                    ></div>
                  </div>

                  <div
                    className={`${
                      e.Reacts.heart
                        ? "w-full space-y-3 flex space-x-3 items-center justify-between hover:bg-gray-100 hover:transition-all hover:duration-75 rounded-xl px-2 cursor-pointer"
                        : "hidden"
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={require(`../assets/${e.photo}`)}
                        className="w-14 h-14 rounded-full"
                        alt=""
                      />
                      <div className=" border border-white absolute w-7 h-7 rounded-full bg-red-400 flex justify-center items-center z-10 -right-1 -bottom-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <p className=" w-60 font-semibold">
                          {e.name}{" "}
                          <span className=" font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </p>
                        <p className=" text-blue-500">{e.Day}d</p>
                      </div>
                    </div>
                    <div
                      className={`${
                        e.status === 1
                          ? "w-3 h-3 rounded-full shadow bg-blue-600"
                          : " overflow-hidden w-0 h-0"
                      }`}
                    ></div>
                  </div>
                  
                  {/* will contiue with other emoji */}
                  {/* <div
                    className={`${
                      e.Reacts.heart
                        ? "w-full space-y-3 flex space-x-3 items-center"
                        : "hidden"
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={require(`../assets/${e.photo}`)}
                        className="w-14 h-14 rounded-full"
                        alt=""
                      />
                      <div className=" border border-white absolute w-7 h-7 rounded-full bg-red-400 flex justify-center items-center z-10 -right-1 -bottom-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <p className=" w-64 font-semibold">
                          {e.name}{" "}
                          <span className=" font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit{" "}
                          </span>
                        </p>
                        <p className=" text-blue-500">{e.Day}d</p>
                      </div>
                    </div>
                    <div
                      className={`${
                        e.status === 1
                          ? "w-3 h-3 rounded-full shadow bg-blue-600"
                          : " overflow-hidden w-0 h-0"
                      }`}
                    ></div>
                  </div> */}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropdownNotifications;
