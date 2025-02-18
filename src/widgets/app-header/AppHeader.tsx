import { ThemeToggle } from "@/features/theme-toggle";
import { Layout } from "./ui/Layout";
import { LangSwitchLinks } from "./ui/LangSwitchLinks";
import { SearchGlobal } from "@/features/global-search/ui/SearchGlobal";
import { AuthLinks } from "@/shared/ui/auth-links/AuthLinks";
import { SearchButton } from "@/shared/ui/search-button/SearchButton";

export const AppHeader = ({ notification }: { notification?: boolean }) => {
  return (
    <Layout
      notification={notification}
      themeToggle={<ThemeToggle />}
      langSwitchLinks={<LangSwitchLinks />}
      globalSearch={<SearchGlobal trigger={<SearchButton />} />}
      authLinks={<AuthLinks />}
    />
  );
};
