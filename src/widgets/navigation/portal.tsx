"use client"
import { ReactNode, useState } from "react"
import { createPortal } from "react-dom"

export const NavigationTooltip = ({ trigger }: { trigger: ReactNode }) => {

  const [isOpen, setIsOpen] = useState(false);



  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  return (
    <>
      <div onClick={handleClick}>
        {trigger}
      </div>
      {isOpen && <Tooltip state={isOpen} />}
    </>
  )
}

function Tooltip({ state }: { state: boolean }) {
  return createPortal(
    <h1
      style={{
        position: 'absolute',
        top: state ? 0 : '-300px',
        left: '300px'
      }}>Привет</h1>, document.body)
}
