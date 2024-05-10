"use client";

import { Button } from "@/components/ui/button";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import { Input, Select, SelectItem } from "@nextui-org/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiBuildingHouse } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";

import * as z from "zod";
import PickDiemDen from "./PickDiemDen";

const types = [
  { label: "Standard", value: "Standard" },
  { label: "Superior", value: "Superior" },
  { label: "Deluxe", value: "Deluxe" },
] as const;

const isRents = [
  { label: "HomeStay", value: "HomeStay" },
  { label: "Hotel", value: "Hotel" },
] as const;

const formSchema = z.object({
  searchWord: z.string({}),
  type: z.string({}),
  isRent: z.string({}),
});

export function SearchBarHome() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const router = useRouter();
  const [addressValue, setAddressValue] = useState("");

  useEffect(() => {}, []);
  // 1. Define your form.
  const [typeNumber, setTypeNumber] = useState("0");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchWord: "",
      type: "",
      isRent: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(
      `./khach-san?tukhoa=${values.searchWord}&NgayBD=${date?.from}&loaibds=${values.type}&hinhthuc=${values.isRent}`
    );
  }
  return (
    <div className="flex justify-center items-center">
      <div className="w-[92%] p-3 bg-[#ffffff36] rounded-md mt-6">
        <div className="rounded-md bg-white border-[1px] shadow-sm p-8 w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="lg:grid lg:grid-cols-5 lg:gap-2 space-y-4 items-center  lg:space-y-0"
            >
              <FormField
                control={form.control}
                name="searchWord"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div>
                        <Input
                          className="h-[52px]"
                          variant="bordered"
                          radius="sm"
                          label="Nơi Bạn muốn đến"
                          {...field}
                        />
                        <MagnifyingGlassIcon className="h-6 w-6 opacity-50 float-right -mt-9 mr-4" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <div className="mr-6">
                        <Select
                          label="Loại Phòng"
                          className="h-[52px]"
                          variant="bordered"
                          radius="sm"
                          size="sm"
                          selectorIcon={<BiBuildingHouse />}
                          {...field}
                        >
                          {types.map((type) => (
                            <SelectItem
                              key={type.value}
                              value={type.value}
                              onClick={() => {
                                setTypeNumber(
                                  type.value === "Superior"
                                    ? "1"
                                    : type.value === "Deluxe"
                                    ? "2"
                                    : "3"
                                );
                              }}
                            >
                              {type.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <FormField
                  control={form.control}
                  name="isRent"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <div className="mr-6">
                          <Select
                            label="Hình thức"
                            className="h-[52px] w-[100%]"
                            variant="bordered"
                            radius="sm"
                            size="sm"
                            selectorIcon={<GiReceiveMoney />}
                            {...field}
                          >
                            {isRents.map((isRent) => (
                              <SelectItem
                                key={isRent.value}
                                value={isRent.value}
                              >
                                {isRent.label}
                              </SelectItem>
                            ))}
                          </Select>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col  ">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              id="date"
                              variant={"outline"}
                              className={cn(
                                " justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              {date?.from ? (
                                date.to ? (
                                  <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                  </>
                                ) : (
                                  format(date.from, "LLL dd, y")
                                )
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 " />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                className="w-[80%] bg-red-400 hover:bg:text-white bg:bg-slate-800 mr-30px"
                type="submit"
              >
                tìm kiếm
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
