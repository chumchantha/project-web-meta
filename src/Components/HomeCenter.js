import React from "react";
import HeaderHome from "../Components/HeaderHome";
function HomeCenter(props) {
  const { Users } = props;
  return (
    <div className="w-full mt-3">
      <div>
        <HeaderHome />
      </div>
      <ul className=" grid grid-cols-1 gap-3">
        {Users.length > 0 &&
          Users.map((ele, i) => (
            <li
              key={ele + i}
              className=" bg-white flex flex-col space-y-2  shadow-lg border w-full rounded-xl p-3"
            >
              <div className=" flex items-center space-x-2">
                <div>
                  <img
                    src={require(`../assets/${ele.PfImage}`)}
                    alt=""
                    className=" w-10 h-10 rounded-full"
                  />
                </div>
                <div className="">
                  <div>
                    <h1 className=" text-xl font-semibold">{ele.nameUser}</h1>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <div className=" text-sm">
                      {ele.dateHour}
                      {""}h
                    </div>
                    <div>.</div>
                    <div>
                      {ele.status === "public" ? (
                        <div className=" w-2 h-auto">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.9 17.39C17.64 16.59 16.89 16 16 16H15V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H8V10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5V4.59C16.1965 5.07237 17.2582 5.83747 18.0944 6.81983C18.9306 7.8022 19.5163 8.97255 19.8013 10.2307C20.0864 11.4889 20.0623 12.7974 19.7312 14.0442C19.4001 15.291 18.7717 16.4391 17.9 17.39ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.78 4.21 10.21L9 15V16C9 16.5304 9.21071 17.0391 9.58579 17.4142C9.96086 17.7893 10.4696 18 11 18M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      ) : ele.status === "friend" ? (
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                              clipRule="evenodd"
                            />
                            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                          </svg>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>{ele.description}</div>
              <div>
                {
                  <div className=" w-full">
                    {ele.photos.length === 1 ? (
                      <img
                        src={require(`../assets/${ele.photos[0]}`)}
                        alt=""
                        className="w-full h-auto"
                      />
                    ) : ele.photos.length === 3 ? (
                      <div className="flex gap-0">
                        <img
                          src={require(`../assets/${ele.photos[0]}`)}
                          alt=""
                          className=" w-96 h-auto"
                        />
                        <div>
                          {" "}
                          <img
                            src={require(`../assets/${ele.photos[1]}`)}
                            alt=""
                            className="w-72 h-auto"
                          />
                          <img
                            src={require(`../assets/${ele.photos[2]}`)}
                            alt=""
                            className="w-72 h-auto"
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                }
              </div>
              <div className="flex justify-between items-center border-b-2 pb-2">
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    <div className="p-1 rounded-full z-10 bg-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 text-white"
                      >
                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                      </svg>
                    </div>
                    <div className="p-1 -ml-1 rounded-full bg-pink-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 text-white"
                      >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    {ele.reacts >= 1000 ? (
                      <span>1.{(ele.reacts - 1000) / 100} </span>
                    ) : ele.reacts >= 2000 ? (
                      <span>2.{(ele.reacts - 2000) / 100}</span>
                    ) : ele.reacts >= 3000 ? (
                      <span>3.{(ele.reacts - 3000) / 100}</span>
                    ) : ele.reacts >= 4000 ? (
                      <span>4.{(ele.reacts - 4000) / 100}</span>
                    ) : ele.reacts >= 5000 ? (
                      <span>5.{(ele.reacts - 5000) / 100}</span>
                    ) : ele.reacts >= 6000 ? (
                      <span>6.{(ele.reacts - 6000) / 100}</span>
                    ) : ele.reacts >= 7000 ? (
                      <span>7.{(ele.reacts - 7000) / 100}</span>
                    ) : ele.reacts >= 8000 ? (
                      <span>8.{(ele.reacts - 8000) / 100}</span>
                    ) : ele.reacts >= 9000 ? (
                      <span>9.{(ele.reacts - 9000) / 100}</span>
                    ) : ele.reacts >= 10000 ? (
                      <span>10.{(ele.reacts - 10000) / 100}</span>
                    ) : ele.reacts >= 1 && ele.reacts <= 999 ? (
                      <span>{ele.reacts}</span>
                    ) : (
                      ""
                    )}
                    {ele.reacts >= 1000 ? <span>K</span> : ""}
                  </div>
                </div>
                <div className=" flex space-x-2">
                  <div>
                    <p>
                      <span>{ele.comments + " "}</span>comments
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>{ele.shares + " "}</span>shares
                    </p>
                  </div>
                </div>
              </div>
              <div className=" ml-10 flex justify-between items-center">
                <div className=" flex items-center space-x-1 cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 8H14.388L15.511 4.633C15.713 4.025 15.611 3.351 15.236 2.831C14.861 2.311 14.253 2 13.612 2H12C11.703 2 11.422 2.132 11.231 2.36L6.531 8H4C2.897 8 2 8.897 2 10V19C2 20.103 2.897 21 4 21H17.307C17.7139 20.9986 18.1108 20.8738 18.4452 20.6421C18.7797 20.4103 19.0359 20.0825 19.18 19.702L21.937 12.351C21.9789 12.2387 22.0002 12.1198 22 12V10C22 8.897 21.103 8 20 8ZM4 10H6V19H4V10ZM20 11.819L17.307 19H8V9.362L12.468 4H13.614L12.052 8.683C12.0013 8.83331 11.9871 8.99355 12.0107 9.15043C12.0343 9.3073 12.095 9.45629 12.1877 9.58504C12.2803 9.71379 12.4024 9.8186 12.5436 9.89076C12.6849 9.96293 12.8414 10.0004 13 10H20V11.819Z"
                      fill="black"
                    />
                  </svg>

                  <p>Like</p>
                </div>
                <div className=" flex items-center space-x-1 cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89472 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3 13.488 3.36 14.89 4 16.127L3 21L7.873 20C9.109 20.639 10.513 21 12 21Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>Comment</p>
                </div>
                <div className=" flex items-center space-x-1 cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.707 11.293L13.707 3.293C13.5671 3.15319 13.389 3.05798 13.195 3.01942C13.0011 2.98085 12.8 3.00065 12.6173 3.07632C12.4346 3.15199 12.2785 3.28013 12.1686 3.44454C12.0587 3.60895 12 3.80225 12 4V7.545C9.26829 7.79779 6.72923 9.06086 4.87969 11.087C3.03015 13.1132 2.00327 15.7566 2 18.5V20C2.00016 20.2076 2.06491 20.41 2.18527 20.5791C2.30564 20.7482 2.47565 20.8757 2.67173 20.9438C2.8678 21.012 3.08022 21.0174 3.27953 20.9594C3.47883 20.9014 3.65514 20.7827 3.784 20.62C4.7637 19.455 5.96576 18.4968 7.31994 17.8016C8.67413 17.1064 10.1533 16.6881 11.671 16.571C11.721 16.565 11.846 16.555 12 16.545V20C12 20.1978 12.0587 20.391 12.1686 20.5555C12.2785 20.7199 12.4346 20.848 12.6173 20.9237C12.8 20.9993 13.0011 21.0192 13.195 20.9806C13.389 20.942 13.5671 20.8468 13.707 20.707L21.707 12.707C21.8945 12.5195 21.9998 12.2652 21.9998 12C21.9998 11.7348 21.8945 11.4805 21.707 11.293ZM14 17.586V15.5C14 15.2348 13.8946 14.9804 13.7071 14.7929C13.5196 14.6054 13.2652 14.5 13 14.5C12.745 14.5 11.704 14.55 11.438 14.585C8.74286 14.8333 6.17742 15.8573 4.052 17.533C4.29324 15.3274 5.33954 13.2883 6.99055 11.8062C8.64157 10.324 10.7813 9.50285 13 9.5C13.2652 9.5 13.5196 9.39464 13.7071 9.20711C13.8946 9.01957 14 8.76522 14 8.5V6.414L19.586 12L14 17.586Z"
                      fill="black"
                    />
                  </svg>

                  <p>Share</p>
                </div>
                <div>
                  <img
                    src={require(`../assets/user.png`)}
                    alt=""
                    className=" w-7 h-7 rounded-full"
                  />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomeCenter;
