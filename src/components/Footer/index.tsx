import { cn } from "@/lib/utils";
import Link from "next/link";
import { SvgIcon } from "../SvgIcon";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { navs } from "./data";
export const Footer = () => {
  return (
    <footer className="text-white dark:text-foreground py-10 bg-[#3C464F]">
      <div className="flex xl:max-w-screen-xl justify-between m-auto max-xl:px-6 gap-x-2 max-[900px]:flex-col max-[900px]:gap-y-4">
        <div className="flex flex-[0.4] flex-col gap-y-2 justify-start items-start max-[900px]:items-center max-[900px]:gap-y-4">
          <span className="font-semibold text-xl">SộpBe</span>
          <p className="font-extralight text-sm max-w-xs max-[900px]:text-center">
            it is a long established fact that a reader will be distracted by
            the readable content.
          </p>
          <div className="flex gap-x-2">
            <SvgIcon name="facebook" />
            <SvgIcon name="google" />
          </div>
        </div>
        <NavigationMenu className="justify-start items-start gap-x-4 max-[900px]:flex-col max-[900px]:m-auto  max-[900px]:items-center">
          {navs.map((nav) => {
            return (
              <NavigationMenuList
                key={nav.title}
                className="flex-col justify-start items-start gap-y-1 max-[900px]:items-center max-[900px]:justify-center"
              >
                <span className="font-semibold text-xl px-2">{nav.title}</span>
                <div className="flex flex-col gap-x-2 m-0 px-0 max-[900px]:justify-center">
                  {nav.child.map((child) => {
                    if (child.href) {
                      return (
                        <Link
                          legacyBehavior
                          passHref
                          href={child.href ?? "#"}
                          key={child.title}
                        >
                          <NavigationMenuLink
                            className={cn(
                              "select-none space-y-1 rounded-md px-2 py-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex flex-1 flex-row w-full items-center max-[900px]:justify-center"
                            )}
                          >
                            {child?.icon && child.icon}
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {child.title}
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      );
                    }

                    return (
                      <div
                        key={child.title}
                        className="flex flex-row gap-x-1 justify-center items-center"
                      >
                        {child.icon}
                        <NavigationMenuLink
                          className={cn(
                            "space-y-1 rounded-md px-2 py-1 leading-none no-underline outline-none transition-colors"
                          )}
                        >
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {child.title}
                          </p>
                        </NavigationMenuLink>
                      </div>
                    );
                  })}
                </div>
              </NavigationMenuList>
            );
          })}
        </NavigationMenu>
      </div>
      <div></div>
    </footer>
  );
};
