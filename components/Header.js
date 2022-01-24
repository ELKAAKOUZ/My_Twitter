import Image from "next/image";
import React from "react";
import { BeakerIcon, SparklesIcon } from "@heroicons/react/outline";
const Header = () => {
  return (
    <div className="flex items-center bg-white shadow-md sticky top-0 z-50 justify-between p-3">
      <Image
        className="rounded-full"
        src="/logo.jpeg"
        width={40}
        height={40}
        layout="fixed"
      />
      <Image
        className="rounded-full"
        src="/twitter.png"
        width={40}
        height={40}
        layout="fixed"
      />
      <SparklesIcon className="h-7 w-7 text-black" />
    </div>
  );
};

export default Header;
