export default function Stand(props) {
  return (
    <div className="card mb-3" style={{ maxWidth: "768px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.stand.image}
            style={{ height: "200px" }}
            className="w-100 img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <a
              href={`/stands/${props.stand.id}`}
              className="text-reset text-underline-hover"
            >
              <h5 className="card-title">{props.stand.name}</h5>
            </a>
            <p className="card-text">{props.stand.description}</p>
            <p className="card-text">{props.stand.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
