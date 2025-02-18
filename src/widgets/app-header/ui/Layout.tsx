import { Logo } from "@/shared/ui/logo/Logo";
import { Flex } from "@mantine/core";
import {
  IconBubbleFilled,
  IconFlower,
  IconFlowerFilled,
} from "@tabler/icons-react";
import { ReactNode } from "react";

type LayoutProps = {
  themeToggle?: ReactNode;
  langSwitchLinks?: ReactNode;
  globalSearch?: ReactNode;
  authLinks?: ReactNode;
  notification?: boolean;
};

export const Layout = ({
  themeToggle,
  langSwitchLinks,
  globalSearch,
  authLinks,
  notification,
}: LayoutProps) => {
  return (
    <Flex component="header" align={"start"} justify={"space-between"} p={20}>
      <Logo size="sm" link />
      {notification && (
        <div style={{ flex: "1 1 0", paddingLeft: "100px" }}>
            <IconBubbleFilled />
        </div>
      )}
      <Flex align={"center"} gap={70}>
        {/* <div> */}
        {themeToggle}
        {/* </div> */}
        {/* <div> */}
        {langSwitchLinks}
        {/* </div> */}
        {/* <div> */}
        {globalSearch}
        {/* </div> */}
        {/* <div> */}
        {authLinks}
        {/* </div> */}
      </Flex>
    </Flex>
  );
};
