import DiemDenNoiBat from '@/components/home/DiemDenNoiBat';
import KhachSanNoiBatHome from '@/components/home/KhachSanNoiBat';
import LoaiKhachSan from '@/components/home/LoaiKhachSanHome';
import SearchHome from '@/components/home/SearchHome';
import React from 'react';

export default function page() {
  return (
    <div className="w-full h-full">
      {/* <Nav />
      <Header /> */}
      <SearchHome />
      <DiemDenNoiBat />
      <KhachSanNoiBatHome />
      <LoaiKhachSan />
      {/* <div className="Homecontanier">
        <h1 className="Hometitle">Địa điểm nổi bật </h1>
        <Feature />
        <h1 className="Hometitle">Khách sạn nổi bật</h1>
        <List />
        <h1 className="Hometitle">Khách sạn Được Yêu Thích</h1>
        <Love />
        <Banner />
        <Mail />
      </div> */}
    </div>
  );
}
