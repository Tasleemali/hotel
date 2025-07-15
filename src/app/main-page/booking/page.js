"use client";
import React, { useEffect, useState } from "react";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [canceling, setCanceling] = useState(null);

  // Fetch bookings from API
  const fetchBooking = async () => {
    setLoading(true);
    const res = await fetch("/api/my-bookings");
    const data = await res.json();
    setBooking(data); // Update booking state with fetched data
    setLoading(false);
  };

  useEffect(() => {
    fetchBooking(); // Fetch bookings on page load
  }, []);

  // Handle cancel booking or checkout
  // const handleBookingStatusChange = async (bookingId, action) => {
  //   const confirmAction = window.confirm(
  //     `Kya aap sach mein is booking ko ${action} karna chahte ho?`
  //   );
  //   if (!confirmAction) return;
  
  //   setCanceling(bookingId); // Track kar rahe hain ki kaunsi booking cancel ho rahi hai
  
  //   try {
  //     const res = await fetch("/api/book-room/cancel", {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ bookingId, action }), // Backend ko action bhejna (cancel ya checkout)
  //     });
  
  //     const data = await res.json();
  
  //     if (res.ok) {
  //       alert(`Booking ${action} ho gayi!`);
  
  //       // Local state mein booking status ko update karna
  //       setBooking((prevBookings) =>
  //         prevBookings.map((b) =>
  //           b._id === bookingId ? { ...b, roomStatus: action } : b
  //         )
  //       );
  //     } else {
  //       alert(data.message || `Booking ${action} nahi ho sakti`);
  //     }
  //   } catch (error) {
  //     console.error(`${action} error:`, error);
  //     alert("Kuch galat ho gaya");
  //   } finally {
  //     setCanceling(null); // Reset the canceling state after operation
  //   }
  // };
  

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  return (
    <div className= " bg-white text-black min-h-screen  max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
      {booking.length === 0 ? (
        <p className=" h-screen grid place-items-center">No bookings found.</p>
      ) : (
        booking.map((booking) => (
          <div key={booking._id} className="mb-4 p-4 rounded shadow border">
            <h3 className="text-lg font-semibold">
              Room: {booking.roomId?.name || "Unknown Room"}
            </h3>
            <p>Check-In: {new Date(booking.checkIn).toLocaleString()}</p> 
              <p>Check-Out: {new Date(booking.checkOut).toLocaleDateString()}</p>
              <p>Total: ₹{booking.totalPrice}</p>

            <p>Status: {booking.roomStatus}</p>

            {/* Show cancel button only if booking is not already cancelled */}
            {booking.roomStatus !== "cancelled" && booking.roomStatus !== "checkedout" && (
              <>
                <button
                  onClick={() => handleBookingStatusChange(booking._id, "cancelled")}
                  disabled={canceling === booking._id} // Disable the button during canceling
                  className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  {canceling === booking._id ? "Cancelling..." : "Cancel Booking"}
                </button>
                <button
                  onClick={() => handleBookingStatusChange(booking._id, "checkedout")}
                  disabled={canceling === booking._id} // Disable the button during canceling
                  className="mt-3 ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  {canceling === booking._id ? "Checking Out..." : "Checkout Booking"}
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Booking;
