"use client";

import { Button } from "@/components/ui/button";
import { Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCompass } from "react-icons/ai";
import { BiBuildingHouse, BiLabel, BiSolidLayerPlus } from "react-icons/bi";
import { BsHouses } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiBathtub } from "react-icons/pi";
import { TbBed } from "react-icons/tb";
import * as z from "zod";

const Footer = () => {
  const [inputValue, setInputValue] = useState();
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setlocten(isChecked ? "ten" : "");
  };
  const handleCheckboxChange1 = (event) => {
    const isChecked = event.target.checked;
    setlocsao(isChecked ? "=sao:asc" : "");
  };
  const handleCheckboxChange2 = (event) => {
    const isChecked = event.target.checked;
    setlocDanhGia(isChecked ? "DanhGia" : "");
  };
  return (
    <div>
      <div className="p-8 mr-6 rounded-xl bg-white border-[1px] shadow-sm">
        <div>
          <Input
            className="h-[52px]"
            variant="bordered"
            radius="sm"
            label="Tên Khách Sạn"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <MagnifyingGlassIcon className="h-6 w-6 opacity-50 float-right -mt-9 mr-4" />
        </div>
        <div className=" p-3 mr-6 mt-2  bg-white w-[100%]">
          <div className="mr-6 mb-5">
            <p className="font-bold"> sắp xếp :</p>
          </div>
          <div className="flex items-center space-x-2 mb-[10px]">
            <Checkbox id="terms" onChange={handleCheckboxChange} />
            <label
              htmlFor="terms3"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tên
            </label>
          </div>
          <div className="flex items-center space-x-2 mb-[10px]">
            <Checkbox id="terms2" onChange={handleCheckboxChange1} />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Sao
            </label>
          </div>
          <div className="flex items-center space-x-2 mb-[10px]">
            <Checkbox id="terms1" onChange={handleCheckboxChange2} />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Đánh Giá
            </label>
          </div>
        </div>
        <Link href={"/list?TenKS=filters[ten][$eq]=" + inputValue}>
          <Button className="w-[90%] bg-red-400" type="submit">
            Tìm
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
