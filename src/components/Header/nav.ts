export type NavChild = {
  title: string;
  href?: string;
  description?: string;
};
export type Nav = {
  title: string;
  href: string;
  child?: NavChild[];
};

export const navs: Nav[] = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Shop",
    href: "/shop",
    // child: [
    //   {
    //     title: "Thời trang nam",
    //     href: "/user",
    //     description: "This is a test description",
    //   },
    // ],
  },
  {
    title: "Product",
    href: "/product",
    child: [
      {
        title: "Thời trang nam",
        href: "/product",
        description: "This is a test description",
      },
      {
        title: "Thời trang nữ",
        href: "/product",
        description: "This is a test description",
      },
      {
        title: "Giày dép",
        href: "/product",
        description: "This is a test description",
      },
    ],
  },
  {
    title: "Mega-menu",
    href: "/mega-menu",
    child: [
      {
        title: "Mega-menu 1",
        href: "/product2",
        description: "This is a test description",
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Seller",
    href: "/seller",
    child: [
      {
        title: "Blog 1",
        href: "/product5",
        description: "This is a test description",
      },
    ],
  },
];

export type NavUser = {
  title: string;
  href?: string;
  className?: string;
};
export const navsUser = [
  {
    title: "My profile",
    href: "/user",
  },

  {
    title: "Purchase history",
    href: "/history",
  },
  {
    title: "Log out",
    className: "text-red-500",
    // href: "/history",
  },
];
// config shown header\
export type ShowHeader = {
  path: string;
  shownHeader?: boolean;
  shownMenu?: boolean;
  shownSearch?: boolean;
};
export const showHeader: ShowHeader[] = [
  {
    path: "/admin",
    shownHeader: false,
  },
  {
    path: "/auth/login",
    shownHeader: false,
  },
  {
    path: "/auth/signup",
    shownHeader: false,
  },
  {
    path: "/auth/verify-email",
  },
  {
    path: "/auth/forgot-password",
    shownHeader: false,
  },
  {
    path: "/auth/reset-password",
    shownHeader: false,
  },
];
