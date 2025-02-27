import Feed from "@/components/feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const page = () => {
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
                src="https://cdn.pixabay.com/photo/2021/10/08/07/13/autumn-6690466_640.jpg"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://cdn.pixabay.com/photo/2024/11/24/16/22/flower-9221176_640.jpg"
                alt=""
                width={480}
                height={480}
                className="w-32 h-32 rounded-full ring-4 ring-pink-600 absolute left-0 right-0 m-auto -bottom-16 object-cover "
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium ">Rajiv Sharma </h1>
            <div className="flex items-center gap-12 justify-center mb-4">
              <div className="flex flex-col items-center text-gray-700">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center text-gray-700">
                <span className="font-medium">12.3k</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center text-gray-700">
                <span className="font-medium">1k</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      {/* right */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="dfgadgdg" />
      </div>
    </div>
  );
};

export default page;
