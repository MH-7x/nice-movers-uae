import BlogSidebar from "@/components/main/BlogSidebar";
import CTA from "@/components/main/CTA";
import { APP } from "@/lib/App";
import { formatDate } from "@/lib/utils";
import { CalendarPlus, Eye, MessageCircleReply, User2Icon } from "lucide-react";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

export interface Main {
  message: string;
  success: boolean;
  blog: Blog;
}

export interface Blog {
  author: Author;
  seo: SEO;
  _id: string;
  title: string;
  caption: string;
  category: Category;
  FeaturedImage: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
}

interface Author {
  name: string;
  avatarUrl: string;
}
export interface Category {
  _id: string;
  name: string;
}
interface SEO {
  metaTitle: string;
  metaDescription: string;
}

export const revalidate = 60;

async function getBlogDetails(slug: string): Promise<Blog | { error: string }> {
  try {
    const response = await fetch(
      `https://blogs.nicemoversuae.com/api/blog?slug=${slug}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    if (!response.ok) {
      throw new Error(
        `Failed To Load Blog Content - ${response.status} - ${response.statusText}`
      );
    }
    const result: Main = await response.json();
    if (!result.success) {
      throw new Error(result.message);
    }
    return result.blog;
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "something went wrong!",
    };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const BlogDetails = await getBlogDetails(decodeURIComponent(slug));

  if ("error" in BlogDetails) {
    return {
      title: "Error",
      description: "Error",
    };
  }

  return {
    title: BlogDetails.seo.metaTitle,
    description: BlogDetails.seo.metaDescription,
    alternates: {
      canonical: `${APP.url}/blog/${slug}`,
    },
    applicationName: "Nice Movers UAE",
    authors: {
      name: BlogDetails.author.name,
    },
    category: BlogDetails.category.name,
    openGraph: {
      title: BlogDetails.seo.metaTitle,
      description: BlogDetails.seo.metaDescription,
      type: "article",
      authors: BlogDetails.author.name,
      countryName: "United Arab Emirates",
      images: [
        {
          url: BlogDetails.FeaturedImage,
          alt: BlogDetails.title,
        },
      ],
      publishedTime: new Date(BlogDetails.createdAt).toISOString(),
      siteName: "Dubai Used Furniture",
      url: `${APP.url}/blog/${slug}`,
    },
    robots: {
      "max-image-preview": "large",
      follow: true,
      index: true,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    twitter: {
      card: "summary_large_image",
      site: "@nicemoversuae",
      creator: "@nicemoversuae",
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const BlogDetails = await getBlogDetails(decodeURIComponent(slug));

  if ("error" in BlogDetails) {
    return (
      <header className="mt-[125px] md:bg-secondary/40">
        <div className="max-w-6xl mx-auto md:p-4">
          <div className="bg-red-100 py-10 rounded-2xl md:shadow-lg overflow-hidden flex flex-col items-center">
            <h2 className="text-center text-destructive">
              {BlogDetails.error}
            </h2>
          </div>
        </div>
      </header>
    );
  } else {
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: BlogDetails.title,
      description: BlogDetails.caption,
      author: { "@type": "Person", name: BlogDetails.author.name },
      image: BlogDetails.FeaturedImage,
      datePublished: BlogDetails.createdAt,
      ...(BlogDetails.updatedAt ? { dateModified: BlogDetails.updatedAt } : {}),
    };
    return (
      <>
        <Script
          type="application/ld+json"
          id="Blog-Schema"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <main className=" w-full md:mt-[125px] mt-[68px] max-w-[1400px] mx-auto">
          <header className="h-[500px] relative">
            <Image
              src={BlogDetails.FeaturedImage}
              alt={BlogDetails.title}
              fill
              className="object-center object-cover absolute"
              loading="eager"
            />
            <div
              className="absolute top-0 left-0 w-full h-full md:bg-black/60 bg-black/70 md:px-32 flex flex-col px-3 items-start justify-center"
              id="blog-header"
            >
              <h1 className="md:text-4xl/11 capitalize text-2xl b-white font-medium max-w-3xl text-shadow-2xs">
                {BlogDetails.title}
              </h1>
              <p className="max-w-3xl mt-5 md:leading-5 md:text-base text-sm b-white">
                {BlogDetails.caption}
              </p>

              <div
                id="details"
                className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-2"
              >
                <div className="flex items-center gap-x-2" id="author">
                  <User2Icon className="b-white" width={20} height={20} />
                  <Link
                    href={"https://github.com/MH-7x"}
                    rel="nofollow"
                    className="b-white text-sm"
                  >
                    By {BlogDetails.author.name}
                  </Link>
                </div>
                <div className="flex items-center gap-x-2" id="Publish-Date">
                  <CalendarPlus className="b-white" width={20} height={20} />
                  <p className="b-white text-sm">
                    {formatDate(BlogDetails.createdAt)}
                  </p>
                </div>
                <div className="flex items-center gap-x-2" id="comments">
                  <MessageCircleReply
                    className="b-white"
                    width={20}
                    height={20}
                  />
                  <p className="b-white text-sm">10</p>
                </div>
                <div className="flex items-center gap-x-2" id="blog-views">
                  <Eye className="b-white" width={20} height={20} />
                  <p className="b-white text-sm">147</p>
                </div>
              </div>
            </div>
          </header>

          <div className="bg-white md:px-16 md:py-32 py-20 grid md:grid-cols-3 grid-cols-1 gap-y-10 gap-x-5">
            <article
              dangerouslySetInnerHTML={{ __html: BlogDetails.content }}
              className="md:col-span-2 blog"
            ></article>
            <BlogSidebar />
          </div>
          <CTA />
        </main>
      </>
    );
  }
}
