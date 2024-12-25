"use client";

import useDocument from "@/hooks/use-document";
import { useShipment } from "@/hooks/use-shipment";
import { Document } from "@/types/document/document.type";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { CreateSalesContractType } from "@/schema/document/sales-contract.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DatePicker } from "../_components/date-picker";
import { useSalesContract } from "@/hooks/use-sales-contract";

const formSchema = z.object({
    buyer_name: z.string(),
    seller_name: z.string(),
    buyer_add: z.string(),
    seller_add: z.string(),
    date: z.string(),
    product: z.string(),
    amount: z.string(),
    means_of_payment: z.string(),
    cost: z.string(),
    invoice_amount_days: z.string(),
    balance_days: z.string(),
    amount_percent: z.string(),
    delivery_date: z.string(),
    state_name: z.string(),
    seller_signed: z.string(),
    seller_date: z.string(),
    seller_by: z.string(),
    buyer_signed: z.string(),
    buyer_date: z.string(),
    buyer_by: z.string(),
    shipmentId: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddSalesContractPage() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            buyer_name: "",
            seller_name: "",
            buyer_add: "",
            seller_add: "",
            date: "",
            product: "",
            amount: "",
            means_of_payment: "",
            cost: "",
            invoice_amount_days: "",
            balance_days: "",
            amount_percent: "",
            delivery_date: "",
            state_name: "",
            seller_signed: "",
            seller_date: "",
            seller_by: "",
            buyer_signed: "",
            buyer_date: "",
            buyer_by: "",
        },
    });

    const { useGetAllShipment } = useShipment();
    const { data: shipments } = useGetAllShipment();
    console.log("🚀 ~ AddSalesContractPage ~ shipments:", shipments);

    const { data: documents } = useDocument.useGetDocument();
    console.log("🚀 ~ AddSalesContractPage ~ documents:", documents);

    const shipmentAvailable = shipments?.filter((shipment) => {
        if (Array.isArray(documents?.data)) {
            const shipmentProvided = documents?.data.find(
                (doc: Document) =>
                    doc.type === "SALES_CONTRACT" &&
                    doc.shipmentId === shipment.shipmentId
            );
            return !shipmentProvided;
        }
    });

    console.log(
        "🚀 ~ shipmentAvailable ~ shipmentAvailable:",
        shipmentAvailable
    );

    const { isPending, mutate } = useSalesContract.useCreateSalesContract();

    const onSubmit = (values: FormValues) => {
        const { shipmentId, ...fields } = values;
        const createSalesContractBody: CreateSalesContractType = {
            docNumber: new Date().getTime().toString(),
            shipmentId,
            type: "SALES_CONTRACT",
            fields,
        };

        console.log(
            "🚀 ~ onSubmit ~ createSalesContractBody:",
            createSalesContractBody
        );

        console.log(JSON.stringify(createSalesContractBody, null, 2));

        mutate(createSalesContractBody, {
            onSuccess: () => {
                toast({
                    title: "Create success",
                    description: "Document created successfully",
                    duration: 10000,
                });
                form.reset();
            },
        });
    };

    return (
        <div className="max-w-4xl mx-auto flex flex-wrap flex-col gap-10 items-center p-[24px] w-full">
            <Button variant="link" className="self-start" asChild>
                <Link href="/document/sales-contract">
                    <ArrowLeft className="size-4 mr-2" />
                    Back
                </Link>
            </Button>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <div className="inline-flex justify-end fixed top-20 right-8">
                        <FormField
                            control={form.control}
                            name="shipmentId"
                            render={({ field }) => (
                                <FormItem className="bg-white">
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Choose shipment" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {shipmentAvailable?.map(
                                                ({
                                                    shipmentId,
                                                    shipmentType,
                                                    client,
                                                }) => (
                                                    <SelectItem
                                                        key={shipmentId}
                                                        value={shipmentId}
                                                    >
                                                        ***
                                                        {shipmentId.slice(
                                                            -3
                                                        )} - {shipmentType} -{" "}
                                                        {client}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <h1 className="font-bold text-3xl  block text-center ">
                        Sales Contract
                    </h1>

                    <div>
                        <span>
                            This sales contract (hereinafter referred to as the
                            &quot;Contact&quot;) is entered into between
                        </span>
                        <FormField
                            control={form.control}
                            name="buyer_name"
                            render={({ field }) => (
                                <FormItem className="inline-block">
                                    <FormControl>
                                        <input
                                            {...field}
                                            required
                                            placeholder="BUYER NAME"
                                            className="border-dotted border-b-2 py-1 outline-none text-center"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <span>with registered address at </span>
                        <FormField
                            control={form.control}
                            name="buyer_add"
                            render={({ field }) => (
                                <FormItem className="inline-block">
                                    <FormControl>
                                        <input
                                            {...field}
                                            required
                                            placeholder="ADDRESS"
                                            className="border-dotted border-b-2 py-1 outline-none text-center"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <span> (hereinafter the &quot;Buyer&quot;), and </span>
                        <FormField
                            control={form.control}
                            name="seller_name"
                            render={({ field }) => (
                                <FormItem className="inline-block">
                                    <FormControl>
                                        <input
                                            {...field}
                                            required
                                            placeholder="SELLER NAME"
                                            className="border-dotted border-b-2 py-1 outline-none text-center"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <span> with a registered address located at </span>
                        <FormField
                            control={form.control}
                            name="seller_add"
                            render={({ field }) => (
                                <FormItem className="inline-block">
                                    <FormControl>
                                        <input
                                            {...field}
                                            required
                                            placeholder="ADDRESS"
                                            className="border-dotted border-b-2 py-1 outline-none text-center"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <span>
                            {" "}
                            (hereinafter the &quot;Seller&quot;). (collectively
                            the &quot;Parties&quot; or &quot;Party&quot;)
                        </span>
                    </div>

                    <div className="mt-4">
                        <span>This Contract will be effective as of</span>
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="inline-block">
                                    <FormControl>
                                        <DatePicker
                                            field={field}
                                            placeholder="DATE"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="mt-4 font-bold text-lg">Recitals</div>

                    <div className="mt-4">
                        <span>
                            Whereas, Seller is the manufacturer and/or
                            distributor of the following{" "}
                        </span>
                        <FormField
                            control={form.control}
                            name="product"
                            render={({ field }) => (
                                <FormItem className="inline-block">
                                    <FormControl>
                                        <input
                                            {...field}
                                            required
                                            placeholder="PRODUCT"
                                            className="border-dotted border-b-2 py-1 outline-none text-center"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <span>(hereinafter &quot;Goods&quot;), and</span>
                    </div>

                    <div className="mt-4">
                        <span>
                            Whereas, Buyer wishes to purchase from Seller, and
                            Seller wishes to sell Goods to Buyer according to
                            the provisions set forth in this agreement and on no
                            other terms, unless mutually agreed.
                        </span>
                    </div>

                    <div className="mt-4">
                        <span>
                            Now, therefore, in consideration of the foregoing
                            premises, and of the mutual promises and covenants
                            herein contained, the Parties, intending to be
                            legally bound, agree to the following:
                        </span>
                    </div>

                    <div className="mt-4 ml-4">
                        <div>
                            <span>
                                <strong>1. Purchase Price and Terms: </strong>
                                Seller agrees to sell the Goods to the Buyer at{" "}
                            </span>
                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem className="inline-block">
                                        <FormControl>
                                            <input
                                                {...field}
                                                required
                                                placeholder="AMOUNT"
                                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <span> via </span>
                            <FormField
                                control={form.control}
                                name="means_of_payment"
                                render={({ field }) => (
                                    <FormItem className="inline-block">
                                        <FormControl>
                                            <input
                                                {...field}
                                                required
                                                placeholder="MEANS OF PAYMENT"
                                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <span>
                                . It is the responsibility of the Seller to set
                                the shipping method, bear the shipping fees up
                                to{" "}
                            </span>

                            <FormField
                                control={form.control}
                                name="cost"
                                render={({ field }) => (
                                    <FormItem className="inline-block">
                                        <FormControl>
                                            <input
                                                {...field}
                                                required
                                                placeholder="COST"
                                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <span>
                                and third Party expenses. Seller shall also
                                provide an invoice to Buyer at the time of
                                delivery. The Buyer is bound to pay the total
                                invoice amount within{" "}
                            </span>
                            <FormField
                                control={form.control}
                                name="invoice_amount_days"
                                render={({ field }) => (
                                    <FormItem className="inline-block">
                                        <FormControl>
                                            <input
                                                {...field}
                                                required
                                                placeholder="DAYS"
                                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <span> days. Any balances not paid within </span>
                            <FormField
                                control={form.control}
                                name="balance_days"
                                render={({ field }) => (
                                    <FormItem className="inline-block">
                                        <FormControl>
                                            <input
                                                {...field}
                                                required
                                                placeholder="DAYS"
                                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <span>days will be subject to </span>
                            <FormField
                                control={form.control}
                                name="amount_percent"
                                render={({ field }) => (
                                    <FormItem className="inline-block">
                                        <FormControl>
                                            <input
                                                {...field}
                                                required
                                                placeholder="AMOUNT"
                                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <span>
                                percent penalty per month of delinquency in
                                payment, along with storage or inventory
                                carrying charges if any.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>2. Taxes:</strong> The prices quoted in
                                this agreement do not include taxes or third
                                Party expenses. Any such additional expenses,
                                relating to this agreement, need to be paid by
                                the Buyer.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>3. Shipment:</strong> The Seller shall
                                have delivered the Goods to the Buyer by{" "}
                            </span>
                            <FormField
                                control={form.control}
                                name="delivery_date"
                                render={({ field }) => (
                                    <FormItem className="inline-block">
                                        <FormControl>
                                            <DatePicker
                                                field={field}
                                                placeholder="DATE"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <span>
                                . The Goods will be considered delivered once
                                the Buyer accepts delivery at the above
                                mentioned Buyer location.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>4. Risk of Loss and Title:</strong> In
                                the event of risk of loss of Goods during
                                shipment, the Seller will bear the costs and
                                title. Once the Buyer accepts delivery, the risk
                                of loss and title to the Goods will be passed on
                                to the Buyer.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>
                                    5. Inspection of Goods & Rejection:
                                </strong>{" "}
                                Buyer has the right to inspect the Goods for any
                                defect, quality issues, grade or any other
                                issues, within two business days from delivery.
                                In case the Goods are rejected within 2 business
                                days from the date of delivery, the Seller will
                                have two business days to fix the issue with the
                                Goods. The Seller&apos;s failure to remedy the
                                issue will be considered an agreement default.
                                Further to this, the Buyer can choose to either:
                            </span>
                            <div className="ml-4">
                                <ul className="ml-4 list-disc">
                                    <li>Secure a replacement</li>
                                    <li>
                                        Return the Goods and seek a refund from
                                        the Seller, along with reverse shipping
                                        costs
                                    </li>
                                    <li>
                                        Return the Goods and seek credit-note
                                        from the Seller for future purchases
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                And if the Buyer does not reject the Goods
                                within 2 business days, from delivery of the
                                Goods, they waive all rights to contest the
                                matter.
                            </div>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>6. Event of Delays or Defaults:</strong>{" "}
                                Without limitation, here are the events of
                                default and material breaches under this
                                agreement:
                            </span>
                            <div className="ml-4">
                                <ul className="ml-4 list-disc">
                                    <li>
                                        Delay or non-delivery by the Seller due
                                        to labor disputes, transportation
                                        shortage, shortage of raw materials, or
                                        any other causes outside of
                                        Seller&apos;s control.{" "}
                                    </li>
                                    <li>
                                        Buyer&apos;s failure to pay in full for
                                        the Goods received, on or before the
                                        specified date
                                    </li>
                                    <li>
                                        Seller&apos;s inability to fix any
                                        claims or disputes raised by the Buyer,
                                        within 2 days of delivery confirmation
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>7. Remediation & Legal Fees:</strong>{" "}
                                From the time of receiving intimation of the
                                default or delay, the Party has two days (2) to
                                cure the breach situation. Else, the
                                non-breaching Party has the right to cancel the
                                Contract and recoup losses from the breaching
                                Party. If either Party seeks to enforce the
                                terms in this agreement via court or binding
                                arbitration, the prevailing Party shall recover
                                from the other all losses, damages and costs
                                including reasonable legal fees incurred in
                                enforcing this agreement.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>8. Termination:</strong> Either Party
                                can terminate this agreement at any time by
                                sharing a written notice. All Goods accepted and
                                delivered, up until the date of termination,
                                will need to be paid for by the Buyer.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>9. Arbitration:</strong> The Parties
                                acknowledge that all claims and disputes
                                relating to this Agreement will be settled by a
                                neutral and non-binding mediator, in case the
                                issue is not sorted within 14 days of informal
                                discussions from the date the dispute arises. In
                                case the mediation fails, the issue will be
                                presented to a neutral arbitrator whose decision
                                will be binding on both Parties. The cost of
                                these proceedings will be borne equally for both
                                Parties.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>10. LIMITATION OF LIABILITY:</strong> IN
                                NO EVENT SHALL EITHER PARTY BE LIABLE FOR
                                DAMAGES RESULTING FROM OR CONNECTED WITH ANY
                                PART OF THIS AGREEMENT, SUCH AS, BUT NOT LIMITED
                                TO, LOSS OF REVENUE OR BUSINESS, FAILURE OF
                                DELIVERY OR EXTRA DELIVERY CHARGES - WHICH ARE
                                NOT RELATED TO OR A DIRECT RESULT OF EITHER
                                PARTY&apos;S NEGLIGENCE OR BREACH.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>11. Disclaimer of Warranties:</strong>{" "}
                                The Goods are sold &apos;as is&apos;. Thus, the
                                Seller is not liable towards the consumer for
                                any lack of conformity or defect that is present
                                in the delivered Goods. The Seller disclaims all
                                warranties, whether express or implied,
                                including any implied warranty of
                                merchantability or fitness for a particular
                                purpose.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>12. SEVERABILITY:</strong> IN THE EVENT
                                ANY PROVISION OF THIS AGREEMENT IS FOUND TO BE
                                INVALID OR UNENFORCEABLE, IN WHOLE OR IN PART,
                                IT SHALL NOT AFFECT THE VALIDITY OF THE REST OF
                                THE AGREEMENT. ALL OTHER PROVISIONS, WITHIN THIS
                                CONTRACT, SHALL REMAIN IN FULL FORCE AND EFFECT,
                                ENFORCEABLE IN THE COURT OF LAW.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>13. Waiver:</strong> Under the terms of
                                this Agreement, if either party fails to
                                exercise any right with respect to a breach, it
                                will not be considered as a waiver of any
                                subsequent exercise of that right or any other
                                right.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>14. Governing Law:</strong> The Parties
                                agree that this Agreement shall be interpreted
                                in accordance with the
                            </span>
                            <FormField
                                control={form.control}
                                name="state_name"
                                render={({ field }) => (
                                    <FormItem className="inline-block">
                                        <FormControl>
                                            <input
                                                {...field}
                                                required
                                                placeholder="STATE NAME"
                                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <span>law.</span>
                        </div>
                        <div className="mt-4">
                            <span>
                                <strong>15. Entire Agreement:</strong> Both
                                Parties agree that this Agreement represents the
                                entire agreement between the Parties, and
                                supersedes all other agreements between the
                                Parties. This agreement may not be changed
                                orally. All changes to the terms of this
                                agreement need to be done in writing and
                                signed-off by both Parties.
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <span>
                            Both Parties acknowledge that they have read the
                            Agreement, and understood the terms, set forth
                            above, and agrees to be bound by the terms herein:
                        </span>
                    </div>
                    {/* Signatures */}
                    <div className="">
                        <div className="mt-8">
                            <strong>&quot;SELLER&quot;</strong>
                        </div>
                        <div className="ml-2 mr-2 flex justify-between mt-2.5 w-full items-end self-stretch">
                            <div>
                                <div>
                                    <span>Signed: </span>
                                    <FormField
                                        control={form.control}
                                        name="seller_signed"
                                        render={({ field }) => (
                                            <FormItem className="inline-block">
                                                <FormControl>
                                                    <input
                                                        {...field}
                                                        required
                                                        placeholder="SELLER SIGNED"
                                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div>
                                    <span>By: </span>
                                    <FormField
                                        control={form.control}
                                        name="seller_by"
                                        render={({ field }) => (
                                            <FormItem className="inline-block">
                                                <FormControl>
                                                    <input
                                                        {...field}
                                                        required
                                                        placeholder="SELLER BY"
                                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div>
                                <span>Date: </span>
                                <FormField
                                    control={form.control}
                                    name="seller_date"
                                    render={({ field }) => (
                                        <FormItem className="inline-block">
                                            <FormControl>
                                                <DatePicker
                                                    field={field}
                                                    placeholder="SELLER DATE"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="mt-8">
                            <strong>&quot;BUYER&quot;</strong>
                        </div>
                        <div className="ml-2 mr-2 flex flex-wrap justify-between mt-2.5 w-full items-end self-stretch">
                            <div>
                                <div>
                                    <span>Signed: </span>
                                    <FormField
                                        control={form.control}
                                        name="buyer_signed"
                                        render={({ field }) => (
                                            <FormItem className="inline-block">
                                                <FormControl>
                                                    <input
                                                        {...field}
                                                        required
                                                        placeholder="BUYER SIGNED"
                                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div>
                                    <span>By: </span>
                                    <FormField
                                        control={form.control}
                                        name="buyer_by"
                                        render={({ field }) => (
                                            <FormItem className="inline-block">
                                                <FormControl>
                                                    <input
                                                        {...field}
                                                        required
                                                        placeholder="BUYER BY"
                                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div>
                                <span>Date: </span>
                                <FormField
                                    control={form.control}
                                    name="buyer_date"
                                    render={({ field }) => (
                                        <FormItem className="inline-block">
                                            <FormControl>
                                                <DatePicker
                                                    field={field}
                                                    placeholder="BUYER DATE"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={isPending}
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
}
