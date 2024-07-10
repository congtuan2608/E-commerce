"use client";
import { cn } from "@/lib/utils";
import { Bookmark, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
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
import { navs } from "./nav";
export const Header = () => {
  return (
    <header className="bg-background text-foreground mb-4">
      <div className="bg-main">
        <div className="flex xl:max-w-screen-xl justify-between items-center m-auto max-xl:px-6 max-[950px]:hidden">
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
      <NavigationMenu className="m-auto xl:max-w-screen-xl max-[950px]:max-w-full justify-between py-2 max-[950px]:items-start">
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
        <div className="max-[950px]:flex-col max-[950px]:mx-4 flex flex-1 flex-row">
          <Input
            type="search"
            placeholder="Search for products, brands, shops..."
            className="mx-2"
          />
          {/* Menu */}
          <NavigationMenuList className="max-[900px]:hidden">
            {navs.map((nav) => {
              if (nav.href) {
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
                  <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] xl:w-[800px]">
                      {(nav.child ?? []).map((nav) => (
                        <ListItem
                          key={nav.title}
                          title={nav.title}
                          href={nav.href}
                        >
                          {nav.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </div>
        {/* User */}
        <NavigationMenuList>
          <NavigationMenuItem className="flex justify-center items-center">
            <Link href="/favourite" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "relative")}
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
                className={cn(navigationMenuTriggerStyle(), "relative")}
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
      </NavigationMenu>
    </header>
  );
};
