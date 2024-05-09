'use client';
import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { axiosClient } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { BiSolidArrowFromBottom } from 'react-icons/bi';
import { BsCheck2 } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

const ImagePost = dynamic(() => import('./ImagePost'), {
  loading: () => null,
  ssr: false,
});
const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: 'VND',
  style: 'currency',
});

export function formatCurrency(value: number) {
  return CURRENCY_FORMAT.format(value);
}

export default function ChiTietComponent({ id }) {
  const { data, isLoading } = useQuery({
    queryKey: ['khach-san', id],
    queryFn: async () => {
      const res = await axiosClient.get(`/api/khach-sans/${id}?populate=*`);
      return res?.data;
    },
  });
  console.log('🚀 ~ data:', data);

  return isLoading ? (
    <div className="w-full h-full flex justify-center bg-gray-200 z-10 absolute top-0">
      <Loader />
    </div>
  ) : (
    <div className="relative min-h-[1032px]">
      <div className="container mx-auto px-[24px]">
        <div className="ml-4">
          <div className="container pt-[48px]">
            <div className="flex flex-col lg:flex-row justify-between mb-8">
              <div className="w-[60%]">
                <h1 className="text-[28px] text-neutral-700 font-medium ">
                  {data?.attributes?.ten}
                </h1>
                <h4 className="text-gray-500">{data?.attributes?.diaChi}</h4>
              </div>
              <div className="text-[28px] text-neutral-700 font-medium my-auto flex flex-row lg:w-[40%] lg:justify-end w-full justify-between space-x-6">
                <div className="flex flex-row ">
                  {Array.from({ length: data?.attributes?.sao }).map(
                    (_, index) => (
                      <FaStar key={index} className="text-yellow-400" />
                    )
                  )}
                </div>
              </div>
            </div>
            <ImagePost imageList={data?.attributes?.hinhAnhKhachSan} />
            <div className="flex flex-col lg:flex-row lg:gap-6">
              <div className="basis-3/4">
                <div className="mt-8 w-full rounded-md bg-white border-[1px] shadow p-8">
                  <div className="flex flex-row flex-wrap gap-4">
                    <div className="rounded bg-gray-50 text-gray-600 text-[14px] py-2 px-8">
                      {data?.attributes?.loai_khach_san?.data?.attributes?.ten}
                    </div>
                    <div className="rounded bg-gray-50 text-gray-600 text-[14px] py-2 px-8">
                      {data?.attributes?.diem_den?.data?.attributes?.ten}
                    </div>

                    <div className="rounded bg-gray-50 text-gray-600 text-[14px] py-2 px-8">
                      Diện tích: {data?.dienTich} m<sup>2</sup>
                    </div>
                  </div>
                  <div className="mt-8 text-gray-600">Mô tả</div>
                  <div className="mt-4 text-gray-600 text-[14px]">
                    {data?.attributes?.moTa}
                  </div>
                  <Separator className="mt-4" />
                  <div className="mt-8 text-gray-600">Thông tin chi tiết</div>
                  <div className="mt-4 lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600 text-[14px]">
                    <div className="flex flex-row">
                      <div className="w-1/2">BDS ID:</div>
                      <div className="w-1/2 font-semibold">{data?.id}</div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-1/2">Chiều dài:</div>
                      <div className="w-1/2 font-semibold">
                        {data?.chieuDai} m
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-1/2">Chiều rộng:</div>
                      <div className="w-1/2 font-semibold">
                        {data?.chieuRong} m
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-1/2">Diện tích:</div>
                      <div className="w-1/2 font-semibold">
                        {data?.dienTich} m<sup>2</sup>
                      </div>
                    </div>
                    {data?.loaiHinh?.loaiBDS?.name !== 'Đất' ? (
                      <>
                        <div className="flex flex-row">
                          <div className="w-1/2">Nội thất:</div>
                          <div className="w-1/2 font-semibold">
                            {data?.tinhTrangNoiThat}
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="w-1/2">Hướng cửa chính:</div>
                          <div className="w-1/2 font-semibold">
                            {data?.huongCuaChinh}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-row">
                        <div className="w-1/2">Hướng đất:</div>
                        <div className="w-1/2 font-semibold">
                          {data?.huongDat}
                        </div>
                      </div>
                    )}
                    {data?.loaiHinh?.loaiBDS?.name === 'Căn hộ' ? (
                      <>
                        <div className="flex flex-row">
                          <div className="w-1/2">Hướng ban công:</div>
                          <div className="w-1/2 font-semibold">
                            {data?.huongBanCong}
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="w-1/2">Số tầng:</div>
                          <div className="w-1/2 font-semibold">
                            {data?.soTang}
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="w-1/2">Phòng tắm:</div>
                          <div className="w-1/2 font-semibold">
                            {data?.soPhongTam}
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="w-1/2">Phòng ngủ:</div>
                          <div className="w-1/2 font-semibold">
                            {data?.soPhongNgu}
                          </div>
                        </div>
                        {data?.dienTichGarage > 0 && (
                          <div className="flex flex-row">
                            <div className="w-1/2">Garage:</div>
                            <div className="w-1/2 font-semibold">
                              {data?.dienTichGarage} m<sup>2</sup>
                            </div>
                          </div>
                        )}
                        {data?.dienTichHoBoi > 0 && (
                          <div className="flex flex-row">
                            <div className="w-1/2">Hồ bơi:</div>
                            <div className="w-1/2 font-semibold">
                              {data?.dienTichHoBoi} m<sup>2</sup>
                            </div>
                          </div>
                        )}
                        <div className="flex flex-row">
                          <div className="w-1/2">Năm hoàn thành:</div>
                          <div className="w-1/2 font-semibold">
                            {
                              new Date(data?.hoanThanh)
                                .toLocaleDateString('en-GB')
                                .split('/')[2]
                            }
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="w-1/2">Sửa chữa lần cuối:</div>
                          <div className="w-1/2 font-semibold">
                            {
                              new Date(data?.suaChuaLanCuoi)
                                .toLocaleDateString('en-GB')
                                .split('/')[2]
                            }
                          </div>
                        </div>
                      </>
                    ) : data?.loaiHinh?.loaiBDS?.name === 'Nhà ở' ? (
                      <>
                        <div className="flex flex-row">
                          <div className="w-1/2">Phòng tắm:</div>
                          <div className="w-1/2 font-semibold">
                            {data?.soPhongTam}
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="w-1/2">Phòng ngủ:</div>
                          <div className="w-1/2 font-semibold">
                            {data?.soPhongNgu}
                          </div>
                        </div>
                        {data?.dienTichGarage > 0 && (
                          <div className="flex flex-row">
                            <div className="w-1/2">Garage:</div>
                            <div className="w-1/2 font-semibold">
                              {data?.dienTichGarage} m<sup>2</sup>
                            </div>
                          </div>
                        )}
                        {data?.dienTichHoBoi > 0 && (
                          <div className="flex flex-row">
                            <div className="w-1/2">Hồ bơi:</div>
                            <div className="w-1/2 font-semibold">
                              {data?.dienTichHoBoi} m<sup>2</sup>
                            </div>
                          </div>
                        )}
                        <div className="flex flex-row">
                          <div className="w-1/2">Năm hoàn thành:</div>
                          <div className="w-1/2 font-semibold">
                            {
                              new Date(data?.hoanThanh)
                                .toLocaleDateString('en-GB')
                                .split('/')[2]
                            }
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="w-1/2">Sửa chữa lần cuối:</div>
                          <div className="w-1/2 font-semibold">
                            {
                              new Date(data?.suaChuaLanCuoi)
                                .toLocaleDateString('en-GB')
                                .split('/')[2]
                            }
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    <div className="flex flex-row">
                      <div className="w-1/2">Tình trạng pháp lý:</div>
                      <div className="w-1/2 font-semibold">
                        {data?.tinhTrangPhapLy}
                      </div>
                    </div>
                  </div>
                </div>
                {/* {data?.loaiHinh?.loaiBDS?.name !== 'Đất' ? (
                  <div className="mt-8 mb-8 w-full rounded-md bg-white border-[1px] shadow p-8">
                    <div className="text-gray-600 font-semibold">Tiện nghi</div>
                    <div className="mt-4 lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600 text-[14px]">
                      {parseJSON(data?.danhSachTienNghi).map((item) => (
                        <div className="flex flex-row">
                          <BsCheck2 className="text-blue-500 w-[24px] h-[24px] mr-4" />
                          <div className="w-1/2">{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <></>
                )} */}
                <div className="mt-8 mb-8 w-full rounded-md bg-white border-[1px] shadow p-8">
                  <div className="flex flex-row justify-between flex-wrap">
                    <div className="text-gray-600 font-semibold">Vị trí</div>
                    <div className="text-gray-600 text-[14px]">
                      {data?.diaChi}
                    </div>
                  </div>
                  <div className="mt-8 w-full rounded-md overflow-hidden"></div>
                  {/* <MapComponent
                    lat={toaDo?.lat}
                    lon={toaDo?.lon}
                    nameAddress={data?.diaChi}
                    title={data?.tieuDe}
                  /> */}
                </div>
                {data?.loaiHinh?.loaiBDS?.name === 'Nhà ở' ||
                data?.loaiHinh?.loaiBDS?.name === 'Căn hộ' ? (
                  <div className="mt-8 mb-8 w-full rounded-md bg-white border-[1px] shadow p-8">
                    <div className="flex flex-row justify-between flex-wrap">
                      <div className="text-gray-600 font-semibold">
                        Bản vẽ nhà
                      </div>
                    </div>
                    <img
                      src={parseJSON(data?.hinhAnhBanVeThietKe)[0]?.url}
                      className="mt-8 w-full rounded-md h-[360px] md:h-[540px] lg:h-[630px]"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ) : null}
                <div className="mt-8 mb-8 w-full rounded-md bg-white border-[1px] shadow p-8">
                  <div className="flex flex-row justify-between flex-wrap">
                    <div className="text-gray-600 font-semibold">Video</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <img
              src="https://thamtuphuctam.com/wp-content/uploads/2019/01/dich-vu-tham-tu-thanh-hoa-min.jpg"
              className="mt-8 w-full rounded-md"
              style={{ objectFit: "cover" }}
            />
            {/* <iframe
                    className="mt-8 rounded-md w-full h-[270px] md:h-[450px] lg:h-[540px]"
                    style={{ objectFit: 'cover' }}
                    src={data?.video}
                  ></iframe>
            {/* </div>
              </div>
              <div className="basis-1/4 h-fit lg:mt-8 mt-0 mb-8">
                <ContactInfo
                  doiTacInfo={data?.user}
                  nhan={data?.nhan}
                />
              </div>
            </div>  */}

            <Button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                })
              }
              className="w-full flex flex-row gap-2 justify-center mb-8 font-medium text-[18px] bg-red-400 text-white p-4 rounded-md"
            >
              <BiSolidArrowFromBottom className="mt-1" />
              Về đầu trang
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
