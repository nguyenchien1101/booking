'use client';

import { Separator } from '../ui/separator';
import { ListKhachSanComponent } from './ListKhachSanComponent';
import { SearchComponent } from './SearchComponent';

export function LayoutKhachSan() {
  return (
    <>
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row pt-8 pb-8">
        <div className="basis-[35%] flex flex-col gap-4">
          <SearchComponent />
        </div>
        <div className="basis-[65%]">
          <Separator className="lg:hidden h-[6px] mt-4 mb-8 w-[96%] text-gray-500 rounded-md" />
          <ListKhachSanComponent />
        </div>
      </div>
    </>
  );
}
