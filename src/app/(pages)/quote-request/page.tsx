"use client";
import { columns } from "./components/columns";
import { DataTable } from "./components/table";
import useQuoteRequest from "@/hooks/use-quote-request";
import mapToQuoteRequest from "@/schema/quote-request.schema";

export default function QuoteRequestManagementPage() {
  const { data, isLoading, error } = useQuoteRequest.useGetQuoteRequest();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading quote requests: {error.message}</div>;
  }
  console.log(data);
  const transformedData = data ? mapToQuoteRequest(data) : [];
  return (
    <div className="flex flex-col p-[28px] w-full h-[calc(100vh-60px)] flex-grow">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Quote Request Management</span>
        </div>
        <DataTable columns={columns} data={transformedData} />
      </div>
    </div>
  );
}
