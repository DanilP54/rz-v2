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
  const [navPanels, setNavPanels] = useState<NavPanelState[]>([]);


  return (
    <NavigationManagerContext value={{ navPanels, setNavPanels }}>
      <Stack h={"min-content"} gap={0}>
        {children}
      </Stack>
    </NavigationManagerContext>
  );
}

function Toggle({
  children,
  segment,
}: {
  children: ReactNode;
  segment: Segments;
}) {
  const { getActivePanel } = useNavigationManager();
  const { isOpen, toggle } = useToggle(segment);
  const pathname = usePathname();

  const handleToggle = () => {
    toggle();
  };

  return (
    <Flex style={{ order: pathname?.includes(segment) ? "1" : "0" }}>
      <UnstyledButton
        role="navigation"
        className={clsx(classes.toggle, classes[segment])}
        onClick={handleToggle}
      ></UnstyledButton>
      {(pathname?.includes(segment) || isOpen) && (
        <Flex className={clsx(classes.panel, classes[segment])} component="nav">
          {children}
        </Flex>
      )}
    </Flex>
  );
}

function Links({
  children,
  path,
  active,
  segment,
}: {
  active: boolean;
  children: ReactNode;
  path: string;
  segment: Segments;
}) {
  return (
    <Link
      className={clsx(classes.link, { [classes.active]: active })}
      href={path}
    >
      {children}
    </Link>
  );
}

function InitialPanel({ panel }: { panel: NavigationPanel }) {
  
  const { initialNewState } = useNavigationManager();

  const pathname = usePathname();

  useLayoutEffect(() => {
    initialNewState(panel.segment);
  }, []);

  // useLayoutEffect(() => {
  //   for (const prop of panel.menuItems) {
  //     if (prop.path === pathname) {
  //       updateActivePanel(panel.segment);
  //     }
  //   }
  // }, [pathname]);

  return (
    <Toggle segment={panel.segment}>
      {panel.menuItems.map((link) => (
        <Links
          key={link.label}
          path={link.path}
          active={link.path === pathname}
          segment={panel.segment}
        >
          {link.label}
        </Links>
      ))}
    </Toggle>
  );
}

InitialPanel.displayName = "NavigationManager.InitialPanel";
Links.displayName = "NavigationManager.Links";
Toggle.displayName = "NavigationManager.Toggle";

NavigationManager.Toggle = Toggle;
NavigationManager.Links = Links;
NavigationManager.InitialPanel = InitialPanel;
