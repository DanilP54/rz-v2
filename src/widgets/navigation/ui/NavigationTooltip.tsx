"use client"

import { ReactNode } from "react"
import { createPortal } from "react-dom"
import { useNavigationTooltip } from "../lib/useNavigationTooltip";
import { IconX } from "@tabler/icons-react";
import classes from '../navogation.module.css';
import { clsx } from "clsx";




export const NavigationTooltip = ({ triggerIcon }: { triggerIcon: ReactNode }) => {

  const { text, isVisible, show, hide } = useNavigationTooltip()

  return (
    <>
      <div role="button" aria-label="Open navigation tooltip" className={classes.trigger} onClick={show}>
        {!isVisible && triggerIcon}
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
  return createPortal(
    <div className={clsx(classes.tooltip, { [classes.tooltip_visible]: isVisible })}>
      <h1 className={classes.tooltip_title}>{text}</h1>
      <div onClick={onClose} role="button" aria-label="Close" className={classes.button_close}>
        <IconX size={17} />
      </div>
    </div >
    , document.body)
}
