"use client";
import { DatePicker } from "@/components/date-picker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { z } from "zod";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ChangePasswordForm from "@/app/(pages)/settings/_components/change-password-form";

const UserSettingBody = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  address: z.string().min(10),
  phone: z.string().min(10),
  dateOfBirth: z.string(),
  avatar: z.string(),
});

type UserSettingBodyType = z.infer<typeof UserSettingBody>;

export default function SettingForm() {
  const [date, setDate] = useState<Date>();

  const form = useForm<UserSettingBodyType>({
    resolver: zodResolver(UserSettingBody),
    defaultValues: {
      name: "Khang Buoi",
      email: "buoiduykhang@gmail.com",
      address: "123 Tran Duy Hung - Cau Giay - Ha Noi",
      phone: "0123456789",
      dateOfBirth: "1-1-2000",
      avatar: "https://placehold.co/400",
    },
  });

  const inputFile = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState(null);
  const [displayImage, setDisplayImage] = useState("https://placehold.co/400");
  const [loading, setLoading] = useState(false);
  const pressOnce = useRef(false);

  const handleImageChange = (event: any) => {
    pressOnce.current = true;
    setImage(event.target.files[0]);
    setDisplayImage(
      event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : ""
    );
    event.target.value = null;
  };

  const handleSetImage = async () => {
    console.log("submitted");
    let formdata = new FormData();
    if (image != null) {
      console.log(image);
      formdata.append("avatar", image);
    }
    setLoading(true);
    try {
      console.log("submitting");
    } catch (err: any) {
      console.log(err);
    }
    setLoading(false);
  };

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  console.log(image);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={handleImageChange}
          multiple
        />
        <div className="relative">
          <Avatar className="size-[150px]">
            <AvatarImage src={displayImage} alt="KhangBuoi" />
            <AvatarFallback>KB</AvatarFallback>
          </Avatar>
          <Button
            variant={"outline"}
            size={"icon"}
            className="absolute top-0 right-0 z-10 rounded-full"
            onClick={() => {
              setDisplayImage("https://placehold.co/400");
              setImage(null);
              pressOnce.current = false;
            }}
          >
            <X />
          </Button>
        </div>
        <div>
          <Button
            variant={"outline"}
            className=""
            onClick={() => {
              inputFile.current?.click();
            }}
          >
            Change Avatar
          </Button>
        </div>
      </div>
      <div className="mt-8 pl-80 pr-80">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full flex-shrink-0"
            noValidate
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-bold">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px]"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-bold">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px]"
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-bold">
                    Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px]"
                      placeholder="Enter your address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <div className="w-full mr-8">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[16px] font-bold">
                        Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[60px]"
                          placeholder="Enter your phone"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[16px] font-bold">
                      Date Of Birth
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] h-[60px] justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(date) => {
                              setDate(date);
                              if (date) {
                                form.setValue(
                                  "dateOfBirth",
                                  format(date, "d-M-yyyy")
                                );
                              }
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between">
              <div className="space-y-2">
                <Label className="text-[16px] font-bold">Password</Label>
                <p>Password must be at least 8 characters long</p>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4" variant={"outline"} size={"lg"}>
                    Change
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Change Password
                    </DialogTitle>
                    <DialogDescription className="text-center">
                      Password must be at least 8 characters long
                    </DialogDescription>
                  </DialogHeader>
                  <ChangePasswordForm />
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex justify-end gap-3 !mt-8">
              <Button className="" variant={"outline"} size={"lg"}>
                Cancel
              </Button>
              <Button className="" type="submit" size={"lg"}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
