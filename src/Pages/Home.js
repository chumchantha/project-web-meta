import React from "react";
import HomeCenter from "../Components/HomeCenter";
import HomeLeft from "../Components/HomeLeft";
import HomeRight from "../Components/HomeRight";
import { SideLeftHomeTop, Shurtcuts, friends, Users } from "../Datas/datas";


function Home() {
  return (
    <div className="w-full p-2 bg-gray-100">
      <div className=" flex lg:justify-between sm:justify-center md:justify-normal w-full md:border">
        <div className=" lg:w-1/4 hidden lg:block">
          <div className=" fixed xl:w-3/12 lg:w-1/5">
            <HomeLeft Shurtcuts={Shurtcuts} SideLeftHomeTop={SideLeftHomeTop} />
          </div>
        </div>
        <div className="xl:w-5/12 lg:ml-1  md:w-7/12 md:ml-12 sm:w-10/12 xl:ml-0">
          <div className="w-full">
            <HomeCenter friends={friends} Users={Users} />
          </div>
        </div>
        <div className="lg:w-1/4 hidden md:block">
          <div className=" fixed xl:w-3/12 lg:w-1/5 md:w-4/12 right-2">
            <HomeRight friends={friends} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
