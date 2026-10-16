import JsonLd from "@/components/JsonLd";
import BlogSidebar from "@/components/main/BlogSidebar";
import CTA from "@/components/main/CTA";
import { APP } from "@/lib/App";
import { fetchAllBlogs } from "@/lib/fetchBlogs";
import { ORGANIZATION_ID } from "@/lib/ServiceSchemaGen";
import { formatDate } from "@/lib/utils";
import { CalendarPlus, User2Icon } from "lucide-react";
import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
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
export const dynamicParams = true;

const CMS_BASE = process.env.CMS_URI || "https://blogs.nicemoversuae.com";

/** Route params may arrive URL-encoded; normalise to the decoded slug. */
const decodeSlug = (slug: string) => {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
};

/** Single normalised form used for canonical, og:url and schema. */
const canonicalUrl = (slug: string) =>
  `${APP.url}/blog/${encodeURIComponent(slug)}`;

/**
 * Returns the post, or `null` when the CMS says it does not exist.
 * Any other failure (network, 5xx, bad JSON) throws so the request ends in a 500.
 */
async function getBlogDetails(slug: string): Promise<Blog | null> {
  const response = await fetch(
    `${CMS_BASE}/api/blog?slug=${encodeURIComponent(slug)}`,
    { next: { revalidate: 60 } }
  );
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(
      `Failed to load blog content - ${response.status} ${response.statusText}`
    );
  }
  const result: Main = await response.json();
  // The CMS answers an unknown slug with { success: false, message: "Cannot found blog" }.
  if (!result.success || !result.blog) return null;
  return result.blog;
}

export async function generateStaticParams() {
  try {
    const blogs = await fetchAllBlogs();
    return blogs.map((blog) => ({ slug: blog.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = decodeSlug((await params).slug);
  let BlogDetails: Blog | null;
  try {
    BlogDetails = await getBlogDetails(slug);
  } catch {
    return { robots: { index: false } };
  }
  if (!BlogDetails) {
    return { robots: { index: false } };
  }

  const url = canonicalUrl(slug);

  return {
    title: BlogDetails.seo.metaTitle,
    description: BlogDetails.seo.metaDescription,
    alternates: {
      canonical: url,
    },
    applicationName: APP.name,
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
      siteName: APP.name,
      url,
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
  const slug = decodeSlug((await params).slug);
  const BlogDetails = await getBlogDetails(slug);

  if (!BlogDetails) {
    notFound();
  }

  const url = canonicalUrl(slug);
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: BlogDetails.title,
    description: BlogDetails.caption,
    author: { "@type": "Person", name: BlogDetails.author.name },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: APP.name,
      logo: `${APP.url}/Picture1.png`,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    image: BlogDetails.FeaturedImage,
    datePublished: BlogDetails.createdAt,
    ...(BlogDetails.updatedAt ? { dateModified: BlogDetails.updatedAt } : {}),
  };
  return (
    <>
      <JsonLd id="Blog-Schema" data={blogSchema} />
      <main className=" w-full md:mt-[125px] mt-[68px] max-w-[1400px] mx-auto">
        <header className="h-[500px] relative">
          <Image
            src={BlogDetails.FeaturedImage}
            alt={BlogDetails.title}
            fill
            priority
            sizes="100vw"
            className="object-center object-cover absolute"
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
                <p className="b-white text-sm">By {BlogDetails.author.name}</p>
              </div>
              <div className="flex items-center gap-x-2" id="Publish-Date">
                <CalendarPlus className="b-white" width={20} height={20} />
                <p className="b-white text-sm">
                  {formatDate(BlogDetails.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-white md:px-16 md:py-32 py-20 grid md:grid-cols-3 grid-cols-1 gap-y-10 gap-x-5">
          <article
            dangerouslySetInnerHTML={{ __html: BlogDetails.content }}
            className="md:col-span-2 blog"
          ></article>
          <BlogSidebar currentSlug={BlogDetails.slug} />
        </div>
        <CTA />
      </main>
    </>
  );
}
