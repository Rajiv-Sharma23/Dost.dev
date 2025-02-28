"use client";
import { switchBlock, switchFollow } from "@/actions/action";
import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({
  userId,
  
  isBlocked,
  isFollowing,
  isFollowRequested,
}: {
  userId: string;
  
  isBlocked: boolean;
  isFollowing: boolean;
  isFollowRequested: Boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    followRequested: isFollowRequested,
    blocked: isBlocked,
  });

  const follow = async () => {
    switchOptimisticState("follow");
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followRequested:
          !prev.following && !prev.followRequested ? true : false,
      }));
    } catch (error) {}
  };

  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlock(userId);
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {}
  };

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followRequested:
              !state.following && !state.followRequested ? true : false,
          }
        : { ...state, blocked: !state.blocked }
  );

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-pink-500 text-white px-2  py-1 rounded-md text-xs tracking-wider">
          {optimisticState.following
            ? "Following"
            : optimisticState.followRequested
            ? "Request sent"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="self-end">
        <button>
        <span className="text-pink-500 cursor-pointer self-end text-xs">
          {optimisticState.blocked ? "Unblock User" : "Block User"}
        </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
