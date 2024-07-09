import React from "react";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "E-commerce",
  description: "Web app E-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
