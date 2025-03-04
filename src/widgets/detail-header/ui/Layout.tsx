import { Flex } from "@mantine/core"
import { ReactNode } from "react";
import { Logo } from "@/shared/ui/logo/Logo";

type LayoutProps = {
  themeToggle?: ReactNode;
  languageSwitcher?: ReactNode;
  globalSearch?: ReactNode;
};

export const Layout = ({
  themeToggle,
  languageSwitcher,
  globalSearch,
}: LayoutProps) => {
  return (
    <Flex component="header" align={"center"} justify={"space-between"}>
      <Logo size="xs" redirectOnClickTo="/rz" />
      <Flex align={"center"} gap={70}>
        {themeToggle}
        {languageSwitcher}
        {globalSearch}
      </Flex>
    </Flex>
  )
}
