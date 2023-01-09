import { useQuery } from "@apollo/client";
import { GET_JOBS_QUERY } from "./queries";

export const useJobs = () => {
  const { data, loading, error } = useQuery(GET_JOBS_QUERY, {
    fetchPolicy: "network-only",
  });
  return {
    jobs: data?.jobs,
    loading,
    isError: Boolean(error),
  };
};
