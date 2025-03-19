"use client"

import { createPortal } from "react-dom"
import { useEffect, useRef, useState } from "react";
import { IconBrandReactNative } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import classes from '../navogation.module.css';
import { clsx } from "clsx";
import { useStore } from "@nanostores/react";
import { persistentAtom } from "@nanostores/persistent";
import { usePathname } from "next/navigation";
import { NavigationSegments } from "../config";
import { $panels } from "../Navigation";
import { NavigationPanel } from "../config";

export const DEFAULT_TEXT_TOOLTIP = 'Нажав на один из разноцветных баннеров, смотрите, слушайте и читайте подобранные нами произведения искусства, под ваше состояние. Выберите один из них - узнайте больше.'
export const DEFAULT_TOOLTIP_SEGMENT = 'default'

export type SegmentsLocalStorage = NavigationSegments | typeof DEFAULT_TOOLTIP_SEGMENT

export const $localStorage = persistentAtom<SegmentsLocalStorage[]>('navigationTooltipsThatWereShown', [], {
  encode: JSON.stringify,
  decode: JSON.parse
})

function alreadyTooltipBeenShown(segment: SegmentsLocalStorage) {
  return $localStorage.get().includes(segment)
}

function writeToLocalStorage(segment: SegmentsLocalStorage) {
  $localStorage.set([...$localStorage.get(), segment])
}

function getActivePanel(panels: NavigationPanel[], pathname: string | null) {
  return panels.find((s) => pathname?.includes(s.segment))
}

export const NavigationTooltip = () => {

  const panels = useStore($panels)

  const [isVisible, setIsVisible] = useState(false)

  const pathname = usePathname()

  const activePanel = getActivePanel(panels, pathname)


  useEffect(() => {
    if (!activePanel) {
      if (!alreadyTooltipBeenShown('default')) {
        writeToLocalStorage('default')
        setIsVisible(true)
      }
    } else {
      if (!alreadyTooltipBeenShown(activePanel.segment)) {
        writeToLocalStorage(activePanel.segment)
        setIsVisible(true)
      }
    }
  }, [activePanel])


  const show = () => {
    setIsVisible(true)
  }

  const hide = () => {
    setIsVisible(false)
  }

  return (
    <>
      <div role="button" aria-label="Open navigation tooltip" className={classes.trigger} onClick={show}>
        {!isVisible &&
          <IconBrandReactNative
            data-testid="nav-tooltip-trigger"
            strokeWidth={3}
            className={clsx(classes.trigger_icon, classes[activePanel ? activePanel.segment : DEFAULT_TOOLTIP_SEGMENT])}
          />}
      </div>
      <Tooltip
        isVisible={isVisible}
        text={activePanel ? activePanel.aboutRu : DEFAULT_TEXT_TOOLTIP}
        onClose={hide}
      />
    </>
  )
}

function Tooltip({ isVisible, text, onClose }: {
  isVisible: boolean;
  text?: string;
  onClose: () => void;
}) {

  const element = useRef<Element | null>(null)

  useEffect(() => {
    element.current = document.body
  }, [])


  if (!element.current) {
    return null
  }

  return createPortal(
    <div className={clsx(classes.tooltip, { [classes.tooltip_visible]: isVisible })}>
      <h1 data-testid="nav-tooltip-description" className={classes.tooltip_title}>{text}</h1>
      <div onClick={onClose} role="button" aria-label="Close" className={classes.button_close}>
        <IconX size={17} />
      </div>
    </div >
    , element.current)
}
