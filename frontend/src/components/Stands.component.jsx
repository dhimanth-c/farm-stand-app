import axios from "axios";
import Stand from "./Stand.component";
import { useState, useEffect } from "react";

export default function Stands() {
  const [allStands, setAllStands] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/stands/all")
      .then((res) => setAllStands(res.data))
      .catch((error) => console.log(error));
  }, []);

  const standsElement = allStands.map((stand) => {
    return <Stand key={stand.id} stand={stand} />;
  });

  return (
    <main className="container d-flex flex-column justify-content-center align-items-center mt-3">
      {standsElement}
    </main>
  );
}
