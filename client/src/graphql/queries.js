import { request, gql } from 'graphql-request';

const GRAPHQL_URL = "http://localhost:9000/graphql";

export const getAllJobs = async() => {
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
    return data
}