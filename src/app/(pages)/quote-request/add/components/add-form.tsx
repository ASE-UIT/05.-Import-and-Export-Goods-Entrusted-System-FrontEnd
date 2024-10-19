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
import { Calendar } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import DropdownMenuCustom from "./dropdown-menu"

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
  delivery_end_date: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  delivery_start_date: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
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
      delivery_end_date: "",
      delivery_start_date: "",
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
        <div className="w-full">
            <FormField
          control={form.control}
          name="customer_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer Name</FormLabel>
              <FormControl>
                <Input placeholder="Input" {...field}  className="h-9 w-1/2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="flex w-full gap-2.5">
            <div className="flex-1">
                <FormField
          control={form.control}
          name="origin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Origin</FormLabel>
              <FormControl>
                <Input placeholder="Origin" {...field} className="h-9 w-full"/>
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
                <FormLabel>Destination</FormLabel>
                <FormControl>
                    <Input placeholder="City, Port" {...field} className="h-9 w-full"/>
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
            <FormItem>
              <FormLabel>Delivery Start Date</FormLabel>
              <FormControl>
                 <div className="relative">
                        <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            {...field} 
                            className="h-9 w-full pl-8"   
                            placeholder="Date"
                        />
                </div>
              </FormControl>
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
                <FormItem>
                <FormLabel>Delivery End Date</FormLabel>
                <FormControl>
                    <div className="relative">
                        <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            {...field} 
                            className="h-9 w-full pl-8"   
                            placeholder="Date"
                        />
                    </div>
                </FormControl>
                <FormMessage />
                </FormItem>
                )}
                />
            </div>
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
              <FormLabel>Weight</FormLabel>
              <FormControl>
                <Input placeholder="Weight" {...field} className="h-9 w-full"/>
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
                <FormLabel>Height</FormLabel>
                <FormControl>
                    <Input placeholder="Height" {...field} className="h-9 w-full"/>
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
              <FormLabel>Length</FormLabel>
              <FormControl>
                <Input placeholder="Length" {...field} className="h-9 w-full"/>
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
                <FormLabel>Width</FormLabel>
                <FormControl>
                    <Input placeholder="Width" {...field} className="h-9 w-full"/>
                </FormControl>
                <FormMessage />
                </FormItem>
                )}
                />
            </div>
        </div>


        </div>
        <div className="flex">
            <Button type="submit">Submit</Button>   
        </div>  
      </form>
    </Form>
  )
}
