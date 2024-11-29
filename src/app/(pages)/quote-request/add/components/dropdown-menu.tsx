"use client"
 
import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ControllerRenderProps } from "react-hook-form"

 interface DropdownMenuCustomProps {
  selectedOption: string | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
  field: ControllerRenderProps<{
    length: string;
    requestDate: string;
    customerId: string;
    origin: string;
    destination: string;
    shipmentReadyDate: string;
    shipmentDeadline: string;
    cargoInsurance: boolean;
    packageType: string;
    weight: string;
    width: string;
    height: string;
}, "packageType">;  
}

export default function DropdownMenuCustom({ selectedOption, setSelectedOption, field }: DropdownMenuCustomProps){
    const buttonText = selectedOption ? selectedOption : "Select Type";
    const handleSelect = (value: string) => {
            setSelectedOption(value);
            field.onChange(value);  // Update the form field value
  };
    return (         
            <div className="w-[160px]">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="hover:bg-primary">{buttonText}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Type</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                    checked={selectedOption === "DRY"}
                    onCheckedChange={() => handleSelect("DRY")}
                    >
                    DRY
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                    checked={selectedOption === "SEA"}
                    onCheckedChange={() => handleSelect("SEA")}
                    >
                    SEA
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                    checked={selectedOption === "FREEZE"}
                    onCheckedChange={() => handleSelect("FREEZE")}
                    >
                    FREEZE
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
    )
}