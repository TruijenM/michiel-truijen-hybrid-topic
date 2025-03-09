"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import * as React from "react";
import Tiptap from "@/components/Tiptap";


export default function TipTapDemo() {

    return (
        <Card className="w-[90vw] md:w-[70vw] lg:w-[40vw] bg-white ">
            <CardHeader>
                <CardTitle>TipTap test</CardTitle>
            </CardHeader>
            <CardContent>
                    <Tiptap/>
            </CardContent>
        </Card>
    )
}