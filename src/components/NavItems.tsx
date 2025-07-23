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
import { ServicesLocations } from "../../List";

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
              {ServicesLocations.map((location) => (
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
          <NavigationMenuTrigger>
            <NavigationMenuLink href="/about-us"> ABOUT US</NavigationMenuLink>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact-us">
            {" "}
            Contact US
          </NavigationMenuLink>
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
