"use client";
import React, { createContext, SetStateAction, useLayoutEffect } from "react";
import { Flex, Stack, UnstyledButton } from "@mantine/core";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import {
  NavPanelState,
  useNavigationManager,
} from "../lib/useNavigationManager";
import { useToggle } from "../lib/useToggle";
import Link from "next/link";
import classes from "./navogationManager.module.css";
import clsx from "clsx";
import type { NavigationPanel, Segments } from "../config/navigationConfig";
import path from "path";

// ---------------------------------------- //

export type NavigationManagerContext = {
  panels: NavPanelState[] | [];
  setPanels: React.Dispatch<React.SetStateAction<NavPanelState[] | []>>;
};

export const NavigationManagerContext = createContext<NavigationManagerContext | null>(null);

export function NavigationManager({
  children,
}: {
  children: ReactNode;
}) {
  const [panels, setPanels] = useState<NavPanelState[]>([]);
  console.log(panels)
  return (
    <NavigationManagerContext value={{ panels, setPanels }}>
      <Stack h={"min-content"} gap={0}>
        {children}
      </Stack>
    </NavigationManagerContext>
  );
}

// INITITAL_PANEL ---------------------------------------------------------------

function InitialPanel({ panel }: { panel: NavigationPanel }) {

  const { initialNewPanel, panelIsActive, setActivePanel } = useNavigationManager();


  const pathname = usePathname()

  useLayoutEffect(() => {
    initialNewPanel(panel.segment);
  }, [panel.segment]);

  useLayoutEffect(() => {
    panel.menuItems.map((link) => {
      if(pathname?.includes(link.path)) {
        setActivePanel(panel.segment)
      }
    })
  }, [pathname])

  return (
    <Toggle
      segment={panel.segment}
      panelIsActive={panelIsActive(panel.segment)}
    >
      {panel.menuItems.map((link) => (
        <Links
          label={link.label}
          key={link.label}
          path={link.path}
          isActive={pathname?.includes(link.path) || false}
        />
      ))}
    </Toggle>
  );
}

// TOGGLE ---------------------------------------------------------------

function Toggle({
  children,
  segment,
  panelIsActive,
}: {
  children: ReactNode;
  segment: Segments;
  panelIsActive: boolean;
}) {
  const { isOpen, toggle } = useToggle(segment);

  return (
    <Flex style={{ order: panelIsActive ? "1" : "0" }}>
      <UnstyledButton
        role="navigation"
        className={clsx(classes.toggle, classes[segment])}
        onClick={toggle}
      ></UnstyledButton>
      {isOpen && (
        <Flex className={clsx(classes.panel, classes[segment])} component="nav">
          {children}
        </Flex>
      )}
    </Flex>
  );
}

// LINKS ---------------------------------------------------------------

function Links({
  label,
  path,
  isActive,
}: {
  isActive: boolean;
  label: string;
  path: string;
}) {
  return (
    <Link
      className={clsx(classes.link, { [classes.active]: isActive })}
      href={path}
    >
      {label}
    </Link>
  );
}

// SET NAMESPACE

InitialPanel.displayName = "NavigationManager.InitialPanel";
Links.displayName = "NavigationManager.Links";
Toggle.displayName = "NavigationManager.Toggle";

NavigationManager.Toggle = Toggle;
NavigationManager.Links = Links;
NavigationManager.InitialPanel = InitialPanel;
