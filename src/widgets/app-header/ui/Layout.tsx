import { Logo } from "@/shared/ui/logo/Logo";
import { NavigationTooltip } from "@/widgets/navigation";
import { Flex } from "@mantine/core";
import { ReactNode } from "react";

type LayoutProps = {
  themeToggle?: ReactNode;
  langSwitchLinks?: ReactNode;
  globalSearch?: ReactNode;
  authLinks?: ReactNode;
  navigationTooltipAction?: ReactNode;
};

export const Layout = ({
  themeToggle,
  langSwitchLinks,
  globalSearch,
  authLinks,
  navigationTooltipAction,
}: LayoutProps) => {
  return (
    <Flex component="header" align={"start"} justify={"space-between"} p={20}>
      <Logo size="sm" redirectOnClickTo="/" />
      <div style={{ flex: "1 1 0", paddingLeft: "100px" }}>
        {navigationTooltipAction}
      </div>
      <Flex align={"center"} gap={70}>
        {themeToggle}
        {langSwitchLinks}
        {globalSearch}
        {authLinks}
      </Flex>
    </Flex>
  );
};
