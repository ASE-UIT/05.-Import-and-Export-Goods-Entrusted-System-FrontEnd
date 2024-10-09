import { columns } from "./columns";
import { DataTable } from "../../components/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      invoice_id: 123,
      amount_paid: 100.2,
      status: "Completed",
      created_at: new Date("2024-10-09T12:34:56Z").toDateString(),
    },
    {
      invoice_id: 123,
      amount_paid: 100.2,
      status: "Completed",
      created_at: new Date("2024-10-09T12:34:56Z").toDateString(),
    },
    {
      invoice_id: 123,
      amount_paid: 100.2,
      status: "Cancelled",
      created_at: new Date("2024-10-09T12:34:56Z").toDateString(),
    },
    {
      invoice_id: 123,
      amount_paid: 100.2,
      status: "Failed",
      created_at: new Date("2024-10-09T12:34:56Z").toDateString(),
    },
    {
      invoice_id: 123,
      amount_paid: 100.2,
      status: "Draft",
      created_at: new Date("2024-10-09T12:34:56Z").toDateString(),
    },
    {
      invoice_id: 123,
      amount_paid: 100.2,
      status: "Booked",
      created_at: new Date("2024-10-09T12:34:56Z").toDateString(),
    },
    {
      invoice_id: 123,
      amount_paid: 100.2,
      status: "Pending",
      created_at: new Date("2024-10-09T12:34:56Z").toDateString(),
    },
    {
      invoice_id: 123,
      amount_paid: 100.2,
      status: "Pending",
      created_at: new Date("2024-10-09T12:34:56Z").toDateString(),
    },

    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
