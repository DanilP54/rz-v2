import { ThemeToggle } from "@/features/theme-toggle";
import { Center, Flex, Stack } from "@mantine/core";
import { Logo } from "@/shared/ui/logo/Logo";
import Link from "next/link";
import classes from "./navigatorPage.module.css";

const NavigatorPage = () => {
  return (
    <>
      <Flex component="header" p={'lg'} align={'center'}>
        <ThemeToggle />
      </Flex>
      <Stack gap={50} mt={'4rem'}>
        <Center>
          <Logo />
        </Center>
        <Center>
          <Flex gap={70} component="nav">
            <div className={classes.link_box}>
              <Link href={"/feed"}>лента</Link>
            </div>
            <div className={classes.link_box}>
              <Link href={"/rz"}>рз</Link>
            </div>
            <div className={classes.link_box}>
              <Link href={"/radio"}>рз радио</Link>
            </div>
          </Flex>
        </Center>
      </Stack>
    </>
  );
}

export default NavigatorPage;
