import React from "react";
import "./Style.css";

const JobResults = ({ jobs }) => (
  <div className="job-results">
    {jobs.length > 0 ? (
      jobs.map((job) => (
        <div key={job.id} className="job-item">
          <h3>{job.title}</h3>
          <p>Type: {job.type}</p>
          <p>{job.description}</p>
        </div>
      ))
    ) : (
      <p>No jobs found. Please adjust your search criteria.</p>
    )}
  </div>
);

export default JobResults;
