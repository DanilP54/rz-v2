"use client"
import { ReactNode, useState } from "react"
import { createPortal } from "react-dom"
import { useNavigationManager } from "../lib/useNavigationManager";
import { useNavigationTooltip } from "../lib/useNavigationTooltip";
import { IconEyeClosed, IconX } from "@tabler/icons-react";
import { Stack } from "@mantine/core";




export const NavigationTooltip = ({ trigger }: { trigger: ReactNode }) => {

  const { text, isShow, show, hide } = useNavigationTooltip()

  return (
    <>
      <div style={{ cursor: 'pointer' }} onClick={show}>
        {!isShow && trigger}
      </div>
      <Tooltip isShow={isShow} text={text} onClose={hide} />
    </>
  )
}

function Tooltip({ isShow, text, onClose }: { isShow: boolean, text: string | undefined, onClose: () => void }) {
  return createPortal(
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      justifyContent: 'space-between',
      width: '40%',
      position: 'absolute',
      top: isShow ? '15px' : '-300px',
      left: '200px',
      transition: 'top .3s ease',
      border: '3px solid #333',
      padding: '5px  10px',
      backgroundColor: '#222',
      borderRadius: '5px',
    }}>
      <div>
        <h1
          style={{
            fontSize: '14px',
            padding: 0,
            margin: 0
          }}>{text}</h1>
      </div>
      <div onClick={onClose} style={{
        cursor: 'pointer',
        textAlign: 'right',
      }}>
        <IconX size={17} />
      </div>

    </div >
    , document.body)
}
