export type NavChild = {
  title: string;
  href?: string;
  description?: string;
};
export type Nav = {
  title: string;
  href?: string;
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
    child: [
      {
        title: "Thời trang nam",
        href: "/user",
        description: "This is a test description",
      },
    ],
  },
  {
    title: "Product",
    child: [
      {
        title: "Thời trang nam",
        href: "/user",
        description: "This is a test description",
      },
      {
        title: "Thời trang nữ",
        href: "/user",
        description: "This is a test description",
      },
      {
        title: "Giày dép",
        href: "/user",
        description: "This is a test description",
      },
    ],
  },
  {
    title: "Mega-menu",
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
    child: [
      {
        title: "Blog 1",
        href: "/product3",
        description: "This is a test description",
      },
    ],
  },
  {
    title: "Seller",
    child: [
      {
        title: "Blog 1",
        href: "/product5",
        description: "This is a test description",
      },
    ],
  },
];
