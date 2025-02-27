import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequest = () => {
  return (
    <div className="bg-white  flex flex-col gap-4 shadow-md p-4 rounded-lg ">
      {/* top */}
      <div className="flex justify-between">
        <span className="font-semibold">Friend Request</span>
        <Link
          href={"/"}
          className="text-pink-600 text-xs bg-pink-200 rounded-md p-1 "
        >
          see all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_640.jpg"
            }
            alt="avatar"
            width={1024}
            height={1024}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-pink-600 font-semibold">Aman Sharma</span>
        </div>

        <div className="flex items-end gap-3">
          <Image src="/accept.png" width={20} height={20} alt="accept" />
          <Image src="/reject.png" width={20} height={20} alt="accept" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_640.jpg"
            }
            alt="avatar"
            width={1024}
            height={1024}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-pink-600 font-semibold">Aman Sharma</span>
        </div>

        <div className="flex items-end gap-3">
          <Image src="/accept.png" width={20} height={20} alt="accept" />
          <Image src="/reject.png" width={20} height={20} alt="accept" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_640.jpg"
            }
            alt="avatar"
            width={1024}
            height={1024}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-pink-600 font-semibold">Aman Sharma</span>
        </div>

        <div className="flex items-end gap-3">
          <Image src="/accept.png" width={20} height={20} alt="accept" />
          <Image src="/reject.png" width={20} height={20} alt="accept" />
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
