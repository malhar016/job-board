import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = "http://localhost:9000/graphql";
export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const GET_JOBS_QUERY = gql`
  query GetAllJobs {
    jobs {
      id
      title
      company {
        id
        name
      }
    }
  }
`;

export const getJobById = async (id) => {
  console.log("sending request with jobId", id);
  const query = gql`
    query GetJobById($id: ID!) {
      job(id: $id) {
        id
        title
        description
        company {
          id
          name
        }
      }
    }
  `;
  const {
    data: { job },
  } = await client.query({ query, variables: { id } });
  // const { job } = await request(GRAPHQL_URL, query, { id });
  return job;
};

export const getCompanyById = async (id) => {
  const query = gql`
    query GetCompanyById($companyId: ID!) {
      company(id: $companyId) {
        id
        name
        description
        jobs {
          id
          title
        }
      }
    }
  `;
  const {
    data: { company },
  } = await client.query({ query, variables: { companyId: id } });
  // const { company } = await request(GRAPHQL_URL, query, { companyId: id });
  return company;
};

export const createJob = async (jobDetail) => {
  const mutation = gql`
    mutation ($jobDetail: JobDetail!) {
      job: createJob(jobDetail: $jobDetail) {
        id
        title
        description
        company {
          id
          name
        }
      }
    }
  `;
  const {
    data: { job },
  } = client.mutate({ mutation, variables: { jobDetail } });
  // const { job } = await request(GRAPHQL_URL, mutation, { jobDetail: jobDetail });
  return job;
};
