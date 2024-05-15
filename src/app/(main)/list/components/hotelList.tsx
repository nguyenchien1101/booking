import React, { useEffect, useState } from "react";
import { axiosClient } from "@/lib/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { KhachSanItem } from "../../../../components/khach-san/KhachSanItem";
import { Pagination } from "@nextui-org/react";
import Loader from "@/components/Loader";
import { useSearchParams } from "next/navigation";

export default function HotelList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [tukhoa, setTuKhoa] = useState("");

  const query = useSearchParams();

  useEffect(() => {
    const tuKhoaValue = query.get("TenKS") || "";
    setTuKhoa(tuKhoaValue);
  }, [query]);

  const { data } = useQuery({
    queryKey: ["khach-sans", tukhoa],
    queryFn: async () => {
      const res = await axiosClient.get(`/api/khach-sans?populate=*&${tukhoa}`);
      setLoading(false);
      return res;
    },
    placeholderData: keepPreviousData,
  });

  const ref = React.useRef(null);
  const onPageChange = (page) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setCurrentPage(page);
  };

  return (
    <div ref={ref} className="mr-6">
      <div className="flex justify-between p-4 rounded-xl bg-white border-[1px] shadow-sm">
        <div className=" text-[14px] text-gray-500 flex my-auto">
          {loading ? (
            <span>Loading...</span>
          ) : (
            <span>{data?.meta?.pagination?.total} kết quả</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {loading ? (
          <Loader />
        ) : (
          data?.data?.map((item) => <KhachSanItem key={item?.id} item={item} />)
        )}
      </div>
      <div className="flex justify-center p-6">
        <Pagination
          showControls
          total={data?.totalPages}
          initialPage={1}
          onChange={(page) => {
            onPageChange(page);
          }}
          page={currentPage}
        />
      </div>
    </div>
  );
}
