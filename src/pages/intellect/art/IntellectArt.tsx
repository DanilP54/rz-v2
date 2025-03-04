
export default async function IntellectArtPage() {
  await fetch("https://fakestoreapi.in/api/products");

  return (
    <div>
      {/* <CardListSkeleton /> */}
    </div>
  );
}
