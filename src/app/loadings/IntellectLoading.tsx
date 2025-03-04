import { CardListSkeleton } from "@/shared/ui/card-list-skeleton/CardListSkeleton";
import { SearchBarSkeleton } from "@/shared/ui/search-bar-skeleton/SearchBarSkeleton";
import { FiltersSkeleton } from "@/shared/ui/filters-skeleton/FiltersSkeleton";
import { SearchAndFilters } from "@/widgets/search-and-filters/SearchAndFilters";


export function IntellectLoading() {
  return (
    <div>
      <SearchAndFilters
        segment="intellect"
        search={<SearchBarSkeleton />}
        filters={<FiltersSkeleton />}
      />
      <CardListSkeleton />
    </div>
  );
}
