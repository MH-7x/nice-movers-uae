import Link from "next/link";
import { Button } from "../ui/button";
import { CalendarPlus } from "lucide-react";
import { fetchAllBlogs } from "@/lib/fetchBlogs";
import { formatDate } from "@/lib/utils";
import { Blog } from "../../../types/Blogs";

const emirates = [
  { title: "Movers and Packers in Dubai", link: "/movers-and-packers-in-dubai" },
  { title: "Movers and Packers in Sharjah", link: "/movers-and-packers-sharjah" },
  { title: "Movers in Ajman", link: "/movers-in-ajman" },
  { title: "Movers in Ras Al Khaimah", link: "/movers-in-ras-al-khaimah" },
];

const getLatestPosts = async (currentSlug?: string): Promise<Blog[]> => {
  try {
    const blogs = await fetchAllBlogs();
    return [...blogs]
      .filter((blog) => blog.slug !== currentSlug)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 5);
  } catch {
    return [];
  }
};

const BlogSidebar = async ({ currentSlug }: { currentSlug?: string }) => {
  const latestPosts = await getLatestPosts(currentSlug);
  return (
    <aside className="md:px-0 px-3 md:mt-0 mt-20">
      <div className="b-red-bg py-10 px-5 rounded-lg" id="quote-section">
        <h3 className="font-bold text-lg b-white text-center">
          Looking For Reliable Movers?
        </h3>
        <p className="text-sm text-center mt-2 b-white">
          Message us on WhatsApp or request a free moving quote today.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Button
            wtBtn
            className="b-white-bg py-6 w-full"
            variant={"secondary"}
          >
            Chat on WhatsApp
          </Button>
          <Button
            quoteBtn
            className="b-white-bg py-6 w-full"
            variant={"secondary"}
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
      {latestPosts.length > 0 && (
        <div className="mt-16" id="latest-articles">
          <h3 className="font-bold text-xl b-text">Latest Posts</h3>
          <div className="w-32 b-red-bg h-1 rounded-4xl mt-1 mb-5"></div>
          {latestPosts.map((post) => (
            <div className="mb-5" key={post._id}>
              <h4 className="line-clamp-2 font-medium b-text leading-5">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h4>
              <div className="mt-2 flex items-center justify-between">
                <Link
                  className="b-red text-sm"
                  href={`/blog/${post.slug}`}
                  aria-label={`Read more about ${post.title}`}
                >
                  read more..
                </Link>
                <div className="flex items-center gap-x-2">
                  <CalendarPlus className="b-red" width={17} height={17} />
                  <p className="b-red text-sm">{formatDate(post.createdAt)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-16" id="movers-by-emirate">
        <h3 className="font-bold text-xl b-text">Movers by Emirate</h3>
        <div className="w-32 b-red-bg h-1 rounded-4xl mt-1 mb-5"></div>
        <ul className="space-y-2 b-text">
          {emirates.map((e) => (
            <li key={e.link}>
              <Link
                href={e.link}
                className="underline underline-offset-4 hover:text-[#c00000]"
              >
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;
