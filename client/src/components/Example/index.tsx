import axios from "axios";
import { useQuery } from "react-query";

function Example() {
  const { isLoading, error, data, isFetching, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.data),
    staleTime: 2000,
    refetchOnMount: false,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <button onClick={() => refetch()}>cLICK me!</button>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

export default Example;
