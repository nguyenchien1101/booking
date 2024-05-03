"use client";
import React, { ChangeEvent, useState } from "react";
import Navigation from "../(home)/components/Nav/nav";
import Filter from "./components/filer";
import Heading from "./components/heading";
import HotelList from "./components/hotelList";
import { useParams, useSearchParams } from "next/navigation"; // Import from next/navigation
import { KhachSan } from "@/interfaces";
import { axiosClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
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
  const [sort, setSort] = useState("");
  const [hotelLists, setHotelList] = useState(data1);
  console.log(sort, "1");
  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
    const sortedList = [...hotelLists];
    if (selectedSort === "Tên") {
      sortedList.sort((a, b) => {
        if (a.ten < b.ten) {
          return -1;
        } else if (a.ten > b.ten) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    if (selectedSort === "Điểm số") {
      sortedList.sort((a, b) => {
        if (a.diemSo > b.diemSo) {
          return -1;
        } else if (a.diemSo < b.diemSo) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    setHotelList(sortedList);
  };

  return (
    <>
      <div className="w-4/5 mx-auto mt-20">
        <Heading
          count={hotelLists.length}
          sortValue={sort}
          handleSort={handleSort}
        />
        <div className="flex justify-between items-start flex-1">
          <Filter />
          <HotelList />
        </div>
      </div>
    </>
  );
};

export default List;
