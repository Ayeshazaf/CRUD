import { prisma } from "@/lib/prisma";
import { deleteBlogPost, updateBlogPost } from "./action";

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  "use server";
  const { slug } = await params;
  const blogs = await prisma.blogPost.findMany({
    where: { slug },
  });

  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="mb-8">
          {/* Update Form */}
          <form
            action={updateBlogPost}
            className="mb-2 p-4 bg-gray-100 rounded shadow-md max-w-md mx-auto flex flex-col gap-2"
          >
            <input type="hidden" name="slug" value={blog.slug} />
            <label>
              Title:
              <input name="title" defaultValue={blog.title} className="border p-1 ml-2" />
            </label>
            <label>
              Content:
              <textarea name="content" defaultValue={blog.content} className="border p-1 ml-2" />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">Update</button>
          </form>
          {/* Delete Form */}
          <form
            action={deleteBlogPost}
            className="p-4 bg-red-100 rounded shadow-md max-w-md mx-auto flex flex-col items-center"
          >
            <input type="hidden" name="slug" value={blog.slug} />
            <button type="submit" className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}