import { useState, useEffect } from 'react';
import JobInfo from './JobInfo';
import ButtonContainer from './ButtonContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [jobs, setJobs] = useState([]);

  const [currentItem, setCurrentItem] = useState(0);
  // const [currentItem, setCurrentItem] = useState(1);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // console.log(jobs);

  if (isLoading) {
    return (
      <section className="job-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      {/* Button container */}
      <ButtonContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* Job Info */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
