import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";
export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link legacyBehavior passHref {...props} href={props.href ?? "#"}>
        <NavigationMenuLink
          className={cn(
            "select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex flex-1 flex-col",
            className
          )}
        >
          <span className="text-sm font-medium leading-none justify-start">
            {title}
          </span>
          {children}
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
