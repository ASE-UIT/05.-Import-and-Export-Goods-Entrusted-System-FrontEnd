"use client";

import { DataTable } from "@/app/(pages)/contactrep/components/data-table";
import { columns } from "./components/columns";

import useContactRep from "@/hooks/use-contactRep";
import { useProvider } from "@/hooks/use-provider";
import { useEffect, useState } from "react";

export default function ContactRepManagement() {
  const { useListContactRep } = useContactRep();
  const [searchParams, setSearchParams] = useState<ContactRepQueryParams>({
    email: null,
    name: null,
    phone: null,
    page: 1,
    limit: 10,
    sortBy: "name",
    sortOrder: "ASC",
  });

  const { data, isPending, error } = useListContactRep(searchParams);
  const contactRepList = data?.results || [];

  const { useGetAllProvider } = useProvider()
  const { data: providers } = useGetAllProvider()

  const contactRepWithProvider = contactRepList.map((contactRep) => {
    const provider = providers?.results.find((provider) => provider.id === contactRep.provider_id);
    return {
      ...contactRep,
      provider_name: provider?.name,
    };
  });

  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    if (data?.pagination.totalPages) {
      setTotalPages(data?.pagination.totalPages);
    }
  }, [data?.pagination.totalPages]);

  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">
            ContactRep Management
          </span>
        </div>
        <DataTable
          columns={columns}
          totalPages={totalPages}
          data={contactRepWithProvider}
          isPending={isPending}
          error={error}
          queryParams={searchParams}
          setQueryParams={setSearchParams}
        />
      </div>
    </div>
  );
}
