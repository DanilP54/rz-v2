import { Filter } from "@/pages/instincts/music/ui/Filter";
import { SearchBar } from "@/pages/instincts/music/ui/SearchBar";
import { TopBar } from "@/shared/ui/top-bar/TopBar";

export default async function IntellectArtPage() {
  await fetch("https://fakestoreapi.in/api/products");

  return (
    <div>
      <TopBar
        variant="intellect"
        searchBar={<SearchBar />}
        filterToggles={<Filter />}
      />
      {/* <CardListSkeleton /> */}
    </div>
  );
}
