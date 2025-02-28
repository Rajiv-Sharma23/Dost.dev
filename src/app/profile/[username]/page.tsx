import Feed from "@/components/feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import prisma from "@/lib/client";

const page = async ({params}:{params:{username:string}}) => {

  const username = params.username;

  const user = await prisma?.user.findFirst({
    where: {
     username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings:true,
          posts:true,
        },
      },
    },
  })

  if(!user) return notFound();

  const authResult = await auth();
const { userId: currentUserId } = authResult;

  let isBlocked ;
 
  if(currentUserId) {
    const res = await prisma.block.findFirst({
      where:{
        blockerId: user.id,
        blockedId:currentUserId,
      },
    });
    if(res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if(isBlocked) return notFound();
 

  return (
    <div className="flex">
      {/* left */}

      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      {/* center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6 mt-2">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user?.cover || "noCover.png"}
                alt="cover image"
                fill
                className="object-cover rounded-md"
              />
              <Image
                src={user?.avatar || "noAvatar.png"}
                alt=""
                width={480}
                height={480}
                className="w-32 h-32 rounded-full ring-4 ring-pink-600 absolute left-0 right-0 m-auto -bottom-16 object-cover "
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium ">
            {(user?.name && user?.lastname) ? user.name + " " + user.lastname : `@${user?.username}`}
             
               </h1>
            <div className="flex items-center gap-12 justify-center mb-4">
              <div className="flex flex-col items-center text-gray-700">
                <span className="font-medium">
                  {user?._count.posts}
                </span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center text-gray-700">
                <span className="font-medium">
                {user?._count.followers}
                </span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center text-gray-700">
                <span className="font-medium">
                {user?._count.followings}
                </span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      {/* right */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
};

export default page;
