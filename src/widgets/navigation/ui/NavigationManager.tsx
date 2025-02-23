"use client";
import React, { createContext, useEffect } from "react";
import { Flex, Stack, UnstyledButton } from "@mantine/core";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import {
  useNavigationManager,
} from "../lib/useNavigationManager";
import { useToggle } from "../lib/useToggle";
import Link from "next/link";
import classes from "./navogationManager.module.css";
import clsx from "clsx";
import { NavigationPanel, Segments } from "../config/navigationConfig";


export interface NavPanelState extends NavigationPanel {
  readonly segment: Segments;
  isOpen: boolean;
  isActive: boolean;
};

export type NavigationManagerContext = {
  panels: NavPanelState[];
  setPanels: React.Dispatch<React.SetStateAction<NavPanelState[]>>;
};

export const NavigationManagerContext = createContext<NavigationManagerContext | null>(null);

const initializePanelsStates = (pathname: string | null, configuration: NavigationPanel[]) => {
  return configuration.map(panel => ({
    ...panel,
    isActive: pathname?.includes(panel.segment) || false,
    isOpen: pathname?.includes(panel.segment) || false
  }))
}

export function NavigationManager({ children, configuration }: {
  children: ReactNode;
  configuration: NavigationPanel[];
}) {

  const pathname = usePathname()

  const [panels, setPanels] = useState<NavPanelState[]>(() => initializePanelsStates(pathname, configuration))

  useEffect(() => {
    setPanels((panels) => panels.map(panel => updateActivatePanel(pathname, panel)))
  }, [pathname]);


  return (
    <NavigationManagerContext value={{ panels, setPanels }}>
      <Stack h={"min-content"} gap={0}>
        {children}
      </Stack>
    </NavigationManagerContext>
  );
}

function Panel({ panel }: { panel: any }) {




  return (
    <>

    </>
  )
}


function Toggle({ children, segment }: {
  children: ReactNode;
  segment: Segments;
}) {

  const pathname = usePathname()

  const { isOpen, toggle } = useToggle(segment);

  const isActivePanel = pathname?.includes(segment) || false;

  return (
    <Flex style={{ order: isActivePanel ? "1" : "0" }}>
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

function Links({ label, path }: {
  label: string;
  path: string;
}) {

  const { activatePanel } = useNavigationManager()

  const pathname = usePathname()

  const isActiveLink = pathname?.includes(path) || false

  // useEffect(() => {
  //     if (!isActiveLink) return
  //     activatePanel(path)
  // }, [pathname]);
  return (
    <Link
      className={clsx(classes.link, { [classes.active]: isActiveLink })}
      href={path}>
      {label}
    </Link>
  );
}


function updateActivatePanel(pathname: string | null, panel: NavPanelState) {
  if (pathname?.includes(panel.segment)) {
    return { ...panel, isActive: true, isOpen: true };
  }

  if (!pathname?.includes(panel.segment)) {
    return { ...panel, isActive: false, isOpen: false };
  }

  return panel;
}

Links.displayName = "NavigationManager.Links";
Toggle.displayName = "NavigationManager.Toggle";
NavigationManager.Toggle = Toggle;
NavigationManager.Links = Links;
