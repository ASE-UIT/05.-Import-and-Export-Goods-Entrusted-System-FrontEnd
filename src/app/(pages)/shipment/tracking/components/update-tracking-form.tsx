import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useShipmentTracking from "@/hooks/use-shipment-tracking";
import { toast } from "@/hooks/use-toast";
import {
  UpdateShipmentTrackingBody,
  UpdateShipmentTrackingBodyType,
} from "@/schema/shipmentTracking.schema";
import { ErrorType } from "@/types/error.type";
import { ShipmentTracking } from "@/types/shipment-tracking.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const ShipmentStatus = {
  PENDING: "PENDING",
  DOCUMENT_VERIFICATION: "DOCUMENT_VERIFICATION",
  CUSTOMS_CLEARANCE_PENDING: "CUSTOMS_CLEARANCE_PENDING",
  CUSTOMS_CLEARED: "CUSTOMS_CLEARED",
  PROCESSING_AT_ORIGIN_PORT: "PROCESSING_AT_ORIGIN_PORT",
  LOADED_ON_VESSEL: "LOADED_ON_VESSEL",
  IN_TRANSIT: "IN_TRANSIT",
  ARRIVE_AT_DESTINATION_PORT: "ARRIVE_AT_DESTINATION_PORT",
  CUSTOMS_CLEARANCE_AT_DESTINATION: "CUSTOMS_CLEARANCE_AT_DESTINATION",
  PROCESSING_AT_DESTINATION_WAREHOUSE: "PROCESSING_AT_DESTINATION_WAREHOUSE",
  DELIVERED: "DELIVERED",
  OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY",
  FAILED_DELIVERY_ATTEMPT: "FAILED_DELIVERY_ATTEMPT",
  HELD_AT_CUSTOMS: "HELD_AT_CUSTOMS",
  RETURNED_TO_SENDER: "RETURNED_TO_SENDER",
  ON_HOLD: "ON_HOLD",
} as const;

export default function UpdateTrackingForm({
  shipmentId,
}: {
  shipmentId: string;
}) {
  const { data, isLoading, isError, error } =
    useShipmentTracking.useGetShipmentTracking(shipmentId);

  const router = useRouter();

  const [shipmentTracking, setShipmentTracking] = useState<ShipmentTracking>();
  const [loading, setLoading] = useState(false);

  const updateTracking = useShipmentTracking.useUpdateShipmentTracking();

  const form = useForm<UpdateShipmentTrackingBodyType>({
    resolver: zodResolver(UpdateShipmentTrackingBody),
    defaultValues: {
      status: shipmentTracking?.status,
      location: shipmentTracking?.location,
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (data) {
      setShipmentTracking(data[0]);
    }
  }, [data]);

  useEffect(() => {
    form.reset({
      status: shipmentTracking?.status,
      location: shipmentTracking?.location,
    });
  }, [shipmentTracking]);

  async function onSubmit(values: UpdateShipmentTrackingBodyType) {
    if (loading) return;
    setLoading(true);
    try {
      await updateTracking.mutateAsync({
        trackingId: shipmentTracking?.id || "",
        updateDetails: values,
      });
      toast({
        title: "Success",
        description: "Shipment tracking updated successfully.",
      });
      router.push("/shipment/tracking");
    } catch (error) {
      toast({
        title: "Error",
        description: (error as ErrorType).message,
      });
    } finally {
      setLoading(false);
    }
  }

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );

  if (isError)
    return (
      <div className="flex flex-col items-center justify-center w-full h-[400px]">
        <AlertCircle className="w-16 h-16 text-neutral-400" />
        <span className="text-lg mt-4 text-neutral-400">{error.message}</span>
      </div>
    );

  return (
    <div className="w-full">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Update Tracking</h1>
        <p className="text-lg text-neutral-500">
          Update the shipment tracking information.
        </p>
      </div>

      <div>
        <div className="gap-4 mt-4">
          <div className="mt-4 space-y-3">
            <Label className="text-[18px] font-bold">Shipment ID</Label>
            <Input
              value={shipmentTracking?.shipmentId || ""}
              readOnly
              className="bg-neutral-100 cursor-default"
            />
          </div>
          <div className="mt-4 space-y-3">
            <Label className="text-[18px] font-bold">Tracking ID</Label>
            <Input
              value={shipmentTracking?.id || ""}
              readOnly
              className="bg-neutral-100 cursor-default"
            />
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
          <div className="flex items-start justify-between">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="w-[40%]">
                  <FormLabel className="text-[18px] font-bold">
                    Shipment Status
                  </FormLabel>
                  <Select
                    value={field.value || shipmentTracking?.status}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-[60px] text-[18px]">
                        <SelectValue placeholder="Select shipment status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(ShipmentStatus).map((status) => (
                        <SelectItem key={status} value={status}>
                          {status
                            .replace(/_/g, " ")
                            .toLowerCase()
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select the current status of the shipment.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-[55%]">
                  <FormLabel className="text-[18px] font-bold">
                    Location
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="New York" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your current location.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full h-[60px] text-2xl"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
