import { useLocalStorage } from "@mantine/hooks"
import { useNavigationManager } from "./useNavigationManager"
import { Segments } from "../config"
import { useState, useEffect } from "react"

type Storage = Segments | 'default'

type TooltipState = {
  text: string | undefined
  isVisible: boolean
}

interface NavigationTooltip {
  text: string | undefined
  isVisible: boolean
  show: () => any
  hide: () => void
}

const DEFAULT_TEXT_TOOLTIP = 'Нажав на один из разноцветных баннеров, смотрите, слушайте и читайте подобранные нами произведения искусства, под ваше состояние. Выберите один из них - узнайте больше.'

export const useNavigationTooltip = (): NavigationTooltip => {

  const { getPanels } = useNavigationManager();

  const [tooltipState, setTooltipState] = useState<TooltipState>({
    isVisible: false,
    text: ''
  })

  const panelThatIsActive = getPanels().find(panel => panel.isActive);

  const [storage, writeToStorage] = useLocalStorage<Storage[]>({
    key: "navigationTooltipsThatWereShown",
    defaultValue: [],
    getInitialValueInEffect: false,
  })


  const alreadyTooltipBeenShown = (target: Storage) => {
    return storage.includes(target)
  }

  const updateTooltipTextWithoutShowing = (text: string) => {
    setTooltipState(prevState => ({
      ...prevState,
      text
    }))
  }

  const updateTooltipTextAndShow = (text: string) => {
    setTooltipState({
      isVisible: true,
      text
    })
  }

  const handleDefaultTooltip = () => {
    if (!alreadyTooltipBeenShown('default')) {
      writeToStorage(prev => [...prev, 'default'])
      updateTooltipTextAndShow(DEFAULT_TEXT_TOOLTIP)
    } else {
      updateTooltipTextWithoutShowing(DEFAULT_TEXT_TOOLTIP)
    }
  }


  const handleActivePanelTooltip = () => {

    if (!panelThatIsActive) return

    if (!alreadyTooltipBeenShown(panelThatIsActive.segment)) {
      writeToStorage((prev) => [...prev, panelThatIsActive.segment])
      updateTooltipTextAndShow(panelThatIsActive.aboutRu)
    } else {
      updateTooltipTextWithoutShowing(panelThatIsActive.aboutRu)
    }
  }

  useEffect(() => {
    if (!panelThatIsActive) handleDefaultTooltip()
    else handleActivePanelTooltip()
  }, [panelThatIsActive])

  return {
    ...tooltipState,
    show: () => setTooltipState(prevState => ({ ...prevState, isVisible: true })),
    hide: () => setTooltipState(prevState => ({ ...prevState, isVisible: false }))
  }
}
