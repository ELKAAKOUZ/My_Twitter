import Image from "next/image";
import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

function Post({
  logo,
  name,
  image,
  date,
  email,
  message,
  like,
  comment,
  share,
}) {
  return (
    <div className="flex p-2 mt-2 space-x-1 max-w-md border-b-2">
      <div>
        <Image
          className="rounded-full"
          src={logo}
          width={40}
          height={40}
          layout="fixed"
        />
      </div>
      <div>
        <div className="relative w-80">
          <div className="flex items-center space-x-2">
            <div>
              <p className="font-extrabold ">{name}</p>
            </div>
            <div>
              <p className="text-gray-400">{email}</p>
            </div>
            <div>
              <p className="text-gray-400">{date}</p>
            </div>
            <DotsHorizontalIcon className="absolute w-7 h-7 right-1 text-gray-300" />
          </div>
          {message && (
            <div className="p-2">
              <p className="text-right font-bold text-gray-700">{message}</p>
            </div>
          )}
          {image && (
            <div className="mt-2">
              <Image
                className="rounded-2xl"
                src={image}
                width={320}
                height={200}
                layout="fixed"
              />
            </div>
          )}
          <div className="flex items p-2  items-center justify-around">
            <div className="flex  items-center space-x-1">
              <img className="w-5 h-5 cursor-pointer" src="/comment.png" />
              <p className="text-gray-400 underline">{comment}</p>
            </div>
            <div className="flex items-center space-x-1">
              <img className="w-5 h-5 cursor-pointer" src="/share1.png" />
              <p className="text-gray-400 underline">{share}</p>
            </div>
            <div className="flex items-center space-x-1">
              <img className="w-5 h-5 cursor-pointer" src="/like.png" />
              <p className="text-gray-700 underline">{like}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
