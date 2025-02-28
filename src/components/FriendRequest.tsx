import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FriendRequestListClient from "./FriendRequestListClient";



const FriendRequest = async () => {
  const { userId } = await auth();
  if (!userId) return null;

  const requests = await prisma?.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  if (requests?.length === 0) return null;
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
     <FriendRequestListClient requests = {requests as any}/>
    </div>
  );
};

export default FriendRequest;
