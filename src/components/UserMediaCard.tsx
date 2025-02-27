import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="bg-white  flex flex-col gap-4 shadow-md p-4 rounded-lg ">
      {/* top */}
      <div className="flex justify-between">
        <span className="font-semibold">User Info</span>
        <Link
          href={"/"}
          className="text-pink-600 text-xs bg-pink-200 rounded-md p-1 "
        >
          see all
        </Link>
      </div>
      {/* Bottom */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://cdn.pixabay.com/photo/2018/04/04/01/51/girl-3288623_640.jpg"
            alt="avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://cdn.pixabay.com/photo/2018/04/04/01/51/girl-3288623_640.jpg"
            alt="avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://cdn.pixabay.com/photo/2018/04/04/01/51/girl-3288623_640.jpg"
            alt="avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://cdn.pixabay.com/photo/2018/04/04/01/51/girl-3288623_640.jpg"
            alt="avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://cdn.pixabay.com/photo/2018/04/04/01/51/girl-3288623_640.jpg"
            alt="avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://cdn.pixabay.com/photo/2018/04/04/01/51/girl-3288623_640.jpg"
            alt="avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://cdn.pixabay.com/photo/2018/04/04/01/51/girl-3288623_640.jpg"
            alt="avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://cdn.pixabay.com/photo/2018/04/04/01/51/girl-3288623_640.jpg"
            alt="avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>
        
      </div>
    </div>
  );
};

export default UserMediaCard;
