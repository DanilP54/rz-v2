import { Flex } from "@mantine/core";
import { ReactNode } from "react";
import { ClientComponent } from "./ClientComponent";
import { Navigation, NavigationProvider } from "@/widgets/navigation";
import { AppHeader } from "@/widgets/app-header";
import { NavigationTooltip } from "@/widgets/navigation";
import { IconBubbleFilled } from "@tabler/icons-react";

export async function RzLayout({ children }: { children: ReactNode }) {
  return (
    <Flex direction={"column"} h={"100vh"}>
      <ClientComponent>
        <NavigationProvider>
          <AppHeader
            notification={<NavigationTooltip trigger={<IconBubbleFilled />} />}
          />
          <Navigation />
        </NavigationProvider>
      </ClientComponent>
      {children}
    </Flex>
  );
}
