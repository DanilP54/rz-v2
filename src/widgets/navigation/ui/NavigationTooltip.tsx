"use client"

import { createPortal } from "react-dom"
import { useEffect, useRef } from "react";
import { IconMichelinStarGreen } from "@tabler/icons-react";
import { useNavigationTooltip } from "../lib/useNavigationTooltip";
import { IconX } from "@tabler/icons-react";
import classes from '../navogation.module.css';
import { clsx } from "clsx";


export const NavigationTooltip = () => {

  const { segment, text, isVisible, show, hide } = useNavigationTooltip()

  return (
    <>
      <div role="button" aria-label="Open navigation tooltip" className={classes.trigger} onClick={show}>
        {!isVisible && <IconMichelinStarGreen strokeWidth={3} className={clsx(classes.trigger_icon, classes[segment])} />}
      </div>
      <Tooltip isVisible={isVisible} text={text} onClose={hide} />
    </>
  )
}

type Tooltip = {
  isVisible: boolean;
  text: string | undefined;
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
      <h1 className={classes.tooltip_title}>{text}</h1>
      <div onClick={onClose} role="button" aria-label="Close" className={classes.button_close}>
        <IconX size={17} />
      </div>
    </div >
    , element.current)
}
