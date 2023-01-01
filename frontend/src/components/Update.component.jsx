import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Update() {
  const [id, setId] = useState(useParams().id);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/stands/${id}`)
      .then((res) => setFormData(res.data))
      .catch((error) => {
        window.location = "/error";
      });
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch(`http://localhost:4000/stands/${id}/update`, formData)
      .then((res) => {
        window.location = `/stands/${id}`;
      })
      .catch((error) => {
        window.location = "/error";
      });
  }

  return (
    <>
      <h1>Update Farmstand</h1>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="w-100"
        style={{ maxWidth: "576px" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            className="form-control"
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            rows="3"
            name="description"
            placeholder="Description"
            value={formData.description}
            className="form-control"
            onChange={(event) => handleChange(event)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            id="location"
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            className="form-control"
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            id="image"
            type="text"
            name="image"
            placeholder="Image"
            className="form-control"
            value={formData.image}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="d-grid gap-2 mb-3">
          <button className="btn btn-info" type="submit">
            Update Stand
          </button>
        </div>
        <div className="d-grid gap-2">
          <a
            href={`/stands/${id}`}
            class="btn btn-danger"
            role="button"
            aria-pressed="true"
          >
            Cancel
          </a>
        </div>
      </form>
    </>
  );
}
