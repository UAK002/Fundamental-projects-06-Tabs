import { useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  console.log(jobs);

  if (isLoading) {
    return (
      <section className="job-center">
        <div className="loading"></div>
      </section>
    );
  }

  return <h2>Tabs Starter</h2>;
};
export default App;
