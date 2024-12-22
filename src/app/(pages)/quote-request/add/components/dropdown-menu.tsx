"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

// Generic Props
interface DropdownMenuCustomProps<T extends FieldValues> {
  options: string[]; // Array of options to select from
  selectedOption: string | null; // Currently selected option
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>; // Setter for selected option
  label: string; // Label for dropdown
  field: ControllerRenderProps<T>; // Generic form field
}

export default function DropdownMenuCustom<T extends FieldValues>({
  options,
  selectedOption,
  setSelectedOption,
  label,
  field,
}: DropdownMenuCustomProps<T>) {
  const buttonText = selectedOption ? selectedOption : "Select an Option";

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    field.onChange(value); // Update the form field value dynamically
  };

  return (
    <div className="w-[160px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="hover:bg-primary">
            {buttonText}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {options.map((option) => (
            <DropdownMenuCheckboxItem
              key={option}
              checked={selectedOption === option}
              onCheckedChange={() => handleSelect(option)}
            >
              {option}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
