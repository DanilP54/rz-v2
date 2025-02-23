import type {Segments} from "@/widgets/navigation/config";
import {NavPanelState} from "@/widgets/navigation/ui/NavigationManager";

export const containsSubstring = (source: string | null, target: string) => {
    return !!source?.includes(target)
}


export const togglePanelOpenState = (
    targetSegment: Segments,
    panel: NavPanelState
)=> {
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

export const updatePanelActiveState = (
    targetSegment: Segments,
    panel: NavPanelState
)=> {
    const { segment } = panel;

    if (targetSegment !== segment) {
        return { ...panel, isOpen: false, isActive: false };
    }

    if (targetSegment === segment) {
        return { ...panel, isOpen: true, isActive: true };
    }

    return panel;
}