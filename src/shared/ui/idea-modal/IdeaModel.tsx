"use client"
import { Modal } from "@mantine/core"
import { useDisclosure, useHover } from "@mantine/hooks";
import { IconAirBalloonFilled } from "@tabler/icons-react";
import classes from "./idea.module.css";

export const IdeaModal = () => {

  const [opened, { open, close }] = useDisclosure(false);
  const { ref, hovered } = useHover();

  return (
    <>
      <Modal opened={opened} onClose={close} title="Do you have idea? Write to us" centered>
        {/* { Content} */}
      </Modal>
      <div onClick={open} ref={ref} className={classes.container}>
        <IconAirBalloonFilled color={'yellow'} size={25} />
      </div>
    </>
  )
}
