import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

type Props = {
    field: any;
    placeholder?: string;
};

export const DatePicker = ({ field, placeholder }: Props) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button className="ml-2 flex gap-x-1 w-52 items-center border-dotted border-b-2 py-1 outline-none text-center ">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    {field.value ? (
                        format(field.value, "dd/MM/yyyy")
                    ) : (
                        <span className="text-muted-foreground">
                            {placeholder}
                        </span>
                    )}
                </button>
            </PopoverTrigger>
            <PopoverContent
                className="w-auto p-0 bg-white rounded-md border"
                align="start"
            >
                <Calendar
                    mode="single"
                    selected={new Date(field.value)}
                    onSelect={field.onChange}
                />
            </PopoverContent>
        </Popover>
    );
};
