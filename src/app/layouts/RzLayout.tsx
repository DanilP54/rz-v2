import { Flex } from "@mantine/core";
import { ReactNode } from "react";
import { ClientComponent } from "./ClientComponent";
import { Navigation } from "@/widgets/navigation";
import { AppHeader } from "@/widgets/app-header";
import { NavigationTooltip } from "@/widgets/navigation/portal";
import { IconBubbleFilled } from "@tabler/icons-react";

export async function RzLayout({ children }: { children: ReactNode }) {
  return (
    <Flex direction={"column"} h={"100vh"}>
      <ClientComponent>
        <AppHeader
          notification={<NavigationTooltip trigger={<IconBubbleFilled />} />}
        />
        <Navigation />
      </ClientComponent>
      {children}
    </Flex>
  );
}
