import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
const Heading = () => {
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
      </div>
    </>
  );
};

export default Heading;
