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
import { airFreightBody, AirFreightBody } from "@/schema/air-freight.schema";
import { useFreightStore } from "@/stores/useFreightStore";
import useAirFreight from "@/hooks/use-air-freight";
import { useEffect } from "react";
import { Oval } from "react-loader-spinner";

function CreateAirFreightForm({
  onSubmit,
}: {
  onSubmit: (data: AirFreightBody) => void;
}) {
  const id = useFreightStore((state) => state.id);
  const form = useForm<AirFreightBody>({
    resolver: zodResolver(airFreightBody),
    defaultValues: {
      price_0K: 0,
      price_45K: 0,
      price_100K: 0,
      price_300K: 0,
      price_500K: 0,
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
            name="price_0K"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 0K</FormLabel>
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
            name="price_45K"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 45K</FormLabel>
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
            name="price_100K"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 100K</FormLabel>
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
            name="price_300K"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 300K</FormLabel>
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
            name="price_500K"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Price 500K</FormLabel>
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

function UpdateAirFreightForm({ airId }: { airId: string }) {
  const id = useFreightStore((state) => state.id);
  const { data: airData, isPending } = useAirFreight().getAirById(airId);
  const airFreight = airData?.results[0] ?? null;
  const { mutate: update } = useAirFreight().useUpdateAirFreight();
  const form = useForm<AirFreightBody>({
    resolver: zodResolver(airFreightBody),
  });

  useEffect(() => {
    if (!isPending && !!airFreight) {
      form.setValue("freight_id", id);
      form.setValue("price_0K", airFreight.price_0K);
      form.setValue("price_45K", airFreight.price_45K);
      form.setValue("price_100K", airFreight.price_100K);
      form.setValue("price_300K", airFreight.price_300K);
      form.setValue("price_500K", airFreight.price_500K);
    }
  }, [isPending, airData]);

  function onSubmit(data: AirFreightBody) {
    update({
      id: airId,
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
                name="price_0K"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Price 0K</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={airFreight?.price_0K.toString() ?? ""}
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
                name="price_45K"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Price 45K</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={airFreight?.price_45K.toString() ?? ""}
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
                name="price_100K"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Price 100K</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={airFreight?.price_100K.toString() ?? ""}
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
                name="price_300K"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Price 300K</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={airFreight?.price_300K.toString() ?? ""}
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
                name="price_500K"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Price 500K</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={airFreight?.price_500K.toString() ?? ""}
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

export { CreateAirFreightForm, UpdateAirFreightForm };
