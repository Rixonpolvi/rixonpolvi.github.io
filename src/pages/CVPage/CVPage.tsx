import cvData from '../../data/cv.json'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import EducationCard from '../../components/EducationCard/EducationCard';
import type { CVData } from '../../types/cv.types';

const CVPage: React.FC = () => {
  // Use our CVData interface to give TypeScript context for the imported JSON.
  // This is the step that provides type safety.
  const cv: CVData = cvData;

  return (

    <div>
      <section>
        <h1 className="text-4xl font-bold mb-8">Experience</h1>
        {/* Container for the list of experience cards */}
        <div className="space-y-8">
          {cv.experience.map(job => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </div>
      </section >


      <section className="mt-16"> {/* Add margin-top to create space */}
        <h2 className="text-3xl font-bold mb-8 border-b pb-2">Education</h2>
        <div className="space-y-8">
          {cv.education.map(edu => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CVPage;