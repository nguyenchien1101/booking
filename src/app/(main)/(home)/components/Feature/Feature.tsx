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
        <a href={"/list?diadiem=" + props.id}>
          <img src={props.image} alt="cousre" className="featureimg" />
        </a>
        <div className="contanierr">
          <h1>{props.title}</h1>
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
      {course.data.map((value) => (
        <Render image={value.image} title={value.title} />
      ))}
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
