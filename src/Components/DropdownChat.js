import React from "react";
import { NavLink } from "react-router-dom";

function DropdownChat(props) {
  const { friends } = props;
  return (
    <div className="w-96 min-h-24  flex flex-col items-center justify-center rounded-lg shadow-xl border bg-white">
      <div className="HieghtChat p-4 w-full min-h-20 overflow-hidden overflow-y-auto space-y-4">
        <div className=" flex justify-between items-center">
          <h2 className=" font-bold text-gray-700 text-xl ">Chats</h2>
          <div className="flex justify-between items-center space-x-3">
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3V9.75H4.5V5.57775L10.9222 12L4.5 18.4222V14.25H3V21H9.75V19.5H5.57775L12 13.0778L18.4222 19.5H14.25V21H21V14.25H19.5V18.4222L13.0778 12L19.5 5.57775V9.75H21V3H14.25V4.5H18.4222L12 10.9222L5.57775 4.5H9.75V3H3Z"
                fill="gray"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17.013L11.413 16.998L21.045 7.45799C21.423 7.07999 21.631 6.57799 21.631 6.04399C21.631 5.50999 21.423 5.00799 21.045 4.62999L19.459 3.04399C18.703 2.28799 17.384 2.29199 16.634 3.04099L7 12.583V17.013ZM18.045 4.45799L19.634 6.04099L18.037 7.62299L16.451 6.03799L18.045 4.45799ZM9 13.417L15.03 7.44399L16.616 9.02999L10.587 15.001L9 15.006V13.417Z"
                fill="gray"
              />
              <path
                d="M5 21H19C20.103 21 21 20.103 21 19V10.332L19 12.332V19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21Z"
                fill="gray"
              />
            </svg>
          </div>
        </div>
        <div className=" space-y-4">
          <div className=" relative items-center flex">
            <label className=" absolute left-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </label>
            <input
              type="text"
              className=" rounded-full w-full flex justify-center  pl-10 h-10 border focus:outline-none "
              placeholder="Search Messenger"
            />
          </div>
          <div className=" flex space-x-5 items-center">
            <NavLink className=" font-semibold text-lg text-blue-500 shadow px-3 rounded-full bg-gray-100">
              Inbox
            </NavLink>
            <NavLink className="font-semibold   text-lg text-gray-800 px-3 rounded-full">
              Communities
            </NavLink>
          </div>
        </div>
        <div className=" flex flex-col justify-center space-y-2">
          <ul className=" py-2">
            {friends.length > 0 &&
              friends.map((e, i) => (
                <li
                  key={i + e}
                  className=" flex items-center justify-between hover:bg-gray-100 px-3 py-2 rounded-xl"
                >
                  <div className=" relative">
                    <img
                      src={require(`../assets/${e.photo}`)}
                      alt=""
                      className="w-14 h-14 rounded-full"
                    />
                    <div
                      className={`${
                        e.active === 1
                          ? "absolute w-4 h-4  rounded-full shadow bg-green-600 border-white border right-0 bottom-0"
                          : "w-0 h-0 overflow-hidden"
                      }`}
                    ></div>
                  </div>
                  <div className=" -ml-10 flex flex-col justify-center space-y-px">
                    <p className=" font-semibold">{e.name}</p>
                    <p
                      className={`${
                        e.seenChat
                          ? " font-semibold text-gray-600 text-sm"
                          : "font-semibold text-sm"
                      }`}
                    >
                      Lorem Ipsum is simply dummy
                    </p>
                  </div>
                  <div
                    className={`${
                      e.seenChat
                        ? "w-3 h-3"
                        : " w-3 h-3  rounded-full bg-blue-600 shadow"
                    }`}
                  ></div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className=" rounded-b-lg border-t w-full py-2 h-12 bottom-0 flex items-center justify-center">
        <p className=" font-semibold text-blue-500">See all in messenger</p>
      </div>
    </div>
  );
}

export default DropdownChat;
