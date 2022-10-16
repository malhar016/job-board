import { Company, Job } from "./db.js";

export const resolvers = {
    Query: {
        jobs: () => Job.findAll(),
        job: (_root, { id }) => Job.findById(id),
        company: (_root, { id }) => Company.findById(id),
    },

    Job: {
        company: ({ companyId }) => Company.findById(companyId)
    }
    
};
