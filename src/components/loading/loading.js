"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl bg-gray-100 p-4 shadow-md w-full max-w-sm flex flex-col items-center">
      <div className="w-36 h-36 mb-4">
        <Player
          autoplay
          loop
          src="/paperplane.json"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
    </div>
  );
}

