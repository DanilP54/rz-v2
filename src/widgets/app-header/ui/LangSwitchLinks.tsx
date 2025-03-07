import { Flex } from "@mantine/core"
import classes from './languageSwitcher.module.css';
import Link from "next/link"

export const LangSwitchLinks = () => {
  return (
    <Flex className={classes.box} gap={12}>
      <Link href={'#'}>eng</Link>
      <Link href={'#'}>ru</Link>
      <Link href={'#'}>ua</Link>
      <Link href={'#'}>ro</Link>
    </Flex>
  )
}
