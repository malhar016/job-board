import { Company, Job } from "./db.js";

export const resolvers = {
  Query: {
    jobs: () => Job.findAll(),
    job: (_root, { id }) => Job.findById(id),
    company: (_root, { id }) => Company.findById(id),
  },

  Job: {
    company: ({ companyId }) => Company.findById(companyId),
  },

  Company: {
    jobs: ({ id }) => Job.findAll((job) => job.companyId === id),
  },

  Mutation: {
    createJob: (_root, { jobDetail }, { auth }) => {
      if (!auth) {
        throw new Error("Unautorized");
      }
      return Job.create(jobDetail);
    },

    updateJob(_root, { jobId, jobDetail }, { auth }) {
      if (!auth) {
        throw new Error("Unauthorized");
      }
      /* jobDetail.id = jobId;
      return Job.update(jobDetail) */

      //TODO use findById or just set it and update as above?
      return Job.findById(jobId).then((job) => {
        if (!job) throw new Error(`Cannot find job with id: ${jobId}`); //TODO show jobId in error or not?
        return Job.update({ ...jobDetail, id: job.id });
      });
    },
  },
};
