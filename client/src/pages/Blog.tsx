// import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: string;
}

const Blog = () => {
  //   const [posts, setPosts] = useState([]);

  const posts: Post[] = [
    {
      id: 1,
      title: "Coming Soon...",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: "college",
    },
    // Add more posts as needed
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.category}</p>
              <a
                href={`/blog/${post.href}`}
                className="text-primary hover:underline"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
