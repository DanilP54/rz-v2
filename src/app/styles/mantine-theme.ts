"use client";

import {
  Chip,
  createTheme,
  CSSVariablesResolver,
} from "@mantine/core";

const ChipStyles = Chip.extend({
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
})

export const theme = createTheme({
  defaultRadius: "xs",
  components: {
    Chip: ChipStyles,
  },
});

export const resolver: CSSVariablesResolver = (theme) => {
  return {
    dark: {
      "--mantine-color-body": 'black',
    },
    light: {
      "--mantine-color-body": "#fff",
    },
    variables: {
      "--padding-page": "40px",
      // background color pages
      "--primary-bg-color-dark": "#333",
      "--primary-bg-color-light": "#fff",
      //
      "--instincts-button-bg-color": "hsl(0, 73%, 64%)",
      "--intellect-button-bg-color": "hsl(204, 70%, 53%)",
      "--balance-button-bg-color": "hsl(145, 63%, 49%)",
      // navigation panels
      "--panel-top-sticky-position": "calc(0px - calc(var(--panel-height) * 2))",
      "--panel-height": "40px",
      "--panel-width": "120px",
      // segments colors
      "--instincts-primary-color": "hsl(0, 73%, 64%)",
      "--intellect-primary-color": "hsl(204, 70%, 53%)",
      "--balance-primary-color": "hsl(145, 63%, 49%)",
      "--instincts-secondary-color": "rgb(240, 226, 226)",
      "--intellect-secondary-color": "rgb(224, 255, 255)",
      "--balance-secondary-color": "rgb(209, 248, 233)",
    },
  };
};
