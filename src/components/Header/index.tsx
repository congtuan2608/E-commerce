"use client";
import { cn } from "@/lib/utils";
import { Bookmark, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ListItem } from "./components/ListItem";
import { navs, showHeader } from "./nav";

export const Header = () => {
  const pathname = usePathname();

  const headerConfig = React.useMemo(() => {
    return showHeader.find((s) => s.path === pathname);
  }, [pathname]);

  if (headerConfig?.shownHeader === false) {
    return <header className="bg-background text-foreground"></header>;
  }
  return (
    <header className="bg-background text-foreground mb-4">
      <div className="bg-main">
        <div className="flex xl:max-w-screen-xl justify-between items-center m-auto max-xl:px-4 max-[950px]:hidden">
          <span className="text-xs">
            <p>Man Thien, Tang Nhon Phu A District 9 HCM, VN</p>
          </span>
          <div>
            <p className="">
              <span className="font-semibold text-xs">Welcome to SộpBe! </span>
              <span className="text-xs">
                Wrap new offers/gift every single day on Weekends.
              </span>
              <span className="font-semibold text-xs">
                {" "}
                New Coupon Code: SộpBe024
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* navigator */}
      <NavigationMenu
        className="flex m-auto w-full max-w-screen-xl flex-col [&>div:nth-child(3)]:left-1/2 [&>div:nth-child(3)]:-translate-x-1/2"
        style={{}}
      >
        <div className="max-[950px]:max-w-full py-2 max-[950px]:items-start flex flex-1 max-md:px-2 w-full justify-between">
          {/* Logo */}
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-xl font-semibold hover:bg-popover focus:bg-popover"
                  )}
                >
                  SộpBe
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          {/* search */}
          {!(headerConfig?.shownSearch === false) && (
            <div className="mx-2 max-[950px]:mx-4 flex flex-[0.7] flex-row max-[950px]:flex-1 gap-x-1 max-[500px]:mx-1">
              <Input
                type="search"
                placeholder="Search for products, brands, shops..."
                className="focus-visible:ring-0 outline-none shadow-none  focus-visible:ring-offset-0 focus-visible:border-main"
              />
              <Button
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-main active:bg-main max-[500px]:px-3"
                )}
              >
                <Search className="size-5 text-foreground" />
              </Button>
            </div>
          )}
          {/* User */}
          <NavigationMenuList className="">
            <NavigationMenuItem className="flex justify-center items-center gap-x-2">
              <Link href="/favourite" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "relative max-[500px]:hidden"
                  )}
                >
                  <div className="absolute top-0 right-0 rounded-full w-5 h-5 bg-red-400 flex justify-center items-center">
                    <span className="align-middle text-white font-medium text-xs">
                      12
                    </span>
                  </div>
                  <Bookmark className="size-5 text-foreground" />
                </NavigationMenuLink>
              </Link>
              <Link href="/shopping-cart" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "relative max-[500px]:hidden"
                  )}
                >
                  <div className="absolute top-0 right-0 rounded-full w-5 h-5 bg-red-400 flex justify-center items-center">
                    <span className="align-middle text-white font-medium text-xs">
                      9
                    </span>
                  </div>
                  <ShoppingCart className="size-5 text-foreground" />
                </NavigationMenuLink>
              </Link>
              <Link href="/user" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "gap-x-2")}
                >
                  <User className="size-5 text-foreground" />
                  <div className="flex flex-col justify-center">
                    <p className="font-light text-sm">Hello,</p>
                    <p>Cong Tuan</p>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
        {/* Menu */}
        {!(headerConfig?.shownMenu === false) && (
          <NavigationMenuList className="max-[500px]:hidden">
            {navs.map((nav) => {
              if ((nav.child ?? []).length === 0) {
                return (
                  <NavigationMenuItem key={nav.title}>
                    <Link href={nav.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {nav.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={nav.title}>
                  <Link href={nav.href}>
                    <NavigationMenuTrigger className="max-[560px]:px-2 ">
                      {nav.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] max-md:grid-cols-2 lg:w-[600px] xl:w-[800px] md:flex max-md:w-[300px]">
                        {(nav.child ?? []).map((nav) => (
                          <ListItem
                            key={nav.title}
                            title={nav.title}
                            href={nav.href}
                          >
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground w-full">
                              {nav.description}
                            </p>
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        )}
      </NavigationMenu>
    </header>
  );
};
