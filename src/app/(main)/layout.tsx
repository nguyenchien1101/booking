import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { MobileNav } from "@/components/header/MobileNavBar";
import Nav from "./(home)/components/Nav/nav";
import React from "react";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full ">
      {/* <MobileNav /> */}
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
