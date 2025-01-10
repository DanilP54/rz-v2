"use client";
import { UnstyledButton, useMantineColorScheme } from "@mantine/core";
import classes from "./themeToggle.module.css";


export const ThemeToggle = () => {

  const { toggleColorScheme} = useMantineColorScheme({ keepTransitions: true })

  return <UnstyledButton onClick={toggleColorScheme} className={classes.toggle}></UnstyledButton>

};
