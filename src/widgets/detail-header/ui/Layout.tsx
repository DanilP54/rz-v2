import { Flex } from "@mantine/core"
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type LayoutProps = {
  themeToggle?: ReactNode;
  languageSwitcher?: ReactNode;
  globalSearch?: ReactNode;
};

export const Layout = ({
  themeToggle,
  languageSwitcher,
  globalSearch,
}: LayoutProps) => {
  return (
    <Flex component="header" align={"center"} justify={"space-between"}>
      <Link href={'/rz'} style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Image
          src={"/logo/logo-dark.png"}
          width={50}
          height={50}
          alt="logo"
          priority
        />
      </Link>
      <Flex align={"center"} gap={70}>
        {themeToggle}
        {languageSwitcher}
        {globalSearch}
      </Flex>
    </Flex>
  )
}
