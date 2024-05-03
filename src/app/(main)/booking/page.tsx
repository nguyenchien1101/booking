"use client";
import "@mantine/carousel/styles.css";
import React from "react";
import Navigation from "../(home)/components/Nav/nav";
import BookingBox from "./components/bookingbox";
import Description from "./components/description";
import Heading from "./components/heading";
import HotelInfo from "./components/hotelinfo";
import ImageSlide from "./components/imageSlide";
import { NextRequest } from "next/server";
import { useParams, useSearchParams } from "next/navigation"; // Import from next/navigation
import { KhachSan } from "@/interfaces";
import { axiosClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import "./style.css";
const Booking = (request: NextRequest) => {
  const query = useSearchParams();
  const newparams = query.get("phong");

  const { data } = useQuery({
    queryKey: ["khach-san", newparams],
    queryFn: async () => {
      const res = await axiosClient.get(
        `/api/khach-sans/${newparams}?populate=*`
      );
      return res?.data;
    },
  });
  const phong = data as KhachSan[];

  return (
    <>
      <div className="w-4/5 m-auto mt-20 ">
        <Heading />
        <div className="grid-col-1">
          <h1>{phong?.attributes?.ten}</h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="grid-col-1">
            <ImageSlide />
          </div>
          <div className="hai">
            <BookingBox />
          </div>

          <HotelInfo />
          <Description />
        </div>
      </div>
    </>
  );
};

export default Booking;
