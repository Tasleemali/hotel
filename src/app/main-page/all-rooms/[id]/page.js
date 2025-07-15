"use client";

 import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
  import Swal from 'sweetalert2'
const BookRoomPage = () => {
  const { data: session} =useSession()
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [loading, setLoading] = useState(false);

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

  const checkAvailability = async () => {
    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates");
      return false;
    }

    const res = await fetch("/api/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomId: id,
        checkIn,
        checkOut,
      }),
    });

    const data = await res.json();

    if (!data.available) {
      alert(data.message || "Room not available for selected dates");
      return false;
    }

    return true;
  };

  const handlePayment = async () => {

       

if (!session) {
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Please login to continue',
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
          amount: room.price * 100, // paise me
          currency: "INR",
          receipt: "rcpt_" + Math.random().toString(36).substr(2),
        }),
      });

      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "HotelBooking",
        description: "Booking",
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
              amount: room.price,
              userEmail: session.user.email,  // user email from NextAuth session
              userId: session.user.id || session.user._id || ""
            }),
          });

          const result = await verify.json();
          alert(result.success ? "Booking confirmed!" : result.message);
        },
        theme: { color: "#3399cc" },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  if (!room) return <p>Loading...</p>;

  return (
    <div className=" bg-white text-black p-6">
      <h1 className="text-xl font-bold mb-2">{room.name}</h1>
      <p>{room.description}</p>
      <p className="my-2 text-lg">₹{room.price} / night</p>

      <div className="flex gap-4 mt-4">
        <input
          type="date"
          value={checkIn}
          placeholder="checkIn date"
          onChange={(e) => setCheckIn(e.target.value)}
          className="text-black bg-white p-2 border rounded"
        />
        <input
          type="date"
          placeholder="CheckOut date.."
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="text-black bg-white p-2 border rounded"
        />
      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4"
      >
        {loading ? "Processing..." : "Pay & Book"}
      </button>
    </div>
  );
};

export default BookRoomPage;
