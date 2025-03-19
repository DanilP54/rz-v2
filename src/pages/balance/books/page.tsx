
export default async function BalanceBooksPage() {
  await fetch("https://fakestoreapi.in/api/products");

  return (
    <div>
      {/* <CardListSkeleton /> */}
    </div>
  );
}
