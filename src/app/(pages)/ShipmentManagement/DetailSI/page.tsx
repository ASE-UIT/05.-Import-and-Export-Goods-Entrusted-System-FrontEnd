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

export default function ShipmentDetailSI() {
  return (
    <div className="h-[946px] p-6 flex-col justify-start items-center gap-4 inline-flex">
      <div className="self-stretch justify-start items-center inline-flex">
        <div className="text-black text-3xl font-bold ">Shipment Detail</div>
      </div>
      <div className="self-stretch justify-start items-center inline-flex">
        <div className="text-black text-xl font-medium pr-2">
          Shipment Type{" "}
        </div>
        <div className="h-[52px] bg-white/0 justify-start items-start inline-flex border border-[#B9B9B980]">
          <div className="grow shrink basis-0 self-stretch px-2.5 bg-white/0 justify-center items-center flex">
            <div className="justify-center items-center gap-5 flex">
              <div className="h-6 justify-start items-start gap-2.5 flex">
                <div className="w-4 h-6 p-[0.86px] justify-center items-center flex">
                  <div className="w-[22.29px] h-[22.29px] relative"></div>
                </div>
                <div className="text-black text-base font-light font-['Poppins'] tracking-wide flex gap-4">
                  <Sailboat strokeWidth={0.75} />
                  SF
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch bg-[#b9b9b9]/50 flex-col justify-start items-center inline-flex">
            <div className="self-stretch h-[52px] p-4 justify-start items-start inline-flex">
              <div className="text-[#202224] text-base font-semibold leading-tight">
                Import
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between py-[28px] pl-0 pr-0 w-[1115px]">
        <div className="justify-start items-center inline-flex">
          <div className="w-[272px] h-[29px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-2xl font-bold">
              Compulsory Document{" "}
            </div>
          </div>
        </div>

        {/* Button on the far right */}
        <Button className="p-2.5 bg-[#108080] rounded-[5px] justify-start items-center gap-2 flex">
          <Link href="/ShipmentManagement/Compulsory/AddSI">
            {/* Fixing the href here */}
            <div className="text-white text-sm font-normal gap-[15px] tracking-wide flex items-center">
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
            <TableHead>Document Type</TableHead>
            <TableHead>Document Number</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Create at</TableHead>
            <TableHead>Update at</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Row 1 */}
          <TableRow>
            <TableCell>Sale Contract</TableCell>
            <TableCell>124</TableCell>
            <TableCell>
              <a
                href="link-to-your-image.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Image
              </a>
            </TableCell>
            <TableCell>12/05/2024 - 12h30p28s </TableCell>
            <TableCell>19/05/2024 - 12h30p28s</TableCell>
            <TableCell>
              <StatusBadge status="Active"></StatusBadge>
            </TableCell>
            <TableCell>
              <a
                className="text-blue-500"
                href="link-to-your-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </a>
            </TableCell>
          </TableRow>

          {/* Row 2 */}
          <TableRow>
            <TableCell>Commercial Invoice</TableCell>
            <TableCell>124</TableCell>
            <TableCell>
              <a
                href="link-to-your-image.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Image
              </a>
            </TableCell>
            <TableCell>12/05/2024 - 12h30p28s </TableCell>
            <TableCell>19/05/2024 - 12h30p28s</TableCell>
            <TableCell>
              <StatusBadge status="Inactive"></StatusBadge>
            </TableCell>
            <TableCell>
              <a
                className="text-blue-500"
                href="link-to-your-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </a>
            </TableCell>
          </TableRow>

          {/* Row 3 */}
          <TableRow>
            <TableCell>Bill of Landing</TableCell>
            <TableCell>124</TableCell>
            <TableCell>
              <a
                href="link-to-your-image.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Image
              </a>
            </TableCell>
            <TableCell>12/05/2024 - 12h30p28s </TableCell>
            <TableCell>19/05/2024 - 12h30p28s</TableCell>
            <TableCell>
              <StatusBadge status="Active"></StatusBadge>
            </TableCell>
            <TableCell>
              <a
                className="text-blue-500"
                href="link-to-your-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </a>
            </TableCell>
          </TableRow>

          {/* Row 4 */}
          <TableRow>
            <TableCell>Packing List</TableCell>
            <TableCell>124</TableCell>
            <TableCell>
              <a
                href="link-to-your-image.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Image
              </a>
            </TableCell>
            <TableCell>12/05/2024 - 12h30p28s </TableCell>
            <TableCell>19/05/2024 - 12h30p28s</TableCell>
            <TableCell>
              <StatusBadge status="Inactive"></StatusBadge>
            </TableCell>
            <TableCell>
              <a
                className="text-blue-500"
                href="link-to-your-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </a>
            </TableCell>
          </TableRow>

          {/* Row 5 */}
          <TableRow>
            <TableCell>Customs Declairation</TableCell>
            <TableCell>124</TableCell>
            <TableCell>
              <a
                href="link-to-your-image.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Image
              </a>
            </TableCell>
            <TableCell>12/05/2024 - 12h30p28s </TableCell>
            <TableCell>19/05/2024 - 12h30p28s</TableCell>
            <TableCell>
              <StatusBadge status="Active"></StatusBadge>
            </TableCell>
            <TableCell>
              <a
                className="text-blue-500"
                href="link-to-your-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="flex flex-row justify-between py-[28px] pl-0 pr-0 w-[1115px]">
        <div className="justify-start items-center inline-flex">
          <div className="w-[272px] h-[29px] justify-start items-center gap-2.5 inline-flex">
            <div className="text-black text-2xl font-bold">
              Optional Document{" "}
            </div>
          </div>
        </div>

        {/* Button on the far right */}
        <Button className="p-2.5 bg-[#108080] rounded-[5px] justify-start items-center gap-2 flex">
          <Link href="/ShipmentManagement/Optional/AddSI">
            {/* Fixing the href here */}
            <div className="text-white text-sm font-normal gap-[15px] tracking-wide flex items-center">
              <CirclePlus />
              Add New
            </div>
          </Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Document Type</TableHead>
            <TableHead>Document Number</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Create at</TableHead>
            <TableHead>Update at</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Row 1 */}
          <TableRow>
            <TableCell>Sale Contract</TableCell>
            <TableCell>124</TableCell>
            <TableCell>
              <a
                href="link-to-your-image.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Image
              </a>
            </TableCell>
            <TableCell>12/05/2024 - 12h30p28s </TableCell>
            <TableCell>19/05/2024 - 12h30p28s</TableCell>
            <TableCell>
              <StatusBadge status="Active"></StatusBadge>
            </TableCell>
            <TableCell>
              <a
                className="text-blue-500"
                href="link-to-your-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
