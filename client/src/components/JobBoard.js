import { useJobs } from "../graphql/hooks";
import JobList from "./JobList";
// import { jobs as fakeJobs } from '../fake-data';

function JobBoard() {
  const { jobs, loading, isError } = useJobs();
  if (isError) return <h4>Something went wrong...</h4>;
  else
    return loading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <h1 className="title">Job Board</h1>
        <JobList jobs={jobs} />
      </div>
    );
}

export default JobBoard;
