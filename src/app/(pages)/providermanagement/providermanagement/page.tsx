import { CirclePlus, Search } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import StatusBadge from '@/components/status-badge'
import {Table, TableHeader, TableBody, TableRow, TableHead, TableCell} from '@/components/ui/table'
import {Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis} from '@/components/ui/pagination'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'; 

export default function providermanagement(){
    return (
        <div className="h-[946px] p-6 flex-col justify-start items-center gap-5 inline-flex">
      <div className="self-stretch justify-start items-center inline-flex">
        <div className="text-black text-3xl font-bold font-['Inter']">Provider Management</div>
      </div>
      <div className="self-stretch h-10 flex-col justify-start items-start flex">
        <div className="px-[5px] py-1 bg-white rounded-md border border-slate-300 justify-start items-center inline-flex">
          <div className="px-3 py-1.5 bg-slate-100 justify-start items-start flex">
            <div className="text-black text-sm font-medium font-['Inter'] leading-tight">Provider</div>
          </div>
          <div className="px-3 py-1.5 bg-white rounded justify-start items-start flex">
            <div className="text-black text-sm font-medium font-['Inter'] leading-tight"><Link href={"/providermanagement/contactrepmanagement"}>ContactRep</Link></div>
          </div>
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
                <DropdownMenuItem>Name</DropdownMenuItem>
                <DropdownMenuItem>ContactRep</DropdownMenuItem>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Phone</DropdownMenuItem>
                <DropdownMenuItem>Country</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Button*/}
        <Button className="p-2.5 bg-[#108080] rounded-[5px] justify-start items-center gap-2 flex">
          <Link href="/providermanagement/addprovider">
            <div className="text-white text-sm font-normal font-['Inter'] gap-[15px] tracking-wide flex items-center">
              <CirclePlus />
              Add ContactRep
            </div>
          </Link>
        </Button>
      </div>
        <Table className="min-w-full">
            <TableHeader>
                <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>ContactRep</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {/* Row 1 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>123 Thu Duc</TableCell>
                <TableCell>VN</TableCell>
                <TableCell>
                    <StatusBadge status="Active" />
                </TableCell>
                <TableCell>
                <Link href={"/providermanagement/updateprovider"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 2 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>123 Thu Duc</TableCell>
                <TableCell>VN</TableCell>
                <TableCell>
                    <StatusBadge status="Active" />
                </TableCell>                
                <TableCell>
                <Link href={"/providermanagement/updateprovider"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 3 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>123 Thu Duc</TableCell>
                <TableCell>VN</TableCell>
                <TableCell>
                    <StatusBadge status="Active" />
                </TableCell>                
                <TableCell>
                <Link href={"/providermanagement/updateprovider"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 4 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>123 Thu Duc</TableCell>
                <TableCell>VN</TableCell>
                <TableCell>
                    <StatusBadge status="Active" />
                </TableCell>                
                <TableCell>
                <Link href={"/providermanagement/updateprovider"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 1 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>123 Thu Duc</TableCell>
                <TableCell>VN</TableCell>
                <TableCell>
                    <StatusBadge status="Active" />
                </TableCell>                
                <TableCell>
                <Link href={"/providermanagement/updateprovider"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 5 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>123 Thu Duc</TableCell>
                <TableCell>VN</TableCell>
                <TableCell>
                    <StatusBadge status="Active" />
                </TableCell>                
                <TableCell>
                <Link href={"/providermanagement/updateprovider"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 6 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>123 Thu Duc</TableCell>
                <TableCell>VN</TableCell>
                <TableCell>
                    <StatusBadge status="Active" />
                </TableCell>                
                <TableCell>
                    <Link href={"/providermanagement/updateprovider"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 7 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>123 Thu Duc</TableCell>
                <TableCell>VN</TableCell>
                <TableCell>
                    <StatusBadge status="Active" />
                </TableCell>                
                <TableCell>
                <Link href={"/providermanagement/updateprovider"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
                {/* Row 8 */}
                <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>provider@gmail.com</TableCell>
                <TableCell>0123456789</TableCell>
                <TableCell>123 Thu Duc</TableCell>
                <TableCell>VN</TableCell>
                <TableCell>
                    <StatusBadge status="Active" />
                </TableCell>                
                <TableCell>
                <Link href={"/providermanagement/updateprovider"}><button className="text-blue-500">Update</button></Link>
                </TableCell>
                </TableRow>
            </TableBody>
        </Table>
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
    )
}