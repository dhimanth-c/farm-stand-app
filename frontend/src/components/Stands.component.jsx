import axios from "axios";
import Stand from "./Stand.component";
import { useState, useEffect } from "react";

export default function Stands() {
  const [allStands, setAllStands] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/stands/all")
      .then((res) => {
        setAllStands(res.data);
      })
      .catch((error) => {
        window.location = "/error";
      });
  }, []);

  const standsElement = allStands.map((stand) => {
    return <Stand key={stand.id} stand={stand} />;
  });

  return <>{standsElement}</>;
}
