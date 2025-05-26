import Link from "next/link";
export default function Home() {
  return (
   <div>
     <h1>First Page</h1>
      <p>Welcome to the first page of our application!</p>
      <button><Link href="/newblogform">Add New Blog</Link></button>
      <button><Link href="/blogs">View Blog</Link></button>
   </div>
  );
}
