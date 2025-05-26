import { createNewBlogPost } from "./actions";
import Link from "next/link";

export default function NewBlogForm() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 sm:p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Blog</h2>
      <form
        action={createNewBlogPost}
        className="flex flex-col gap-4 bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="text-md font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="border border-gray-300 rounded-lg p-2"
            placeholder="Enter title"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="text-md font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            required
            className="border border-gray-300 rounded-lg p-2"
            placeholder="Enter content"
          ></textarea>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
          >
            Submit
          </button>
          <Link
            href="/blogs"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 text-center w-full sm:w-auto"
          >
            View Blog
          </Link>
        </div>
      </form>
    </div>
  );
}