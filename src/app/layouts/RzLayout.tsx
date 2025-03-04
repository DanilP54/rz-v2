import { Flex } from "@mantine/core";
import { ReactNode } from "react";
import { ClientComponent } from "./ClientComponent";
import { Navigation, NavigationProvider, NavigationTooltip } from "@/widgets/navigation";
import { AppHeader } from "@/widgets/app-header";

export async function RzLayout({ children }: { children: ReactNode }) {
  return (
    <Flex direction={"column"} h={"100vh"}>
      <ClientComponent>
        <NavigationProvider>
          <AppHeader navigationTooltipAction={<NavigationTooltip />} />
          <Navigation />
        </NavigationProvider>
      </ClientComponent>
      {children}
    </Flex>
  );
};
