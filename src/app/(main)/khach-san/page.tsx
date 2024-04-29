import { LayoutKhachSan } from '@/components/khach-san/LayoutKhachSan';

async function page() {
  return (
    <div className="container lg:mx-[15px] ">
      <div className="ml-4">
        <div>
          <h2 className="text-gray-500">Trang chủ / Danh sách khách sạn</h2>
          <h1 className="text-[32px] text-neutral-700 font-semibold mt-4">
            Danh sách khách sạn
          </h1>
        </div>
        <LayoutKhachSan />
      </div>
    </div>
  );
}

export default page;
