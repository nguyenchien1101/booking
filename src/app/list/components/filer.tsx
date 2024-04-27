import React from "react";

const Filter = () => {
  return (
    <>
      <div className="w-1/4">
        <div className="bg-white shadow-md font-bold rounded-md mb-4 border-2">
          <p className="border-b-2 p-4 text-xl">Thời gian</p>
          <div className="px-4 py-6">
            <form
              action=""
              className="flex flex-col justify-between items-left mb-4"
            >
              <div className="mb-4">
                <p className="label">Từ ngày</p>
                <input
                  type="date"
                  name=""
                  id=""
                  className="bg-gray-100 w-full p-3 mt-2 rounded-md font-normal"
                />
              </div>
              <div className="mb-4">
                <p className="label">Đến ngày</p>
                <input
                  type="date"
                  name=""
                  id=""
                  className="bg-gray-100 w-full p-3 mt-2 rounded-md font-normal"
                />
              </div>
            </form>
            <button
              type="button"
              className="block py-4 w-full bg-teal-500 rounded-md text-white mb-2"
            >
              Tìm kiếm
            </button>
          </div>
        </div>

        {/* <div className="bg-white shadow-md rounded-md mb-4 border-2">
          <p className="border-b-2 p-4 text-xl font-bold ">Theme</p>
          <div className="px-4 pt-6">
            <form
              action=""
              className="flex flex-col justify-between items-left mb-4"
            >
              <div className="mb-4">
                <input type="checkbox" name="" id="" className="inline mr-4" />
                <p className="label inline">Water activities</p>
              </div>
              <div className="mb-4">
                <input type="checkbox" name="" id="" className="inline mr-4" />
                <p className="label inline">Nature</p>
              </div>
              <div className="mb-4">
                <input type="checkbox" name="" id="" className="inline mr-4" />
                <p className="label inline">Food</p>
              </div>
              <div className="mb-4">
                <input type="checkbox" name="" id="" className="inline mr-4" />
                <p className="label inline">Hidden gems</p>
              </div>
              <div className="mb-4">
                <input type="checkbox" name="" id="" className="inline mr-4" />
                <p className="label inline">Water activities</p>
              </div>
            </form>
          </div>
        </div> */}

        <div className="bg-white shadow-md  rounded-md mb-4 border-2">
          <p className="border-b-2 p-4 text-xl font-bold ">Sử dụng phòng</p>
          <div className="px-4 pt-6">
            <form
              action=""
              className="flex flex-col justify-between items-left mb-4"
            >
              <div className="mb-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="inline mr-4 scale-150"
                />
                <p className="label inline">0-3 giờ</p>
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="inline mr-4 scale-150"
                />
                <p className="label inline">3-5 giờ</p>
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="inline mr-4 scale-150"
                />
                <p className="label inline">Qua đêm</p>
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="inline mr-4 scale-150"
                />
                <p className="label inline">Cả ngày</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
