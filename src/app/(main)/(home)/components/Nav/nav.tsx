import React from "react";
import "./Nav.css";
import Button from "@mui/material/Button";
export default function Nav() {
  return (
    <div className="narbar">
      <div className="narcontaner">
        <span className="logo">UIT</span>
        <div className="navbuto">
          <span className="navbutonne">
            <a href="/">Home</a>
          </span>
          <span className="navbutonne">
            <a href="/list">Khách Sạn</a>
          </span>
        </div>
        <div className="Item">
          <Button
            variant="contained"
            sx={{ marginLeft: "20px", backgroundColor: "gray" }}
          >
            <a href="/Login">Đăng Nhập</a>
          </Button>
        </div>
      </div>
    </div>
  );
}