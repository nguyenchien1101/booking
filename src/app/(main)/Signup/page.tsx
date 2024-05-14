import React from "react";
import DateOfBirthPicker from "./DateOfBirthPicker/dateofbirthpicker";

const Signup = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/5f/cc/80/5fcc80e2a77a4ce69467ea7f08e49fea.png)",
      }}
    >
      <div className="border-2 border-white bg-white bg-opacity-10 backdrop-blur-lg text-white rounded-lg p-10 shadow-lg w-96">
        <h1 className="text-4xl text-center mb-6">Sign Up</h1>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Tên"
              className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-gray-300 focus:ring-1 focus:ring-white outline-none"
            />
            <input
              type="text"
              placeholder="Họ"
              className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-gray-300 focus:ring-1 focus:ring-white outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-gray-300 focus:ring-1 focus:ring-white outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-gray-300 focus:ring-1 focus:ring-white outline-none"
          />
          <input
            type="password"
            placeholder="Nhập lại Password"
            className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-gray-300 focus:ring-1 focus:ring-white outline-none"
          />
          <select className="block w-full p-3 border-2 border-white rounded-full bg-transparent text-white focus:ring-1 focus:ring-white outline-none">
            <option className="text-gray-300" value="" disabled selected hidden>
              Giới tính
            </option>
            <option className="text-black" value="male">
              Nam
            </option>
            <option className="text-black" value="female">
              Nữ
            </option>
          </select>
          <DateOfBirthPicker />
        </div>
        <button
          type="submit"
          className="w-full mt-6 p-3 bg-white text-gray-700 rounded-full font-bold"
        >
          <a href="/">Sign up</a>
        </button>
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
