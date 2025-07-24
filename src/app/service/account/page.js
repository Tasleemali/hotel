"use client";

import { useSession } from "next-auth/react";
import LogoutButton from "@/components/compo-ui/logout-button";
import { User } from "lucide-react"; // icon for avatar


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
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen grid place-items-center">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-2xl rounded-3xl border border-gray-200 transition-all">
        {/* Avatar + Name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome, {session.user?.name || "User"} 👋</h1>
            <p className="text-sm text-gray-500">Here’s your account summary</p>
          </div>
        </div>

        {/* User Info */}
        <div className="space-y-4">
          <div>
            <label className="text-gray-600 text-sm">Full Name</label>
            <p className="text-lg font-medium text-gray-800">{session.user?.name || "N/A"}</p>
          </div>

          <div>
            <label className="text-gray-600 text-sm">Email Address</label>
            <p className="text-lg font-medium text-gray-800">{session.user?.email}</p>
          </div>
        </div>

        {/* Logout */}
        <div className="mt-8 pt-4 border-t border-gray-100">
          <h3 className="text-gray-500 text-sm mb-2">Want to logout?</h3>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
