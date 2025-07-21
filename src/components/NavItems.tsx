"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { servicesList } from "./main/CoreServices";
export const locations = [
  {
    title: "Movers in Abu Dhabi",
    desc: "Professional movers in Abu Dhabi offering reliable and affordable moving services for homes and offices across the UAE.",
    link: "movers-in-abu-dhabi",
  },
  {
    title: "Movers in Dubai",
    desc: "Expert movers in Dubai providing fast, secure, and cost-effective moving solutions for residential and commercial clients.",
    link: "movers-in-dubai",
  },
  {
    title: "Movers in Fujairah",
    desc: "Professional moving and packing services in Fujairah for residential, commercial, and furniture relocation across the UAE.",
    link: "movers-and-packers-in-fujairah",
  },
  {
    title: "Movers in Sharjah",
    desc: "Trusted movers and packers in Sharjah with same-day service, safe packing, and expert handling for all types of moves.",
    link: "movers-and-packers-in-sharjah",
  },
  {
    title: "Movers in Al Ain",
    desc: "Top-rated movers and packers in Al Ain specializing in villa, apartment, and office moving services at competitive rates.",
    link: "movers-and-packers-in-al-ain",
  },
  {
    title: "Movers Palm Jumeirah",
    desc: "Experienced movers and packers in Palm Jumeirah offering luxury relocation services with full packing and transport support.",
    link: "movers-and-packers-palm-jumeirah",
  },
  {
    title: "Movers in JVC",
    desc: "Affordable and professional movers in JVC (Jumeirah Village Circle) for fast, secure, and hassle-free moving solutions.",
    link: "movers-and-packers-in-jvc",
  },
  {
    title: "Movers in Business Bay",
    desc: "Efficient movers and packers in Business Bay for office relocations and home shifting with expert packing and delivery.",
    link: "movers-and-packers-in-business-bay",
  },
  {
    title: "Movers and Packers in JLT",
    desc: "Safe and reliable movers and packers in JLT (Jumeirah Lake Towers) with professional service and timely delivery.",
    link: "movers-and-packers-in-jlt",
  },
  {
    title: "Movers in Al Nahda",
    desc: "Local movers in Al Nahda offering expert house and apartment shifting services with careful packing and handling.",
    link: "movers-and-packers-in-al-nahda",
  },
  {
    title: "Movers in Al Barsha",
    desc: "Skilled movers in Al Barsha providing packing, dismantling, and transport services for all residential and commercial moves.",
    link: "movers-and-packers-in-al-barsha",
  },
  {
    title: "Movers in Arabian Ranches",
    desc: "Professional villa movers in Arabian Ranches offering stress-free moving experiences with premium packing and relocation.",
    link: "movers-and-packers-in-arabian-ranches",
  },
];
export function NavItems() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger IconEnable>SERVICES</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {servicesList.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.link}
                  className="line-clamp-1"
                >
                  {service.desc}
                </ListItem>
              ))}
              <ListItem
                title={"Used Furniture Buyers in Dubai"}
                href={"https://dubaiusedfurniture.ae/en"}
                className="line-clamp-1"
              >
                Dubai Used Furniture buy and sell used furniture, home
                appliances etc at very good prices in dubai
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger IconEnable>
            MOVERS AND PACKERS
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {locations.map((location) => (
                <ListItem
                  key={location.title}
                  title={location.title}
                  href={location.link}
                  className="line-clamp-1"
                >
                  {location.desc}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>ABOUT US</NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>CONTACT US</NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>BLOGS</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
