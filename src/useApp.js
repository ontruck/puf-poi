import useSWR from "swr";
import { HOST } from "./settings/config";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const fetcher = async (...args) => {
  await sleep(2000);
  const config = {
    tenant: HOST,
  };
  return config;
};

const useApp = () => {
  const { data, error, isLoading } = useSWR("/api/me", fetcher);
  return {
    config: data,
    error,
    isLoading,
  };
};

export default useApp;
