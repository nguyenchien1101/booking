"use client";
import React, { useState } from "react";
import "./dateofbirthpicker.css";

function DateOfBirthPicker() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const days = [...Array(31).keys()].map((i) => i + 1);
  const months = [...Array(12).keys()].map((i) => i + 1);
  const years = [...Array(100).keys()].map((i) => new Date().getFullYear() - i);

  return (
    <div className="input-box">
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">Day</option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">Month</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DateOfBirthPicker;
