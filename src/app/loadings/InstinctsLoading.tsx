import { CardListSkeleton } from "@/pages/instincts/music/ui/CardListSkeleton";
import { FilterTogglesSkeleton } from "@/pages/instincts/music/ui/FilterTogglesSkeleton";
import { SearchBarSkeleton } from "@/pages/instincts/music/ui/SearchBarSkeleton";
import { TopBar } from "@/shared/ui/top-bar/TopBar";


export function InstinctsLoading() {
  return (
    <div>
      <TopBar
        variant="instincts"
        searchBar={<SearchBarSkeleton />}
        filterToggles={<FilterTogglesSkeleton />}
      />
      <CardListSkeleton />
    </div>
  );
}