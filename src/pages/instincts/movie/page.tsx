
import { SearchBar } from "../music/ui/SearchBar";
import { Filter } from "../music/ui/Filter";
import { SearchAndFilters } from "@/widgets/search-and-filters/SearchAndFilters";
import { CardListSkeleton } from "@/shared/ui/card-list-skeleton/CardListSkeleton";
import Link from "next/link";
import classes from './instincts.movie.module.css';
import { ScrollArrow } from "@/shared/ui/scroll-arrow/ScrollArrow";

export default async function InstinctsMoviePage() {

  // await fetch("https://fakestoreapi.in/api/products");

  return (
    <>
      <div>
        <SearchAndFilters
          segment="instincts"
          search={<SearchBar />}
          filters={<Filter />}
        />
        <Link href="/rz/instincts-movie/23">Movie</Link>
        <div className={classes.wrapper}>
          <CardListSkeleton />
        </div>
        <ScrollArrow />
      </div>
    </>
  );
}
