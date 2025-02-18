import { createContext, use } from "react";
import { Segments } from "../config/navigationConfig";
import { usePathname } from "next/navigation";

export type NavPanelState = {
  readonly segment: Segments;
  isOpen: boolean;
  isActive: boolean;
};

export type NavigationManagerContext = {
  navPanels: NavPanelState[] | [];
  setNavPanels: React.Dispatch<React.SetStateAction<NavPanelState[] | []>>;
};

export const NavigationManagerContext =
  createContext<NavigationManagerContext | null>(null);

export function useNavigationManager() {
  const pathname = usePathname();

  const context = use(NavigationManagerContext);

  if (!context) {
    throw new Error(
      "useNavigationManager must be used within a NavigationManagerProvider"
    );
  }

  const { navPanels, setNavPanels } = context;

  const updatePanel = (segment: Segments) => {
    setNavPanels((panel) =>
      panel.map((item) => handleUpdatePanelState(segment, item))
    );
  };

  const currentPanelIsOpen = (segment: Segments) => {
    return navPanels.find((s) => s.segment === segment)?.isOpen || false;
  };

  const initialNewState = (segment: Segments) => {
    const matchPath = pathname?.includes(segment);
    setNavPanels((s) => [
      ...s,
      {
        segment,
        isOpen: matchPath ? true : false,
        isActive: matchPath ? true : false,
      },
    ]);
  };

  const updateActivePanel = (segment: Segments) => {
    setNavPanels((panel) =>
      panel.map((item) => handleUpdateActivePanel(segment, item))
    );
  };

  const getActivePanel = (segment: Segments) => {
    return navPanels.find((s) => s.segment === segment)?.isActive;
  };

  return {
    getActivePanel,
    updateActivePanel,
    currentPanelIsOpen,
    updatePanel,
    initialNewState,
  };
}

function handleUpdatePanelState(segment: Segments, item: NavPanelState) {
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
