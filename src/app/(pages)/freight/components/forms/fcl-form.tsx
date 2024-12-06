"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { CreateFclBody, FclBody, UpdateFclBody } from "@/schema/fcl.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFcl from "@/hooks/use-fcl";

function CreateFclForm({
  onSubmit,
}: {
  onSubmit: (data: CreateFclBody) => void;
}) {
  const id = useFreightStore((state) => state.id);
  const form = useForm<CreateFclBody>({
    resolver: zodResolver(FclBody),
    defaultValues: {
      price_20dc: 0,
      price_40dc: 0,
      price_40hc: 0,
      price_20rf: 0,
      price_40rf: 0,
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
            name="price_20dc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 20DC</FormLabel>
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
            name="price_40dc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 40DC</FormLabel>
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
            name="price_40hc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 40HC</FormLabel>
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
            name="price_20rf"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 20RF</FormLabel>
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
            name="price_40rf"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 40RF</FormLabel>
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

function UpdateFclForm({
  onSubmit,
  id,
}: {
  onSubmit: (data: UpdateFclBody) => void;
  id: string;
}) {
  const fcl = useFcl().getFclById(id).data?.data;
  const form = useForm<UpdateFclBody>({
    resolver: zodResolver(FclBody),
    defaultValues: {
      price_20dc: fcl?.price_20dc,
      price_40dc: fcl?.price_40dc,
      price_40hc: fcl?.price_40hc,
      price_20rf: fcl?.price_20rf,
      price_40rf: fcl?.price_40rf,
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
            name="price_20dc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 20DC</FormLabel>
                <FormControl>
                  <Input
                    placeholder={fcl?.price_20dc.toString()}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_40dc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 40DC</FormLabel>
                <FormControl>
                  <Input
                    placeholder={fcl?.price_40dc.toString()}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_40hc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 40HC</FormLabel>
                <FormControl>
                  <Input
                    placeholder={fcl?.price_40hc.toString()}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_20rf"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 20RF</FormLabel>
                <FormControl>
                  <Input
                    placeholder={fcl?.price_20rf.toString()}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_40rf"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 40RF</FormLabel>
                <FormControl>
                  <Input
                    placeholder={fcl?.price_40rf.toString()}
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

export { CreateFclForm, UpdateFclForm };
