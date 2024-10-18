import { CirclePlus } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/status-badge";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ServiceScreen() {
  return (
    <div className="h-[946px] p-3 flex-col justify-start items-center gap-4 inline-flex">
      <div className="self-stretch justify-start items-center inline-flex">
        <div className="text-black text-3xl font-bold font-['Inter']">
          Service
        </div>
      </div>

      <div className="flex flex-row justify-end py-[28px] pl-0 pr-0 w-[1115px]">
        {/* Button on the far right */}
        <Button className="p-2.5 bg-[#108080] rounded-[5px] justify-start items-center gap-2 flex">
          <Link href="/ServiceManagement/AddService">
            {/* Fixing the href here */}
            <div className="text-white text-sm font-normal font-['Inter'] gap-[15px] tracking-wide flex items-center">
              <CirclePlus />
              Add New
            </div>
          </Link>
        </Button>
      </div>

      {/* Table */}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service Catalog</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Short Name</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Row 1 */}
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Legal consulting and support</TableCell>
            <TableCell>L&S</TableCell>
            <TableCell>2$ </TableCell>
            <TableCell>
              <Link
                href="/ServiceManagement/EditService"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </Link>
            </TableCell>
          </TableRow>

          {/* Row 2 */}
          <TableRow>
            <TableCell>02</TableCell>
            <TableCell>Customs procedures</TableCell>
            <TableCell>L&S</TableCell>
            <TableCell>2$ </TableCell>
            <TableCell>
              <Link
                href="/ServiceManagement/EditService"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </Link>
            </TableCell>
          </TableRow>

          {/* Row 3 */}
          <TableRow>
            <TableCell>03</TableCell>
            <TableCell>Transportation and delivery services</TableCell>
            <TableCell>L&S</TableCell>
            <TableCell>2$ </TableCell>
            <TableCell>
              <Link
                href="/ServiceManagement/EditService"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </Link>
            </TableCell>
          </TableRow>

          {/* Row 4 */}
          <TableRow>
            <TableCell>04</TableCell>
            <TableCell>Warehouse management</TableCell>
            <TableCell>L&S</TableCell>
            <TableCell>2$ </TableCell>
            <TableCell>
              <Link
                href="/ServiceManagement/EditService"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </Link>
            </TableCell>
          </TableRow>

          {/* Row 5 */}
          <TableRow>
            <TableCell>05</TableCell>
            <TableCell>Provision of related documents</TableCell>
            <TableCell>L&S</TableCell>
            <TableCell>2$ </TableCell>
            <TableCell>
              <Link
                href="/ServiceManagement/EditService"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </Link>
            </TableCell>
          </TableRow>

          {/* Row 6 */}
          <TableRow>
            <TableCell>06</TableCell>
            <TableCell>International payment services</TableCell>
            <TableCell>L&S</TableCell>
            <TableCell>2$ </TableCell>
            <TableCell>
              <Link
                href="/ServiceManagement/EditService"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* pagination */}
      <div className="flex justify-between items-center w-full mt-4">
        <Pagination className="justify-between">
          <div className="text-black text-xl font-medium font-['Inter']">
            Total: 5
          </div>

          <PaginationContent>
            <PaginationPrevious />
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
            <PaginationNext />
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
