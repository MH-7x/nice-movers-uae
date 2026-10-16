import { Code2, Mail, MapPin, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ServicesLocations } from "../../../List";
import { servicesList } from "./CoreServices";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="relative z-10 bg-white mt-20 pt-20 dark:bg-dark  lg:pt-[120px] ">
        <div className="container md:px-0 px-3 mx-auto">
          <div className="md:-mx-4 -mx-2 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <Link href="/" className="mb-6 inline-block max-w-[160px]">
                  <Image
                    src={"/Picture1.png"}
                    width={160}
                    height={160}
                    alt="Nice Movers Logo"
                  />
                </Link>
                <p className="mb-7 text-sm text-body-color dark:text-dark-6">
                  Nice Movers – UAE movers and packers since 2015, offering
                  reliable home, office, and villa relocation services and
                  serving all Emirates.
                </p>
                <Link
                  href={"tel:+971563560017"}
                  className="flex items-center text-sm font-medium text-dark dark:text-white hover:underline underline-offset-4 transition-colors"
                >
                  <PhoneCallIcon
                    width={20}
                    height={20}
                    strokeWidth={1.5}
                    className="mr-3 text-primary"
                  />
                  <span>+971 56 3560017</span>
                </Link>

                <Link
                  href={"mailto:nicemovers.com@gmail.com"}
                  className="flex items-center text-sm font-medium text-dark dark:text-white hover:underline underline-offset-4 transition-colors mt-3"
                >
                  <Mail
                    width={20}
                    height={20}
                    strokeWidth={1.5}
                    className="mr-3 text-primary"
                  />
                  <span>nicemovers.com@gmail.com</span>
                </Link>

                <address className="flex items-start text-sm font-medium text-dark dark:text-white not-italic mt-3">
                  <MapPin
                    width={20}
                    height={20}
                    strokeWidth={1.5}
                    className="mr-3 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    2 Moatab Bin Auf St, Bu Shaghara, Hay Al Qasimiah, Sharjah,
                    UAE
                  </span>
                </address>
              </div>
            </div>

            <LinkGroup header="SERVICES">
              {servicesList.map((service, index) =>
                service.link ? (
                  <NavLink
                    key={index}
                    link={service.link}
                    label={service.title}
                  />
                ) : null
              )}
            </LinkGroup>
            <LinkGroup header="LOCATIONS">
              {ServicesLocations &&
                ServicesLocations.map((loc, i) => (
                  <NavLink key={i} link={loc.link} label={loc.title} />
                ))}
            </LinkGroup>
            <LinkGroup header="Useful Links">
              <NavLink link="/about-us" label="About Us" />
              <NavLink link="/contact-us" label="Contact Us" />
              <NavLink link="/blogs" label="Blogs" />
              <NavLink
                link="https://rukunalaroobausedfurniture.ae"
                label="Used Furniture Buyers"
                external
              />
              <NavLink
                link="https://moversandpackersinuae.com"
                label="Movers and Packers in UAE"
                external
              />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center">
                  <a
                    title="Nice Movers on Facebook"
                    aria-label="Nice Movers on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/profile.php?id=61578872861851"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-[#c00000] hover:bg-[#c00000] hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      aria-hidden="true"
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} Nice Movers LLC. All Rights
                  Reserved.
                </p>
                <p className="text-sm text-muted-foreground flex items-center mt-1 gap-x-2">
                  <Code2 width={15} height={20} /> Developed by{" "}
                  <a
                    title="website developer"
                    className="underline underline-offset-4"
                    href={"https://github.com/MH-7x"}
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    Mashal Huraira
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#c000000" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({
  children,
  header,
}: {
  children: ReactNode;
  header: string;
}) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-5 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-1">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({
  link,
  label,
  external = false,
}: {
  link: string;
  label: string;
  external?: boolean;
}) => {
  return (
    <li>
      <a
        href={link}
        {...(external ? { target: "_blank", rel: "nofollow noopener" } : {})}
        className="inline-block text-sm leading-loose hover:underline underline-offset-2 hover:text-[#c00000]"
      >
        {label}
      </a>
    </li>
  );
};
