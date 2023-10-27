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
  const onSubmit = async () => {
    const payload = {
      name,
      lat,
      long,
    };
    const response = await postJSON(payload);
    alert("se ha creado guay");
    console.log("🔥 ~ response:", response);
  };
  return (
    <div>
      <div>Nombree</div>
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
      <button type="button" onClick={() => onSubmit()}>
        Crear
      </button>
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
