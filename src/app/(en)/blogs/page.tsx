import React from "react";
import Image from "next/image";
import CategoriesBlogsList from "@/components/CategoriesBlogs";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { type Metadata } from "next";
import { Blog } from "../../../../types/Blogs";
import Link from "next/link";
import CTA from "@/components/main/CTA";

export const revalidate = 60;

/** Throws on any CMS failure so the request ends in a 500 instead of a 200 error page. */
async function fetchBlogs(): Promise<Blog[]> {
  const response = await fetch(`${process.env.CMS_URI}/api/list-all`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch blogs - ${response.status} ${response.statusText}`
    );
  }

  const results = await response.json();
  if (!results.success) {
    throw new Error("Operation failed - " + results.message);
  }

  return Array.isArray(results.data) ? (results.data as Blog[]) : [];
}

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Our Blogs | Nice Movers",
      desc: "Moving tips, packing guides and relocation advice for Dubai, Sharjah, Ajman and the rest of the UAE from the Nice Movers team.",
    },
    image: {
      path: "/contact-us.jpg",
      alt: "Get A Free Moving Quote From Nice Movers",
    },
    path: "/blogs",
  },
});

export default async function BlogSection() {
  const blogs = await fetchBlogs();
  const [firstBlog, ...otherBlogs] = blogs;

  const UniqueCategories = Array.from(
    new Set(blogs.map((blog) => blog.category))
  );
  const categoryBlogs = UniqueCategories.map((category) => ({
    category,
    blogs: blogs.filter((blog) => blog.category === category),
  }));

  return (
    <main className="py-20 md:mt-32 mt-10 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="md:text-3xl text-2xl max-w-3xl b-red mx-auto font-bold mb-3">
          Expert Moving Tips & Packers Guides for UAE Residents | Movers Blogs
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover expert moving tips, packing hacks, and relocation guides
          tailored for Dubai,{" "}
          <Link href={"/movers-and-packers-sharjah"}> Sharjah</Link>, Ajman, and
          across the UAE. Stay informed with our latest movers and packers
          blogs.
        </p>
      </div>

      {firstBlog ? (
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {/* First post with image */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={firstBlog.image}
                alt={firstBlog.title}
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 ">
              <Link href={`/blog/${firstBlog.slug}`}>{firstBlog.title}</Link>
            </h3>
            <p className="text-sm text-gray-600 mb-4">{firstBlog.caption}</p>
            <Link
              aria-label={`Read more about ${firstBlog.title}`}
              href={`/blog/${firstBlog.slug}`}
              className="text-[#c00000] text-sm font-medium hover:underline flex items-center gap-1"
            >
              Read more →
            </Link>
          </div>

          {/* Remaining posts without images */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {otherBlogs.map((blog) => (
              <div key={blog._id} className="bg-white rounded-xl shadow p-4">
                <h3 className="text-md font-semibold mb-2">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {blog.caption}
                </p>
                <Link
                  aria-label={`Read more about ${blog.title}`}
                  href={`/blog/${blog.slug}`}
                  className="text-[#c00000] text-sm font-medium hover:underline flex items-center gap-1"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-20">
          New moving guides are on the way. Please check back soon.
        </p>
      )}

      {categoryBlogs.map((category) => (
        <CategoriesBlogsList
          category={category.category}
          blogPosts={category.blogs}
          key={category.category}
        />
      ))}

      <CTA />
    </main>
  );
}
