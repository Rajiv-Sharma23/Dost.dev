"use client";

import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedOut } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* left */}
      <div className="text-pink-600 font-bold text-2xl md:hidden lg:block w-[20%]">
        <Link href={"/"}> Dost.dev </Link>
      </div>
      {/* center */}
      <div className="hidden md:flex items-center gap-4 w-[50%]">
        <div className="flex gap-6 text-pink-600 ">
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src={"/home.png"}
              alt="homepage"
              width={16}
              height={16}
              className="w-4 h-4 "
            />
            <span className="">Home</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src={"/friends.png"}
              alt="Friends"
              width={16}
              height={16}
              className="w-4 h-4 "
            />
            <span>Friends</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src={"/stories.png"}
              alt="homepage"
              width={16}
              height={16}
              className="w-4 h-4 "
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-pink-100 rounded-full items-center px-4">
          <input type="text" placeholder="search..." className="bg-transparent outline-none" />
          <Image src="/search.png" alt="search" width={14} height={14}/>
        </div>
      </div>
      {/* right */}
      <div className=" flex items-center gap-4 xl:gap-8 justify-end ">
        <ClerkLoading>
          <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer ">
              <Image src="/people.png" alt="people" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="people" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notifications.png"
                alt="people"
                width={20}
                height={20}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="cursor-pointer flex gap-2">
              <Image
                src="/login.png"
                alt="login"
                width={20}
                height={20}
                className="w-6 h-6"
              />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
