"use server"

import {db} from "@/db/client";
import {memories} from "@/db/schema/schema";

export async function addMemory(formData: FormData) {
    "use server";
    console.log("Adding memory");
    const date = formData.get("date") as string | null;
    console.log(formData);
    const description = formData.get("description");
    if (!date || !description) {
        console.log("Error adding memory: missing date or description");
    } else {
        await db.insert(memories).values({
            date: new Date(date),
            description: description.toString(),
        });
    }
}