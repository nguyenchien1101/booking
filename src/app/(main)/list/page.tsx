"use client";
import React, { ChangeEvent, useState } from "react";
import Navigation from "../(home)/components/Nav/nav";
import Filter from "./components/filer";
import Footer from "./components/footer";
import HotelList from "./components/hotelList";
import { useParams, useSearchParams } from "next/navigation"; // Import from next/navigation
import { KhachSan } from "@/interfaces";
import { axiosClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Separator } from "../../../components/ui/separator";
import { SearchComponent } from "@/components/khach-san/SearchComponent";
const data1 = [
  {
    ten: "Central Hotel",
    diaChi: "Hồ Chí Minh",
    diemSo: "4.5/5",
    hinhAnh:
      "https://tgroup.vn/uploads/images/hotel/hotel-da-nang/shilla-monogram-quangnam-danang-hotel-tgroup-travel-1.jpg",
  },
  {
    ten: "Khách sạn Bảo Ngọc",
    diaChi: "Thủ Đức",
    diemSo: "4.0/5",
    hinhAnh:
      "https://th.bing.com/th/id/OIP.z2ZCk_3AD21EAaNEutYXfwHaHa?w=800&h=800&rs=1&pid=ImgDetMain",
  },
  {
    ten: "Khách sạn Ngôi Sao",
    diaChi: "Tân Bình",
    diemSo: "4.3/5",
    hinhAnh:
      "https://i.pinimg.com/originals/c9/eb/5e/c9eb5e13896add6a46789e5b8e0511e5.jpg",
  },
  {
    ten: "Khách sạn Sân Bay",
    diaChi: "Tân Bình",
    diemSo: "3.8/5",
    hinhAnh:
      "https://th.bing.com/th/id/OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8?rs=1&pid=ImgDetMain",
  },
  {
    ten: "Amaga Vũng Tàu",
    diaChi: "Tân Bình",
    diemSo: "3.8/5",
    hinhAnh:
      "https://th.bing.com/th/id/OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8?rs=1&pid=ImgDetMain",
  },
];
const List = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row pt-8 pb-8">
      <div className="basis-[35%] flex flex-col gap-4">
        <Footer />
      </div>
      <div className="basis-[65%]">
        <Separator className="lg:hidden h-[6px] mt-4 mb-8 w-[96%] text-gray-500 rounded-md" />
        <HotelList />
      </div>
    </div>
  );
};

export default List;
