import cvData from '../../data/cv.json';

const TimelinePage: React.FC = () => {

  return (
    <div className="timeline-page">
      <h1>My Professional Timeline</h1>
      <p>This page will display a visual timeline of my career.</p>

      {/* Example of accessing data to prove it's working */}
      <section>
        <h2>Data Preview:</h2>
        <ul>
          {cvData.experience.map(job => (
            <li key={job.id}>
              {job.startDate} - {job.endDate || 'Present'}: {job.position} at {job.company}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TimelinePage;