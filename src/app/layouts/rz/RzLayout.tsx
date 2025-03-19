import { Flex } from "@mantine/core";
import { ReactNode } from "react";
import { ConditionalRenderer } from "./ConditionalRenderer";
import { Navigation, NavigationTooltip } from "@/widgets/navigation";
import { AppHeader } from "@/widgets/app-header";
import { IdeaModal } from "@/shared/ui/idea-modal/IdeaModel";


export async function RzLayout({ children }: { children: ReactNode }) {
  return (
    <Flex direction={"column"} h={'100%'}>
      <ConditionalRenderer>
        <AppHeader
          navigationTooltipAction={<NavigationTooltip />}
        />
        <Navigation />
      </ConditionalRenderer>
      {children}
      <IdeaModal />
    </Flex>
  );
};
