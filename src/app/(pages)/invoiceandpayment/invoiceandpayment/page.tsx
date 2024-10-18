import { CirclePlus, Search } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import StatusBadge from '@/components/status-badge'
import {Table, TableHeader, TableBody, TableRow, TableHead, TableCell} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'; 
import {Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis} from '@/components/ui/pagination';

export default function invoiceandpayment() {
  return (
    <div className="h-[946px] w-[1115px] p-7 flex-col justify-start items-center gap-5 inline-flex">
      <div className="self-stretch justify-start items-center inline-flex">
        <div className="text-black text-3xl font-bold font-['Inter']">Payment</div>
      </div>

      <div className="h-[38px] w-full flex justify-between items-center">
        <div className="text-black text-2xl font-normal font-['Inter'] tracking-wide">Total debt: 1000</div>
        <div className="flex items-center gap-2">
        <Button className="px-8 border border-black bg-white text-black rounded-[5px] text-sm font-normal tracking-wide">
            <Link href={"/invoiceandpayment/viewpaymenthistory"}>View History</Link>
        </Button>

        <Button className="px-3 bg-[#108080] inline-flex rounded-[5px] justify-center items-center gap-[5px]">
    <Link href={"/invoiceandpayment/addinvoice"} className="flex items-center gap-[5px]">
        <CirclePlus />
        <div className="text-white text-base font-normal font-['Inter'] tracking-wide">Add Invoice</div>
    </Link>
</Button>


        </div>
      </div>


      
        <Table className="min-w-full">
            <TableHeader>
                <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Amount Paid</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Create At</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {/* Row 1 */}
                <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>01</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>                    
                    <StatusBadge status="Pending" />
                </TableCell>
                <TableCell>17/10/2024</TableCell>
                </TableRow>
                {/* Row 2 */}
                <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>01</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>                    
                    <StatusBadge status="Completed" />
                </TableCell>
                <TableCell>17/10/2024</TableCell>
                </TableRow>
                {/* Row 3 */}
                <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>01</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>                    
                    <StatusBadge status="Cancelled" />
                </TableCell>
                <TableCell>17/10/2024</TableCell>
                </TableRow>
                {/* Row 4 */}
                <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>01</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>                    
                    <StatusBadge status="Failed" />
                </TableCell>
                <TableCell>17/10/2024</TableCell>
                </TableRow>
                {/* Row 5 */}
                <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>01</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>                    
                    <StatusBadge status="On Hold" />
                </TableCell>
                <TableCell>17/10/2024</TableCell>
                </TableRow>
                {/* Row 6 */}
                <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>01</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>                    
                    <StatusBadge status="Pending" />
                </TableCell>
                <TableCell>17/10/2024</TableCell>
                </TableRow>
                {/* Row 7 */}
                <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>01</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>                    
                    <StatusBadge status="Pending" />
                </TableCell>
                <TableCell>17/10/2024</TableCell>
                </TableRow>
                {/* Row 8 */}
                <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>01</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>                    
                    <StatusBadge status="Pending" />
                </TableCell>
                <TableCell>17/10/2024</TableCell>
                </TableRow>
                {/* Row 9 */}
                <TableRow>
                <TableCell><Checkbox /></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>01</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>                    
                    <StatusBadge status="Pending" />
                </TableCell>
                <TableCell>17/10/2024</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <div className="flex justify-between items-center w-full mt-4">
            <Pagination className="justify-between">
            <div className="text-black text-xl font-medium font-['Inter']">Total: 1000</div>

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
