'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { LoaiKhachSan } from '@/interfaces';
import { axiosClient } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function LoaiKhachSanHome() {
  const [isFetched, setIsFetched] = React.useState(false);

  const { data } = useQuery({
    queryKey: ['loaiKhachSan'],
    queryFn: async () => {
      const res = await axiosClient.get(
        '/api/loai-khach-sans?populate[0]=hinhAnh'
      );
      return res?.data;
    },
  });
  const loaiKhachSan = data as LoaiKhachSan[];
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
      className="space-y-10  py-6 md:pt-10 mt-8 px-10"
    >
      <div className="flex max-w-[58rem] flex-col items-start space-y-2 text-center">
        <h2 className="text-xl font-bold leading-[1.1] sm:text-3xl md:text-2xl">
          Lựa chọn loại khách sạn
        </h2>
        <Balancer className="max-w-[46rem] leading-normal text-muted-foreground sm:text-base sm:leading-7">
          Tìm kiếm khách sạn phù hợp với bạn
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="w-full h-auto relative"
      >
        {loaiKhachSan?.map((collection, index) => (
          <SwiperSlide
            key={`loai-${index}`}
            className="h-full relative mb-16 overflow-visible"
          >
            <Link
              href={`/bat-dong-san/loai-hinh-bat-dong-san/${collection?.attributes?.slug}`}
            >
              <div className="group relative overflow-hidden rounded-md">
                <AspectRatio ratio={3 / 2}>
                  <img
                    src={collection.attributes?.hinhAnh?.data?.attributes?.url}
                    alt={'Loại bất động sản'}
                    className="object-cover h-full w-full transition-transform group-hover:scale-105"
                  />
                </AspectRatio>
                <div
                  className="px-5 absolute inset-0 z-20 flex items-end justify-center"
                  style={{
                    background:
                      'linear-gradient(to top, #25253bdc 0%, #20202b00 80%)',
                  }}
                >
                  <h3 className="text-[24px] font-semibold capitalize text-slate-100 md:text-xl mb-6">
                    {collection.attributes?.ten}
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

export default LoaiKhachSanHome;
