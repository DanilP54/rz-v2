"use client";
import React, { createContext, useEffect } from "react";
import { Flex, Stack, UnstyledButton } from "@mantine/core";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import {
  useNavigationManager,
} from "../lib/useNavigationManager";
import Link from "next/link";
import classes from "./navogationManager.module.css";
import clsx from "clsx";
import { NavigationPanel, Segments } from "../config";
import { containsSubstring } from "@/widgets/navigation/lib/utils";

export type NavPanelState = {
  readonly segment: Segments;
  isOpen: boolean;
  isActive: boolean;
}

export type NavigationManagerContext = {
  panels: NavPanelState[];
  setPanels: React.Dispatch<React.SetStateAction<NavPanelState[]>>;
};

export const NavigationManagerContext =
  createContext<NavigationManagerContext | null>(null);

const createInitialPanelsStates = (
  currentPath: string | null,
  configuration: NavigationPanel[]
) => {
  return configuration.map((panel) => ({
    segment: panel.segment,
    isActive: containsSubstring(currentPath, panel.segment),
    isOpen: containsSubstring(currentPath, panel.segment),
  }));
};

export function NavigationManager({
  children,
  configuration,
}: {
  children: ReactNode;
  configuration: NavigationPanel[];
}) {

  const pathname = usePathname();

  const [panels, setPanels] = useState<NavPanelState[]>(() =>
    createInitialPanelsStates(pathname, configuration)
  );

  return (
    <NavigationManagerContext value={{ panels, setPanels }}>
      <Stack h={"min-content"} gap={0}>
        {children}
      </Stack>
    </NavigationManagerContext>
  );
}

function Panel({ panel }: { panel: NavigationPanel }) {
  const {
    openClosePanel,
    panelIsOpen,
    activatePanel,
  } = useNavigationManager(panel.segment);

  const pathname = usePathname()

  useEffect(() => {
    if (!containsSubstring(pathname, panel.segment)) return
    activatePanel()
  }, [pathname]);

  return (
    <>
      <Toggle
        segment={panel.segment}
        openClosePanelFn={openClosePanel}
        panelIsOpen={panelIsOpen}
      >
        {panel.menuItems.map((link) => (
          <NavLink
            key={link.label}
            label={link.label}
            path={link.path}
          />
        ))}
      </Toggle>
    </>
  );
}

function Toggle({
  children,
  segment,
  panelIsOpen,
  openClosePanelFn,
}: {
  children: ReactNode;
  panelIsOpen: boolean;
  segment: Segments;
  openClosePanelFn: () => void;
}) {

  const pathname = usePathname();

  const isActivePanel = containsSubstring(pathname, segment)

  const toggle = () => {
    openClosePanelFn();
  };

  return (
    <Flex style={{ order: isActivePanel ? "1" : "0" }}>
      <UnstyledButton
        role="navigation"
        className={clsx(classes.toggle, classes[segment])}
        onClick={toggle}
      ></UnstyledButton>
      {panelIsOpen && (
        <Flex className={clsx(classes.panel, classes[segment])} component="nav">
          {children}
        </Flex>
      )}
    </Flex>
  );
}

function NavLink({
  label,
  path,
}: {
  label: string;
  path: string;
}) {

  const pathname = usePathname()

  const isActiveNavLink = containsSubstring(pathname, path);

  return (
    <Link
      className={clsx(classes.link, { [classes.active]: isActiveNavLink })}
      href={path}
    >
      {label}
    </Link>
  );
}

Panel.displayName = "NavigationManager.Panel";
NavLink.displayName = "NavigationManager.NavLink";
Toggle.displayName = "NavigationManager.Toggle";

NavigationManager.Panel = Panel;
NavigationManager.Toggle = Toggle;
NavigationManager.Links = NavLink;
