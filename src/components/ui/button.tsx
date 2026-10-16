import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-[#e7e6e6] shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const LINK_BUTTONS = {
  callBtn: { title: "Nice Movers Phone Number", href: "tel:+971563560017" },
  quoteBtn: { title: "Get A Quote From Nice Movers UAE", href: "/contact-us" },
  wtBtn: {
    title: "Nice Movers WhatsApp Contact",
    href: "https://wa.me/971563560017?text=I%20Need%20Movers",
  },
} as const;

function Button({
  className,
  variant,
  size,
  asChild = false,
  wtBtn,
  callBtn,
  quoteBtn,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    wtBtn?: boolean;
    callBtn?: boolean;
    quoteBtn?: boolean;
  }) {
  const linkKind = callBtn
    ? "callBtn"
    : quoteBtn
      ? "quoteBtn"
      : wtBtn
        ? "wtBtn"
        : null;

  // Link-style buttons render the <a> itself with the button classes
  // (no <button> nested inside <a>).
  if (linkKind) {
    const { title, href } = LINK_BUTTONS[linkKind];
    const { children, title: customTitle, onClick, id } = props;
    return (
      <Link
        data-slot="button"
        href={href}
        id={id}
        title={customTitle ?? title}
        aria-label={props["aria-label"]}
        onClick={
          onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
        }
        className={cn(buttonVariants({ variant, size, className }))}
        {...(linkKind === "wtBtn"
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
