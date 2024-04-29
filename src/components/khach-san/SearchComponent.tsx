'use client';

import { Button } from '@/components/ui/button';
import { Checkbox, Input, Select, SelectItem } from '@nextui-org/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCompass } from 'react-icons/ai';
import { BiBuildingHouse, BiLabel, BiSolidLayerPlus } from 'react-icons/bi';
import { BsHouses } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { PiBathtub } from 'react-icons/pi';
import { TbBed } from 'react-icons/tb';
import * as z from 'zod';
import { RangeSelector } from './RangeSelector';

export function SearchComponent() {
  return (
    <div className="p-8 mr-6 rounded-xl bg-white border-[1px] shadow-sm">
      <div>
        <Input
          className="h-[52px]"
          variant="bordered"
          radius="sm"
          label="Nhập từ khóa"
        />
        <MagnifyingGlassIcon className="h-6 w-6 opacity-50 float-right -mt-9 mr-4" />
      </div>

      <div className="mr-6">
        <Select
          label="Loại bất động sản"
          className="h-[52px]"
          variant="bordered"
          radius="sm"
          size="sm"
          selectorIcon={<BiBuildingHouse />}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <SelectItem key={index} value={index} onClick={() => {}}>
              {index}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* <RangeSelector
        range={priceRange}
        setRange={setPriceRange}
        type={'Phạm vi giá thành'}
      />
      <RangeSelector
        range={squareRange}
        setRange={setSquareRange}
        type={'Phạm vi diện tích'}
      /> */}

      <Button className="w-[90%] bg-red-400" type="submit">
        Tìm kiếm
      </Button>
    </div>
  );
}
