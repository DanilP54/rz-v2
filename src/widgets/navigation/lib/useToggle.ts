import { Segments } from "../config/navigationConfig";
import { useNavigationManager } from "./useNavigationManager";

export const useToggle = (segment: Segments) => {
  
  const { togglePanelVisibility, isPanelOpen } = useNavigationManager();

  const toggle = () => {
    togglePanelVisibility(segment);
  };

  return {
    toggle,
    isOpen: isPanelOpen(segment),
  };
};
