import {
  BellIcon,
  ChatIcon,
  PlusIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import React from "react";

function Footer() {
  return (
    <div className="sticky flex p-3  bottom-0 z-50 bg-white items-center justify-evenly">
      <HomeIcon className=" w-7 h-7" />
      <SearchIcon className="w-7 h-7" />
      <BellIcon className="w-7 h-7" />
      <ChatIcon className="w-7 h-7" />
      <div className="absolute cursor-pointer bottom-16 right-7 w-14 rounded-full h-14 bg-blue-400">
        <PlusIcon className="text-white " />
      </div>
    </div>
  );
}

export default Footer;
