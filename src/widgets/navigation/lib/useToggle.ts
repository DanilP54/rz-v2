import { Segments } from "../navigationPanels";
import { useNavigationManager } from "./useNavigationManager";

export const useToggle = (segment: Segments) => {
    const { updatePanel, currentPanelIsOpen } = useNavigationManager()

    const toggle = () => {
        updatePanel(segment)
    }

    const isOpen = currentPanelIsOpen(segment)

    return {
        toggle,
        isOpen,
    }
}


