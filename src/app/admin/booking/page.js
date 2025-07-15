"use client";
import React, { useEffect, useState } from "react";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [canceling, setCanceling] = useState(null);

  // Fetch bookings from API
  const fetchBooking = async () => {
    setLoading(true);
    const res = await fetch("/admin/booking");
    const data = await res.json();
    setBooking(data); // Update booking state with fetched data
    setLoading(false);
  };

  useEffect(() => {
    fetchBooking(); // Fetch bookings on page load
  }, []);

  // Handle cancel booking
  const handleBookingStatusChange = async (bookingId, action) => {
    const confirmAction = window.confirm(
      `Kya aap sach mein is booking ko ${action} karna chahte ho?`
    );
    if (!confirmAction) return;
  
    setCanceling(bookingId); // Track which booking is being canceled
  
    try {
      const res = await fetch("/api/book-room/cancel", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId, action }), // Pass 'cancelled' or 'checkedout'
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert(`Booking ${action} ho gayi!`);
  
        // Update local state to reflect the change
        setBooking((prevBookings) =>
          prevBookings.map((b) =>
            b._id === bookingId ? { ...b, roomStatus: action } : b
          )
        );
      } else {
        alert(data.message || `Booking ${action} nahi ho sakti`);
      }
    } catch (error) {
      console.error(`${action} error:`, error);
      alert("Kuch galat ho gaya");
    } finally {
      setCanceling(null); // Reset canceling state
    }
  };
  
  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }
console.log(booking)
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
      {booking.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        booking.map((booking) => (
          <div key={booking._id} className="mb-4 p-4 rounded shadow border">
            <h3 className="text-lg font-semibold">
              Room: {booking.roomId?.name || "Unknown Room"}
            </h3>
            <p>Check-In: {new Date(booking.checkIn).toLocaleString()}</p>
            <p>Check-In-Time: {new Date(`1970-01-01T${booking.checkInTime}:00`).toLocaleString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
            <p>Check-Out: {new Date(booking.checkOut).toLocaleDateString()}</p>
            <p>Check-Out-Time: {new Date(`1970-01-01T${booking.checkOutTime}:00`).toLocaleString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
            <p>Total: ₹{booking.totalPrice}</p>

            <p>Status: 
             {booking.roomStatus}
            </p>

            {/* Show cancel button only if booking is not already cancelled */}
            {booking.roomStatus !== "cancelled" && (
              <button
                onClick={() => handleCancelBooking(booking._id)}
                disabled={canceling === booking._id} // Disable the button during canceling
                className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                {canceling === booking._id ? "Cancelling..." : "Cancel Booking"}
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Booking;
