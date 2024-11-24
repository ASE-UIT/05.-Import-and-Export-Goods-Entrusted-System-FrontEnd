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
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"; // Nhập Select
import { shipmentSchema } from "@/schema/shipment.schema";
import { useShipment } from "@/hooks/use-shipment";
import useContract from "@/hooks/use-contract";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  id: z.string(),
  type: z.string(),
  contractID: z.string(),
});

export default function AddShipment() {
  const router = useRouter();

  const { useCreateShipment } = useShipment();
  const useGetContracts = useContract.useGetContracts;
  const createShipment = useCreateShipment();

  const { data: contract } = useGetContracts();

  const form = useForm<z.infer<typeof shipmentSchema>>({
    resolver: zodResolver(shipmentSchema),
  });

  function onSubmit(values: z.infer<typeof shipmentSchema>) {
    try {
      createShipment.mutate(values, {
        onSuccess: () => {
          router.push("/shipment");
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Add Shipment</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            {/* Shipment Type */}
            <FormField
              control={form.control}
              name="shipmentType"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full h-[60px] flex items-center">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Air Freight">Air Freight</SelectItem>
                        <SelectItem value="Land Freight">
                          Land Freight
                        </SelectItem>
                        <SelectItem value="Sea Freight">Sea Freight</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact Representative */}
            <FormField
              control={form.control}
              name="contractId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Contract ID</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full h-[60px] flex items-center">
                        <SelectValue placeholder="Select a representative" />
                      </SelectTrigger>
                      <SelectContent>
                        {contract?.data && contract.data.length > 0 ? (
                          contract.data.map((contractItem) => (
                            <SelectItem
                              key={contractItem.id}
                              value={contractItem.id}
                            >
                              {contractItem.id}
                            </SelectItem>
                          ))
                        ) : (
                          <>
                            <SelectItem value="01">
                              Representative 01
                            </SelectItem>
                            <SelectItem value="02">
                              Representative 02
                            </SelectItem>
                            <SelectItem value="03">
                              Representative 03
                            </SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Action Buttons */}
            <div className="w-1/2 flex gap-2.5">
              <Link href="/shipment" className="w-1/2 h-14 text-lg">
                <Button
                  variant={"outline"}
                  className="w-full h-14 text-lg"
                  type="button"
                >
                  Cancel
                </Button>
              </Link>
              <Button className="w-1/2 h-14 text-lg" type="submit">
                Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
