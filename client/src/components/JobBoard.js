import JobList from "./JobList";
// import { jobs as fakeJobs } from '../fake-data';
import { GET_JOBS_QUERY } from "../graphql/queries";
import { useQuery } from "@apollo/client";

function JobBoard() {
  const { data, loading, error } = useQuery(GET_JOBS_QUERY);

  if (error) return <h4>Something went wrong...</h4>;
  else
    return loading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <h1 className="title">Job Board</h1>
        <JobList jobs={data.jobs} />
      </div>
    );
}

export default JobBoard;
