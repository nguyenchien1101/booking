import React from "react";
import "./Nav.css";
import Button from "@mui/material/Button";

export default function Nav() {
  return (
    <div className="narbar">
      <div className="narcontaner">
        <span className="logo">Logo</span>
        <div className="navbuto">
          <span className="navbutonne">
            <a href="/">Home</a>
          </span>
          <span className="navbutonne">
            <a href="/">About Us</a>
          </span>
          <span className="navbutonne">
            <a href="/">Help</a>
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
