import cvData from '../../data/cv.json'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import EducationCard from '../../components/EducationCard/EducationCard';

interface Link {
  website: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

interface PersonalInfo {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  title: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  links: Link;
}

interface Technology {
  name: string;
  category: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: Technology[];
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiryDate: string;
  credentialId: string;
  credentialURL: string;
}

interface Metadata {
  version: string;
  lastUpdated: string;
  format: string;
}

interface Skills {
  description: string;
  categories: {
    name: string;
    items: string[];
  }[];
  languages: {
    name: string;
    proficiency: string;
  }[];
  certifications: Certification[];
}

export interface CVData {
  $schema?: string; // Optional property for the schema link
  personal: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  metadata: Metadata;
}

// Helper function to format dates
function formatDate(dateString: string | null): string {
  if (!dateString) {
    return 'Present';
  }

  // Create a date object. The constructor correctly handles "YYYY-MM-DD" format.
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

// A small helper component for technology tags to keep the main component clean
const TechPill: React.FC<{ tech: { name: string; category: string } }> = ({ tech }) => (
  <span className="tech-pill" title={tech.category}>{tech.name}</span>
);

// A helper component for a single experience entry
const ExperienceItem: React.FC<{ job: Experience }> = ({ job }) => (
  <article className="experience-item">
    <header className="experience-item__header">
      <h3 className="experience-item__position">{job.position}</h3>
      <h4 className="experience-item__company">{job.company}</h4>
      <p className="experience-item__dates">
        {formatDate(job.startDate)} – {formatDate(job.endDate) || 'Present'}
      </p>
    </header>
    {job.description && <p className="experience-item__description">{job.description}</p>}
    <ul className="experience-item__achievements">
      {job.achievements.map((ach, index) => <li key={index}>{ach}</li>)}
    </ul>
    <footer className="experience-item__technologies">
      {job.technologies.map((tech) => <TechPill key={tech.name} tech={tech} />)}
    </footer>
  </article>
);


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