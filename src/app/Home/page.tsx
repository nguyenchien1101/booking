import React from "react";
import Banner from "./components/banner/banner";
import Feature from "./components/Feature/Feature";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Love from "./components/Love/Love";
import Mail from "./components/Mail/Mail";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/nav";
import "./page.css";

export default function page() {
  return (
    <div>
      <Nav />
      <Header />
      <div className="Homecontanier">
        <h1 className="Hometitle">Địa điểm nổi bật </h1>
        <Feature />
        <h1 className="Hometitle">Khách sạn nổi bật</h1>
        <List />
        <h1 className="Hometitle">Khách sạn Được Yêu Thích</h1>
        <Love />
        <Banner />
        <Mail />
      </div>
      <Footer />
    </div>
  );
}
