"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }
    // Dummy check: replace this with actual authentication
    if (email === "test@example.com" && password === "password") {
      // Redirect to home page
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <div className="div">
      <div className="login">
        <div className="containerlogin">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="error">
              <FontAwesomeIcon icon={faExclamationCircle} /> {error}
            </div>
          )}
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" onClick={handleLogin}>
            Login
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
