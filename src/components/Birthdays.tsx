import Image from "next/image";
import Link from "next/link";
import React from "react";

const Birthdays = () => {
  return (
    <div className="bg-white  flex flex-col gap-4 shadow-md p-4 rounded-lg">
      {/* top */}
      <div className="flex justify-between">
        <span className="font-semibold">Birthdays</span>
       
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
         <button className="bg-pink-500 text-white px-2 py-1 rounded-md text-xs tracking-wider">Wish</button>
        </div>
      </div>

      {/* upcoming */}
      <div className="p-4 bg-slate-100 rounded-lg flex  items-center gap-4">
        <Image src={'/gift.png'} width={24} height={24} alt={'gift'} />
        <Link href={'/'} className="flex flex-col">
        <span  className="text-gray-600 font-semibold text-sm">Upcoming Birthdays</span>
        <span  className="text-gray-500 text-sm ">
            See other 18 have  upcoming birthdays
        </span>
        
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
