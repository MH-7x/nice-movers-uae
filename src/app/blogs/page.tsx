import React from "react";
import Image from "next/image";
import CategoriesBlogsList from "@/components/CategoriesBlogs";
import MetadataTemplate from "@/lib/MetaDataTemplate";

const blogs = [
  {
    title: "SEO Basics: Beginner's Guide to SEO Success",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    image: "/moving-tips-1.jpg", // Replace with actual image
    link: "#",
  },
  {
    title: "How to quickly deploy a static website",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    link: "#",
  },
  {
    title: "How to Rank Higher on Google (6 Easy Steps)",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    link: "#",
  },
  {
    title: "What is SEO? Search Engine Optimization Explained",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    link: "#",
  },
  {
    title: "12 SEO Best Practices That Everyone Should Follow",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    link: "#",
  },
  {
    title: "Spotify’s Car Thing available to all premium users",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    link: "#",
  },
  {
    title: "How to schedule your Tweets to send later",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    link: "#",
  },
];

export const metadata = MetadataTemplate({
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

const BlogSection = () => {
  return (
    <main className="py-20 md:mt-32 mt-10 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">
          Movers and Packers Blogs In UAE
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* First post with image */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col">
          <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
            <Image
              src={"/moving-tips-1.jpg"} // Replace this with actual image URL or use dynamic `blog.image`
              alt="Blog post"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">{blogs[0].title}</h3>
          <p className="text-sm text-gray-600 mb-4">{blogs[0].description}</p>
          <a
            href={blogs[0].link}
            className="text-[#c00000] text-sm font-medium hover:underline flex items-center gap-1"
          >
            Read more →
          </a>
        </div>

        {/* Remaining posts without images */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {blogs.slice(1).map((blog, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4">
              <h3 className="text-md font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{blog.description}</p>
              <a
                href={blog.link}
                className="text-[#c00000] text-sm font-medium hover:underline flex items-center gap-1"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
      <CategoriesBlogsList />
      <CategoriesBlogsList />
    </main>
  );
};

export default BlogSection;
