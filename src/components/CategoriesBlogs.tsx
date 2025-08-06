"use client";
import React from "react";
import { Blog } from "../../types/Blogs";
import Link from "next/link";
import { Button } from "./ui/button";

const CategoriesBlogsList = ({
  blogPosts,
  category,
}: {
  blogPosts: Blog[];
  category: string;
}) => {
  return (
    <section className="mx-auto px-4 md:px-8 py-16 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left section */}
        <div className="md:col-span-1 bg-white h-max py-5 px-3 rounded-2xl">
          <h3 className="md:text-2xl text-2xl capitalize font-bold mb-4 b-text">
            {category} Blogs
          </h3>
          <p className="text-gray-600">view all our {category} blog posts</p>
          <Link href={`/category/${category.split(" ").join("-")}`}>
            <Button size={"sm"} variant={"link"} className="mt-4 b-red">
              View All
            </Button>
          </Link>
        </div>

        {/* Right section */}
        <div className="md:col-span-2 space-y-10">
          {blogPosts.map((post) => (
            <div
              key={post._id}
              className="border-b pb-6 flex flex-col space-y-2"
            >
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="bg-red-100 b-red font-medium px-2 py-1 rounded-md text-xs">
                  📄
                </span>
                <span>
                  {post.createdAt instanceof Date
                    ? post.createdAt.toLocaleDateString()
                    : post.createdAt}
                </span>
              </div>

              <h3 className="text-md font-semibold text-gray-900">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm">{post.caption}</p>

              <div className="flex items-center justify-between mt-3">
                <Link
                  aria-label={`Read more about ${post.title}`}
                  href={`/blog/${post.slug}`}
                  className="b-red text-sm font-medium hover:underline flex items-center gap-1"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesBlogsList;
