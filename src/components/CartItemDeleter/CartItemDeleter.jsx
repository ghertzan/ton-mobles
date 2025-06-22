export default function CartItemDeleter({ item }) {
  const handleDelete = () => {
    alert("Delete");
  };
  return (
    <>
      <div>
        <span className=""> {item.qty} </span>
        <button className="btn" onClick={handleDelete}>
          <img src="../src/assets/001-basura.png" alt="delete" />
        </button>
      </div>
    </>
  );
}
