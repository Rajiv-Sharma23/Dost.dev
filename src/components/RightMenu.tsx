import React, { Suspense } from "react";
import FriendRequest from "./FriendRequest";
import Birthdays from "./Birthdays";
import Ad from "./Ad";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6 mt-2 mx-4 w-full">
      {user ? (
        <>
          <Suspense fallback="Loading...">
            <UserInformationCard user={user} />
          </Suspense>
          
          <Suspense fallback="Loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}

      <FriendRequest />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
