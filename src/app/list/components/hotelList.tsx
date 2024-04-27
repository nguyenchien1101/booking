import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

interface Props {
  items: object[];
}

const HotelList = (prop: Props) => {
  return (
    <>
      <div className="w-2/3 grow ml-6">
        {prop.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-2 rounded-md mb-4 hover:cursor-pointer"
          >
            <div className="flex justify-center items-center">
              <div className="w-40 h-40 overflow-hidden">
                <img
                  src={item.hinhAnh}
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
                  {item.diemSo}
                </p>
                <p className="font-bold text-xl my-2">{item.ten}</p>
                <p className="mb-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-3.5 inline mx-2 pb-1"
                  />
                  {item.diaChi}
                </p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-teal-500 text-center">~250.000 VND</p>
              <p className="text-center">Mỗi người</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelList;
