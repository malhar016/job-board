import { Company, Job } from "./db.js";

export const resolvers = {
    Query: {
        jobs: () => Job.findAll(),
    },

    Job: {
        company: ({ companyId }) => Company.findById(companyId)
    }
    
};
