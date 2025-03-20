"use client";

import { Panel } from "./ui/Panel";
import { Stack } from "@mantine/core";
import { NavigationPanel, navigationPanelsConfig } from "./config";
import { useStore } from "@nanostores/react";
import { useState } from "react";
import { NavigationSegments } from "./config";
import classes from './navogation.module.css'
import { atom } from "nanostores";

export const $panels = atom<NavigationPanel[]>(navigationPanelsConfig)

export const Navigation = () => {

  const state = useStore($panels)

  const [openPanelSegment, updateOpenPanelSegment] = useState<NavigationSegments | null>(null)

  return (
    <Stack h={"min-content"} gap={0} className={classes.panel_wrapper}>
      {
        state.map(panel => (
          <Panel
            key={panel.segment}
            openPanelSegment={openPanelSegment}
            updateOpenPanelSegment={updateOpenPanelSegment}
            panel={panel}
          />
        ))
      }
    </Stack>
  );
};

