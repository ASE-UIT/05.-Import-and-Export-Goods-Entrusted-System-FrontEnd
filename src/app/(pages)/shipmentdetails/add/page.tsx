"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Add Shipment Document</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Document Type</FormLabel>
                  <FormControl>
                          }
                        }}
                      />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Document Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Type Document Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Image</FormLabel>
                  <FormControl>

                          }
                        }}
                      />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

                <Button
                  variant={"outline"}
                  className="w-full h-10 text-lg"
                  type="button"
                >
                  Cancel
                </Button>
              </Link>
              <Button className="w-1/2 h-10 text-lg" type="submit">
                Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
