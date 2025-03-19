import { CardListSkeleton } from "@/shared/ui/card-list-skeleton/CardListSkeleton";
export default async function BalanceMoviePage() {
  await fetch("https://fakestoreapi.in/api/products");

  return (
    <div>
      <CardListSkeleton />
    </div>
  );
}
