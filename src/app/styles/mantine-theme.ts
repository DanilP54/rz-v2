"use client";

import { createTheme, CSSVariablesResolver, darken, UnstyledButton } from "@mantine/core";
import { usePathname } from "next/navigation";

export const theme = createTheme({
  defaultRadius: "xs",
  components: {
    UnstyledButton: UnstyledButton.extend({
      vars: (theme, props) => {
        if (props.feedpage) {
          return {
            root: {
              "--custom-text-color-search-button": theme.colors.dark[2],
              "--custom-bg-color-search-button": darken(theme.other.feedBgColorDark, 0.2)
            }
          }
        }
        return {
          root: {
            "--custom-text-color-search-button": theme.colors.dark[3],
            "--custom-bg-color-search-button": theme.colors.dark[9]
          }

        }
      }
    })
  },
  other: {
    primaryBgColorDark: "#101010",
    primaryBgColorLight: "#fff",
    feedBgColorDark: "#354a5f",
    feedBgColorLight: "rgb(254, 249, 231)"

  }
});


export const resolver: CSSVariablesResolver = (theme) => {

  const {
    primaryBgColorDark, 
    primaryBgColorLight, 
    feedBgColorDark, 
    feedBgColorLight} = theme.other

  const pathname = usePathname()

  const feedPage = pathname === '/feed'

  return {
    dark: {
      "--mantine-color-body": feedPage ? feedBgColorDark : primaryBgColorDark,
    },
    light: {
      "--mantine-color-body": feedPage ? feedBgColorLight : primaryBgColorLight
    },
    variables: {}
  }
}