import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "@/app/styles/global.css";

import React, { ReactNode } from "react";
import { ColorSchemeScript, Container, mantineHtmlProps } from "@mantine/core";
import { Providers } from "@/app/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rodnaya Zemlya",
};

export function RootLayout({ children }: { children: ReactNode }) {


  return (
    <html lang="ru" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <Container fluid p={0} maw={'130rem'} h={'100svh'}>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
