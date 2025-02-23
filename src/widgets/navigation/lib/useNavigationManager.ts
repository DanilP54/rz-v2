import { SetStateAction, use, useEffect } from "react";
import { Segments } from "../config/navigationConfig";
import { Segment } from "next/dist/server/app-render/types";
import {
  NavigationManagerContext,
  NavPanelState,
} from "../ui/NavigationManager";
import { usePathname } from "next/navigation";

// export type NavPanelState = {
//   readonly segment: Segments;
//   isOpen: boolean;
//   isActive: boolean;
// };

export function useNavigationManager() {
  const context = use(NavigationManagerContext);

  if (!context) {
    throw new Error(
      "useNavigationManager must be used within a NavigationManagerProvider"
    );
  }

  const updatePanels = (cb: SetStateAction<NavPanelState[]>) => {
    context.setPanels(cb);
  };

  // const activatePanel = (targetSegment: Segment) => {
  //     setPanels((panels) => panels.map((panel) => updatePanelActiveState(targetSegment, panel)));
  // };

  // const togglePanelVisibility = (targetSegment: Segments) => {
  //     setPanels((panels) => panels.map((panel) => togglePanelOpenState(targetSegment, panel))
  //     );
  // };

  // const isPanelOpen = (targetSegment: Segments) => {
  //     return panels.find((panel) => panel.segment === targetSegment)?.isOpen || false;
  // };

  // const isPanelActive = (targetSegment: Segment) => {
  //     return panels.find((panel) => panel.segment === targetSegment)?.isActive || false;
  // }

  return {
    updatePanels,
    panels: context.panels,
  };
}

export function togglePanelOpenState(
  targetSegment: Segments,
  panel: NavPanelState
) {
  const { isOpen, isActive, segment } = panel;

  const isTargetSegment = segment === targetSegment;

  if (!isTargetSegment && isOpen && !isActive) {
    return { ...panel, isOpen: false };
  }

  if (isTargetSegment && !isActive) {
    return { ...panel, isOpen: !isOpen };
  }

  return panel;
}

export function updatePanelActiveState(
  currentUrl: string,
  panel: NavPanelState
) {
  const { segment } = panel;

  const isUrlMatch = currentUrl.includes(segment);

  if (!isUrlMatch) {
    return { ...panel, isOpen: false, isActive: false };
  }

  if (isUrlMatch) {
    return { ...panel, isOpen: true, isActive: true };
  }

  return panel;
}

export const useGetPanelAPI = (segment: Segment) => {
  const { panels, updatePanels } = useNavigationManager();

  const pathname = usePathname();

  useEffect(() => {

    if (!includePath(pathname, segment)) return;

    updatePanels((panels) =>
      panels.map((panel) => updateActivatePanel(segment, panel))
    );

  }, [pathname]);


  const togglePanelVisibility = (segment: Segments) => {
    return () => {
      updatePanels((panels) =>
        panels.map((panel) => togglePanelOpenState(segment, panel))
      );
    };
  };

  const isPanelOpen = (segment: Segments) => {
    return panels.find((panel) => panel.segment === segment)?.isOpen || false;
  };

  const activatePanel = (segment: Segment) => {
    return () => {
      updatePanels((panels) =>
        panels.map((panel) => updatePanelActiveState(segment, panel))
      );
    };
  };

  const isPanelActive = (segment: Segment) => {
    return panels.find((panel) => panel.segment === segment)?.isActive || false;
  };
  return {
    isOpen: isPanelOpen(segment),
    isActive: isPanelActive(segment),
    openClosePanel: togglePanelVisibility(segment),
    activate: activatePanel(segment),
  };
};


export function includePath(pathname: string | null, target: string) {
    return pathname?.includes(target) || false;
  }


function updateActivatePanel(segment: Segment, panel: NavPanelState) {
  if (segment === panel.segment) {
    return { ...panel, isActive: true, isOpen: true };
  }

  if (segment !== panel.segment) {
    return { ...panel, isActive: false, isOpen: false };
  }

  return panel;
}
