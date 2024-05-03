'use client';
import { Button } from '@/components/ui/button';
import { axiosClient } from '@/lib/axios';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Pagination,
} from '@nextui-org/react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { HiSortAscending } from 'react-icons/hi';
import { ListItemNoiBat } from '../home/ListItemNoiBat';
import { KhachSanItem } from './KhachSanItem';

export function ListKhachSanComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  //   const { data } = useQuery({
  //     queryKey: [
  //       ['bat-dong-san', currentPage],
  //       ['props', searchProps],
  //     ],
  //     queryFn: () => fetchAllBatDongSan(currentPage, searchProps),
  //     staleTime: 60 * 1000 * 1,
  //     keepPreviousData: true,
  //   });
  const { data } = useQuery({
    queryKey: ['khach-sans'],
    queryFn: async () => {
      const res = await axiosClient.get('/api/khach-sans?populate=*');
      return res;
    },
    placeholderData: keepPreviousData,
  });
  const ref = React.useRef(null);

  //Set page state when change review page index
  const onPageChange = (page) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setCurrentPage(page);
  };

  const [isDefault, setIsDefault] = useState(true);
  const [isDefaultPrice, setIsDefaultPrice] = useState(true);
  console.log('🚀 ~ ListComponent ~ data:', data);

  return (
    <div ref={ref} className="mr-6">
      <div className="flex justify-between p-4 rounded-xl bg-white border-[1px] shadow-sm">
        <div className=" text-[14px] text-gray-500 flex my-auto">
          {data?.totalItems} kết quả
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {data?.data.map((item) => (
          <KhachSanItem key={item?.id} item={item?.attributes} />
        ))}
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