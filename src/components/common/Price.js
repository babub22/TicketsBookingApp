export function Price({ data }) {
  return (
    <span className="font-bold">Price: {data?.price ? data.price : 0}$</span>
  );
}
