import cvData from '../data/cv.json'
import './CVPage.css'

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
function formatDate(dateString: string): string {
  if (dateString === 'present') return 'Present'
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
        {job.startDate} – {job.endDate || 'Present'}
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
    <div className="cv-page">
      <header className="cv-header">
        <h1>{`${cv.personal.name.first} ${cv.personal.name.middle} ${cv.personal.name.last}`}</h1>
        <h2>{cv.personal.title}</h2>
        <div className="contact-info">
          <a href={`mailto:${cv.personal.email}`}>{cv.personal.email}</a>
          <span> • </span>
          <span>{cv.personal.phone}</span>
          <span> • </span>
          <a href={cv.personal.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>

      <main className="cv-main">
        <section className="cv-section" id="experience">
          <h2>Experience</h2>
          <div className="experience-list">
            {cv.experience.map(job => <ExperienceItem key={job.id} job={job} />)}
          </div>
        </section>

        <section className="cv-section" id="skills">
          <h2>Skills & Certifications</h2>
          <div className="skills-certifications-grid">
            <div className="certifications-list">
              <h3>Certifications</h3>
              <ul>
                {cv.skills.certifications.map(cert => (
                  <li key={cert.credentialId}>
                    <strong>{cert.name}</strong> ({cert.issuer})
                    <br />
                    <a href={cert.credentialURL} target="_blank" rel="noopener noreferrer">Verify Credential</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills-list">
              <h3>Methodologies & Frameworks</h3>
              {cv.skills.categories.map(category => (
                <div key={category.name}>
                    {/* Hiding the category name as it's explicit in the h3 */}
                    <ul>
                        {category.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cv-section" id="education">
          <h2>Education</h2>
          {cv.education.map(edu => (
            <div key={edu.id} className="education-item">
              <h3>{edu.degree} in {edu.field}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.startDate} – {edu.endDate}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default CVPage;