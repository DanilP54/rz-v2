import { CardListSkeleton } from "@/shared/ui/card-list-skeleton/CardListSkeleton";
import { SearchAndFilters } from "@/widgets/search-and-filters/SearchAndFilters";
import { SearchBarSkeleton } from "@/shared/ui/search-bar-skeleton/SearchBarSkeleton";
import { FiltersSkeleton } from "@/shared/ui/filters-skeleton/FiltersSkeleton";


export function InstinctsLoading() {
  return (
    <div>
      <SearchAndFilters
        segment="instincts"
        filters={<FiltersSkeleton />}
        search={<SearchBarSkeleton />}
      />
      <CardListSkeleton />
    </div>
  );
}
