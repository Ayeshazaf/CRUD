//display all blogs
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Blogs() {
  const blogs = await prisma.blogPost.findMany({});
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Explore Our Latest Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-black">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.content}</p>
            </div>
            <div className="mt-auto">
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-blue-500 font-medium hover:underline"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}