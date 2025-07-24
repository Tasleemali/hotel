"use client";

import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BookRoomPage = () => {
  const { data: session } = useSession();
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [loading, setLoading] = useState(false);
  const [nights, setNights] = useState(0);
  const router = useRouter()
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    const getRoom = async () => {
      const res = await fetch(`/api/rooms/${id}`);
      const data = await res.json();
      setRoom(data);
    };
    if (id) getRoom();
  }, [id]);

  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays || 0);
    } else {
      setNights(0);
    }
  }, [checkIn, checkOut]);

  const checkAvailability = async () => {
    if (!checkIn || !checkOut) {
      Swal.fire("Missing Dates", "Please select both check-in and check-out dates", "warning");
      return false;
    }

    const res = await fetch("/api/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId: id, checkIn, checkOut }),
    });

    const data = await res.json();

    if (!data.available) {
      Swal.fire("Unavailable", data.message || "Room not available", "error");
      return false;
    }

    return true;
  };

  const handlePayment = async () => {
   if (!session) {
  Swal.fire({
    title: "Login Required",
    text: "Please login to continue",
    icon: "warning",
    confirmButtonText: "Login Now",
  }).then((result) => {
    if (result.isConfirmed) {
      router.push("/service/login"); // Redirect to your custom login page
    }
  });

  return;
}

    const isAvailable = await checkAvailability();
    if (!isAvailable) return;

    setLoading(true);

    try {
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: room.price * nights * 100,
          currency: "INR",
          receipt: "rcpt_" + Math.random().toString(36).substr(2),
        }),
      });

      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Hotel Booking",
        description: room.name,
        order_id: order.id,
        handler: async (response) => {
          const verify = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              roomId: room._id,
              roomName: room.name,
              checkIn,
              checkOut,
              amount: room.price * nights,
              userEmail: session.user.email,
              userId: session.user.id || session.user._id || "",
            }),
          });

          const result = await verify.json();
          Swal.fire(result.success ? "Success" : "Failed", result.message, result.success ? "success" : "error");
        },
        theme: { color: "#1e3a8a" },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong during payment", "error");
    }

    setLoading(false);
  };

  if (!room) return <div className="text-center mt-10">Loading room details...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white text-black min-h-screen md:py-10   ">
      <div className="  grid grid-cols-1 md:grid-cols-2 gap-8 shadow-xl rounded-2xl overflow-hidden">
        <img
          src={room.image || "/hotel.jpg"}
          alt="room"
          className="w-full h-full object-cover max-h-[450px]"
        />

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{room.name}</h1>
            <p className="text-gray-600 mt-2">{room.description}</p>
            <p className="text-xl font-semibold text-green-600 mt-4">
              ₹{room.price} / night
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Check-In</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Check-Out</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>

            {nights > 0 && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg text-sm">
                <p><strong>Nights:</strong> {nights}</p>
                <p><strong>Total:</strong> ₹{room.price * nights}</p>
              </div>
            )}
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className={`w-full mt-6 py-3 rounded-lg text-white font-semibold transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            {loading ? "Processing..." : "Pay & Book Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookRoomPage;

