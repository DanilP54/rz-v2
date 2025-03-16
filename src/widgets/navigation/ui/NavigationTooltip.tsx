"use client"

import { createPortal } from "react-dom"
import { useEffect, useRef, useState } from "react";
import { IconTopologyStar3 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import classes from '../navogation.module.css';
import { clsx } from "clsx";
import { useStore } from "@nanostores/react";
import { persistentAtom } from "@nanostores/persistent";
import { usePathname } from "next/navigation";
import { NavigationSegments } from "@/shared/types/Segments";
import { $panels } from "../Navigation";
import { NavigationPanel } from "../config";

const DEFAULT_TEXT_TOOLTIP = 'Нажав на один из разноцветных баннеров, смотрите, слушайте и читайте подобранные нами произведения искусства, под ваше состояние. Выберите один из них - узнайте больше.'

type LocalStorage = NavigationSegments | 'default'

export const $localStorage = persistentAtom<LocalStorage[]>('navigationTooltipsThatWereShown', [], {
  encode: JSON.stringify,
  decode: JSON.parse
})

function alreadyTooltipBeenShown(segment: LocalStorage) {
  return $localStorage.get().includes(segment)
}

function writeToLocalStorage(segment: LocalStorage) {
  $localStorage.set([...$localStorage.get(), segment])
}

function getActivePanel(panels: NavigationPanel[], pathname: string | null) {
  return panels.find((s) => pathname?.includes(s.segment))
}

export const NavigationTooltip = () => {

  const panels = useStore($panels)

  const [isVisible, setIsVisible] = useState(false)

  const pathname = usePathname()

  const acitvePanel = getActivePanel(panels, pathname)


  useEffect(() => {
    if (!acitvePanel) {
      if (!alreadyTooltipBeenShown('default')) {
        writeToLocalStorage('default')
        setIsVisible(true)
      }
    } else {
      if (!alreadyTooltipBeenShown(acitvePanel.segment)) {
        writeToLocalStorage(acitvePanel.segment)
        setIsVisible(true)
      }
    }
  }, [acitvePanel])


  const show = () => {
    setIsVisible(true)
  }

  const hide = () => {
    setIsVisible(false)
  }

  return (
    <>
      <div role="button" aria-label="Open navigation tooltip" className={classes.trigger} onClick={show}>
        {!isVisible && <IconTopologyStar3 strokeWidth={3} className={clsx(classes.trigger_icon, classes[acitvePanel ? acitvePanel.segment : 'default'])} />}
      </div>
      <Tooltip
        isVisible={isVisible}
        text={acitvePanel?.aboutRu}
        onClose={hide}
      />
    </>
  )
}

type Tooltip = {
  isVisible: boolean;
  text?: string;
  onClose: () => void;
}

function Tooltip({ isVisible, text, onClose }: Tooltip) {

  const element = useRef<Element | null>(null)

  useEffect(() => {
    element.current = document.body
  }, [])


  if (!element.current) {
    return null
  }

  return createPortal(
    <div className={clsx(classes.tooltip, { [classes.tooltip_visible]: isVisible })}>
      <h1 className={classes.tooltip_title}>{text || DEFAULT_TEXT_TOOLTIP}</h1>
      <div onClick={onClose} role="button" aria-label="Close" className={classes.button_close}>
        <IconX size={17} />
      </div>
    </div >
    , element.current)
}
