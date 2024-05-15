"use client";
import React from "react";
import "./List.css";
import { KhachSan } from "@/interfaces";
import { axiosClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function App(props) {
  return (
    <div className="pListItem">
      <a href={"./booking?phong=" + props.id}>
        <img src={props.picture} alt="course" className="featureimg" />
        <div className="plisttitle">
          <h1>{props.ten}</h1>
          <p>{props.diaChi}</p>
        </div>
      </a>
    </div>
  );
}

export default function List() {
  const { data } = useQuery({
    queryKey: ["khachSanNoiBat"],
    queryFn: async () => {
      const res: KhachSan[] = await axiosClient.get("/api/khach-san-noi-bat");
      return res;
    },
  });
  const listNoiBat = data as KhachSan[];

  return (
    <div className="plist">
      {listNoiBat?.map((vl) => (
        <App
          key={vl.id}
          id={vl.id}
          picture={vl.hinhAnhKhachSan[0]?.formats.small.url}
          ten={vl.ten}
          diaChi={vl.diaChi}
        />
      ))}
      {listNoiBat?.map((vl) => (
        <App
          key={vl.id}
          id={vl.id}
          picture={vl.hinhAnhKhachSan[0]?.formats.small.url}
          ten={vl.ten}
          diaChi={vl.diaChi}
        />
      ))}
      {listNoiBat?.map((vl) => (
        <App
          key={vl.id}
          id={vl.id}
          picture={vl.hinhAnhKhachSan[0]?.formats.small.url}
          ten={vl.ten}
          diaChi={vl.diaChi}
        />
      ))}
    </div>
  );
}
