import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useApp = () => {
  const { data, error, isLoading } = useSWR("/api/me", fetcher);
};

function App() {
  return (
    <div className="App">
      <div>header</div>
    </div>
  );
}

export default App;
