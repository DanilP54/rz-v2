import { SetStateAction, use } from "react";
import { NavigationPanel, Segments } from "../config";
import {
  NavigationManagerContext,
  NavPanelState,
} from "../ui/NavigationManager";

export function useNavigationManager() {
  const context = use(NavigationManagerContext);

  if (!context) {
    throw new Error(
      "useNavigationManager must be used within a NavigationManagerProvider"
    );
  }

  const { panels, setPanels } = context;


  const getPanels = () => {
    return panels
  }

  const selectorPanel = (segment: Segments) => {
    return panels.find(p => p.segment === segment)
  }

  const updatePanels = (cb: SetStateAction<NavPanelState[]>) => {
    setPanels(cb)
  }

  const initialPanel = (init: NavigationPanel, isActivePanel: boolean) => {

    if (isExistPanel(init.segment, panels)) return;

    const newPanel: NavPanelState = {
      segment: init.segment,
      isActive: isActivePanel,
      isOpen: isActivePanel,
      aboutRu: init.aboutRu
    }

    updatePanels((panel) => [...panel, newPanel]);
  };

  return {
    initialPanel,
    updatePanels,
    selectorPanel,
    getPanels
  }
}

function isExistPanel(segment: Segments, panels: NavPanelState[]) {
  return panels.some((panel) => panel.segment === segment);
}
