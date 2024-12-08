'use client';
'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { ICustomer } from '.';
import Link from 'next/link';

export const columns: ColumnDef<ICustomer>[] = [
  {
    accessorKey: 'name',
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: 'transparent' }}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          style={{ backgroundColor: 'transparent' }}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'short_name',
    accessorKey: 'short_name',
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: 'transparent' }}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          style={{ backgroundColor: 'transparent' }}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Short Name
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('short_name')}</div>,
    cell: ({ row }) => <div>{row.getValue('short_name')}</div>,
  },
  {
    accessorKey: 'email',
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: 'transparent' }}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          style={{ backgroundColor: 'transparent' }}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue('email'),
    cell: ({ row }) => row.getValue('email'),
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: ({ row }) => row.getValue('phone'),
    accessorKey: 'phone',
    header: 'Phone',
    cell: ({ row }) => row.getValue('phone'),
  },
  {
    accessorKey: 'tax_id',
    accessorKey: 'tax_id',
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: 'transparent' }}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          style={{ backgroundColor: 'transparent' }}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Tax ID
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue('tax_id'),
    cell: ({ row }) => row.getValue('tax_id'),
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => row.getValue('address'),
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => row.getValue('address'),
  },
  {
    accessorKey: 'legal_rep_name',
    header: 'Legal Rep Name',
    cell: ({ row }) => row.getValue('legal_rep_name'),
  },
  {
    id: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <div>
        <Link href={`/customers/update/${row.original.id}`}>
          <button className="text-blue-500">Edit</button>
        </Link>
      </div>
    ),
  },
];
