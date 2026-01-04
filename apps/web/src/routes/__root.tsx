import type { ReactNode } from "react";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import styles from "@/styles.css?url";
import { AppProviders } from "@/components/providers";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Starlight Archive",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
        <Scripts />
      </body>
    </html>
  );
}
