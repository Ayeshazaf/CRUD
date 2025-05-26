import { createNewBlogPost } from "./actions";
import Link from "next/link";
export default function NewBlogForm() {
  return (
   <div>
     <form action={createNewBlogPost} className="text-center p-4 bg-gray-100 rounded shadow-md max-w-md mx-auto">
      <h2>Add New Blog</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" required></textarea>
      </div>
      <button type="submit">Submit</button>
      <button><Link href="/blogs">View Blogs</Link></button>
     </form>

   </div>
  );
}