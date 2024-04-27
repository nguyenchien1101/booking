import React from "react";

const BookingBox = () => {
  return (
    <>
      <div className="bg-white shadow-md w-96 font-bold rounded-md float-right">
        <p className="border-b-2 p-4 text-xl">Booking</p>
        <div className="px-4 py-6">
          <form
            action=""
            className="flex flex-col justify-between items-left mb-4"
          >
            <div className="mb-4">
              <p className="label">From</p>
              <input
                type="date"
                name=""
                id=""
                className="bg-gray-100 w-full p-3 mt-2 rounded-md font-normal"
              />
            </div>
            <div className="mb-4">
              <p className="label">To</p>
              <input
                type="date"
                name=""
                id=""
                className="bg-gray-100 w-full p-3 mt-2 rounded-md font-normal"
              />
            </div>
            <div className="mb-4">
              <p className="label">No. Of Guest</p>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-100 w-full p-3 mt-2 rounded-md font-normal"
              />
            </div>
          </form>
          <div className="text-center">
            <p className="font-medium leading-relaxed">Subtotal</p>
            <p className="text-4xl text-teal-500">$78.90</p>
          </div>
          <div className="py-4"></div>
          <button
            type="button"
            className="block py-4 w-full bg-teal-500 rounded-md text-white mb-2"
          >
            Confirm Booking
          </button>
          <button
            type="button"
            className="block py-4 w-full rounded-md text-gray-500 mb-2 border-2 border-stone-500"
          >
            Save to Wishlist
          </button>
          <button
            type="button"
            className="block py-4 w-full rounded-md text-gray-500 mb-2 border-2 border-stone-500"
          >
            Share the Activity
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingBox;
