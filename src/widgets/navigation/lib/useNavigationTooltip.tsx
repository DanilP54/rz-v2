import { useLocalStorage } from "@mantine/hooks"
import { useNavigationManager } from "./useNavigationManager"
import { useState, useEffect } from "react"
import { NavigationSegments } from "@/shared/types/Segments"

type Storage = NavigationSegments | 'default'

type TooltipState = {
  segment: Storage
  text: string | undefined
  isVisible: boolean
}

interface NavigationTooltip extends TooltipState {
  show: () => any
  hide: () => void
}

const DEFAULT_TEXT_TOOLTIP = 'Нажав на один из разноцветных баннеров, смотрите, слушайте и читайте подобранные нами произведения искусства, под ваше состояние. Выберите один из них - узнайте больше.'

export const useNavigationTooltip = (): NavigationTooltip => {


  const [tooltipState, updateTooltipState] = useState<TooltipState>({
    segment: 'default',
    isVisible: false,
    text: DEFAULT_TEXT_TOOLTIP
  });

  const { getPanels } = useNavigationManager();
  const panelThatIsActive = getPanels().find(panel => panel.isActive);

  const [storage, writeToStorage] = useLocalStorage<Storage[]>({
    key: "navigationTooltipsThatWereShown",
    defaultValue: [],
    getInitialValueInEffect: false,
  });

  useEffect(() => {
    if (!panelThatIsActive) handleDefaultTooltip()
    else handleActivePanelTooltip()
  }, [panelThatIsActive])

  function handleDefaultTooltip() {

    if (!alreadyTooltipBeenShown(storage, 'default')) {
      writeToStorage(prev => [...prev, 'default'])
      updateTooltipState((prevState) => ({
        ...prevState,
        segment: 'default',
        isVisible: true,
      }))
    } else {
      updateTooltipState(prevState => ({
        ...prevState,
        segment: 'default',
      }))
    }
  }

  function handleActivePanelTooltip() {

    if (!panelThatIsActive) return

    if (!alreadyTooltipBeenShown(storage, panelThatIsActive.segment)) {
      writeToStorage((prev) => [...prev, panelThatIsActive.segment])
      updateTooltipState({
        segment: panelThatIsActive.segment,
        isVisible: true,
        text: panelThatIsActive.aboutRu
      })
    } else {
      updateTooltipState(prevState => ({
        // panel extends from prev state such as we nedded save panel is open if it's open
        ...prevState,
        segment: panelThatIsActive.segment,
        text: panelThatIsActive.aboutRu
      }))
    }
  }

  return {
    ...tooltipState,
    show: () => updateTooltipState(prevState => ({ ...prevState, isVisible: true })),
    hide: () => updateTooltipState(prevState => ({ ...prevState, isVisible: false }))
  }
}

function alreadyTooltipBeenShown(storage: Storage[], target: Storage) {
  return storage.includes(target)
}
