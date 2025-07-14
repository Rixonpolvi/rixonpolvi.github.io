import cvData from '../../data/cv.json'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import EducationCard from '../../components/EducationCard/EducationCard';
import type { CVData } from '../../types/cv.types';
import { motion } from 'framer-motion';
import { listContainerVariants, cardListItemVariants } from '../../utils/animationVariants';

const CVPage: React.FC = () => {
  // Use our CVData interface to give TypeScript context for the imported JSON.
  // This is the step that provides type safety.
  const cv: CVData = cvData;

  return (

    <div>
      <section>
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">Experience</h1>
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible" // Use 'animate' here for initial load, or 'whileInView'
          viewport={{ once: true }}
          variants={listContainerVariants}
        >
          {/* Container for the list of experience cards */}
          <div className="space-y-8">
            {cv.experience.map(job => (
              <ExperienceCard key={job.id} job={job} variants={cardListItemVariants} />
            ))}
          </div>
        </motion.div>
      </section >


      <section className="mt-16"> {/* Add margin-top to create space */}
        <h1 className="text-4xl font-bold mb-8 border-b pb-2">Education</h1>
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={listContainerVariants}
        >
          <div className="space-y-8">
            {cv.education.map(edu => (
              <EducationCard key={edu.id} education={edu} variants={cardListItemVariants} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CVPage;