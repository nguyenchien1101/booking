import React from "react";
import Navigation from "../Home/components/Nav/nav";
import BookingBox from "./components/bookingbox";
import Heading from "./components/heading";
import HotelInfo from "./components/hotelinfo";
import Description from "./components/description";
import "@mantine/carousel/styles.css";
const Booking = () => {
  return (
    <>
      <Navigation />
      <div className="w-4/5 m-auto mt-20">
        <Heading />
        {/* <ImageSlide /> */}
        <BookingBox />
        <HotelInfo />
        <Description />
      </div>
    </>
  );
};

export default Booking;
