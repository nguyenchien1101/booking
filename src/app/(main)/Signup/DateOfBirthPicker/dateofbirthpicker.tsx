"use client";

import React, { useState } from "react";

const DateOfBirthPicker = () => {
  // State ngày, tháng, năm
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Xử lý thay đổi ngày
  const handleDayChange = (event) => {
    const selectedDay = event.target.value;
    if (selectedDay <= getDaysInMonth(month, year)) {
      setDay(selectedDay);
    }
  };

  // Xử lý thay đổi tháng
  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    if (selectedMonth <= 12 && selectedMonth >= 1) {
      setMonth(selectedMonth);
      if (day > getDaysInMonth(selectedMonth, year)) {
        setDay("");
      }
    }
  };

  // Xử lý thay đổi năm
  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setYear(selectedYear);
    if (month === 2 && day > getDaysInMonth(month, selectedYear)) {
      setDay("");
    }
  };

  // Lấy số ngày trong tháng
  const getDaysInMonth = (selectedMonth, selectedYear) => {
    switch (parseInt(selectedMonth)) {
      case 2:
        return isLeapYear(selectedYear) ? 29 : 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  };

  // Kiểm tra năm nhuận
  const isLeapYear = (selectedYear) => {
    return (
      (selectedYear % 4 === 0 && selectedYear % 100 !== 0) ||
      selectedYear % 400 === 0
    );
  };

  // Mảng ngày từ 1 đến 31
  const days = Array.from(
    { length: getDaysInMonth(month, year) },
    (_, index) => index + 1
  );

  // Mảng tháng từ 1 đến 12
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

  // Mảng năm từ (currentYear - 200) đến currentYear
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 200 }, (_, index) => currentYear - index);

  return (
    <div className="flex">
      {/* Select option cho ngày */}
      <select
        className="w-1/3 p-3 border-2 border-white rounded-full bg-transparent text-white mr-2 focus:ring-1 focus:ring-white outline-none"
        value={day}
        onChange={handleDayChange}
      >
        <option value="" disabled selected hidden>
          Ngày
        </option>
        {days.map((day) => (
          <option className="text-black" key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      {/* Select option cho tháng */}
      <select
        className="w-1/3 p-3 border-2 border-white rounded-full bg-transparent text-white mr-2 focus:ring-1 focus:ring-white outline-none"
        value={month}
        onChange={handleMonthChange}
      >
        <option value="" disabled selected hidden>
          Tháng
        </option>
        {months.map((month) => (
          <option className="text-black" key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      {/* Select option cho năm */}
      <select
        className="w-1/3 p-3 border-2 border-white rounded-full bg-transparent text-white focus:ring-1 focus:ring-white outline-none"
        value={year}
        onChange={handleYearChange}
      >
        <option value="" disabled selected hidden>
          Năm
        </option>
        {years.map((year) => (
          <option className="text-black" key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateOfBirthPicker;
