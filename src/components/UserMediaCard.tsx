import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/client";

const UserMediaCard = async ({ user }: { user: User }) => {
  const postWithMedia = await prisma?.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="bg-white  flex flex-col gap-4 shadow-md p-4 rounded-lg ">
      {/* top */}
      <div className="flex justify-between">
        <span className="font-semibold">Media</span>
        <Link
          href={"/"}
          className="text-pink-600 text-xs bg-pink-200 rounded-md p-1 "
        >
          see all
        </Link>
      </div>
      {/* Bottom */}
      <div className="flex gap-4 justify-between flex-wrap">
      { postWithMedia.length ? postWithMedia.map((post) => (<div className="relative w-1/5 h-24" key={post.id}>
          <Image
            src={post.img!}
            alt="avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>)): "No media Found !"}
      </div>
    </div>
  );
};

export default UserMediaCard;
