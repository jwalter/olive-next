import useSWR from "swr";

class LiveOClient {
  useCompetitions() {
    const { data, error } = useSWR(`/api/competitions`, fetcher);
    return {
      competitions: data,
      isLoading: !error && !data,
      isError: error,
    };
  }

  useCompetition(id: String | String[]) {
    const { data, error } = useSWR(`/api/competition/${id}`, fetcher);
    return {
      competition: data,
      isLoading: !error && !data,
      isError: error,
    };
  }
}

const fetcher = (...args: any[]) =>
  fetch(args.shift(), ...args).then((res) => res.json());

export { LiveOClient };
