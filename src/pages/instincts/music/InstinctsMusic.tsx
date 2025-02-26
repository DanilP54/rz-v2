import { TopBar } from "@/shared/ui/top-bar/TopBar";
import { Filter } from "./ui/Filter";
import { SearchBar } from "./ui/SearchBar";


export default async function InstinctsMusicPage() {

  // await fetch('https://fakestoreapi.in/api/products');


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
