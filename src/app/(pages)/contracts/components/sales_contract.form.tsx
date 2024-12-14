// components/TransportContractModal.tsx
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

export default function SaleContractModal() {
    const [formData, setFormData] = useState({
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

    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log("Form Data:", formData);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="btn btn-primary">View</button>
            </DialogTrigger>
            <DialogContent className="max-w-[50vw] w-full h-[90vh] overflow-y-auto rounded-lg p-6 shadow-lg">
                <DialogHeader>
                    <DialogTitle className="text-center">
                        <span className="font-bold text-xl mt-4 block">Sales Contract</span><br></br>
                    </DialogTitle>
                    <div className="mt-1">
                        <form onSubmit={(e) => e.preventDefault()}>
                            {/* declare two parties */}
                            <div>
                                <span>This sales contract (hereinafter referred to as the &quot;Contact&quot;) is entered into between</span>
                                <input
                                    name="buyer_name"
                                    placeholder="BUYER NAME"
                                    className="border-dotted border-b-2 py-1 outline-none text-center"
                                    value={formData.buyer_name}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                <span>with registered address at </span>
                                <input
                                    name="buyer_add"
                                    placeholder="ADDRESS"
                                    className="border-dotted border-b-2 py-1 outline-none text-center"
                                    value={formData.buyer_add}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                <span> (hereinafter the &quot;Buyer&quot;), and </span>
                                <input
                                    name="seller_name"
                                    placeholder="SELLER NAME"
                                    className="border-dotted border-b-2 py-1 outline-none text-center"
                                    value={formData.seller_name}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                <span> with a registered address located at </span>
                                <input
                                    name="seller_add"
                                    placeholder="ADDRESS"
                                    className="border-dotted border-b-2 py-1 outline-none text-center"
                                    value={formData.seller_add}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                <span> (hereinafter the &quot;Seller&quot;). (collectively the &quot;Parties&quot; or &quot;Party&quot;)</span>
                            </div>

                            <div className="mt-4">
                                <span>This Contract will be effective as of</span>
                                <input
                                    name="date"
                                    placeholder="DATE"
                                    className="border-dotted border-b-2 py-1 outline-none text-center"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                            </div>

                            <div className="mt-4 font-bold text-lg">
                                Recitals
                            </div>

                            <div className="mt-4">
                                <span>Whereas, Seller is the manufacturer and/or distributor of the following </span>
                                <input
                                    name="product"
                                    placeholder="PRODUCT"
                                    className="border-dotted border-b-2 py-1 outline-none text-center"
                                    value={formData.product}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                                <span>(hereinafter &quot;Goods&quot;), and</span>
                            </div>

                            <div className="mt-4">
                                <span>Whereas, Buyer wishes to purchase from Seller, and Seller wishes to sell Goods to Buyer according to the provisions set forth in this agreement and on no other terms, unless mutually agreed.</span>
                            </div>

                            <div className="mt-4">
                                <span>Now, therefore, in consideration of the foregoing premises, and of the mutual promises and covenants herein contained, the Parties, intending to be legally bound, agree to the following:</span>
                            </div>

                            <div className="mt-4 ml-4">
                                <div>
                                    <span><strong>1. Purchase Price and Terms: </strong>Seller agrees to sell the Goods to the Buyer at </span>
                                    <input
                                        name="amount"
                                        placeholder="AMOUNT"
                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                        value={formData.amount}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                    <span> via </span>
                                    <input
                                        name="means_of_payment"
                                        placeholder="MEANS OF PAYMENT"
                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                        value={formData.means_of_payment}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                    <span>. It is the responsibility of the Seller to set the shipping method, bear the shipping fees up to </span>
                                    <input
                                        name="cost"
                                        placeholder="COST"
                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                        value={formData.cost}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                    <span>and third Party expenses. Seller shall also provide an invoice to Buyer at the time of delivery. The Buyer is bound to pay the total invoice amount within </span>
                                    <input
                                        name="invoice_amount_days"
                                        placeholder="DAYS"
                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                        value={formData.invoice_amount_days}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                    <span> days. Any balances not paid within </span>
                                    <input
                                        name="balance_days"
                                        placeholder="DAYS"
                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                        value={formData.balance_days}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                    <span>days will be subject to </span>
                                    <input
                                        name="amount_percent"
                                        placeholder="AMOUNT"
                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                        value={formData.amount_percent}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                    <span>percent penalty per month of delinquency in payment, along with storage or inventory carrying charges if any.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>2. Taxes:</strong> The prices quoted in this agreement do not include taxes or third Party expenses. Any such additional expenses, relating to this agreement, need to be paid by the Buyer.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>3. Shipment:</strong> The Seller shall have delivered the Goods to the Buyer by </span>
                                    <input
                                        name="delivery_date"
                                        placeholder="DATE"
                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                        value={formData.delivery_date}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                    <span>. The Goods will be considered delivered once the Buyer accepts delivery at the above mentioned Buyer location.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>4. Risk of Loss and Title:</strong> In the event of risk of loss of Goods during shipment, the Seller will bear the costs and title. Once the Buyer accepts delivery, the risk of loss and title to the Goods will be passed on to the Buyer.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>5. Inspection of Goods & Rejection:</strong> Buyer has the right to inspect the Goods for any defect, quality issues, grade or any other issues, within two business days from delivery. In case the Goods are rejected within 2 business days from the date of delivery, the Seller will have two business days to fix the issue with the Goods. The Seller&apos;s failure to remedy the issue will be considered an agreement default. Further to this, the Buyer can choose to either:</span>
                                    <div className="ml-4">
                                        <ul className="ml-4 list-disc">
                                            <li>Secure a replacement</li>
                                            <li>Return the Goods and seek a refund from the Seller, along with reverse shipping costs</li>
                                            <li>Return the Goods and seek credit-note from the Seller for future purchases</li>
                                        </ul>
                                    </div>
                                    <div className="mt-4">And if the Buyer does not reject the Goods within 2 business days, from delivery of the Goods, they waive all rights to contest the matter.</div>
                                </div>
                                <div className="mt-4">
                                    <span><strong>6. Event of Delays or Defaults:</strong> Without limitation, here are the events of default and material breaches under this agreement:</span>
                                    <div className="ml-4">
                                        <ul className="ml-4 list-disc">
                                            <li>Delay or non-delivery by the Seller due to labor disputes, transportation shortage, shortage of raw materials, or any other causes outside of Seller&apos;s control. </li>
                                            <li>Buyer&apos;s failure to pay in full for the Goods received, on or before the specified date</li>
                                            <li>Seller&apos;s inability to fix any claims or disputes raised by the Buyer, within 2 days of delivery confirmation</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <span><strong>7. Remediation & Legal Fees:</strong> From the time of receiving intimation of the default or delay, the Party has two days (2) to cure the breach situation. Else, the non-breaching Party has the right to cancel the Contract and recoup losses from the breaching Party. If either Party seeks to enforce the terms in this agreement via court or binding arbitration, the prevailing Party shall recover from the other all losses, damages and costs including reasonable legal fees incurred in enforcing this agreement.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>8. Termination:</strong> Either Party can terminate this agreement at any time by sharing a written notice. All Goods accepted and delivered, up until the date of termination, will need to be paid for by the Buyer.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>9. Arbitration:</strong> The Parties acknowledge that all claims and disputes relating to this Agreement will be settled by a neutral and non-binding mediator, in case the issue is not sorted within 14 days of informal discussions from the date the dispute arises. In case the mediation fails, the issue will be presented to a neutral arbitrator whose decision will be binding on both Parties. The cost of these proceedings will be borne equally for both Parties.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>10. LIMITATION OF LIABILITY:</strong> IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR DAMAGES RESULTING FROM OR CONNECTED WITH ANY PART OF THIS AGREEMENT, SUCH AS, BUT NOT LIMITED TO, LOSS OF REVENUE OR BUSINESS, FAILURE OF DELIVERY OR EXTRA DELIVERY CHARGES - WHICH ARE NOT RELATED TO OR A DIRECT RESULT OF EITHER PARTY&apos;S NEGLIGENCE OR BREACH.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>11. Disclaimer of Warranties:</strong> The Goods are sold &apos;as is&apos;. Thus, the Seller is not liable towards the consumer for any lack of conformity or defect that is present in the delivered Goods. The Seller disclaims all warranties, whether express or implied, including any implied warranty of merchantability or fitness for a particular purpose.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>12. SEVERABILITY:</strong> IN THE EVENT ANY PROVISION OF THIS AGREEMENT IS FOUND TO BE INVALID OR UNENFORCEABLE, IN WHOLE OR IN PART, IT SHALL NOT AFFECT THE VALIDITY OF THE REST OF THE AGREEMENT. ALL OTHER PROVISIONS, WITHIN THIS CONTRACT, SHALL REMAIN IN FULL FORCE AND EFFECT, ENFORCEABLE IN THE COURT OF LAW.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>13. Waiver:</strong> Under the terms of this Agreement, if either party fails to exercise any right with respect to a breach, it will not be considered as a waiver of any subsequent exercise of that right or any other right.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>14. Governing Law:</strong> The Parties agree that this Agreement shall be interpreted in accordance with the</span>
                                    <input
                                        name="state_name"
                                        placeholder="STATE NAME"
                                        className="border-dotted border-b-2 py-1 outline-none text-center"
                                        value={formData.state_name}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                    <span>law.</span>
                                </div>
                                <div className="mt-4">
                                    <span><strong>15. Entire Agreement:</strong> Both Parties agree that this Agreement represents the entire agreement between the Parties, and supersedes all other agreements between the Parties. This agreement may not be changed orally. All changes to the terms of this agreement need to be done in writing and signed-off by both Parties.</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <span>Both Parties acknowledge that they have read the Agreement, and understood the terms, set forth above, and agrees to be bound by the terms herein:</span>
                            </div>
                            {/* Signatures */}
                            <div style={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
                                <div className="mt-8"><strong>&quot;SELLER&quot;</strong></div>
                                <div className="ml-2 mr-2" style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", width: "100%", alignItems: "flex-end", alignSelf: "stretch" }}>
                                    <div>
                                        <div>
                                            <span>Signed: </span>
                                            <input
                                                name="seller_signed"
                                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                                value={formData.seller_signed}
                                                onChange={handleInputChange}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <span>By: </span>
                                            <input
                                                name="seller_by"
                                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                                value={formData.seller_by}
                                                onChange={handleInputChange}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span>Date: </span>
                                        <input
                                            name="seller_date"
                                            className="border-dotted border-b-2 py-1 outline-none text-center"
                                            value={formData.seller_date}
                                            onChange={handleInputChange}
                                            readOnly
                                        />
                                    </div>
                                </div>

                                <div className="mt-8"><strong>&quot;BUYER&quot;</strong></div>
                                <div className="ml-2 mr-2" style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", width: "100%", alignItems: "flex-end", alignSelf: "stretch" }}>
                                    <div>
                                        <div>
                                            <span>Signed: </span>
                                            <input
                                                name="buyer_signed"
                                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                                value={formData.buyer_signed}
                                                onChange={handleInputChange}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <span>By: </span>
                                            <input
                                                name="buyer_by"
                                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                                value={formData.buyer_by}
                                                onChange={handleInputChange}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span>Date: </span>
                                        <input
                                            name="buyer_date"
                                            className="border-dotted border-b-2 py-1 outline-none text-center"
                                            value={formData.buyer_date}
                                            onChange={handleInputChange}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </DialogHeader>
            </DialogContent >
        </Dialog >
    );
}
