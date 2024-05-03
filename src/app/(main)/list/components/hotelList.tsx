import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams, useSearchParams } from "next/navigation"; // Import from next/navigation
import { KhachSan } from "@/interfaces";
import { axiosClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
interface Props {
  items: object[];
}

const HotelList = () => {
  const query = useSearchParams();
  const newparams = query.get("diadiem");

  const { data } = useQuery({
    queryKey: ["khach-san", newparams],
    queryFn: async () => {
      const res = await axiosClient.get(
        `/api/khach-sans?populate=*&filter[diem_den][id][$eq]=${newparams}`
      );
      return res?.data;
    },
  });
  const phong = data as KhachSan[];
  return (
    <>
      <div className="w-2/3 grow ml-6">
        {phong?.map((item, index) => (
          <a
            href={"./booking?phong=" + item.id}
            key={index}
            className="flex justify-between items-center border-2 rounded-md mb-4 hover:cursor-pointer"
          >
            <div className="flex justify-center items-center">
              <div className="w-40 h-40 overflow-hidden">
                <img
                  src={
                    item?.attributes?.hinhAnhKhachSan?.data[0]?.attributes
                      ?.formats?.medium?.url
                  }
                  alt="Hotel Image"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="ml-6">
                <p className="inline rounded-3xl text-white bg-teal-400 py-1 px-4 text-sm">
                  Còn phòng
                </p>
                <p className="inline pl-3">
                  |
                  <FontAwesomeIcon
                    className="w-3.5 inline mx-2 pb-1"
                    icon={faStar}
                  />
                  {item?.attributes?.danhGia}
                </p>
                <p className="font-bold text-xl my-2">
                  {item?.attributes?.ten}
                </p>
                <p className="mb-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-3.5 inline mx-2 pb-1"
                  />
                  {item?.attributes?.diaChi}
                </p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-teal-500 text-center">
                {item?.attributes?.phongs?.data[0]?.attributes?.gia}
              </p>
              <p className="text-center">Mỗi người</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default HotelList;
