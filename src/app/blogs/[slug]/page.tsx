import { prisma } from "@/lib/prisma";
import { deleteBlogPost, updateBlogPost } from "./action";
import Link from "next/link";

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  "use server";
  const { slug } = await params;
  const blogs = await prisma.blogPost.findMany({
    where: { slug },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Blog</h1>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="mb-8 w-full max-w-lg bg-white shadow-md rounded-lg p-6"
        >
          {/* Update Form */}
          <form
            action={updateBlogPost}
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="slug" value={blog.slug} />
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1">Title</span>
              <input
                name="title"
                defaultValue={blog.title}
                className="border border-gray-300 rounded-lg p-2"
                placeholder="Enter title"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1">Content</span>
              <textarea
                name="content"
                defaultValue={blog.content}
                className="border border-gray-300 rounded-lg p-2"
                placeholder="Enter content"
              />
            </label>
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
              >
                Update
              </button>
              <Link
                href="/blogs"
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 text-center w-full sm:w-auto"
              >
                Back to Blogs
              </Link>
            </div>
          </form>
          {/* Delete Form */}
          <form
            action={deleteBlogPost}
            className="mt-4"
          >
            <input type="hidden" name="slug" value={blog.slug} />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-auto"
            >
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}