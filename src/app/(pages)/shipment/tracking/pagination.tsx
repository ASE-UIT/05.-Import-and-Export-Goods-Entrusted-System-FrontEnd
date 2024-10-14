'use client'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react"

export function PaginationUtil() {
  const [activePage, setActivePage] = useState(1);
  const totalPages= 3;
  const handleNextPage=()=>{
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  }
  const handlePreviousPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };
  const handlePageClick = (pageNumber: number) => {
    setActivePage(pageNumber);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={activePage === 1 ? (e) => e.preventDefault() : handlePreviousPage} 
          aria-disabled={activePage === 1}
          className={`pagination-previous ${activePage === 1 ? 'text-gray-500 bg-gray-300 cursor-not-allowed' : 'text-black hover:text-white'}`}
          />
        </PaginationItem>
        {[1,2,3].map((page => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={activePage === page}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        )))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={handleNextPage}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
