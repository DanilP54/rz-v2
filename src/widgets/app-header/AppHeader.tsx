import { ThemeToggle } from "@/features/theme-toggle";
import { Layout } from "./ui/Layout";
import { LangSwitchLinks } from "./ui/LangSwitchLinks";
import { SearchGlobal } from "@/features/global-search/ui/SearchGlobal";
import { AuthButtons } from "@/shared/ui/auth-buttons/AuthButtons";
import { SearchButton } from "@/shared/ui/search-button/SearchButton";
import { ReactNode } from "react";

export const AppHeader = ({ navigationTooltipAction }: { navigationTooltipAction?: ReactNode }) => {
  return (
    <Layout
      navigationTooltipAction={navigationTooltipAction}
      themeToggle={<ThemeToggle />}
      langSwitchLinks={<LangSwitchLinks />}
      globalSearch={<SearchGlobal trigger={<SearchButton />} />}
      authLinks={<AuthButtons />}
    />
  );
};
