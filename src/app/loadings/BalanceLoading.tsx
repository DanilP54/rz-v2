import { CardListSkeleton } from "@/pages/instincts/music/ui/CardListSkeleton";
import { FilterTogglesSkeleton } from "@/pages/instincts/music/ui/FilterTogglesSkeleton";
import { SearchBarSkeleton } from "@/pages/instincts/music/ui/SearchBarSkeleton";
import { TopBar } from "@/shared/ui/top-bar/TopBar";


export function BalanceLoading() {
  return (
    <div>
      <TopBar
        variant="balance"
        searchBar={<SearchBarSkeleton />}
        filterToggles={<FilterTogglesSkeleton />}
      />
      <CardListSkeleton />
    </div>
  );
}