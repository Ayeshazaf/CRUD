import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/items
export async function GET() {
  const items = await prisma.blogPost.findMany();
  return NextResponse.json(items);
}

// POST /api/items
export async function POST(request: Request) {
  const data = await request.json();
  const item = await prisma.blogPost.create({ data });
  return NextResponse.json(item, { status: 201 });
}