"use client"

import { IconArrowNarrowLeft } from "@tabler/icons-react";
import classes from './backNavigationButton.module.css';
import { UnstyledButton } from "@mantine/core";
import { useRouter } from "next/navigation";



export function BackNavigationButton() {

  const route = useRouter()

  const handleBack = () => {
    route.back()
  };

  return (
    <UnstyledButton>
      <IconArrowNarrowLeft onClick={handleBack} className={classes.arrow_back_icon} size={40} />
    </UnstyledButton>
  )
}
