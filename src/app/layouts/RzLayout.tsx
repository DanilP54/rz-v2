import { Flex } from "@mantine/core";
import { ReactNode } from "react";
import { ClientComponent } from "./ClientComponent";
import { Navigation, NavigationProvider } from "@/widgets/navigation";
import { AppHeader } from "@/widgets/app-header";
import { NavigationTooltip } from "@/widgets/navigation";
import { IconNorthStar } from "@tabler/icons-react";
import { IconMichelinStarGreen } from "@tabler/icons-react"

export async function RzLayout({ children }: { children: ReactNode }) {
  return (
    <Flex direction={"column"} h={"100vh"}>
      <ClientComponent>
        <NavigationProvider>
          <AppHeader
            navigationTooltipAction={<NavigationTooltip triggerIcon={<IconMichelinStarGreen color="hsl(204, 70%, 53%)" />} />} />
          <Navigation />
        </NavigationProvider>
      </ClientComponent>
      {children}
    </Flex>
  );
}
