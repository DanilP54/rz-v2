import { createContext, use, useLayoutEffect } from "react";
import { Segments } from "../config/navigationConfig";
import { Segment } from "next/dist/server/app-render/types";
import { NavigationManagerContext } from "../ui/NavigationManager";
import { usePathname } from "next/navigation";

export type NavPanelState = {
  readonly segment: Segments;
  isOpen: boolean;
  isActive: boolean;
};


export function useNavigationManager() {

  const context = use(NavigationManagerContext);

  if (!context) {
    throw new Error(
      "useNavigationManager must be used within a NavigationManagerProvider"
    );
  }

  const { panels, setPanels } = context;

  const pathname = usePathname()


  const setActivePanel = (segment: Segment) => {
    setPanels((s) => {
      return s.map((s) => handleUpdateActivePanel(segment, s));
    });
  };

  const openClosePanel = (segment: Segments) => {
    setPanels((panel) =>
      panel.map((item) => handleOpenClosePanelState(segment, item))
    );
  };


  const panelIsOpen = (segment: Segments) => {
    return panels.find((s) => s.segment === segment)?.isOpen || false;
  };

  const panelIsActive = (segment: Segment) => {
    return panels.find((s) => s.segment === segment)?.isActive || false;
  }

  const initialNewPanel = (segment: Segments) => {
    if (isExistSegment(segment, panels)) return;
    setPanels((s) => [...s, { segment, isOpen: false, isActive: false }]);
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
