import CardItem from "../CardItem/CardItem";

export default function ItemList({ items }) {
  return (
    <>
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </>
  );
}
