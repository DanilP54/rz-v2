import { CardListSkeleton } from "@/shared/ui/card-list-skeleton/CardListSkeleton";
import { FiltersSkeleton } from "@/shared/ui/filters-skeleton/FiltersSkeleton";
import { SearchBarSkeleton } from "@/shared/ui/search-bar-skeleton/SearchBarSkeleton";
import { SearchAndFilters } from "@/widgets/search-and-filters/SearchAndFilters";


export function BalanceLoading() {
  return (
    <div>
      <SearchAndFilters
        segment="balance"
        filters={<FiltersSkeleton />}
        search={<SearchBarSkeleton />}
      />
      <CardListSkeleton />
    </div>
  );
}
