"use client";
import React, { useLayoutEffect } from "react";
import { Flex, Stack, UnstyledButton } from "@mantine/core";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationManagerContext,
  NavPanelState,
  useNavigationManager,
} from "../lib/useNavigationManager";
import { useToggle } from "../lib/useToggle";
import Link from "next/link";
import classes from "./navogationManager.module.css";
import clsx from "clsx";
import type { NavigationPanel, Segments } from "../config/navigationConfig";

export function NavigationManager({ children }: { children: ReactNode }) {
  const [navPanelsState, setNavPanelsState] = useState<NavPanelState[]>([]);
  console.log(navPanelsState);
  return (
    <NavigationManagerContext value={{ navPanelsState, setNavPanelsState }}>
      <Stack h={"min-content"} gap={0}>
        {children}
      </Stack>
    </NavigationManagerContext>
  );
}

// INITITAL_PANEL ---------------------------------------------------------------

function InitialPanel({ panel }: { panel: NavigationPanel }) {

  const { initialNewPanel, panelIsActive } = useNavigationManager();

  const pathname = usePathname();

  const { setActivePanel } = useNavigationManager();

  useLayoutEffect(() => {
    initialNewPanel(panel.segment);
  }, [panel.segment]);

  return (
    <Toggle
      segment={panel.segment}
      panelIsActive={panelIsActive(panel.segment)}
    >
      {panel.menuItems.map((link) => (
        <Links
          key={link.label}
          path={link.path}
          isActive={panelIsActive(panel.segment)}
          segment={panel.segment}
        >
          {link.label}
        </Links>
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
  children,
  path,
  isActive,
}: {
  isActive: boolean;
  children: ReactNode;
  path: string;
}) {
  return (
    <Link
      className={clsx(classes.link, { [classes.active]: isActive })}
      href={path}
    >
      {children}
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
