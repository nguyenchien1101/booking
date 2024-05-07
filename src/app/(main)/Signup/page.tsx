import React from "react";
import "./signup.css";
import DateOfBirthPicker from "./DateOfBirthPicker/dateofbirthpicker";

export default function page() {
  return (
    <div className="div">
      <div className="signup">
        <div className="containersignup">
          <h1>Sign up</h1>
          <div className="input-box">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Re-enter Password" />
          </div>
          <div className="input-box">
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="input-box">
            <DateOfBirthPicker />
          </div>
          <button type="submit">
            <a href="/">Sign up</a>
          </button>
          <div className="dk">
            <p>
              Bạn đã có tài khoản? <a href="/Login">Đăng nhập</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
