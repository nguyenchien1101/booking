import '@mantine/carousel/styles.css';
import React from 'react';
import Navigation from '../(home)/components/Nav/nav';
import BookingBox from './components/bookingbox';
import Description from './components/description';
import Heading from './components/heading';
import HotelInfo from './components/hotelinfo';
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
