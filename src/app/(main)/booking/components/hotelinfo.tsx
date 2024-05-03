import React from "react";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useRouter } from "next/router";
import { useParams, useSearchParams } from "next/navigation"; // Import from next/navigation
import { KhachSan } from "@/interfaces";
import { axiosClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import "./hotelinfo.css";
function Render(props) {
  return (
    <div>
      <p>Tiện Nghi</p>
      <p>{props.tiennghi}</p>
    </div>
  );
}
const HotelInfo = () => {
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
      <div className="hotelinfocontainer">
        <div>
          <h1 className="text-1xl font-bold">Tiện Nghi</h1>
          <p>
            -{" "}
            {phong?.attributes?.tien_nghi_khach_sans?.data[0]?.attributes?.ten}
          </p>
          <p>
            -{" "}
            {phong?.attributes?.tien_nghi_khach_sans?.data[1]?.attributes?.ten}
          </p>
        </div>
        <div>
          <h1 className="text-1xl font-bold">Phòng</h1>
          <p> - {phong?.attributes?.phongs?.data[0]?.attributes?.ten}</p>
        </div>
        <div>
          <h1 className="text-1xl font-bold">số lượng giường</h1>
          <p>
            {" "}
            - {phong?.attributes?.phongs?.data[0]?.attributes?.soLuongGiuong}
          </p>
        </div>
        <div>
          <h1 className="text-1xl font-bold">Mô tả phòng</h1>
          <p>- {phong?.attributes?.phongs?.data[0]?.attributes?.moTa}</p>
        </div>
      </div>
    </>
  );
};

export default HotelInfo;
