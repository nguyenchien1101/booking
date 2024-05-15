"use client";

import { SearchBarHome } from "./SearchBarHome";

function SearchHome() {
  return (
    <div className="relative h-[640px] md:h-[730px] lg:h-[910px]">
      <img
        src="https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="absolute w-full h-full top-0 left-0 "
        alt={""}
        style={{ objectFit: "cover" }}
      />
      <div className="absolute w-full h-full top-0 left-0  bg-neutral-950 opacity-50 "></div>
      <div className="absolute w-full h-full top-0 left-0  bg-transparent lg:mt-[200px] md:mt-[100px] mt-[50px]">
        <h1 className="text-white text-center text-[24px] md:text-[36px] lg:text-[45px]">
          We find the best hotel for you
        </h1>
        <h1 className="text-white text-center text-[16px] md:text-[18px] lg:text-[20px] mt-2">
          Chỉ với một cú nhấp chuột, khám phá ngay nào !
        </h1>
        <SearchBarHome />
      </div>
    </div>
  );
}

export default SearchHome;
