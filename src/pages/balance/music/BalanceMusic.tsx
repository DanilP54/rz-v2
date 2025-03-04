

export default async function BalanceMusicPage() {
  await fetch("https://fakestoreapi.in/api/products");
  return (
    <div>
      {/* <CardListSkeleton /> */}
    </div>
  );
}
