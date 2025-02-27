import { LocaleRouteNormalizer } from "next/dist/server/normalizers/locale-route-normalizer";
import Image from "next/image";
import React from "react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="bg-white  shadow-md p-4 rounded-lg">
      {/* Top */}
      <div className="flex items-center justify-between text-pink-500 font-medium text-sm">
        <span>Sponsored Ads</span>
        <Image src={"/more.png"} alt="more" width={16} height={16} />
      </div>
      {/* Bottom */}

      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_640.jpg"
            }
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image src={"https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_640.jpg"}
          alt=""
          width={24}
          height={24}
          className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-pink-500 font-medium text-sm ">Bigchef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm" ? "Lorem ipsum dolor sit amet consectetur adipisicing ." : size === "md" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem." : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quisquam, quidem. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."} 
        </p>
        <button className="bg-pink-200 text-pink-600 px-2 py-1 rounded-md font-semibold text-sm">Learn more</button>
      </div>
    </div>
  );
};

export default Ad;
