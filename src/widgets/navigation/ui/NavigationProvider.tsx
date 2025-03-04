"use client";

import React, { createContext } from "react";
import { Flex, UnstyledButton } from "@mantine/core";
import { ReactNode, useState } from "react";
import Link from "next/link";
import classes from "../navogation.module.css";
import clsx from "clsx";
import { NavigationPanel } from "../config";
import { containsSubstring } from "@/widgets/navigation/lib/utils";
import { useInitialPanel } from "../lib/useInitialPanel";
import { usePanelApi } from "../lib/usePanelApi";
import { useActivatePanelControll } from "../lib/useActivatePanelControll";
import { NavigationSegments } from "@/shared/types/Segments";

export type NavPanelState = {
  readonly segment: NavigationSegments;
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

export function NavigationProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [panels, setPanels] = useState<NavPanelState[]>([]);

  return (
    <NavigationManagerContext value={{ panels, setPanels }}>
      {children}
    </NavigationManagerContext>
  );
}




export function Panel({ panel }: { panel: NavigationPanel }) {

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
        {
          panel.menuItems.map((link) => (
            <NavLink
              key={link.label}
              label={link.label}
              path={link.path}
              isActive={containsSubstring(currentPath, link.path)}
            />
          ))
        }
      </Toggle>
    </>
  );
}


type ToggleProps = {
  children: ReactNode;
  panelIsOpen: boolean;
  panelIsActive: boolean;
  segment: NavigationSegments;
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

NavigationProvider.Panel = Panel;
NavigationProvider.Toggle = Toggle;
NavigationProvider.Links = NavLink;
