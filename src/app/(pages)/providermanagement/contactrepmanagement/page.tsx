import { CirclePlus, Search } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {Table, TableHeader, TableBody, TableRow, TableHead, TableCell} from '@/components/ui/table'
import {Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis} from '@/components/ui/pagination'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'; 


export default function contactrepmanagement() {
  return (
    <div className="h-[946px] p-6 flex-col justify-start items-center gap-5 inline-flex">
        {/* Tiêu đề */}
      <div className="self-stretch justify-start items-center inline-flex">
        <div className="text-black text-3xl font-bold font-['Inter']">ContactRep Management</div>
      </div>
      {/* ContactRep */}
      <div className="self-stretch h-10 flex-col justify-start items-start flex">
        <div className="px-[5px] py-1 bg-white rounded-md border border-slate-300 justify-start items-center inline-flex">
          <div className="px-3 py-1.5 bg-white justify-start items-start flex">
            <div className="text-black text-sm font-medium font-['Inter'] leading-tight"><Link href={"/providermanagement/providermanagement"}>Provider</Link></div>
          </div>
          <div className="px-3 py-1.5 bg-slate-100 rounded justify-start items-start flex">
            <div className="text-black text-sm font-medium font-['Inter'] leading-tight">ContactRep</div>
          </div>
        </div>
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
                <DropdownMenuItem>ID</DropdownMenuItem>
                <DropdownMenuItem>Name</DropdownMenuItem>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Phone</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Button*/}
        <Button className="p-2.5 bg-[#108080] rounded-[5px] justify-start items-center gap-2 flex">
          <Link href="/providermanagement/addcontactrep">
            <div className="text-white text-sm font-normal font-['Inter'] gap-[15px] tracking-wide flex items-center">
              <CirclePlus />
              Add ContactRep
            </div>
          </Link>
        </Button>
      </div>
        <Table className="min-w-full">
            {/* Heading */}
            <TableHeader>
                <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {/* Row 1 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>
                <Link href={"/providermanagement/updatecontactrep"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 2 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>
                <Link href={"/providermanagement/updatecontactrep"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 3 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>
                <Link href={"/providermanagement/updatecontactrep"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 4 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>
                <Link href={"/providermanagement/updatecontactrep"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 1 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>
                <Link href={"/providermanagement/updatecontactrep"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 5 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>
                <Link href={"/providermanagement/updatecontactrep"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 6 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>
                <Link href={"/providermanagement/updatecontactrep"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 7 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>
                <Link href={"/providermanagement/updatecontactrep"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 8 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>
                <Link href={"/providermanagement/updatecontactrep"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        {/* Pagination */}
        <div className="flex justify-end items-end w-full mt-4">
            <Pagination className="justify-end">
                <PaginationContent>
                <PaginationPrevious size={undefined} />
                <PaginationItem>
                    <PaginationLink href="#" isActive size={undefined}>
                    1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" size={undefined}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" size={undefined}>3</PaginationLink>
                </PaginationItem>
                <PaginationEllipsis />
                <PaginationNext size={undefined} />
                </PaginationContent>
            </Pagination>
</div>

    </div>
  );
}