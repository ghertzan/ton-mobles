import CardItem from "./CardItem";

export default function ItemList({ items }) {
  return (
    <>
      {items.map((item) => (
        <CardItem item={item} />
      ))}
    </>
  );
}
