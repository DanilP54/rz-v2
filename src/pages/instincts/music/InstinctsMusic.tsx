import { Filter } from "./ui/Filter";
import { SearchBar } from "./ui/SearchBar";
import { SearchAndFilters } from "@/widgets/search-and-filters/SearchAndFilters";


export default async function InstinctsMusicPage() {

  await fetch('https://fakestoreapi.in/api/products');


  return (
    <div>
      <SearchAndFilters
        segment="instincts"
        search={<SearchBar />}
        filters={<Filter />}
      />
    </div>
  );
}
