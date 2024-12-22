"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { fclBody, FclBody } from "@/schema/fcl.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFcl from "@/hooks/use-fcl";
import { useEffect } from "react";
import { Oval } from "react-loader-spinner";

function CreateFclForm({ onSubmit }: { onSubmit: (data: FclBody) => void }) {
  const id = useFreightStore((state) => state.id);
  const form = useForm<FclBody>({
    resolver: zodResolver(fclBody),
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

function UpdateFclForm({ fclId }: { fclId: string }) {
  const id = useFreightStore((state) => state.id);
  const { data: fclData, isPending } = useFcl().getFclById(fclId);
  const fcl = fclData?.results[0] ?? null;
  const { mutate: update } = useFcl().useUpdateFcl();
  const form = useForm<FclBody>({
    resolver: zodResolver(fclBody),
  });

  useEffect(() => {
    if (!isPending && !!fcl) {
      form.setValue("freight_id", id);
      form.setValue("price_20dc", fcl.price_20dc);
      form.setValue("price_40dc", fcl.price_40dc);
      form.setValue("price_40hc", fcl.price_40hc);
      form.setValue("price_20rf", fcl.price_20rf);
      form.setValue("price_40rf", fcl.price_40rf);
    }
  }, [fcl, isPending]);

  function onSubmit(data: FclBody) {
    update({
      id: fclId,
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
                name="price_20dc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Price 20DC</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={fcl?.price_20dc.toString()}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
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
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
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
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
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
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
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
      )}
    </>
  );
}

export { CreateFclForm, UpdateFclForm };
