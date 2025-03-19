import { ThemeToggle } from "@/features/theme-toggle";
import { Logo } from "@/shared/ui/logo/Logo";
import { Flex, Group, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { IconAlignBoxLeftTop, IconBrandOffice } from "@tabler/icons-react";
import classes from "./feedPage.module.css";
import { FeedTabs } from "./ui/FeedTabs";
import { AuthButtons } from "@/shared/ui/auth-buttons/AuthButtons";
import { SearchGlobal } from "@/features/global-search/ui/SearchGlobal";
import { SearchButton } from "@/shared/ui/search-button/SearchButton";

const FeedPage = () => {
  return (
    <div className={classes.page_wrapper}>
      <Flex h={"100svh"} justify={"space-between"}>
        <Stack
          component={"section"}
          style={{ borderRight: ".5px solid rgba(0,0,0, .1)" }}
          pl={30}
          pr={50}
          pt={20}
          w={{ xl: 450, lg: 400, md: 380 }}
        >
          <Flex justify={"space-between"} align={"start"}>
            <Logo size="sm" redirectOnClickTo="/" />
            <ThemeToggle />
          </Flex>
          <Stack component={"nav"} mt={20}>
            <Link href={"/rz"} className={classes.link}>
              <Group>
                <IconAlignBoxLeftTop />
                рз
              </Group>
            </Link>
            <Link href={"/radio"} className={classes.link}>
              <Group>
                <IconBrandOffice />
                рз радио
              </Group>
            </Link>
          </Stack>
        </Stack>
        <Stack component={"main"} flex={"1 1 0"} pt={10}>
          <FeedTabs />
        </Stack>
        <Stack
          w={{ xl: 450, lg: 400, md: 380 }}
          pt={10}
          pl={10}
          pr={20}
          style={{ borderLeft: ".5px solid rgba(0,0,0, .1)" }}
        >
          <Flex align={"center"} justify={"space-between"}>
            <SearchGlobal trigger={<SearchButton page="feed" />} />
            <AuthButtons />
          </Flex>
          <Stack component={"aside"}></Stack>
        </Stack>
      </Flex>
    </div>
  );
};

export default FeedPage;
