"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  landFreightBody,
  CreateLandFreightBody,
  UpdateLandFreightBody,
} from "@/schema/land-freight.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import useLandFreight from "@/hooks/use-land-freight";

function CreateLandFreightForm({
  onSubmit,
}: {
  onSubmit: (data: CreateLandFreightBody) => void;
}) {
  const id = useFreightStore((state) => state.id);
  const form = useForm<CreateLandFreightBody>({
    resolver: zodResolver(landFreightBody),
    defaultValues: {
      price_0_100: 0,
      price_100_200: 0,
      price_200_500: 0,
      price_500_1500: 0,
      price_1500_5000: 0,
      price_5000_10000: 0,
      price_10000: 0,
      freight_id: id,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="flex flex-col items-center w-[600px] gap-4 py-4">
          <FormField
            control={form.control}
            name="price_0_100"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 0-100</FormLabel>
                <FormControl>
                  <Input
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_100_200"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 100-200</FormLabel>
                <FormControl>
                  <Input
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_200_500"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 200-500</FormLabel>
                <FormControl>
                  <Input
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_500_1500"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 500-1500</FormLabel>
                <FormControl>
                  <Input
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_1500_5000"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 1500-5000</FormLabel>
                <FormControl>
                  <Input
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_5000_10000"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 5000-10000</FormLabel>
                <FormControl>
                  <Input
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_10000"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 10000</FormLabel>
                <FormControl>
                  <Input
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
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

function UpdateLandFreightForm({
  onSubmit,
  id,
}: {
  onSubmit: (data: UpdateLandFreightBody) => void;
  id: string;
}) {
  const landFreight = useLandFreight().getLandById(id).data?.data;
  const form = useForm<UpdateLandFreightBody>({
    resolver: zodResolver(landFreightBody),
    defaultValues: {
      price_0_100: landFreight?.price_0_100,
      price_100_200: landFreight?.price_100_200,
      price_200_500: landFreight?.price_200_500,
      price_500_1500: landFreight?.price_500_1500,
      price_1500_5000: landFreight?.price_1500_5000,
      price_5000_10000: landFreight?.price_5000_10000,
      price_10000: landFreight?.price_10000,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="flex flex-col items-center w-[600px] gap-4 py-4">
          <FormField
            control={form.control}
            name="price_0_100"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 0-100</FormLabel>
                <FormControl>
                  <Input
                    placeholder={landFreight?.price_0_100.toString()}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_100_200"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 100-200</FormLabel>
                <FormControl>
                  <Input
                    placeholder={landFreight?.price_100_200.toString()}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_200_500"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 200-500</FormLabel>
                <FormControl>
                  <Input
                    placeholder={landFreight?.price_200_500.toString()}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_500_1500"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 500-1500</FormLabel>
                <FormControl>
                  <Input
                    placeholder={landFreight?.price_500_1500.toString()}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_1500_5000"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 1500-5000</FormLabel>
                <FormControl>
                  <Input
                    placeholder={landFreight?.price_1500_5000.toString()}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_5000_10000"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 5000-10000</FormLabel>
                <FormControl>
                  <Input
                    placeholder={landFreight?.price_5000_10000.toString()}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_10000"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 10000</FormLabel>
                <FormControl>
                  <Input
                    placeholder={landFreight?.price_10000.toString()}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
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

export { CreateLandFreightForm, UpdateLandFreightForm };
