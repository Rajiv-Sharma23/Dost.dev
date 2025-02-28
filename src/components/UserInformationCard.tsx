import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/client";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import UpdateUser from "./UpdateUser";

const UserInformationCard = async ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createdAt);
  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  let isBlocked = false;
  let isFollowing = false;
  let isFollowRequested = false;

  const { userId: currentUserId } = await auth();

  if (currentUserId) {
    const BlockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });
    BlockRes ? (isBlocked = true) : (isBlocked = false);

    const FollowRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });
    FollowRes ? (isFollowing = true) : (isFollowing = false);

    const FollowRequestedRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });
    FollowRequestedRes
      ? (isFollowRequested = true)
      : (isFollowRequested = false);
  }

  return (
    <div className="bg-white  flex flex-col gap-4 shadow-md p-4 rounded-lg ">
      {/* top */}
      <div className="flex justify-between">
        <span className="font-semibold">User Info</span>
       {currentUserId === user.id ? (<UpdateUser user = {user}/>) : (<Link
          href={"/"}
          className="text-pink-600 text-xs bg-pink-200 rounded-md p-1 "
        >
          see all
        </Link>)}
      </div>
      {/* Bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {user?.name && user?.lastname
              ? user.name + " " + user.lastname
              : `${user?.username}`}
          </span>
          <span className="text-sm text-pink-600 pt-1">@{user.username}</span>
        </div>

        {user.description && <p className="text-sm">{user.description}</p>}
        {user.city && (
          <div className="flex items-center gap-4">
            <Image
              src={"/map.png"}
              width={50}
              height={50}
              alt="map"
              className="w-4 h-4"
            />
            <span className="text-sm">
              Lives in <b>{user.city}</b>
            </span>
          </div>
        )}
        {user.school && (
          <div className="flex items-center gap-4">
            <Image
              src={"/school.png"}
              width={50}
              height={50}
              alt="school"
              className="w-4 h-4"
            />
            <span className="text-sm">
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}
        {user.work && (
          <div className="flex items-center gap-4">
            <Image
              src={"/work.png"}
              width={50}
              height={50}
              alt="work"
              className="w-4 h-4"
            />
            <span className="text-sm">
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}
        <div className="flex items-center justify-between text-sm">
          {user.website && (
            <div className="flex gap-1 items-center">
              <Image
                src={"/link.png"}
                width={50}
                height={50}
                alt="link"
                className="w-4 h-4"
              />
              <Link href={user.website} className="text-blue-500 font-medium">
                {user.website}
              </Link>
            </div>
          )}
          <div className="flex gap-1 items-center">
            <Image
              src={"/date.png"}
              width={50}
              height={50}
              alt="github"
              className="w-4 h-4"
            />
            <span>Joined {formattedDate}</span>
          </div>
        </div>
        
        { currentUserId && currentUserId !== user.id && (<UserInfoCardInteraction
          userId={user.id}
         
          isBlocked={isBlocked}
          isFollowing={isFollowing}
          isFollowRequested={isFollowRequested}
        />) 
        }
      </div>
    </div>
  );
};

export default UserInformationCard;

//
