import React from "react";

import "./login.css";

export default function page() {
  return (
    <div className="div">
      <div className="login">
        <div className="containerlogin">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">
            <a href="/">Login</a>
          </button>
          <div className="dk">
            <p>
              Bạn chưa có tài khoản? <a href="/Signup">Đăng ký</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
