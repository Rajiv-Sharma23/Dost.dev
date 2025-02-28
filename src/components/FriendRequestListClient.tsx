"use client";

import { acceptFollowRequest, declineFollowRequest } from "@/actions/action";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestListClient = ({
  requests,
}: {
  requests: RequestWithUser[];
}) => {
  const [requestState, setRequestState] = useState(requests);

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequests(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequests(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const [optimisticRequests, removeOptimisticRequests] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  );

  return (
    <div>
      {optimisticRequests.map((request) => (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4" key={request.id}>
            <Image
              src={request.sender.avatar || "noAvatar.png"}
              alt="avatar"
              width={1024}
              height={1024}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-pink-600 font-semibold">
              {request.sender.name && request.sender.lastname
                ? request.sender.name + " " + request.sender.lastname
                : request.sender.username}
            </span>
          </div>

          <div className="flex items-end gap-3">
            <form action={() => accept(request.id, request.sender.id)}>
              <button>
                <Image src="/accept.png" width={20} height={20} alt="accept" />
              </button>
            </form>
            <form action={() => decline(request.id, request.sender.id)}>
              <button>
                <Image src="/reject.png" width={20} height={20} alt="accept" />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestListClient;
