import { useState } from "react";
import "./App.css";
import useApp from "./useApp";
import Header from "./components/Header";

const Form = ({ type = "create" }) => {
  const [name, setName] = useState("");
  const onSubmit = () => {
    alert("onSubmit");
  };
  return (
    <div>
      <div>Nombre</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        <Form />
    </div>
  );
}

export default App;
