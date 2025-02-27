import { useLocalStorage } from "@mantine/hooks"
import { useNavigationManager } from "./useNavigationManager"
import { Segments } from "../config"
import { useState, useEffect } from "react"

type Storage = Segments | 'default'

type State = {
  text: string | undefined
  isShow: boolean
}

interface NavigationTooltip {
  text: string | undefined
  isShow: boolean
  show: () => any
  hide: () => void
}

const DEFAULT_TEXT_TOOLTIP = 'Нажав на один из разноцветных баннеров, смотрите, слушайте и читайте подобранные нами произведения искусства, под ваше состояние. Выберите один из них - узнайте больше.'

export const useNavigationTooltip = (): NavigationTooltip => {

  const { getPanels } = useNavigationManager();

  const [state, setState] = useState<State>({
    isShow: false,
    text: ''
  })

  const panelThatIsActive = getPanels().find(panel => panel.isActive);

  const [storage, setStorage] = useLocalStorage<Storage[]>({
    key: 'alreadyShowedNavigationTooltip',
    defaultValue: [],
    getInitialValueInEffect: false,
  })

  useEffect(() => {

    if (!panelThatIsActive) {
      if (!hasInStorage(storage, 'default')) {
        setState({
          text: DEFAULT_TEXT_TOOLTIP,
          isShow: true
        })
        setStorage(prev => [...prev, 'default'])
      } else {
        setState({
          text: DEFAULT_TEXT_TOOLTIP,
          isShow: false
        })
      }
    } else {
      if (hasInStorage(storage, panelThatIsActive.segment)) {
        setState(s => ({
          ...s,
          text: panelThatIsActive.aboutRu,
        }))
      } else {
        setStorage((prev) => [...prev, panelThatIsActive.segment])
        setState(s => ({
          text: panelThatIsActive.aboutRu,
          isShow: true
        }))
      }
    }

  }, [panelThatIsActive])


  const show = () => {
    setState(s => ({
      ...s,
      isShow: true
    }))
  }

  const hide = () => {
    setState(s => ({
      ...state,
      isShow: false
    }))
  }

  return { ...state, show, hide }
}


function hasInStorage(storage: Storage[], target: Storage) {
  return storage.includes(target)
}
