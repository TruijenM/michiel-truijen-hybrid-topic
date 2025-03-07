"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import TextareaAutosize from "react-textarea-autosize";
import {Popover, PopoverContent, PopoverTrigger} from "@radix-ui/react-popover";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import * as React from "react";
import {useState} from "react";
import {Calendar} from "@/components/ui/calendar"
import {addMemory} from "@/lib/serverUtils";


export default function AddMemoryForm() {
    const [formDate, setFormDate] = useState<Date>(new Date());
    const [open, setOpen] = useState(false)



    return (
        <Card className="w-[90vw] md:w-[70vw] lg:w-[40vw] bg-white ">
            <CardHeader>
                <CardTitle>New Memory</CardTitle>
            </CardHeader>
            <CardContent>
                <form action={addMemory}>
                    <div className="flex flex-col space-y-1.5 mb-6">
                        <Label htmlFor="date">Date</Label>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] justify-start text-left font-normal",
                                        !formDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon/>
                                    {formDate ? format(formDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    className="bg-white rounded-b-md"
                                    mode="single"
                                    selected={formDate}
                                    onSelect={(newValue) => {
                                        if (newValue) {
                                            setFormDate(newValue);
                                        }
                                        setOpen(false);
                                    }}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="grid w-full items-center gap-0.5">
                        <div className="flex flex-col space-y-1.5 mb-10">
                            <Label htmlFor="description">Text</Label>
                            <TextareaAutosize
                                className="border-2 rounded-md w-full p-2"
                                name="description"
                                id="description"
                                minRows={2}
                                required
                            />
                        </div>
                    </div>
                    <input type="hidden" name="date" value={formDate.toISOString()}/>
                    <Button formAction={addMemory}>save</Button>
                </form>

            </CardContent>
        </Card>
    )
}