"use client";
import React, { createContext, useEffect } from "react";
import { Flex, Stack, UnstyledButton } from "@mantine/core";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import {
  includePath,
  useGetPanelAPI,
  useNavigationManager,
} from "../lib/useNavigationManager";
import { useToggle } from "../lib/useToggle";
import Link from "next/link";
import classes from "./navogationManager.module.css";
import clsx from "clsx";
import { NavigationPanel, Segments } from "../config/navigationConfig";

export interface NavPanelState {
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

const initializePanelsStates = (
  pathname: string | null,
  configuration: NavigationPanel[]
) => {
  return configuration.map((panel) => ({
    segment: panel.segment,
    isActive: pathname?.includes(panel.segment) || false,
    isOpen: pathname?.includes(panel.segment) || false,
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
    initializePanelsStates(pathname, configuration)
  );
  console.log(panels);

  return (
    <NavigationManagerContext value={{ panels, setPanels }}>
      <Stack h={"min-content"} gap={0}>
        {children}
      </Stack>
    </NavigationManagerContext>
  );
}

function Panel({ panel }: { panel: NavigationPanel }) {
  const { openClosePanel, isOpen, isActive } = useGetPanelAPI(panel.segment);

  return (
    <>
      <Toggle
        segment={panel.segment}
        openClosePanelFn={openClosePanel}
        isActive={isActive}
        isOpen={isOpen}
      >
        {panel.menuItems.map((link) => (
          <Links key={link.label} label={link.label} path={link.path} />
        ))}
      </Toggle>
    </>
  );
}

function Toggle({
  children,
  segment,
  isActive,
  isOpen,
  openClosePanelFn,
}: {
  children: ReactNode;
  isActive: boolean,
  segment: Segments;
  isOpen: boolean;
  openClosePanelFn: () => void;
}) {

  const pathname = usePathname();

  const toggle = () => {
    openClosePanelFn();
  };

  return (
    <Flex style={{ order: isActive ? "1" : "0" }}>
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

function Links({ label, path }: { label: string; path: string }) {

  const pathname = usePathname();

  const isActiveLink = includePath(pathname, path)

  return (
    <Link
      className={clsx(classes.link, { [classes.active]: isActiveLink })}
      href={path}
    >
      {label}
    </Link>
  );
}


Panel.displayName = "NavigationManager.Panel";
Links.displayName = "NavigationManager.Links";
Toggle.displayName = "NavigationManager.Toggle";

NavigationManager.Panel = Panel;
NavigationManager.Toggle = Toggle;
NavigationManager.Links = Links;
