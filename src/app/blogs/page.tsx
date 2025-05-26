//display all blogs
import { prisma } from "@/lib/prisma";
import Link from "next/link";
export default async function Blogs() {
 const blogs = await prisma.blogPost.findMany({});
  return (
   <div>
    <h1>Blogs</h1>
   
  {blogs.map((blog) => (
    <div key={blog.id}>
      <p>{blog.title}</p>
      <p>{blog.content}</p>
      <button><Link href={`/blogs/${blog.slug}`}>View</Link></button>
    </div>
  ))}


   </div>
  );
}