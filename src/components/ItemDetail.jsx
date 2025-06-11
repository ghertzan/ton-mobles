export default function ItemDetail({ item }) {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card mb-3" style={{ maxWidth: "540px", height: "auto" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item?.thumbnail}
              className="img-fluid rounded-start"
              alt={item?.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item?.title}</h5>
              <p className="card-text">{item?.description}</p>
              <p className="text-muted">$ {item?.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
