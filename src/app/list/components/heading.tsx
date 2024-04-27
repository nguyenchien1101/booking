"use client";
import React, { ChangeEvent } from "react";

interface Props {
  count: number;
  sortValue: string;
  handleSort: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Heading = ({ count, sortValue, handleSort }: Props) => {
  const Options = ["Điểm số", "Tên"];

  return (
    <div className="pt-8 pb-6 flex justify-between items-center">
      <div className="">
        <p className="font-bold text-4xl">Danh sách khách sạn</p>
        <p className="mt-2">{count} khách sạn được tìm thấy</p>
      </div>
      <div>
        <label className=" mr-4"> Sắp xếp:</label>
        <select
          name=""
          id=""
          className="py-2 pl-2 pr-16 border-2 rounded-md bg-neutral-200"
          value={sortValue}
          onChange={handleSort}
        >
          <option value="" selected disabled hidden>
            Chọn thông tin
          </option>
          {Options.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Heading;
