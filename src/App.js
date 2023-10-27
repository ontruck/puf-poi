import { useState } from "react";
import "./App.css";
import useApp from "./useApp";
import Header from "./components/Header";
import List from "./components/List";

async function postJSON(data) {
  const url =
    "https://9dbd-57-133-7-6.ngrok-free.app/v1/hackathon/pois/?tenant=correos";

  try {
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const Form = ({ type = "create" }) => {
  const [name, setName] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [req, setReq] = useState(false);
  const [car, setCar] = useState(false);
  const [bike, setBike] = useState(false);

  const onSubmit = async () => {
    const accepted_vehicles = {
      vehicles: [],
    };
    if (car) accepted_vehicles.vehicles.push("van");
    if (bike) accepted_vehicles.vehicles.push("truck");
    const payload = {
      name,
      lat,
      long,
      requires_access_permission: req,
    };
    const response = await postJSON(payload);
    alert("se ha creado guay");
  };
  return (
    <div>
      <div>Name</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Longitud</div>
      <input
        type="number"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <div>Latitud</div>
      <input
        type="number"
        value={long}
        onChange={(e) => setLong(e.target.value)}
      />
      <div>Requires permission</div>
      <input type="checkbox" checked={!!req} onClick={(e) => setReq(!req)} />
      <div>Van</div>
      <input type="checkbox" checked={!!car} onClick={(e) => setCar(!car)} />
      <div>Truck</div>
      <input type="checkbox" checked={!!bike} onClick={(e) => setBike(!bike)} />
      <div>
        <button type="button" onClick={() => onSubmit()}>
          Crear
        </button>
      </div>
    </div>
  );
};

function App() {
  const { config, error, isLoading } = useApp();
  console.log("🔥 ~ isLoading:", isLoading);
  console.log("🔥 ~ error:", error);
  console.log("🔥 ~ config:", config);
  if (isLoading) return <></>;
  return (
    <div className="App">
      <Header />
      <div>{config.tenant}</div>
      <div className="body">
        <List />
        <Form />
      </div>
    </div>
  );
}

export default App;
