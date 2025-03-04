import { ThemeToggle } from "@/features/theme-toggle";
import { Layout } from "./ui/Layout";
import { LangSwitchLinks } from "../app-header/ui/LangSwitchLinks";
import { SearchGlobal } from "@/features/global-search/ui/SearchGlobal";
import { SearchButton } from "@/shared/ui/search-button/SearchButton";
import classes from './detailHeader.module.css';

type DetailHeaderProps = {
  variant: string
}

export const DetailHeader = ({ variant }: DetailHeaderProps) => {
  return (
    <>
      <Layout
        themeToggle={<ThemeToggle />}
        languageSwitcher={<LangSwitchLinks />}
        globalSearch={<SearchGlobal trigger={<SearchButton />} />}
      />
    </>
  )
};
