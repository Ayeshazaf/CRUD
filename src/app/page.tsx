import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 sm:p-6 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-black">Welcome to BlogView</h1>
        <p className="text-gray-600 mb-6 text-center">
          Discover, create, and manage your blogs effortlessly. Start by adding a new blog or explore the latest posts.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/newblogform"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-blue-600 w-full sm:w-auto"
          >
            Add New Blog
          </Link>
          <Link
            href="/blogs"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-center font-semibold hover:bg-gray-300 w-full sm:w-auto"
          >
            View Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}