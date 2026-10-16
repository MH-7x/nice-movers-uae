import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Nice Movers",
  robots: { index: false, follow: true },
};

const links = [
  { title: "Home", link: "/" },
  { title: "Movers and Packers in Dubai", link: "/movers-and-packers-in-dubai" },
  { title: "Movers and Packers in Sharjah", link: "/movers-and-packers-sharjah" },
  { title: "Movers in Ajman", link: "/movers-in-ajman" },
  { title: "Movers in Ras Al Khaimah", link: "/movers-in-ras-al-khaimah" },
  { title: "Moving Tips & Blogs", link: "/blogs" },
  { title: "Get A Free Quote", link: "/contact-us" },
];

export default function NotFound() {
  return (
    <main className="z-20 mt-32 md:px-0 px-3 py-20 max-w-3xl mx-auto text-center">
      <h1 className="md:text-4xl text-2xl font-bold b-red">Page Not Found</h1>
      <p className="b-text mt-4">
        The page you are looking for has moved or no longer exists. These pages
        may help:
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-3">
        {links.map((l) => (
          <li key={l.link}>
            <Link
              href={l.link}
              className="inline-block border border-[#c00000] rounded-md px-4 py-2 text-sm b-red hover:bg-[#c00000] hover:text-white transition"
            >
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
