import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideLeftHomeTop, Shurtcuts, friends } from "./Datas/datas";
import SmallNav from "./Components/SmallNav";
import DropdownNotifications from "./Components/DropdownNotifications";
import DropdownChat from "./Components/DropdownChat";
import HomeLeft from "./Components/HomeLeft";
function App() {
  //start dropdown ==============================================================
  const [toggleDropDownChat, setToggleDropDownChat] = useState(false);
  const handleToggleDropDownChat = () => {
    setToggleDropDownChat(!toggleDropDownChat);
    setToggleDropDownNotifications(false);
    setToggleDropDownMenu(false);
  };

  const [toggleDropDownNotifications, setToggleDropDownNotifications] =
    useState(false);
  const handleToggleDropDownNotifications = () => {
    setToggleDropDownNotifications(!toggleDropDownNotifications);
    setToggleDropDownChat(false);
    setToggleDropDownMenu(false);
  };
  const [toggleDropDownMenu, setToggleDropDownMenu] = useState(false);
  const handleToggleDropDownMenu = () => {
    setToggleDropDownMenu(!toggleDropDownMenu);
    setToggleDropDownNotifications(false);
    setToggleDropDownChat(false);
  };
  //end dropdown =============================================================.>>>>>

  //start start all hover
  const [hoverChat, setHoverChat] = useState(false);
  const handleHoverChat = () => {
    setHoverChat(!hoverChat);
  };
  const [hoverNotifications, setHoverNotifications] = useState(false);
  const handleHoverNotifications = () => {
    setHoverNotifications(!hoverNotifications);
  };
  const [hoverMenu, setHoverMenu] = useState(false);
  const handleHoverMenu = () => {
    setHoverMenu(!hoverMenu);
  };
  const [hoverAcc, setHoverAcc] = useState(false);
  const handleHoverAcc = () => {
    setHoverAcc(!hoverAcc);
  };
  const [hoverHome, setHoverHome] = useState(false);
  const handleHoverHome = () => {
    setHoverHome(!hoverHome);
  };
  const [hoverVideo, setHoverVideo] = useState(false);
  const handleHoverVideo = () => {
    setHoverVideo(!hoverVideo);
  };
  const [hoverMarketplace, setHoverMarketplace] = useState(false);
  const handleHoverMarketplace = () => {
    setHoverMarketplace(!hoverMarketplace);
  };
  const [hoverFriends, setHoverFriends] = useState(false);
  const handleHoverFriends = () => {
    setHoverFriends(!hoverFriends);
  };

  const [hoverUser, setHoverUser] = useState(false);
  const handleHoverUser = () => {
    setHoverUser(!hoverUser);
  };
  const [hoverNav, setHoverNav] = useState(false);
  const handleHoverNav = () => {
    setHoverNav(!hoverNav);
  };

  const handleClearsHover = () => {
    if (hoverChat) setHoverChat(!hoverChat);
    if (hoverNotifications) setHoverNotifications(!hoverNotifications);
    if (hoverAcc) setHoverAcc(!hoverAcc);
    if (hoverMenu) setHoverMenu(!hoverMenu);
    if (hoverHome) setHoverHome(!hoverHome);
    if (hoverVideo) setHoverVideo(!hoverVideo);
    if (hoverFriends) setHoverFriends(!hoverFriends);
    if (hoverMarketplace) setHoverMarketplace(!hoverMarketplace);
    if (hoverUser) setHoverUser(!hoverUser);
    if (hoverNav) setHoverNav(!hoverNav);
  };
  //end hover useState ====================>>>>>>>>>>>

  // start active useState========>>>>>>>>>>>>>
  const [activeFriends, setActiveFriends] = useState(false);
  const handleActiveFriends = () => {
    setActiveFriends(true);
    setActiveHome(false);
    setActiveVideo(false);
    setActiveMarketplace(false);
    setActiveUser(false);
    setToggleDropDownChat(false);
    setToggleDropDownNotifications(false);
    setToggleDropDownMenu(false);
  };
  const [activeHome, setActiveHome] = useState(true);
  const handleActiveHome = () => {
    setActiveHome(true);
    setActiveFriends(false);
    setActiveVideo(false);
    setActiveMarketplace(false);
    setActiveUser(false);
    setToggleDropDownChat(false);
    setToggleDropDownNotifications(false);
    setToggleDropDownMenu(false);
  };
  const [activeVideo, setActiveVideo] = useState(false);
  const handleActiveVideo = () => {
    setActiveVideo(true);
    setActiveHome(false);
    setActiveMarketplace(false);
    setActiveFriends(false);
    setActiveUser(false);
    setToggleDropDownChat(false);
    setToggleDropDownNotifications(false);
    setToggleDropDownMenu(false);
  };
  const [activeMarketplace, setActiveMarketplace] = useState(false);
  const handleActiveMarketplace = () => {
    setActiveMarketplace(true);
    setActiveHome(false);
    setActiveVideo(false);
    setActiveFriends(false);
    setActiveUser(false);
    setToggleDropDownChat(false);
    setToggleDropDownNotifications(false);
    setToggleDropDownMenu(false);
  };

  const [activeUser, setActiveUser] = useState(false);
  const handleActiveUser = () => {
    setActiveUser(true);
    setActiveHome(false);
    setActiveVideo(false);
    setActiveFriends(false);
    setActiveMarketplace(false);
    setToggleDropDownChat(false);
    setToggleDropDownNotifications(false);
    setToggleDropDownMenu(false);
  };
  // end active useState=============>>>>>>

  const [toggleNav, setToggleNav] = useState(false);
  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className="App relative z-10">
      {/* <div className=" z-50 w-full transition-all duration-300 fixed">
        <DropdownSearch />
      </div> */}
      <div className="z-20">
        <SmallNav
          handleToggleDropDownChat={handleToggleDropDownChat}
          toggleDropDownChat={toggleDropDownChat}
          handleToggleDropDownNotifications={handleToggleDropDownNotifications}
          toggleDropDownNotifications={toggleDropDownNotifications}
          toggleDropDownMenu={toggleDropDownMenu}
          handleToggleDropDownMenu={handleToggleDropDownMenu}
          hoverChat={hoverChat}
          handleClearsHover={handleClearsHover}
          handleHoverChat={handleHoverChat}
          handleHoverNotifications={handleHoverNotifications}
          hoverNotifications={hoverNotifications}
          handleHoverMenu={handleHoverMenu}
          hoverMenu={hoverMenu}
          handleHoverAcc={handleHoverAcc}
          hoverAcc={hoverAcc}
          hoverHome={hoverHome}
          handleHoverHome={handleHoverHome}
          hoverVideo={hoverVideo}
          handleHoverVideo={handleHoverVideo}
          hoverMarketplace={hoverMarketplace}
          handleHoverMarketplace={handleHoverMarketplace}
          hoverFriends={hoverFriends}
          handleHoverFriends={handleHoverFriends}
          activeFriends={activeFriends}
          handleActiveFriends={handleActiveFriends}
          handleActiveHome={handleActiveHome}
          activeHome={activeHome}
          activeVideo={activeVideo}
          handleActiveVideo={handleActiveVideo}
          activeMarketplace={activeMarketplace}
          handleActiveMarketplace={handleActiveMarketplace}
          activeUser={activeUser}
          handleActiveUser={handleActiveUser}
          hoverUser={hoverUser}
          handleHoverUser={handleHoverUser}
          hoverNav={hoverNav}
          handleHoverNav={handleHoverNav}
          toggleNav={toggleNav}
          handleToggleNav={handleToggleNav}
        />
      </div>
      <div className="w-full">
        <div
          className={`${
            toggleDropDownChat || toggleDropDownNotifications
              ? "right-3 shadow-lg top-14 mt-1 fixed transition-all duration-75 z-50"
              : "  w-0 h-0 overflow-hidden"
          }`}
        >
          {toggleDropDownChat ? (
            <DropdownChat friends={friends} />
          ) : toggleDropDownNotifications ? (
            <DropdownNotifications friends={friends} />
          ) : (
            ""
          )}
        </div>
        <div
          className={`${
            toggleNav
              ? " fixed z-10 top-16 transition-all duration-300 bg-gray-200 w-full h-screen"
              : "w-0 h-0 hidden"
          }`}
        >
          <HomeLeft Shurtcuts={Shurtcuts} SideLeftHomeTop={SideLeftHomeTop} />
        </div>
      </div>
      <div className=" h-16 bg-gray-100"></div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
