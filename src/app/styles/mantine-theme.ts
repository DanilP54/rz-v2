"use client";

import {
  Chip,
  createTheme,
  CSSVariablesResolver,
  darken,
  UnstyledButton,
} from "@mantine/core";

import { usePathname } from "next/navigation";

export const theme = createTheme({
  defaultRadius: "xs",
  components: {
    Chip: Chip.extend({
      styles: (theme) => ({
        label: {
          backgroundColor: theme.colors.gray[3],
          border: "none",
          color: "black",
          fontWeight: "700",
        },
      }),
      vars: (theme) => ({
        root: {
          "--chip-bg": theme.colors.dark[2],
          "--chip-hover": theme.colors.green[2],
          "--chip-bd": "none",
          "--chip-spacing": theme.spacing.md,
        },
      }),
    }),
  },
  other: {
    primaryBgColorDark: 'black',
    primaryBgColorLight: "#fff",
  },
});

export const resolver: CSSVariablesResolver = (theme) => {
  const {
    primaryBgColorDark,
    primaryBgColorLight,
    feedBgColorDark,
    feedBgColorLight,
  } = theme.other;

  const pathname = usePathname();

  const feedPage = pathname === "/feed";

  return {
    dark: {
      "--mantine-color-body": feedPage ? feedBgColorDark : primaryBgColorDark,
    },
    light: {
      "--mantine-color-body": feedPage ? feedBgColorLight : primaryBgColorLight,
    },
    variables: {
      "--instincts-button-bg-color": "hsl(0, 73%, 64%)",
      "--intellect-button-bg-color": "hsl(204, 70%, 53%)",
      "--balance-button-bg-color": "hsl(145, 63%, 49%)",
      "--instincts-color": "#333",
      "--intellect-color": "#333",
      "--balance-color": "#333",
    },
  };
};
