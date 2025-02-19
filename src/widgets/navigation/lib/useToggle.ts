import { Segments } from "../config/navigationConfig";
import { useNavigationManager } from "./useNavigationManager";

export const useToggle = (segment: Segments) => {
  
  const { openClosePanel, panelIsOpen } = useNavigationManager();

  const toggle = () => {
    openClosePanel(segment);
  };

  return {
    toggle,
    isOpen: panelIsOpen(segment),
  };
};
