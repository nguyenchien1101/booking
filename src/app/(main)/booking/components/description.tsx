import React from "react";
import { KhachSan } from "@/interfaces";
import { axiosClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation"; // Import from next/navigation;
const Description = () => {
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
      <div className="my-4 rounded-md bg-white w-2/3 py-4">
        <p className="font-bold text-xl my-2">Mô Tả</p>
        <p>{phong?.attributes?.moTa}</p>
      </div>
    </>
  );
};

export default Description;
