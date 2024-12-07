// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { contactRepSchema } from "@/schema/contactRep.schema";
// import { useContactRep } from "@/hooks/use-contactRep";
// import { useRouter } from "next/navigation";

// export default function AddContactrep() {
//   const router = useRouter();

//   const { useCreateContactRep } = useContactRep();
//   const createContactRep = useCreateContactRep();

//   const form = useForm<z.infer<typeof contactRepSchema>>({
//     resolver: zodResolver(contactRepSchema),
//   });

//   function onSubmit(values: z.infer<typeof contactRepSchema>) {
//     try {
//       createContactRep.mutate(values, {
//         onSuccess: () => {
//           router.push("/contactrep");
//         },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className="flex flex-col items-center p-[24px] w-full">
//       <div className="flex w-full justify-between items-end">
//         <span className="text-3xl font-bold">Add Contactrep</span>
//       </div>
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           encType="multipart/form-data"
//         >
//           <div className="flex flex-col items-center w-[600px] gap-4 py-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormLabel className="font-bold">Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormLabel className="font-bold">Email</FormLabel>
//                   <FormControl>
//                     <Input type="email" placeholder="Email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="phone"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormLabel className="font-bold">Phone</FormLabel>
//                   <FormControl>
//                     <Input type="tel" placeholder="Phone" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <div className="w-1/2 flex gap-2.5">
//               <Link
//                 href="/contactrep"
//                 className="w-1/2 h-14 text-lg bg-white text-black"
//               >
//                 <Button
//                   className="w-full h-10  text-lg"
//                   variant={"outline"}
//                   type="button"
//                 >
//                   Cancel
//                 </Button>
//               </Link>
//               <Button
//                 className="w-1/2 h-10 text-lg"
//                 variant={"default"}
//                 type="submit"
//               >
//                 Save
//               </Button>
//             </div>
//           </div>
//         </form>
//       </Form>
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

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

import { ContactRepBody, ContactRepBodyType } from "@/schema/contactRep.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import useContactRep from "@/hooks/use-contactRep";
import { ErrorType } from "@/types/error.type";

export default function AddContactrep() {
  const form = useForm<ContactRepBodyType>({
    resolver: zodResolver(ContactRepBody),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const router = useRouter();

  const { mutate: createContactRep, isPending } =
    useContactRep.useCreateContactRep();

  function onSubmit(values: ContactRepBodyType) {
    console.log(values);
    if (isPending) return;

    createContactRep(values, {
      onSuccess() {
        router.push("/contactrep");
      },
      onError: (error) => {
        console.log(" ~ onSubmit ~ error:", error);
        switch ((error as ErrorType).statusCode) {
          case 409: {
            if (!error.errors?.length) return;

            error.errors.forEach((err) => {
              const filed = err.field as keyof ContactRepBodyType;
              form.setError(filed, {
                message: err.message,
              });
            });
            break;
          }
          default:
            console.error("Unknown error", error);
            break;
        }
      },
    });
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Add Contactrep</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
          noValidate
        >
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Phone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-1/2 flex gap-2.5">
              <Link
                href="/contactrep"
                className="w-1/2 h-14 text-lg bg-white text-black"
              >
                <Button
                  className="w-full h-10  text-lg"
                  variant={"outline"}
                  type="button"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                className="w-1/2 h-10 text-lg"
                variant={"default"}
                type="submit"
                disabled={isPending}
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
