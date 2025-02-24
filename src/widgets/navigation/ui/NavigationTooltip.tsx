"use client"

import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";

export const NavigationTooltip = ({ trigger }: { trigger: ReactNode }) => {

  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    // if (!isShow) {
    //   setIsShow(true)
    // }

  }

  return (
    <>
      <div onClick={handleClick}>
        {trigger}
      </div>
      {isShow && <Tooltip isShow={isShow} />}
    </>
  )
}

function Tooltip({ isShow }: { isShow: boolean }) {
  return createPortal(
    <>
      <h1
        style={{
          position: 'absolute',
          top: isShow ? '0' : '-300px',
          left: '300px'
        }}>Привет</h1>
    </>
    ,
    document.body)
}
