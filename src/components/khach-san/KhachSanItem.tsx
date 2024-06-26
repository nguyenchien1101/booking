"use client";
import React from "react";

import { KhachSan } from "@/interfaces";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdApartment } from "react-icons/md";

const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: "VND",
  style: "currency",
});
export function formatCurrency(value: number) {
  return CURRENCY_FORMAT.format(value);
}
export function KhachSanItem({ item }: { item: KhachSan }) {
  const minPrice = item?.attributes?.phongs?.data?.reduce((min, phong) => {
    return Math.min(min, phong?.attributes?.gia);
  }, Infinity); // Start with Infinity to ensure any price is lower on the first comparison.  return (
  console.log(item?.id);
  return (
    <Card className="hover:shadow-2xl transition ease-in-out duration-200 hover:scale-[1.01] h-[full]">
      <Link href={`khach-san/chi-tiet/${item?.id}`}>
        <div className="hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_-8px_15px_-3px_rgba(0,0,0,0.1)] rounded-md transition ease-in-out duration-200 h-full p-4">
          <div className="rounded-sm relative">
            <div className="lg:h-[180px] xl:h-[200px] md:h-[480px] h-[280px]">
              <Image
                alt={item?.attributes?.ten}
                src={item?.attributes?.anhBia?.data?.attributes?.url}
                layout="fill"
                className="rounded-xl"
                objectFit="cover"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-black opacity-10" />

              <div className="flex flex-row gap-2 absolute top-4 left-6">
                <p className="bg-blue-500 w-[82px] h-[20px] rounded-md text-white text-[14px] px-2 text-center py-2">
                  {item?.attributes?.diem_den?.data?.attributes?.ten}
                </p>
              </div>
            </div>
            {/* <div className="flex flex-row gap-2 absolute top-4 left-6">
            <HinhThuc type={item?.isChothue}></HinhThuc>
            <BranchPost type={item?.nhan}></BranchPost>
          </div> */}
          </div>
          <div className="mt-6 space-y-2 mb-6">
            <div className="text-red-500 text-sm flex flex-row gap-1 items-center">
              <MdApartment />

              {item?.attributes?.loai_khach_san?.data?.attributes?.ten}
              <div className="flex flex-row ">
                {Array.from({ length: item?.sao }).map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-neutral-600 text-base">
              {item?.attributes?.ten}
            </div>
            <p className="font-semibold text-[20px] text-neutral bottom-4 left-6   ">
              {formatCurrency(minPrice)}/ đêm
            </p>
            <div className="text-neutral-500 text-sm leading-6 items-center">
              <IoLocationOutline className="text-base float-left mr-1 mt-1" />
              {item?.attributes?.diaChi}
            </div>
            <div className="text-neutral-500 text-sm flex items-center gap-x-1 flex-wrap">
              <p>
                Đánh giá:
                <p className="font-bold">{item?.attributes?.danhGia}/5</p>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
