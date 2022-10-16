import { request, gql } from "graphql-request";

const GRAPHQL_URL = "http://localhost:9000/graphql";

export const getAllJobs = async () => {
  const query = gql`
    query GET_ALL_JOBS {
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
  const data = await request(GRAPHQL_URL, query);
  return data;
};

export const getJobById = async id => {
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
  const { job } = await request(GRAPHQL_URL, query, { id });
  return job;
};

export const getCompanyById = async id => {
    const query = gql`
    query GetCompanyById($companyId: ID!) {
      company(id: $companyId) {
        id
        name
        description
      }
     }
    `;
    const { company } = await request(GRAPHQL_URL, query, { companyId: id });
    return company;
}