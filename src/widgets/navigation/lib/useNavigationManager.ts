import { createContext, use, useLayoutEffect } from "react";
import { Segments } from "../config/navigationConfig";
import { usePathname } from "next/navigation";
import { Segment } from "next/dist/server/app-render/types";

export type NavPanelState = {
  readonly segment: Segments;
  isOpen: boolean;
  isActive: boolean;
};

export type NavigationManagerContext = {
  navPanelsState: NavPanelState[] | [];
  setNavPanelsState: React.Dispatch<React.SetStateAction<NavPanelState[] | []>>;
};

export const NavigationManagerContext =
  createContext<NavigationManagerContext | null>(null);

export function useNavigationManager() {

  const context = use(NavigationManagerContext);

  if (!context) {
    throw new Error(
      "useNavigationManager must be used within a NavigationManagerProvider"
    );
  }

  const { navPanelsState, setNavPanelsState } = context;

  const openClosePanel = (segment: Segments) => {
    setNavPanelsState((panel) =>
      panel.map((item) => handleOpenClosePanelState(segment, item))
    );
  };

  const setActivePanel = (segment: Segment) => {
    setNavPanelsState(s => {
      return s.map((s) => handleUpdateActivePanel(segment, s));
    })
  }

  const panelIsOpen = (segment: Segments) => {
    return navPanelsState.find((s) => s.segment === segment)?.isOpen || false;
  };

  const panelIsActive = (segment: Segment) => {
    return navPanelsState.find((s) => s.segment === segment)?.isActive || false;
  }

  const initialNewPanel = (segment: Segments) => {
    if (isExistSegment(segment, navPanelsState)) return;
    setNavPanelsState((s) => [...s, { segment, isOpen: false, isActive: false }]);
  };

  return {
    panelIsOpen,
    openClosePanel,
    initialNewPanel,
    panelIsActive,
    setActivePanel
  };
}

function handleOpenClosePanelState(segment: Segments, item: NavPanelState) {
  if (item.segment !== segment && item.isOpen && !item.isActive) {
    return { ...item, isOpen: false };
  }

  if (item.segment === segment && !item.isActive) {
    return { ...item, isOpen: !item.isOpen };
  }

  return item;
}

function handleUpdateActivePanel(segment: Segments, item: NavPanelState) {
  if (segment === item.segment) {
    return { ...item, isOpen: true, isActive: true };
  }

  if (segment !== item.segment) {
    return { ...item, isOpen: false, isActive: false };
  }

  return item;
}

function isExistSegment(segment: Segments, state: NavPanelState[]) {
  return state.some((panel) => panel.segment === segment);
}
