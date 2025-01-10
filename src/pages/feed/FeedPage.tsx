import { ThemeToggle } from "@/features/theme-toggle";
import { Logo } from "@/shared/ui/logo/Logo";
import { Flex, Group, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { IconAlignBoxLeftTop, IconBrandOffice, IconSearch } from "@tabler/icons-react"
import classes from "./feedPage.module.css";
import { FeedTabs } from "./widgets/feed-tabs/FeedTabs";
import { AuthLinks } from "@/shared/ui/auth-links/AuthLinks";
import { SearchGlobal } from "@/features/global-search/ui/SearchGlobal";
import { SearchButton } from "@/shared/ui/search-button/SearchButton";

const FeedPage = () => {
  return (
    <div className={classes.page_wrapper}>
      <Flex h={"100svh"} justify={"space-between"}>
        <Stack component={"section"} pl={30} pr={50} pt={20} w={{xl: 450, lg: 400, md: 380}}>
          <Flex justify={"space-between"} align={"start"}>
            <Logo size="sm" link />
            <ThemeToggle />
          </Flex>
          <Stack component={"nav"} mt={20}>
            <Link href={"#"} className={classes.link}>
              <Group>
                <IconAlignBoxLeftTop />
                рз
              </Group>
            </Link>
            <Link href={"#"} className={classes.link}>
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
        <Stack w={{xl: 450, lg: 400, md: 380}} pt={10} pl={10} pr={20}>
          <Flex align={"center"} justify={"space-between"}>
            <SearchGlobal trigger={<SearchButton width={200} feedPage />} />
            <AuthLinks />
          </Flex>
          <Stack component={"aside"}>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
}

export default FeedPage;
