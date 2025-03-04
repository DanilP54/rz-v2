import { Flex } from "@mantine/core"
import { ReactNode } from "react";
import { Logo } from "@/shared/ui/logo/Logo";

type LayoutProps = {
  themeToggle?: ReactNode;
  languageSwitcher?: ReactNode;
  globalSearch?: ReactNode;
  authButtons?: ReactNode;
};

export const Layout = ({
  themeToggle,
  languageSwitcher,
  globalSearch,
  authButtons,
}: LayoutProps) => {
  return (
    <Flex component="header" align={"start"} justify={"space-between"} p={20}>
      <Logo size="sm" link />
      {/* <div style={{ flex: "1 1 0", paddingLeft: "100px" }}>
        {navigationTooltipAction}
      </div> */}
      <Flex align={"center"} gap={70}>
        {themeToggle}
        {languageSwitcher}
        {globalSearch}
        {authButtons}
      </Flex>
    </Flex>
  )
}
