"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createNewBlogPost(data: FormData) {
    await prisma.blogPost.create({
        data: {
            title: data.get("title")?.toString() || "",
            content: data.get("content")?.toString() || "",
            slug: data.get("title")?.toString().toLowerCase().replace(/\s+/g, "-") || "",
        },
    });
      revalidatePath("/blogs");
}