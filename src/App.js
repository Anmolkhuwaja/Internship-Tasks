import React, { useState } from 'react';
import JobSearch from './JobSearchComponents/JobSearch';
import JobResults from './JobSearchComponents/JobResults';
import './JobSearchComponents/Style.css';

const App = () => {
  const jobs = [
    { id: 1, title: 'Frontend Developer', type: 'Full-time', location: 'Remote', description: 'Develop and maintain web applications.' },
    { id: 2, title: 'Backend Developer', type: 'Full-time', location: 'Remote', description: 'Manage server-side web application logic.' },
    { id: 3, title: 'UI/UX Designer', type: 'Part-time', location: 'Remote', description: 'Design user interfaces and experiences.' },
    { id: 4, title: 'Web Designer', type: 'Full-time', location: 'Remote', description: 'Create and style website layouts.' },
    { id: 5, title: 'Full Stack Developer', type: 'Full-time', location: 'Remote', description: 'Handle both frontend and backend web development.' },
    { id: 6, title: 'Product Designer', type: 'Contract', location: 'Remote', description: 'Design products that meet user needs.' },
    { id: 7, title: 'Software Engineer', type: 'Full-time', location: 'Remote', description: 'Develop scalable software solutions.' },
    { id: 8, title: 'React Developer', type: 'Full-time', location: 'Remote', description: 'Build front-end interfaces using React.' },
    { id: 9, title: 'Node.js Developer', type: 'Full-time', location: 'Remote', description: 'Develop backend services with Node.js.' },
    { id: 10, title: 'Mobile App Developer', type: 'Part-time', location: 'Remote', description: 'Develop mobile applications for various platforms.' },
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearch = (title) => {
    const filteredJob = jobs.find((job) =>
      job.title.toLowerCase() === title.toLowerCase()
    );
    setSelectedJob(filteredJob);
  };

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="app-container">
      <h1 className="header">xWave Job Search Portal</h1>
      <JobSearch jobs={jobs} onSearch={handleSearch} onSelectJob={handleSelectJob} />
      {selectedJob && <JobResults jobs={[selectedJob]} />}
    </div>
  );
};

export default App;
