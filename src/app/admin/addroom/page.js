"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function AddRooms() {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
   totalRooms: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating the backend call for now
    const response = await fetch("/api/admin/room", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:   JSON.stringify(formData)
    });

    const result = await response.json();

    setLoading(false);
    if (response.ok) {
      alert("Room added successfully!");
      setFormData({image:"", name:"" ,price:"",totalRooms:"" ,description:""})
    } else {
      alert(result.message || "Failed to add room");
    }
  };

  console.log(formData)
  return (
    <div className= "w-full h-auto bg-white text-black">
      <div className="max-w-6xl mx-auto">
        
        <form onSubmit={handleSubmit} className=" bg-amber-100 max-w-6xl max-auto px-3 py-3">

          <h1 className="text-2xl md:text-xl font-semibold text-center mb-10 ">Add Rooms</h1>
 <div className=" w-full flex flex-col">
            <label className="font-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image link"
              className=" w-full border-2 border-gray-300 p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label  className="font-semibold">Room Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
             onChange={handleChange}
              placeholder="Enter room name"
              className="border-2 border-gray-300 p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label  className="font-semibold">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
            onChange={handleChange}
              placeholder="Enter description info"
              className="border-2 border-gray-300 p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label  className="font-semibold">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
               onChange={handleChange}
              placeholder="Enter room price"
              className="border-2 border-gray-300 p-2 rounded focus:outline-red-700"
            />
          </div>

          <div className="flex flex-col">
            <label  className="font-semibold">Total Rooms</label>
            <input
              type="number"
              name="totalRooms"
              value={formData.totalRooms}
             onChange={handleChange}
              placeholder="Enter total rooms"
              className="border-2 border-gray-300 p-2 rounded"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700"
          >
            {loading ? "Adding..." : "Add Room"}
          </button>

        </form>

      </div>
  
    </div>
  );
}

export default AddRooms;



//  <form onSubmit={handleSubmit} className=" min-w-3xl space-y-4">
          // <div className=" w-full flex flex-col">
          //   <label>Image URL</label>
          //   <input
          //     type="text"
          //     name="image"
          //     value={formData.image}
          //     onChange={handleChange}
          //     placeholder="Enter image link"
          //     className=" w-full border-2 border-gray-300 p-2 rounded"
          //   />
          // </div>

          // <div className="flex flex-col">
          //   <label>Room Name</label>
          //   <input
          //     type="text"
          //     name="name"
          //     value={formData.name}
          //    onChange={handleChange}
          //     placeholder="Enter room name"
          //     className="border-2 border-gray-300 p-2 rounded"
          //   />
          // </div>

          // <div className="flex flex-col">
          //   <label>Description</label>
          //   <input
          //     type="text"
          //     name="description"
          //     value={formData.description}
          //   onChange={handleChange}
          //     placeholder="Enter description info"
          //     className="border-2 border-gray-300 p-2 rounded"
          //   />
          // </div>

          // <div className="flex flex-col">
          //   <label>Price</label>
          //   <input
          //     type="text"
          //     name="price"
          //     value={formData.price}
          //      onChange={handleChange}
          //     placeholder="Enter room price"
          //     className="border-2 border-gray-300 p-2 rounded"
          //   />
          // </div>

          // <div className="flex flex-col">
          //   <label>Total Rooms</label>
          //   <input
          //     type="number"
          //     name="totalRooms"
          //     value={formData.totalRooms}
          //    onChange={handleChange}
          //     placeholder="Enter total rooms"
          //     className="border-2 border-gray-300 p-2 rounded"
          //   />
          // </div>

          // <button
          //   type="submit"
          //   disabled={loading}
          //   className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700"
          // >
          //   {loading ? "Adding..." : "Add Room"}
          // </button>
//         </form>