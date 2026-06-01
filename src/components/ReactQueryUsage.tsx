import { useSuspenseQuery } from "@tanstack/react-query";

/* The fetcher function */

const fetchPosts = async () => {
  const response = await fetch("http://localhost:8000/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

//function Posts() {
export default function ReactQueryUsage() {
  // Use the useQuery hook
  const { data, isError, isLoading } = useSuspenseQuery({
    queryKey: ["posts"], // Unique key for caching
    queryFn: fetchPosts, // Function that returns a promise
  });
  console.log("data in ReactQueryUsage", data);
  // Handle Error State
  if (isError) {
    return <h2>Error: {"Error in getting data"}</h2>;
  }
  if (isLoading) {
    return <h2>Loading: {"Loading data..."}</h2>;
  }

  // Render Data
  return (
    <div className="flex flex-col min-w-150 mt-10 items-center mx-auto">
      <h1 className="text-center text-2xl font-extrabold  mb-5">
        List of Posts
      </h1>

      {data.map((post: any) => (
        <ul key={post.id} className="p-3 border-3 border-amber-200 mb-5">
          <li className="italic font-bold">{post.title}</li>
          <li>{post.book}</li>
        </ul>
      ))}
    </div>
  );
}
