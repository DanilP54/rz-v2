"use client";
import React, { createContext, useEffect } from "react";
import { Flex, Stack, UnstyledButton } from "@mantine/core";
import { ReactNode, useState } from "react";
import Link from "next/link";
import classes from "./navogationManager.module.css";
import clsx from "clsx";
import { NavigationPanel, Segments } from "../config";
import { containsSubstring } from "@/widgets/navigation/lib/utils";
import { useInitialPanel } from "../lib/useInitialPanel";
import { usePanelApi } from "../lib/usePanelApi";
import { useActivatePanelControll } from "../lib/useActivatePanelControll";

export type NavPanelState = {
  readonly segment: Segments;
  readonly aboutRu: string;
  isOpen: boolean;
  isActive: boolean;
}

export type NavigationManagerContext = {
  panels: NavPanelState[];
  setPanels: React.Dispatch<React.SetStateAction<NavPanelState[]>>;
};

export const NavigationManagerContext =
  createContext<NavigationManagerContext | null>(null);

export function NavigationManager({
  children,
}: {
  children: ReactNode;
}) {

  const [panels, setPanels] = useState<NavPanelState[]>([]);

  return (
    <NavigationManagerContext value={{ panels, setPanels }}>
      <Stack h={"min-content"} gap={0}>
        {children}
      </Stack>
    </NavigationManagerContext>
  );
}

function Panel({ panel }: { panel: NavigationPanel }) {

  const segment = useInitialPanel(panel)
  const { isActive, isOpen, toggle, activate } = usePanelApi(segment);
  const currentPath = useActivatePanelControll({
    segment,
    actionFn: activate
  })


  return (
    <>
      <Toggle
        segment={segment}
        toggleFn={toggle}
        panelIsOpen={isOpen}
        panelIsActive={isActive}
      >
        {panel.menuItems.map((link) => (
          <NavLink
            key={link.label}
            label={link.label}
            path={link.path}
            isActive={containsSubstring(currentPath, link.path)}
          />
        ))}
      </Toggle>
    </>
  );
}


type ToggleProps = {
  children: ReactNode;
  panelIsOpen: boolean;
  panelIsActive: boolean;
  segment: Segments;
  toggleFn: () => void;
}

function Toggle({
  children,
  segment,
  panelIsActive,
  panelIsOpen,
  toggleFn,
}: ToggleProps) {

  const toggle = () => {
    toggleFn();
  };

  return (
    <Flex style={{ order: panelIsActive ? "1" : "0" }}>
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

type NavLinkProps = {
  label: string;
  path: string;
  isActive: boolean;
}

function NavLink({
  label,
  path,
  isActive,
}: NavLinkProps) {

  return (
    <Link
      className={clsx(classes.link, { [classes.active]: isActive })}
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
