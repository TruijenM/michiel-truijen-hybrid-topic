"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Label} from "@/src/components/ui/label";
import {Button} from "@/src/components/ui/button";
import TextareaAutosize from "react-textarea-autosize";
import {Popover, PopoverContent, PopoverTrigger} from "@radix-ui/react-popover";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import * as React from "react";
import {useState} from "react";
import {Calendar} from "@/components/ui/calendar"

export default function AddMemoryForm() {
    const [date, setDate] = useState<Date|undefined>(new Date());
    const [open, setOpen] = useState(false)

    return (
        <Card className="w-[90vw] md:w-[70vw] lg:w-[40vw] bg-white ">
            <CardHeader>
                <CardTitle>New Memory</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col space-y-1.5 mb-6">
                        <Label htmlFor="date">Date</Label>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon/>
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    className="bg-white rounded-b-md"
                                    id="date"
                                    mode="single"
                                    selected={date}
                                    onSelect={(newValue) => {
                                        setDate(newValue);
                                        setOpen(false);
                                    }}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="grid w-full items-center gap-0.5">
                        <div className="flex flex-col space-y-1.5 mb-10">
                            <Label htmlFor="name">Text</Label>
                            <TextareaAutosize className="border-2 rounded-l max-w-full" minRows={2}/>
                        </div>
                    </div>
                <Button onClick={(e)=>{
                    e.preventDefault()}}>save</Button>
                </form>

            </CardContent>
        </Card>
    )
}