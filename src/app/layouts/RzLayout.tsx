import { Flex } from "@mantine/core";
import { ReactNode } from "react";
import { ClientComponent } from "./ClientComponent";
import { Navigation } from "@/widgets/navigation";
import { AppHeader } from "@/widgets/app-header";

export async function RzLayout({ children }: { children: ReactNode }) {
  return (
    <Flex direction={"column"} h={"100vh"}>
      <ClientComponent>
        <AppHeader notification={true} />
        <Navigation />
      </ClientComponent>
      {children}
    </Flex>
  );
}
