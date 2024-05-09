import DiemDenNoiBat from "@/components/home/DiemDenNoiBat";
import KhachSanNoiBatHome from "@/components/home/KhachSanNoiBat";
import LoaiKhachSan from "@/components/home/LoaiKhachSanHome";
import SearchHome from "@/components/home/SearchHome";
import React from "react";
import Header from "./components/Header/Header";
import Feature from "./components/Feature/Feature";
import List from "./components/List/List";
import Love from "./components/Love/Love";
import Banner from "./components/banner/banner";
import Picture from "./components/picture/Picture";
import "./page.css";
export default function page() {
  return (
    <div className="w-full h-full">
      {/* <Nav />
    <Header /> */}
      <SearchHome />
      <DiemDenNoiBat />
      <KhachSanNoiBatHome />
      <LoaiKhachSan />
      {/*  <div className="Homecontanier">
        <h1 className="Hometitle">Địa điểm nổi bật </h1>
        <Feature />
        <h1 className="Hometitle">Khách sạn nổi bật</h1>
        <List />
        <h1 className="Hometitle">Khách sạn Được Yêu Thích</h1>
        <Love />
        <Banner />
  </div> */}
    </div>
  );
}
