import {
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Plane,
  Plus,
  Sailboat,
  Search,
  Truck,
} from "lucide-react";
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

export default function Page() {
  return (
    <div className="h-[946px] p-6 flex-col justify-start items-center gap-3 inline-flex">
      <div className="self-stretch justify-start items-center inline-flex">
        <div className="text-black text-3xl font-bold font-['Inter']">
          Shipment
        </div>
      </div>
      <div className="flex flex-row justify-between py-[28px] pl-0 pr-0 w-[1115px]">
        <div className="justify-start items-center inline-flex">
          {/* Search Input */}
          <div className="w-[147px] h-[38px] border border-neutral-300 rounded-tl-[5px] rounded-bl-[5px] flex items-center bg-white">
            <div className="px-[17px] py-[9px] flex items-center gap-[13px] w-full">
              {/* Icon Search */}
              <div className="w-5 h-5 relative">
                <Search />
              </div>
              <div className="opacity-50 text-[#202224] text-sm font-normal font-['Nunito Sans']">
                Search
              </div>
            </div>
          </div>

          {/* Dropdown - Search By */}
          <div className="flex items-center justify-start ml-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="w-[123px] h-[38px] bg-[#ece9e9] rounded-tr-[5px] rounded-br-[5px] border border-neutral-300 flex items-center justify-center cursor-pointer">
                  <div className="opacity-50 text-[#202224] text-sm font-normal font-['Nunito Sans']">
                    Search By
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>ID</DropdownMenuItem>
                <DropdownMenuItem>Price</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Button on the far right */}
        <Button className="p-2.5 bg-[#108080] rounded-[5px] justify-start items-center gap-2 flex">
          <Link href="/addShipment">
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
            <TableHead>Shipment ID</TableHead>
            <TableHead>Shipment Type</TableHead>
            <TableHead>Shipment Client</TableHead>
            <TableHead>Shipment Price</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Shipment Location</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Row 1 */}
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell className="flex gap-2">
              <Plane strokeWidth={0.75} />
              AF
            </TableCell>
            <TableCell>Anh Long</TableCell>
            <TableCell>54$</TableCell>
            <TableCell>15/05/2024</TableCell>
            <TableCell>123 Võ Văn Ngân</TableCell>
            <TableCell>
              <StatusBadge status="Document Verification"></StatusBadge>
            </TableCell>
          </TableRow>

          {/* Row 2 */}
          <TableRow>
            <TableCell>02</TableCell>
            <TableCell className="flex gap-2">
              <Plane strokeWidth={0.75} />
              AF
            </TableCell>
            <TableCell>Anh Long</TableCell>
            <TableCell>54$</TableCell>
            <TableCell>15/05/2024</TableCell>
            <TableCell>123 Võ Văn Ngân</TableCell>
            <TableCell>
              <StatusBadge status="Document Verification"></StatusBadge>
            </TableCell>
          </TableRow>
          {/* Row 3 */}
          <TableRow>
            <TableCell>03</TableCell>
            <TableCell className="flex gap-2">
              <Truck strokeWidth={0.75} />
              LF
            </TableCell>
            <TableCell>Anh Long</TableCell>
            <TableCell>21$</TableCell>
            <TableCell>15/05/2024</TableCell>
            <TableCell>123 Võ Văn Ngân</TableCell>
            <TableCell>
              <StatusBadge status="On Hold"></StatusBadge>
            </TableCell>
          </TableRow>
          {/* Row 4 */}
          <TableRow>
            <TableCell>04</TableCell>
            <TableCell className="flex gap-2">
              <Truck strokeWidth={0.75} />
              LF
            </TableCell>
            <TableCell>Anh Long</TableCell>
            <TableCell>20$</TableCell>
            <TableCell>15/05/2024</TableCell>
            <TableCell>123 Võ Văn Ngân</TableCell>
            <TableCell>
              <StatusBadge status="Loaded On Vessel"></StatusBadge>
            </TableCell>
          </TableRow>
          {/* Row 5 */}
          <TableRow>
            <TableCell>05</TableCell>
            <TableCell className="flex gap-2">
              <Sailboat strokeWidth={0.75} />
              SF
            </TableCell>
            <TableCell>Anh Long</TableCell>
            <TableCell>4$</TableCell>
            <TableCell>15/05/2024</TableCell>
            <TableCell>123 Võ Văn Ngân</TableCell>
            <TableCell>
              <StatusBadge status="Arrive At Destination Port"></StatusBadge>
            </TableCell>
          </TableRow>

          {/* Row 6 */}
          <TableRow>
            <TableCell>06</TableCell>
            <TableCell className="flex gap-2">
              <Sailboat strokeWidth={0.75} />
              SF
            </TableCell>
            <TableCell>Anh Long</TableCell>
            <TableCell>4$</TableCell>
            <TableCell>15/05/2024</TableCell>
            <TableCell>123 Võ Văn Ngân</TableCell>
            <TableCell>
              <StatusBadge status="Arrive At Destination Port"></StatusBadge>
            </TableCell>
          </TableRow>
          {/* Row 7 */}
          <TableRow>
            <TableCell>07</TableCell>
            <TableCell className="flex gap-2">
              <Sailboat strokeWidth={0.75} />
              SF
            </TableCell>
            <TableCell>Anh Long</TableCell>
            <TableCell>4$</TableCell>
            <TableCell>15/05/2024</TableCell>
            <TableCell>123 Võ Văn Ngân</TableCell>
            <TableCell>
              <StatusBadge status="Arrive At Destination Port"></StatusBadge>
            </TableCell>
          </TableRow>
          {/* Row 8 */}
          <TableRow>
            <TableCell>08</TableCell>
            <TableCell className="flex gap-2">
              <Sailboat strokeWidth={0.75} />
              SF
            </TableCell>
            <TableCell>Anh Long</TableCell>
            <TableCell>42$</TableCell>
            <TableCell>15/05/2024</TableCell>
            <TableCell>123 Võ Văn Ngân</TableCell>
            <TableCell>
              <StatusBadge status="Arrive At Destination Port"></StatusBadge>
            </TableCell>
          </TableRow>
          {/* Row 9 */}
          <TableRow>
            <TableCell>09</TableCell>
            <TableCell className="flex gap-2">
              <Sailboat strokeWidth={0.75} />
              SF
            </TableCell>
            <TableCell>Anh Long</TableCell>
            <TableCell>42$</TableCell>
            <TableCell>15/05/2024</TableCell>
            <TableCell>123 Võ Văn Ngân</TableCell>
            <TableCell>
              <StatusBadge status="Arrive At Destination Port"></StatusBadge>
            </TableCell>
          </TableRow>
          {/* Row 10 */}
          <TableRow>
            <TableCell>10</TableCell>
            <TableCell className="flex gap-2">
              <Plane strokeWidth={0.75} />
              AF
            </TableCell>
            <TableCell>Anh Long</TableCell>
            <TableCell>54$</TableCell>
            <TableCell>15/05/2024</TableCell>
            <TableCell>123 Võ Văn Ngân</TableCell>
            <TableCell>
              <StatusBadge status="Document Verification"></StatusBadge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* pagination */}
      <div className="flex justify-between items-center w-full mt-4">
        <Pagination className="justify-between">
          <div className="text-black text-xl font-medium font-['Inter']">
            Total: 1000
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
