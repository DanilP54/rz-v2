import { ThemeToggle } from "@/features/theme-toggle";
import { Layout } from "./ui/Layout";
import { LangSwitchLinks } from "../app-header/ui/LangSwitchLinks";
import { SearchGlobal } from "@/features/global-search/ui/SearchGlobal";
import { SearchButton } from "@/shared/ui/search-button/SearchButton";
import classes from './detailHeader.module.css';
import { IconSearch } from "@tabler/icons-react";
import { NavigationSegments } from "@/shared/types/Segments";
import clsx from "clsx";

type DetailHeaderProps = {
  segment: NavigationSegments
}

export const DetailsHeader = ({ segment }: DetailHeaderProps) => {
  return (
    <header className={clsx(classes.header, classes[segment])}>
      <Layout
        themeToggle={<ThemeToggle />}
        languageSwitcher={<LangSwitchLinks />}
        globalSearch={<SearchGlobal trigger={<SearchButton />} />}
      />
    </header>
  )
};
