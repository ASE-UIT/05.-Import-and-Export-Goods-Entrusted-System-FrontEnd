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
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { shipmentSchema } from "@/schema/shipment.schema";
import { useShipment } from "@/hooks/use-shipment";
import { useRouter } from "next/navigation";
import useContract from "@/hooks/use-contract";

export default function AddShipment() {
  const router = useRouter();
  const { useCreateShipment } = useShipment();
  const createShipment = useCreateShipment();
  const { data: contracts, isLoading } = useContract.useGetContracts();
  const contractIds = contracts?.data.map((contract) => contract.id) || [];

  const form = useForm<z.infer<typeof shipmentSchema>>({
    resolver: zodResolver(shipmentSchema),
    defaultValues: {
      contractId: "",
      location: "",
    },
  });

  const onSubmit = (values: z.infer<typeof shipmentSchema>) => {
    createShipment.mutate(values, {
      onSuccess: () => {
        alert("Shipment created successfully!");
        router.push("/shipment");
      },
      onError: (error) => {
        console.error("Failed to create shipment:", error);
        alert(
          error.message || "An error occurred while creating the shipment."
        );
      },
    });
  };

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
                        <SelectItem value="AIR">Air Freight</SelectItem>
                        <SelectItem value="LAND">Land Freight</SelectItem>
                        <SelectItem value="FCL">FCL</SelectItem>
                        <SelectItem value="LCL">LCL</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contract ID */}
            <FormField
              control={form.control}
              name="contractId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Contract ID</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full h-[60px]">
                        <SelectValue placeholder="Select contract ID" />
                      </SelectTrigger>
                      <SelectContent>
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            Loading Contracts...
                          </div>
                        ) : contractIds.length > 0 ? (
                          contractIds.map((id) => (
                            <SelectItem key={id} value={id}>
                              {id}
                            </SelectItem>
                          ))
                        ) : (
                          <div className="flex items-center justify-center">
                            No Contract Available
                          </div>
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Location</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      type="text"
                      className="w-full h-[60px] px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Location"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Status */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Status</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full h-[60px] flex items-center">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PENDING">PENDING</SelectItem>
                        <SelectItem value="DOCUMENT_VERIFICATION">
                          {" "}
                          DOCUMENT_VERIFICATION
                        </SelectItem>
                        <SelectItem value="CUSTOMS_CLEARANCE_PENDING">
                          CUSTOMS_CLEARANCE_PENDING
                        </SelectItem>
                        <SelectItem value="CUSTOMS_CLEARED">
                          CUSTOMS_CLEARED
                        </SelectItem>
                        <SelectItem value="PROCESSING_AT_ORIGIN_PORT">
                          PROCESSING_AT_ORIGIN_PORT
                        </SelectItem>
                        <SelectItem value="LOADED_ON_VESSEL">
                          LOADED_ON_VESSEL
                        </SelectItem>
                        <SelectItem value="IN_TRANSIT">IN_TRANSIT</SelectItem>
                        <SelectItem value="ARRIVE_AT_DESTINATION_PORT">
                          ARRIVE_AT_DESTINATION_PORT
                        </SelectItem>
                        <SelectItem value="CUSTOMS_CLEARANCE_AT_DESTINATION">
                          CUSTOMS_CLEARANCE_AT_DESTINATION
                        </SelectItem>
                        <SelectItem value="PROCESSING_AT_DESTINATION_WAREHOUSE">
                          PROCESSING_AT_DESTINATION_WAREHOUSE
                        </SelectItem>
                        <SelectItem value="DELIVERED">DELIVERED</SelectItem>
                        <SelectItem value="OUT_FOR_DELIVERY">
                          OUT_FOR_DELIVERY
                        </SelectItem>
                        <SelectItem value="FAILED_DELIVERY_ATTEMPT">
                          FAILED_DELIVERY_ATTEMPT
                        </SelectItem>
                        <SelectItem value="HELD_AT_CUSTOMS">
                          HELD_AT_CUSTOMS
                        </SelectItem>
                        <SelectItem value="RETURNED_TO_SENDER">
                          RETURNED_TO_SENDER
                        </SelectItem>
                        <SelectItem value="ON_HOLD">ON_HOLD</SelectItem>
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
                  variant="outline"
                  className="w-full h-14 text-lg"
                  type="button"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                className="w-1/2 h-14 text-lg"
                type="submit"
                // disabled={createShipment}
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
