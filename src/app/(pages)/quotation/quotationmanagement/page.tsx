import { CirclePlus, Search } from 'lucide-react';
import React from 'react';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'; 
import {Table, TableHeader, TableBody, TableRow, TableHead, TableCell} from '@/components/ui/table'
import {Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis} from '@/components/ui/pagination'
import StatusBadge from '@/components/status-badge';

export default function Page() {
  return (
    <div className="h-[959px] p-4 flex-col justify-start items-start gap-5 inline-flex">
    <div className="justify-start items-start gap-2.5 inline-flex">
        <div className="text-black text-3xl font-bold font-['Inter']">Quotation List</div>
    </div>
     {/* Search - Button */}
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
                <DropdownMenuItem>Quote RequestID</DropdownMenuItem>
                <DropdownMenuItem>Employee ID</DropdownMenuItem>
                <DropdownMenuItem>Total Price</DropdownMenuItem>
                <DropdownMenuItem>Pickup Date</DropdownMenuItem>
                <DropdownMenuItem>Delivery Date</DropdownMenuItem>
                <DropdownMenuItem>Quotation Date</DropdownMenuItem>
                <DropdownMenuItem>Expired Date</DropdownMenuItem>
                <DropdownMenuItem>Status</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Button on the far right */}
        <Button className="p-2.5 bg-[#108080] rounded-[5px] justify-start items-center gap-2 flex">
          <Link href="/quotation/addquotation"> {/*the link*/}
            <div className="text-white text-sm font-normal font-['Inter'] gap-[15px] tracking-wide flex items-center">
              <CirclePlus />
              Add Quotation
            </div>
          </Link>
        </Button>
      </div>
      <Table className="min-w-full">
            {/* Heading */}
            <TableHeader>
                <TableRow>
                <TableHead>Quote Request ID</TableHead>
                <TableHead>Employee ID</TableHead>
                <TableHead>Total Price</TableHead>
                <TableHead>Pickup Date</TableHead>
                <TableHead>Delivery Date</TableHead>
                <TableHead>Quotation Date</TableHead>
                <TableHead>Expired Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {/* Row 1 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>01</TableCell>
                <TableCell>$75,000</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell><StatusBadge status="Active" /></TableCell>
                <TableCell>
                <Link href={"/quotation/updatequotation"}>                    
                <button className="text-blue-500">Edit</button>
                </Link>               
                </TableCell>
                </TableRow>
               {/* Row 2 */}
               <TableRow>
                <TableCell>01</TableCell>
                <TableCell>01</TableCell>
                <TableCell>$75,000</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell><StatusBadge status="Active" /></TableCell>
                <TableCell>
                <Link href={"/quotation/updatequotation"}>                    
                <button className="text-blue-500">Edit</button>
                </Link> 
                </TableCell>
                </TableRow>
                {/* Row 3 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>01</TableCell>
                <TableCell>$75,000</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell><StatusBadge status="Active" /></TableCell>
                <TableCell>
               <Link href={"/quotation/updatequotation"}>                    
                <button className="text-blue-500">Edit</button>
                </Link>
                </TableCell>
                </TableRow>
                {/* Row 4 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>01</TableCell>
                <TableCell>$75,000</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell><StatusBadge status="Active" /></TableCell>
                <TableCell>
                <Link href={"/quotation/updatequotation"}>                    
                <button className="text-blue-500">Edit</button>
                </Link> 
                </TableCell>
                </TableRow>
                {/* Row 5 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>01</TableCell>
                <TableCell>$75,000</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell><StatusBadge status="Active" /></TableCell>
                <TableCell>
                <Link href={"/quotation/updatequotation"}>                    
                <button className="text-blue-500">Edit</button>
                </Link>
                </TableCell>
                </TableRow>
                {/* Row 6 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>01</TableCell>
                <TableCell>$75,000</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell><StatusBadge status="Active" /></TableCell>
                <TableCell>
                <Link href={"/quotation/updatequotation"}>                    
                <button className="text-blue-500">Edit</button>
                </Link>
                </TableCell>
                </TableRow>
                {/* Row 7 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>01</TableCell>
                <TableCell>$75,000</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell>15-02-2024</TableCell>
                <TableCell><StatusBadge status="Active" /></TableCell>
                <TableCell>
                <Link href={"/quotation/updatequotation"}>                    
                <button className="text-blue-500">Edit</button>
                </Link> 
                </TableCell>
                </TableRow>
            </TableBody>
        </Table>
         {/* Pagination */}
         <div className="flex justify-end items-end w-full mt-4">
            <Pagination className="justify-end">
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