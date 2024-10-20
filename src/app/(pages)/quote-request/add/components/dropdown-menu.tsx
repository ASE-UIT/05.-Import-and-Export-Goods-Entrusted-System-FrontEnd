"use client"
 
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function DropdownMenuCustom(){
    const [showContainerOption, setShowContainerOption] = React.useState<Checked>(true)
    const [showDrumOption, setShowDrumOption] = React.useState<Checked>(false)
    const [showCrateOption, setShowCrateOption] = React.useState<Checked>(false)
    return (         
            <div className="w-[160px]">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="hover:bg-primary">Package Type </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Type</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                    checked={showContainerOption}
                    onCheckedChange={setShowContainerOption}
                    >
                    Container
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                    checked={showDrumOption}
                    onCheckedChange={setShowDrumOption}
                    >
                    Drum
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                    checked={showCrateOption}
                    onCheckedChange={setShowCrateOption}
                    >
                    Crate
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
    )
}