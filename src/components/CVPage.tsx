import cvData from '../data/cv.json'
import './CVPage.css'

interface CVData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    location: string
    website: string
    linkedin: string
    github: string
  }
  summary: string
  experience: Array<{
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    description: string
    achievements: string[]
  }>
  education: Array<{
    institution: string
    degree: string
    location: string
    startDate: string
    endDate: string
    gpa: string
    relevantCourses: string[]
  }>
  skills: {
    programming: string[]
    tools: string[]
    concepts: string[]
  }
  projects: Array<{
    name: string
    description: string
    technologies: string[]
    url: string
    highlights: string[]
  }>
  languages: Array<{
    language: string
    proficiency: string
  }>
  certifications: Array<{
    name: string
    issuer: string
    date: string
    url: string
  }>
}

// Helper function to format dates
function formatDate(dateString: string): string {
  if (dateString === 'present') return 'Present'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

function CVPage() {
  const cv = cvData as CVData

  return (
    <div className="cv-container">
      {/* Header Section */}
      <header className="cv-header">
        <div className="cv-header-content">
          <h1 className="cv-name">{cv.personalInfo.name}</h1>
          <h2 className="cv-title">{cv.personalInfo.title}</h2>
          
          <div className="cv-contact">
            <div className="contact-item">
              <span>📧</span>
              <a href={`mailto:${cv.personalInfo.email}`}>{cv.personalInfo.email}</a>
            </div>
            <div className="contact-item">
              <span>📱</span>
              <span>{cv.personalInfo.phone}</span>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>{cv.personalInfo.location}</span>
            </div>
            <div className="contact-item">
              <span>🌐</span>
              <a href={cv.personalInfo.website} target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </div>
            <div className="contact-item">
              <span>💼</span>
              <a href={cv.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="contact-item">
              <span>🐙</span>
              <a href={cv.personalInfo.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="cv-content">
        {/* Summary Section */}
        <section className="cv-section">
          <h3 className="section-title">Professional Summary</h3>
          <p className="cv-summary">{cv.summary}</p>
        </section>

        {/* Experience Section */}
        <section className="cv-section">
          <h3 className="section-title">Experience</h3>
          {cv.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h4 className="position-title">{exp.position}</h4>
                  <p className="company-name">{exp.company} • {exp.location}</p>
                </div>
                <div className="date-range">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </div>
              </div>
              
              <p className="job-description">{exp.description}</p>
              
              <ul className="achievements-list">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="cv-section">
          <h3 className="section-title">Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Programming</h4>
              <div className="skill-tags">
                {cv.skills.programming.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Tools & Technologies</h4>
              <div className="skill-tags">
                {cv.skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Concepts</h4>
              <div className="skill-tags">
                {cv.skills.concepts.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="cv-section">
          <h3 className="section-title">Projects</h3>
          {cv.projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <h4 className="project-name">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </h4>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="cv-section">
          <h3 className="section-title">Education</h3>
          {cv.education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <div>
                  <h4 className="degree-title">{edu.degree}</h4>
                  <p className="institution-name">{edu.institution} • {edu.location}</p>
                </div>
                <div className="date-range">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </div>
              </div>
              
              <p className="gpa">GPA: {edu.gpa}</p>
              
              <div className="relevant-courses">
                <strong>Relevant Courses:</strong>
                <span className="courses-list">
                  {edu.relevantCourses.join(' • ')}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Additional sections can be added here */}
        {cv.languages && cv.languages.length > 0 && (
          <section className="cv-section">
            <h3 className="section-title">Languages</h3>
            <div className="languages-grid">
              {cv.languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <span className="language-name">{lang.language}</span>
                  <span className="language-proficiency">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default CVPage