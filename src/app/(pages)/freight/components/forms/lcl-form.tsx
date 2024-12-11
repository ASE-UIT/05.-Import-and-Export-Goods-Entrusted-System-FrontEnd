"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { useFreightStore } from "@/stores/useFreightStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreateLclBody, UpdateLclBody, LclBody } from "@/schema/lcl.schema";
import useLcl from "@/hooks/use-lcl";

function CreateLclForm({
  onSubmit,
}: {
  onSubmit: (data: CreateLclBody) => void;
}) {
  const id = useFreightStore((state) => state.id);
  const form = useForm<CreateLclBody>({
    resolver: zodResolver(LclBody),
    defaultValues: {
      cost: 0,
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
            name="cost"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Cost</FormLabel>
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

function UpdateLclForm({
  onSubmit,
  id,
}: {
  onSubmit: (data: UpdateLclBody) => void;
  id: string;
}) {
  const lcl = useLcl().getLclById(id).data?.data;
  const form = useForm<UpdateLclBody>({
    resolver: zodResolver(LclBody),
    defaultValues: {
      cost: lcl?.cost,
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
            name="cost"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Cost</FormLabel>
                <FormControl>
                  <Input
                    placeholder={lcl?.cost.toString()}
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

export { CreateLclForm, UpdateLclForm };
