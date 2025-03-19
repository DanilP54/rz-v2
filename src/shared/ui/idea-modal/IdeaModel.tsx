"use client"
import { Modal } from "@mantine/core"
import { useDisclosure, useHover } from "@mantine/hooks";
import { IconAirBalloonFilled } from "@tabler/icons-react";
import { css } from "../../../../styled-system/css";
import { ComponentType } from "react";

const container = css({
  backgroundColor: 'rgba(0,0, 0, 0.8)',
  position: 'fixed',
  bottom: 10,
  right: 5,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: 3,
  borderRadius: '50%'
})


export const IdeaModal = () => {

  const [opened, { open, close }] = useDisclosure(false);
  const { ref, hovered } = useHover();

  return (
    <>
      <Modal opened={opened} onClose={close} title="Do you have idea? Write to us" centered>
        {/* { Content} */}
      </Modal>
      <div onClick={open} ref={ref} className={container}>
        <IconAirBalloonFilled color={'yellow'} size={25} />
      </div>
    </>
  )
}
