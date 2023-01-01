import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function View(props) {
  const [id, setId] = useState(useParams().id);

  const [standData, setStandData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/stands/${id}`)
      .then((res) => {
        setStandData(res.data);
      })
      .catch((error) => {
        window.location = "/error";
      });
  }, []);

  function handleSubmit() {
    axios
      .delete(`http://localhost:4000/stands/${id}`)
      .then((res) => {
        window.location = "/stands/all";
      })
      .catch((error) => {
        window.location = "/error";
      });
  }

  return (
    <div className="card mb-3" style={{ maxWidth: "576px" }}>
      <div id="imageCarousel" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={standData.image}
              className="d-block w-100 rounded-top"
              style={{ maxHeight: "382px" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{standData.name}</h5>
        <p className="card-text">{standData.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{standData.location}</li>
      </ul>
      <div className="card-body p-0">
        <div className="row">
          <div className="col pe-0">
            <a
              role="button"
              aria-pressed="true"
              href={`/stands/${id}/update`}
              className="btn btn-info w-100"
              style={{ borderRadius: "0 0 0 0.375rem" }}
            >
              Update Stand
            </a>
          </div>
          <div className="col ps-0">
            <form onSubmit={(event) => handleSubmit(event)}>
              <button
                className="btn btn-danger w-100"
                style={{ borderRadius: "0 0 0.375rem 0" }}
              >
                Delete Stand
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
