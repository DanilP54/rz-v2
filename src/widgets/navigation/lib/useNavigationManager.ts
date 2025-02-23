import {use} from "react";
import {Segments} from "../config/navigationConfig";
import {Segment} from "next/dist/server/app-render/types";
import {NavigationManagerContext} from "../ui/NavigationManager";

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

    const {panels, setPanels} = context;

    const activatePanel = (targetSegment: Segment) => {
        setPanels((panels) => panels.map((panel) => updatePanelActiveState(targetSegment, panel)));
    };

    const togglePanelVisibility = (targetSegment: Segments) => {
        setPanels((panels) => panels.map((panel) => togglePanelOpenState(targetSegment, panel))
        );
    };

    const isPanelOpen = (targetSegment: Segments) => {
        return panels.find((panel) => panel.segment === targetSegment)?.isOpen || false;
    };

    const isPanelActive = (targetSegment: Segment) => {
        return panels.find((panel) => panel.segment === targetSegment)?.isActive || false;
    }

    return {
        isPanelOpen,
        togglePanelVisibility,
        isPanelActive,
        activatePanel
    };
}

export function togglePanelOpenState(targetSegment: Segments, panel: NavPanelState) {

    const {isOpen, isActive, segment} = panel

    const isTargetSegment = segment === targetSegment

    if (!isTargetSegment && isOpen && !isActive) {
        return {...panel, isOpen: false};
    }

    if (isTargetSegment && !isActive) {
        return {...panel, isOpen: !isOpen};
    }

    return panel;
}

export function updatePanelActiveState(currentUrl: string, panel: NavPanelState) {

    const {segment} = panel

    const isUrlMatch = currentUrl.includes(segment)

    if(!isUrlMatch) {
        return {...panel, isOpen: false, isActive: false};
    }

    if (isUrlMatch) {
        return {...panel, isOpen: true, isActive: true};
    }

    return panel;
}

