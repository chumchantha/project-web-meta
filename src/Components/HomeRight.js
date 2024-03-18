import React from "react";

function HomeRight(props) {
  const { friends } = props;
  return (
    <div
      className=" flex items-center w-full overflow-hidden hover:overflow-y-auto z-20"
    >
      <div className="hieght p-3 space-y-5 mt-0 w-full">
        <div className=" flex flex-col space-y-3 ">
          <div className="">
            <div className=" flex justify-between items-center">
              <p className=" text-gray-600">Your Pages and profiles</p>
              <p className=" text-blue-500">Edit</p>
            </div>
          </div>
          <div className=" flex space-x-1 items-center">
            <img
              src={require(`../assets/user.png`)}
              alt=""
              className="w-9 h-9 rounded-full object-cover object-center"
            />
            <p className=" font-semibold">TITB Group</p>
          </div>
          <div className=" flex space-x-1 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 15C14 15 19 19 19 19V3C19 3 14 7 11 7M11 15V7M11 15H6C3.791 15 2 14.111 2 11C2 7.889 3.791 7 6 7H11M5 15L8 23H12L9 15M19 14C19.394 14 19.7841 13.9224 20.1481 13.7716C20.512 13.6209 20.8427 13.3999 21.1213 13.1213C21.3999 12.8427 21.6209 12.512 21.7716 12.1481C21.9224 11.7841 22 11.394 22 11C22 10.606 21.9224 10.2159 21.7716 9.85195C21.6209 9.48797 21.3999 9.15726 21.1213 8.87868C20.8427 8.6001 20.512 8.37913 20.1481 8.22836C19.7841 8.0776 19.394 8 19 8M11 19C12 19 14 18 14 16"
                stroke="gray"
                stroke-width="2"
              />
            </svg>
            <p className="text-gray-600">Switch to Page</p>
          </div>
          <div className=" flex space-x-1 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 12V5.749C20.0001 5.67006 19.9845 5.59189 19.9543 5.51896C19.9241 5.44603 19.8798 5.37978 19.824 5.324L16.676 2.176C16.5636 2.06345 16.4111 2.00014 16.252 2H4.6C4.44087 2 4.28826 2.06321 4.17574 2.17574C4.06321 2.28826 4 2.44087 4 2.6V21.4C4 21.5591 4.06321 21.7117 4.17574 21.8243C4.28826 21.9368 4.44087 22 4.6 22H11M8 10H16M8 6H12M8 14H11M17.954 16.94L18.954 15.94C19.0581 15.8358 19.1817 15.7531 19.3178 15.6968C19.4539 15.6404 19.5997 15.6113 19.747 15.6113C19.8943 15.6113 20.0401 15.6404 20.1762 15.6968C20.3123 15.7531 20.4359 15.8358 20.54 15.94C20.7501 16.1502 20.8682 16.4353 20.8682 16.7325C20.8682 17.0297 20.7501 17.3148 20.54 17.525L19.54 18.525L17.954 16.939L14.963 19.93C14.8135 20.08 14.7154 20.2737 14.683 20.483L14.439 22.04L15.996 21.797C16.2053 21.7646 16.399 21.6665 16.549 21.517L19.539 18.525"
                stroke="gray"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 2V5.4C16 5.55913 16.0632 5.71174 16.1757 5.82426C16.2883 5.93679 16.4409 6 16.6 6H20"
                stroke="gray"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-gray-600">Create promotion</p>
          </div>
        </div>
        <div className=" w-full border border-gray-300"></div>
        <div>
          <div className=" flex items-center justify-between mb-4">
            <p className=" text-gray-600">Contacts</p>
            <div className=" flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <div className=" flex items-center space-x-1">
                <p className=" bg-gray-600 text-xl w-1 h-1 rounded-full"></p>
                <p className=" bg-gray-600 text-xl w-1 h-1 rounded-full"></p>
                <p className=" bg-gray-600 text-xl w-1 h-1 rounded-full"></p>
              </div>
            </div>
          </div>
          <div>
            <ul className="flex flex-col space-y-4">
              {friends.length > 0 &&
                friends.map((e, i) => (
                  <li key={i + e} className=" flex space-x-2">
                    <div className=" relative">
                      <img
                        src={require(`../assets/${e.photo}`)}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <p className=" w-3 h-3 border border-gray-100 bg-green-600 rounded-full absolute -right-1 bottom-0"></p>
                    </div>
                    <p>{e.name}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className=" border border-gray-300 w-full"></div>
        <div>
          <div className=" flex items-center mb-4">
            <p className=" text-gray-600">Conversation</p>
          </div>
          <div>
            <ul className="flex flex-col space-y-4">
              {friends.length > 0 &&
                friends.map((e, i) => (
                  <li key={i + e} className=" flex space-x-2">
                    <div className=" relative">
                      <img
                        src={require(`../assets/${e.photo}`)}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <p className=" w-3 h-3 border border-gray-100 bg-green-600 rounded-full absolute -right-1 bottom-0"></p>
                    </div>
                    <p>{e.name}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeRight;
