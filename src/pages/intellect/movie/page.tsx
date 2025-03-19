// import { SearchAndFilters } from "@/widgets/search-and-filters/SearchAndFilters";


export default async function IntellectMoviePage() {

  await fetch('https://fakestoreapi.in/api/products');


  return (
    <div>
      {/* <SearchAndFilters
        segment="intellect"
        filters={null}
        search={null}
      /> */}
      {/* <CardListSkeleton /> */}
    </div>
  );
}
