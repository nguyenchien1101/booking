import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams, useSearchParams } from "next/navigation"; // Import from next/navigation
import { KhachSan } from "@/interfaces";
import { axiosClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import Rating from "@mui/material/Rating";
const Heading = () => {
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
  const rare = Number(phong?.attributes?.sao);

  return (
    <>
      <div className="pt-8 pb-6">
        <p className="font-bold text-4xl w-2/3">Thông tin khách sạn</p>
        <p className="mt-2">
          <FontAwesomeIcon
            className="w-3 inline mr-2 pb-1"
            icon={faLocationDot}
          />
          Địa chỉ |
          <FontAwesomeIcon className="w-3.5 inline mx-2 pb-1" icon={faStar} />
          Điểm số
        </p>
        <p className="mt-2 w-auto">{phong?.attributes?.diaChi} </p>
        <Rating name="read-only" value={rare} readOnly />
      </div>
    </>
  );
};

export default Heading;
