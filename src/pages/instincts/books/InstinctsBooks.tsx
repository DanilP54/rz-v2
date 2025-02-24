import { TopBar } from "@/shared/ui/top-bar/TopBar";
import { SearchBar } from "../music/ui/SearchBar";
import { Filter } from "../music/ui/Filter";


export default async function InstinctsBooksPage() {
  await fetch("https://fakestoreapi.in/api/products");

  return (
    <div>
      <TopBar
        variant="instincts"
        searchBar={<SearchBar />}
        filterToggles={<Filter />}
      />
      {/* <CardListSkeleton /> */}
    </div>
  );
}
