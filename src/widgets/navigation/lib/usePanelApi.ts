import { NavigationSegments } from '@/shared/types/Segments';
import { NavPanelState } from '../ui/NavigationProvider';
import { useNavigationManager } from "./useNavigationManager";

export function usePanelApi(segment: NavigationSegments) {

  const { getPanels, updatePanels, selectorPanel } = useNavigationManager();

  const handleToggle = (segment: NavigationSegments) => {
    return () => updatePanels(panels => panels.map(panel => togglePanelOpenState(segment, panel)))
  }

  const handleActivate = (segment: NavigationSegments) => {
    return () => updatePanels(panels => panels.map(panel => updatePanelActiveState(segment, panel)))
  }

  const handleIsOpen = (segment: NavigationSegments) => {
    return selectorPanel(segment)?.isOpen || false
  }

  const handleIsActive = (segment: NavigationSegments) => {
    return selectorPanel(segment)?.isActive || false
  }

  return {
    isOpen: handleIsOpen(segment),
    isActive: handleIsActive(segment),
    activate: handleActivate(segment),
    toggle: handleToggle(segment)
  };
}


function togglePanelOpenState(targetSegment: NavigationSegments, panel: NavPanelState) {
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

function updatePanelActiveState(targetSegment: NavigationSegments, panel: NavPanelState) {
  const { segment } = panel;

  if (targetSegment !== segment) {
    return { ...panel, isOpen: false, isActive: false };
  }

  if (targetSegment === segment) {
    return { ...panel, isOpen: true, isActive: true };
  }

  return panel;
}
