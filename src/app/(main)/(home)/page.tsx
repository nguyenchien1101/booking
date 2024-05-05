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
import Nav from "./components/Nav/nav";
import "./page.css";
export default function page() {
  return (
    <div>
      <div className="Homecontanier">
        <Header />
        <h1 className="Hometitle">Địa điểm nổi bật </h1>
        <Feature />
        <h1 className="Hometitle">Khách sạn nổi bật</h1>
        <List />
        <Love />
        <Banner />
      </div>
    </div>
  );
}
