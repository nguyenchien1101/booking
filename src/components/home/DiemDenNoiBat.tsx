'use client';

import { DiemDen } from '@/interfaces';
import { axiosClient } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function DiemDenNoiBat() {
  const [isFetched, setIsFetched] = React.useState(false);

  const { data } = useQuery({
    queryKey: ['diemDen'],
    queryFn: async () => {
      const res = await axiosClient.get('/api/diem-dens?populate[0]=hinhAnh');
      return res?.data;
    },
  });
  const diemDens = data as DiemDen[];
  React.useEffect(() => {
    setIsFetched(true);
  }, []);
  if (!isFetched) {
    return null;
  }
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-2  py-6 md:pt-10 px-10"
    >
      <div className="flex max-w-[58rem] mb-10 flex-col items-start space-y-2 text-center">
        <h2 className="text-xl font-bold leading-[1.1] sm:text-3xl md:text-2xl">
          Chọn điểm đến của bạn{' '}
        </h2>
        <Balancer className="max-w-[46rem] leading-normal text-muted-foreground sm:text-base sm:leading-7">
          Danh sách điểm đến nổi tiếng
        </Balancer>
      </div>
      <Swiper
        style={
          {
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-color': '#000000',
            '--swiper-pagination-bullet-size': '12px',
            '--swiper-pagination-bullet-width': '10px',
            '--swiper-pagination-bullet-height': '10px',
            '--swiper-pagination-top': '8px',
          } as React.CSSProperties
        }
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="w-full h-auto relative"
      >
        {diemDens?.map((diemDen, index) => (
          <SwiperSlide
            key={`loai-${index}`}
            className="h-full relative mb-16 overflow-visible"
          >
            <Link
              key={diemDen.attributes.slug}
              href={`${diemDen?.attributes?.slug}`}
            >
              <div className="group rounded-md overflow-hidden relative h-[350px] w-full">
                <img
                  src={diemDen?.attributes?.hinhAnh?.data?.attributes?.url}
                  alt={'Khu vực'}
                  className="transition ease-in-out group-hover:scale-105 group-hover:rotate-2  object-cover w-full h-full"
                  style={{ transitionDuration: '500ms' }}
                />
                <div
                  className="px-5 absolute inset-0 z-20 flex items-end justify-center"
                  style={{
                    background:
                      'linear-gradient(to top, #25253bdc 0%, #20202b00 100%)',
                  }}
                >
                  <h3 className="text-[24px] font-semibold capitalize text-slate-100 md:text-xl mb-6">
                    {diemDen?.attributes?.ten}{' '}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {diemDens?.map((diemDen, index) => (
          <SwiperSlide
            key={`loai-${index}`}
            className="h-full relative mb-16 overflow-visible"
          >
            <Link
              key={diemDen.attributes.slug}
              href={`${diemDen?.attributes?.slug}`}
            >
              <div className="group rounded-md overflow-hidden relative h-[350px] w-full">
                <img
                  src={diemDen?.attributes?.hinhAnh?.data?.attributes?.url}
                  alt={'Khu vực'}
                  className="transition ease-in-out group-hover:scale-105 group-hover:rotate-2  object-cover w-full h-full"
                  style={{ transitionDuration: '500ms' }}
                />
                <div
                  className="px-5 absolute inset-0 z-20 flex items-end justify-center"
                  style={{
                    background:
                      'linear-gradient(to top, #25253bdc 0%, #20202b00 100%)',
                  }}
                >
                  <h3 className="text-[24px] font-semibold capitalize text-slate-100 md:text-xl mb-6">
                    {diemDen?.attributes?.ten}{' '}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {diemDens?.map((diemDen, index) => (
          <SwiperSlide
            key={`loai-${index}`}
            className="h-full relative mb-16 overflow-visible"
          >
            <Link
              key={diemDen.attributes.slug}
              href={`${diemDen?.attributes?.slug}`}
            >
              <div className="group rounded-md overflow-hidden relative h-[350px] w-full">
                <img
                  src={diemDen?.attributes?.hinhAnh?.data?.attributes?.url}
                  alt={'Khu vực'}
                  className="transition ease-in-out group-hover:scale-105 group-hover:rotate-2  object-cover w-full h-full"
                  style={{ transitionDuration: '500ms' }}
                />
                <div
                  className="px-5 absolute inset-0 z-20 flex items-end justify-center"
                  style={{
                    background:
                      'linear-gradient(to top, #25253bdc 0%, #20202b00 100%)',
                  }}
                >
                  <h3 className="text-[24px] font-semibold capitalize text-slate-100 md:text-xl mb-6">
                    {diemDen?.attributes?.ten}{' '}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default DiemDenNoiBat;
