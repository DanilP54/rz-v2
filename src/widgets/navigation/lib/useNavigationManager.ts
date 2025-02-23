import { use } from "react";
import { Segments } from "../config";
import { Segment } from "next/dist/server/app-render/types";
import {
  NavigationManagerContext,
} from "../ui/NavigationManager";
import {togglePanelOpenState, updatePanelActiveState} from "@/widgets/navigation/lib/index";


// export type NavPanelState = {
//   readonly segment: Segments;
//   isOpen: boolean;
//   isActive: boolean;
// };

export function useNavigationManager(segment: Segment) {
  const context = use(NavigationManagerContext);

  if (!context) {
    throw new Error(
      "useNavigationManager must be used within a NavigationManagerProvider"
    );
  }

  const {panels, setPanels} = context

  const togglePanelVisibility = (segment: Segments) => {
    return () => {
      setPanels((panels) =>
          panels.map((panel) => togglePanelOpenState(segment, panel))
      );
    };
  };

  const isPanelOpen = (segment: Segments) => {
    return panels.find((panel) => panel.segment === segment)?.isOpen || false;
  };

  const activatePanel = (segment: Segment) => {
    return () => {
      setPanels((panels) =>
          panels.map((panel) => updatePanelActiveState(segment, panel))
      );
    };
  };

  const isPanelActive = (segment: Segment) => {
    return panels.find((panel) => panel.segment === segment)?.isActive || false;
  };
  return {
    panelIsOpen: isPanelOpen(segment),
    panelIsActive: isPanelActive(segment),
    openClosePanel: togglePanelVisibility(segment),
    activatePanel: activatePanel(segment),
  };

}

