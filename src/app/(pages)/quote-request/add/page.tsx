"use client";

import QuoteRequestAddForm from "./components/add-form";

export default function QuoteRequestAddPage(){
  return (
    <div className="flex flex-col p-[28px] w-full h-[calc(100vh-60px)] flex-grow">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">Create New Quote Request</span>
        </div>
        <QuoteRequestAddForm/>
      </div>
    </div>
  );
}