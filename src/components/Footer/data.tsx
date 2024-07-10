import { Mail, MapIcon, Phone, Printer } from "lucide-react";
export type NavType = {
  title: string;
  child: {
    title: string;
    href?: string;
    icon?: JSX.Element;
  }[];
};
export const navs: NavType[] = [
  {
    title: "About SộpBe",
    child: [
      {
        title: "About Us",
        href: "/about-us",
      },
      {
        title: "Contact Us",
        href: "/about-us",
      },
      {
        title: "Terms & Conditions",
        href: "/about-us",
      },
      {
        title: "Careers",
        href: "/about-us",
      },
      {
        title: "Latest Blog",
        href: "/about-us",
      },
    ],
  },
  {
    title: "Useful Link",
    child: [
      {
        title: "Your Order",
        href: "/about-us",
      },
      {
        title: "Your Account",
        href: "/about-us",
      },
      {
        title: "Track Orders",
        href: "/about-us",
      },
      {
        title: "Your Wishlist",
        href: "/about-us",
      },
      {
        title: "FAQs",
        href: "/about-us",
      },
    ],
  },
  {
    title: "Categories",
    child: [
      {
        title: "Clothes",
        href: "/about-us",
      },
      {
        title: "Wallets & Book bags",
        href: "/about-us",
      },
      {
        title: "Backpack",
        href: "/about-us",
      },
      {
        title: "Jewelry",
        href: "/about-us",
      },
      {
        title: "Clock",
        href: "/about-us",
      },
    ],
  },
  {
    title: "Store information",
    child: [
      {
        title: "Man Thien, Tang Nhon Phu A District 9 HCM, VN",

        icon: <MapIcon className="size-5 text-white dark:text-foreground" />,
      },
      {
        title: "Call us: 123-456-7890",
        icon: <Phone className="size-5 text-white dark:text-foreground" />,
      },
      {
        title: "Email Us: Support@Fastkart.com",
        icon: <Mail className="size-5 text-white dark:text-foreground" />,
      },
      {
        title: "Fax: 123456",
        icon: <Printer className="size-5 text-white dark:text-foreground" />,
      },
    ],
  },
];
