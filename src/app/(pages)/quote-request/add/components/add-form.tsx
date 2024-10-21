"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import DropdownMenuCustom from "./dropdown-menu"
import React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

const formSchema = z.object({
  customer_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  origin: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  destination: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  delivery_end_date: z.date(),
  delivery_start_date: z.date(),
  weight: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  height: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  length: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  width: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function QuoteRequestAddForm() {
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer_name: "",
      origin: "",
      destination: "",
      length: ""
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-2.5">
        <div className="flex w-full gap-2.5">
          <div className="flex-1">
            <FormField
          control={form.control}
          name="customer_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Customer Name</FormLabel>
              <FormControl>
                <Input placeholder="Input" {...field}  className="w-1/2 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
            
        </div>
        <div className="flex w-full gap-2.5">
            <div className="flex-1">
                <FormField
          control={form.control}
          name="origin"
          render={({ field }) => (
            <FormItem>
              <FormLabel  className="text-lg">Origin</FormLabel>
              <FormControl>
                <Input placeholder="Origin" {...field} className="w-full"/>
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
            )}
            />
            </div>
            <div className="flex-1">
                <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                <FormItem>
                <FormLabel className="text-lg">Destination</FormLabel>
                <FormControl>
                    <Input placeholder="City, Port" {...field} className="w-full"/>
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
                )}
                />
            </div>
        </div>

        <div className="flex w-full gap-2.5">
            <div className="flex-1">
                <FormField
          control={form.control}
          name="delivery_start_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-lg">Delivery Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full h-[60px] pl-3 text-lg font-normal flex items-center justify-start hover:bg-primary",
                        !field.value && "text-black"
                      )}
                    >
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white rounded-md border" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
            )}
            />
            </div>
            <div className="flex-1">
                <FormField
                control={form.control}
                name="delivery_end_date"
                render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel className="text-lg">Delivery End Date</FormLabel>
                <Popover>
                <PopoverTrigger asChild >
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full h-[60px] pl-3 text-lg font-normal flex items-center justify-start hover:bg-primary",
                        !field.value && "text-black"
                      )}
                    >
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white rounded-md border" 
                      align="start"
                      side="bottom"
                >
                    <Calendar
                    mode="single"
              
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                  
                    
                  />
                  
                </PopoverContent>
              </Popover>
                <FormMessage />
                </FormItem>
                )}
                />
            </div>
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="terms"  />
            <label
                htmlFor="terms"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Cargo Insurance
            </label>
        </div>
        <div className="flex flex-col gap-2.5 p-2.5 rounded-md border">
            <div className="flex justify-between items-center">
                <span className="text-1xl font-bold">Package Information :</span>
            </div>
            <DropdownMenuCustom/>
            <div className="flex w-full gap-2.5">
            <div className="flex-1">
                <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Weight</FormLabel>
              <FormControl>
                <Input placeholder="Weight" {...field} className="w-full"/>
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
            />
            </div>
            <div className="flex-1">
                <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                <FormItem>
                <FormLabel className="text-lg">Height</FormLabel>
                <FormControl>
                    <Input placeholder="Height" {...field} className="w-full"/>
                </FormControl>
                <FormMessage />
                </FormItem>
                )}
                />
            </div>
        </div>

        <div className="flex w-full gap-2.5">
            <div className="flex-1">
                <FormField
          control={form.control}
          name="length"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Length</FormLabel>
              <FormControl>
                <Input placeholder="Length" {...field} className="w-full"/>
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
            />
            </div>
            <div className="flex-1">
                <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                <FormItem>
                <FormLabel className="text-lg">Width</FormLabel>
                <FormControl>
                    <Input placeholder="Width" {...field} className="w-full"/>
                </FormControl>
                <FormMessage />
                </FormItem>
                )}
                />
            </div>
        </div>


        </div>
        <div className="flex mb-6">
            <Button type="submit">Submit</Button>   
        </div>  
      </form>
    </Form>
  )
}
