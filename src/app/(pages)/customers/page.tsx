'use client';
'use client';

import { DataTable } from '@/app/(pages)/customers/components/data-table';
import { columns } from './components/columns';
import { DataTable } from '@/app/(pages)/customers/components/data-table';
import { columns } from './components/columns';

import useCustomer from '@/hooks/use-customer';
import { useEffect, useState } from 'react';

export default function CustomerManagementPage() {
  const { useListCustomer } = useCustomer();
  const [searchParams, setSearchParams] = useState<CustomerQueryParams>({
    email: null,
    name: null,
    phone: null,
    page: 1,
    limit: 1,
  });
  const { data, isPending, error } = useListCustomer(searchParams);
  const customerList =
    data?.results?.map((value) => ({
      id: value.id,
      name: value.name,
      short_name: value.shortName,
      email: value.email,
      phone: value.phone,
      tax_id: value.taxId,
      address: value.address,
      legal_rep_name: value.legalRep.name,
    })) ?? [];
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    if (data?.pagination.totalPages) {
      setTotalPages(data?.pagination.totalPages);
    }
  }, [data?.pagination.totalPages]);

  return (
    <div className="flex flex-col p-[24px] w-[calc(100vw-var(--sidebar-width))]">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Customer</span>
        </div>
        <DataTable
          columns={columns}
          totalPages={totalPages}
          data={customerList}
          isPending={isPending}
          error={error}
          queryParams={searchParams}
          setQueryParams={setSearchParams}
        />
      </div>
    </div>
  );
}
