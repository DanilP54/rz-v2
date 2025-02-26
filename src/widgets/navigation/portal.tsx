"use client"
import { ReactNode, useState } from "react"
import { createPortal } from "react-dom"
import { useNavigationManager } from "./lib/useNavigationManager";
import { NavigationManagerContext } from "./ui/NavigationManager";

export const NavigationTooltip = ({ trigger }: { trigger: ReactNode }) => {

  const [isOpen, setIsOpen] = useState(false);
  // const { } = useNavigationManager()

  const handleClick = () => {
    if (!isOpen) {
      return setIsOpen(true)
    }

    return setIsOpen(false)
  }

  return (
    <>
      <div onClick={handleClick}>
        {trigger}
      </div>
      <Tooltip state={isOpen} />
    </>
  )
}

function Tooltip({ state }: { state: boolean }) {
  return createPortal(
    <h1
      style={{
        position: 'absolute',
        top: state ? 0 : '-300px',
        left: '300px',
        transition: 'top .3s ease'
      }}>Привет</h1>, document.body)
}
