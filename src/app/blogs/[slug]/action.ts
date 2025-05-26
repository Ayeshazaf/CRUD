"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteBlogPost(formData: FormData) {
  const slug = formData.get("slug") as string;
  await prisma.blogPost.delete({ where: { slug } });
  revalidatePath("/blogs");
}

export async function updateBlogPost(formData: FormData) {
  const slug = formData.get("slug") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  await prisma.blogPost.update({
    where: { slug },
    data: { title, content },
  });
  revalidatePath("/blogs");
}