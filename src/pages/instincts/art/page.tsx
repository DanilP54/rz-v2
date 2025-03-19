import { SearchBar } from "../music/ui/SearchBar";
import { Filter } from "../music/ui/Filter";
import { SearchAndFilters } from "@/widgets/search-and-filters/SearchAndFilters";


export default async function InstinctsArtPage() {
  await fetch("https://fakestoreapi.in/api/products");

  return (
    <div>
      <SearchAndFilters
        segment="instincts"
        search={<SearchBar />}
        filters={<Filter />}
      />
      {/* <CardListSkeleton /> */}
    </div>
  );
}
