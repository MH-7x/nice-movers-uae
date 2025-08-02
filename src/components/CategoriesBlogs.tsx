"use client";
import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "How to quickly deploy a static website",
    description:
      "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
    author: {
      name: "Michael Gouch",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    tag: "Tutorial",
    daysAgo: "12 days ago",
    link: "#",
  },
  {
    id: 2,
    title: "Our first project with React",
    description:
      "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
    author: {
      name: "Neil Sims",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    tag: "Article",
    daysAgo: "24 days ago",
    link: "#",
  },
];

const CategoriesBlogsList = () => {
  return (
    <section className="mx-auto px-4 md:px-8 py-16 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left section */}
        <div className="md:col-span-1">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Moving Tips Blogs
          </h3>
          <p className="text-gray-600">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>

        {/* Right section */}
        <div className="md:col-span-2 space-y-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border-b pb-6 flex flex-col space-y-2"
            >
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="bg-red-100 b-red font-medium px-2 py-1 rounded-md text-xs">
                  📄 {post.tag}
                </span>
                <span>{post.daysAgo}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm">{post.description}</p>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {post.author.name}
                  </span>
                </div>

                <a
                  href={post.link}
                  className="b-red text-sm font-medium hover:underline flex items-center gap-1"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesBlogsList;
