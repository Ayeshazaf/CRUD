//display all blogs
import { prisma } from "@/lib/prisma";

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  "use server";
  const { slug } = await params;
  const blogs = await prisma.blogPost.findMany({
    where: { slug },
  });
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Read More</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-black">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.content}</p>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}