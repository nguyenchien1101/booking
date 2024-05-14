"use client";

import React, { useState } from "react";
import DateOfBirthPicker from "./DateOfBirthPicker/dateofbirthpicker";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Vui lòng nhập tên";
    if (!formData.lastName) newErrors.lastName = "Vui lòng nhập họ";
    if (!formData.email) {
      newErrors.email = "Vui lòng nhập Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không đúng định dạng";
    }
    if (!formData.password) newErrors.password = "Vui lòng nhập Password";
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Password không được để trống";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password không khớp";
    }
    if (!formData.gender) newErrors.gender = "Vui lòng chọn giới tính";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Handle successful form submission
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/5f/cc/80/5fcc80e2a77a4ce69467ea7f08e49fea.png)",
      }}
    >
      <div className="my-6 border-2 border-white bg-white bg-opacity-10 backdrop-blur-lg bg-stone-950 text-white rounded-lg p-10 shadow-lg w-96">
        <h1 className="text-4xl text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-full">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-gray-300 focus:ring-1 focus:ring-white outline-none"
                type="text"
                placeholder="Tên"
              />
              {errors.firstName && (
                <p className="ml-2 text-sm text-red-400">{errors.firstName}</p>
              )}
            </div>
            <div className="w-full">
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-gray-300 focus:ring-1 focus:ring-white outline-none"
                type="text"
                placeholder="Họ"
              />
              {errors.lastName && (
                <p className="ml-2 text-sm text-red-400">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-gray-300 focus:ring-1 focus:ring-white outline-none"
              type="text"
              placeholder="Email"
            />
            {errors.email && (
              <p className="ml-2 text-sm text-red-400">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-gray-300 focus:ring-1 focus:ring-white outline-none"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="ml-2 text-sm text-red-400">{errors.password}</p>
            )}
          </div>
          <div>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-gray-300 focus:ring-1 focus:ring-white outline-none"
              type="password"
              placeholder="Nhập lại Password"
            />
            {errors.confirmPassword && (
              <p className="ml-2 text-sm text-red-400">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white focus:ring-1 focus:ring-white outline-none"
            >
              <option className="text-gray-300" value="" disabled hidden>
                Giới tính
              </option>
              <option className="text-black" value="male">
                Nam
              </option>
              <option className="text-black" value="female">
                Nữ
              </option>
            </select>
            {errors.gender && (
              <p className="ml-2 text-sm text-red-400">{errors.gender}</p>
            )}
          </div>
          <DateOfBirthPicker />
          <div className="text-center text-sm w-full mt-6">
            Bằng việc đăng ký, bạn đồng ý với{" "}
            <Link className="font-bold hover:underline text-white" href="/">
              Điều khoản & Điều kiện
            </Link>{" "}
            và{" "}
            <Link className="font-bold hover:underline text-white" href="/">
              Chính Sách Quyền Riêng Tư
            </Link>{" "}
            của chúng tôi.
          </div>
          <Button
            className="w-full mt-6 p-3 bg-white text-gray-700 text-base rounded-full font-bold hover:bg-gray-600 hover:text-gray-100"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <div className="text-base text-center mt-6">
          <p>
            Bạn đã có tài khoản?{" "}
            <a href="/Login" className="text-white hover:underline">
              Đăng nhập
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
