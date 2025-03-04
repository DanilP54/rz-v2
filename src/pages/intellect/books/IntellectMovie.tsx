
export default async function IntellectMoviePage() {
  await fetch("https://fakestoreapi.in/api/products");

  return (
    <div>
      {/* <CardListSkeleton /> */}
    </div>
  );
}
