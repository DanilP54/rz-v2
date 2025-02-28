"use client";

import { navigationPanelsConfig } from "./config";
import { Panel } from "./ui/NavigationProvider";
import { Stack } from "@mantine/core";

export const Navigation = () => {
  return (
    <Stack h={"min-content"} gap={0} mt={30}>
      {
        navigationPanelsConfig.map(panel => (
          <Panel key={panel.segment} panel={panel} />
        ))
      }
    </Stack>
  );
};
