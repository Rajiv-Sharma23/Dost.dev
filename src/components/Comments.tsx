import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      {/* write section */}
      <div className="flex items-center gap-4 ">
        <Image
          src="https://cdn.pixabay.com/photo/2022/01/20/17/51/office-desk-6952919_640.jpg"
          alt="image comment"
          width={400}
          height={400}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full  ">
          <input
            type="text"
            className="bg-transparent outline-none flex-1 "
            placeholder="Write a comment..."
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            width={400}
            height={400}
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
      {/* read section */}
      <div className="flex justify-between items-center">
        {/* comments */}
        <div className="flex justify-between gap-4 mt-6">
          {/* Avatar */}
          <Image
            src="https://cdn.pixabay.com/photo/2022/01/20/17/51/office-desk-6952919_640.jpg"
            alt="image comment"
            width={400}
            height={400}
            className="w-10 h-10 rounded-full my-5"
          />
          {/* descrption */}
          <div className="flex flex-col gap-2 flex-1">
                <span className="font-mediumm text-gray-600">Rajiv Sharma</span>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                iure eligendi voluptatem quidem sit consequatur illo reprehenderit
                alias odio et est obcaecati necessitatibus dolore, culpa nobis
                porro delectus mollitia blanditiis!
                </p>

                <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                    <div className="flex gap-4 items-center ">
                        <Image
                        src={"/like.png"}
                        alt="like"
                        width={12}
                        height={12}
                        className="cursor-pointer w-4 h-4"
                        />

                        <span className="to-gray-300">|</span>
                        <span className="">123 Likes</span>
                    </div>
                    <div className="font-medium">Reply</div>
                </div>
          </div>
        
            {/* Icon */}
           
            <Image
                src={"/more.png"}
                alt="more"
                width={16}
                height={16}
                className=" w-4 h-4 cursor-pointer"
            />
           
        </div>

      </div>
    </div>
  );
};

export default Comments;
