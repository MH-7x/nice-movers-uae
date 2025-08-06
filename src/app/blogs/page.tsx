import React from "react";
import Image from "next/image";
import CategoriesBlogsList from "@/components/CategoriesBlogs";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { type Metadata } from "next";
import { Blog } from "../../../types/Blogs";
import Link from "next/link";
import CTA from "@/components/main/CTA";

export const revalidate = 60;

async function fetchBlogs(): Promise<{ data: Blog[] } | { error: string }> {
  try {
    const response = await fetch(`${process.env.CMS_URI}/api/list-all`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blogs" + response.statusText);
    }

    const results = await response.json();
    if (!results.success)
      throw new Error("Operation Failed - " + results.message);

    return { data: results.data as Blog[] };
  } catch (error) {
    console.log("Error fetching blogs:", error);
    return {
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Our Blogs | Nice Movers",
      desc: "Nice Movers is ISO verifed and professional moving company that provide a wide range of moving and packing services in overall UAE at affordable prices. Call to us or get free quote today.",
    },
    image: {
      path: "/contact-us.jpg",
      alt: "Get A Free Moving Quote From Nice Movers",
    },
    path: "/blogs",
  },
});

export default async function BlogSection() {
  const results = await fetchBlogs();

  if ("error" in results) {
    return (
      <div className="py-20 md:mt-32 mt-10 px-4 text-destructive md:px-10 max-w-7xl mx-auto">
        <div className="p-5 rounded-2xl bg-destructive/50">
          Error: {results.error}
        </div>
      </div>
    );
  } else {
    const UniqueCategories = Array.from(
      new Set(results.data.map((blog) => blog.category))
    );
    const categoryBlogs = UniqueCategories.map((category) => ({
      category,
      blogs: results.data.filter((blog) => blog.category === category),
    }));
    return (
      <main className="py-20 md:mt-32 mt-10 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="md:text-3xl text-2xl max-w-3xl b-red mx-auto font-bold mb-3">
            Expert Moving Tips & Packers Guides for UAE Residents | Movers Blogs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover expert moving tips, packing hacks, and relocation guides
            tailored for Dubai, Sharjah, Ajman, and across the UAE. Stay
            informed with our latest movers and packers blogs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {/* First post with image */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={results.data[0].image} // Replace this with actual image URL or use dynamic `blog.image`
                alt="Blog post"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 ">
              <Link href={`/blog/${results.data[0].slug}`}>
                {results.data[0].title}
              </Link>
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {results.data[0].caption}
            </p>
            <Link
              aria-label={`Read more about ${results.data[0].title}`}
              href={`/blog/${results.data[0].slug}`}
              className="text-[#c00000] text-sm font-medium hover:underline flex items-center gap-1"
            >
              Read more →
            </Link>
          </div>

          {/* Remaining posts without images */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {results.data.slice(1).map((blog, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4">
                <h3 className="text-md font-semibold mb-2">
                  <Link href={blog.slug}>{blog.title}</Link>
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
        {UniqueCategories &&
          UniqueCategories.length > 0 &&
          categoryBlogs.map((category, idx) => (
            <CategoriesBlogsList
              category={category.category}
              blogPosts={category.blogs}
              key={idx}
            />
          ))}

        <CTA />
      </main>
    );
  }
}
