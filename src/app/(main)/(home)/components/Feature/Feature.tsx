"use client";

import { DiemDen } from "@/interfaces";
import { axiosClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import "./Feature.css";
import React from "react";

const course = {
  data: [
    {
      image:
        "https://i.pinimg.com/564x/47/a2/6c/47a26c84d2e1fdfc5520706842bacbd1.jpg",
      title: "Hội An",
      title2: "Hạ Long là thành phố tỉnh lỵ của tỉnh Quảng Ninh, Việt Nam. ",
    },
  ],
};
function Render(props) {
  return (
    <div>
      <div className="featureTitles">
        <div className="Thumbex">
          <a href={"/list?diadiem=" + props.title}>
            <img src={props.image} alt="cousre" className="Fgimg" />
            <span className="spann">{props.title}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default function Feature() {
  const { data } = useQuery({
    queryKey: ["diemDen"],
    queryFn: async () => {
      const res = await axiosClient.get("/api/diem-dens?populate[0]=hinhAnh");
      return res?.data;
    },
  });
  const diemDens = data as DiemDen[];
  return (
    <div className="Feature">
      {diemDens?.map((value, index) => (
        <Render
          key={value.id}
          id={value.id}
          image={value?.attributes?.hinhAnh?.data?.attributes?.url}
          title={value?.attributes?.ten}
        />
      ))}
    </div>
  );
}
