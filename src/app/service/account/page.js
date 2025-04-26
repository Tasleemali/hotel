'use client';

import { useSession } from "next-auth/react";
import LogoutButton from "@/components/compo-ui/logout-button";

export default function AccountPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <p className="text-lg text-gray-500 animate-pulse">Loading your account...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <p className="text-lg text-red-500">You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-2xl border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Account Overview</h1>
        <p className="text-gray-600 text-lg mb-1">
          <span className="font-medium text-gray-800">Name:</span> {session.user?.name || "N/A"}
        </p>
        <p className="text-gray-600 text-lg mb-4">
          <span className="font-medium text-gray-800">Email:</span> {session.user?.email}
        </p>

        <div className="mt-6">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
