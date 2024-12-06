"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  freightBody,
  CreateFreightBody,
  UpdateFreightBody,
} from "@/schema/freight.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { FREIGHT_TYPE, WEEKDAY } from "@/configs/enum";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useProvider } from "@/hooks/use-provider";
import { Textarea } from "@/components/ui/textarea";
import useFreight from "@/hooks/use-freight";

function CreateFreightForm({
  onSubmit,
}: {
  onSubmit: (data: CreateFreightBody) => void;
}) {
  const form = useForm<CreateFreightBody>({
    resolver: zodResolver(freightBody),
  });
  const providerData = useProvider().useGetAllProvider().data?.data;

  const types = Object.values(FREIGHT_TYPE);
  const weekDays = Object.values(WEEKDAY);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="flex flex-col items-center w-[600px] gap-4 py-4">
          <FormField
            control={form.control}
            name="freightType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Freight Type</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Freight Type"></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="providerId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Provider</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Provider"></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {providerData ? (
                      providerData.map((provider) => (
                        <SelectItem key={provider.id} value={provider.id}>
                          {provider.name} - {provider.status}
                        </SelectItem>
                      ))
                    ) : (
                      <Skeleton className="h-2 w-full" />
                    )}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="schedule"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Schedule</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Schedule"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {weekDays.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4 w-full">
            <FormField
              control={form.control}
              name="validFrom"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-bold">Valid From</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => field.onChange(date ?? new Date())}
                        disabled={(date) =>
                          date < new Date() &&
                          date.toDateString() !== new Date().toDateString()
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="validUntil"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-bold">Valid Until</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => field.onChange(date ?? new Date())}
                        disabled={(date) =>
                          date < new Date() &&
                          date.toDateString() !== new Date().toDateString()
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="origin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Origin</FormLabel>
                  <FormControl>
                    <Input placeholder="Origin" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Destination</FormLabel>
                  <FormControl>
                    <Input placeholder="Destination" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="transitTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Transit Time</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Transit Time"
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionFee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Addition Fee</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Addition Fee"
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="addition_fee_breakdown"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">
                  Addition Fee Breakdown
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Addition Fee Breakdown" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="items-end" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

function UpdateFreightForm({
  onSubmit,
  id,
}: {
  onSubmit: (data: UpdateFreightBody) => void;
  id: string;
}) {
  const freight = useFreight().getFreightById(id).data?.data;
  const form = useForm<UpdateFreightBody>({
    resolver: zodResolver(freightBody),
    defaultValues: {
      freightType: freight?.freightType,
      providerId: freight?.providerId,
      schedule: freight?.schedule,
      validFrom: freight?.validFrom,
      validUntil: freight?.validUntil,
      origin: freight?.origin,
      destination: freight?.destination,
      transitTime: freight?.transitTime,
      additionFee: freight?.additionFee,
      addition_fee_breakdown: freight?.addition_fee_breakdown,
    },
  });
  const providerData = useProvider().useGetAllProvider().data?.data;

  const types = Object.values(FREIGHT_TYPE);
  const weekDays = Object.values(WEEKDAY);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="flex flex-col items-center w-[600px] gap-4 py-4">
          <FormField
            control={form.control}
            name="freightType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Freight Type</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={freight?.freightType}
                      ></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="providerId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Provider</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          providerData?.find(
                            (item) => item.id === freight?.providerId
                          )?.name
                        }
                      ></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {providerData ? (
                      providerData.map((provider) => (
                        <SelectItem key={provider.id} value={provider.id}>
                          {provider.name} - {provider.status}
                        </SelectItem>
                      ))
                    ) : (
                      <Skeleton className="h-2 w-full" />
                    )}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="schedule"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Schedule</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={freight?.schedule}
                      ></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {weekDays.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4 w-full">
            <FormField
              control={form.control}
              name="validFrom"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-bold">Valid From</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => field.onChange(date ?? new Date())}
                        disabled={(date) =>
                          date < new Date() &&
                          date.toDateString() !== new Date().toDateString()
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="validUntil"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-bold">Valid Until</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => field.onChange(date ?? new Date())}
                        disabled={(date) =>
                          date < new Date() &&
                          date.toDateString() !== new Date().toDateString()
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="origin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Origin</FormLabel>
                  <FormControl>
                    <Input placeholder={freight?.origin} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Destination</FormLabel>
                  <FormControl>
                    <Input placeholder={freight?.destination} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="transitTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Transit Time</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={freight?.transitTime.toString()}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionFee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Addition Fee</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={freight?.additionFee.toString()}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="addition_fee_breakdown"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">
                  Addition Fee Breakdown
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={freight?.addition_fee_breakdown}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="items-end" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export { CreateFreightForm, UpdateFreightForm };
