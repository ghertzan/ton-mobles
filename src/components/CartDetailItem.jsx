export default function CartDetailItem({ item }) {
  console.log(item);
  return (
    <>
      <div className="card w-75 mb-3">
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Button
          </a>
        </div>
      </div>
    </>
  );
}
