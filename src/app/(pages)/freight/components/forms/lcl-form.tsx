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
import { LclBody, lclBody } from "@/schema/lcl.schema";
import useLcl from "@/hooks/use-lcl";
import { useEffect } from "react";
import { Oval } from "react-loader-spinner";

function CreateLclForm({ onSubmit }: { onSubmit: (data: LclBody) => void }) {
  const id = useFreightStore((state) => state.id);
  const form = useForm<LclBody>({
    resolver: zodResolver(lclBody),
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

function UpdateLclForm({ lclId }: { lclId: string }) {
  const id = useFreightStore((state) => state.id);
  const { data: lclData, isPending } = useLcl().getLclById(lclId);
  const lcl = lclData?.results[0] ?? null;
  const { mutate: update } = useLcl().useUpdateLcl();
  const form = useForm<LclBody>({
    resolver: zodResolver(lclBody),
  });

  useEffect(() => {
    if (!isPending && !!lcl) {
      form.setValue("freight_id", id);
      form.setValue("cost", lcl.cost);
    }
  }, [lcl, isPending]);

  function onSubmit(data: LclBody) {
    update({
      id: lclId,
      body: {
        ...data,
        freight_id: id,
      },
    });
  }

  return (
    <>
      {isPending && (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="hsl(var(--primary-foreground))"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {!isPending && (
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
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
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
      )}{" "}
    </>
  );
}

export { CreateLclForm, UpdateLclForm };
