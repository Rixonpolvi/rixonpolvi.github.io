// Home Page Component - Your original content
function AboutSection() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>This is a sample GitHub Pages site. You can customize this content to showcase your work, projects, or personal information.</p>
    </section>
  )
}

// Project Card Component - Reusable piece!
function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// Projects Section Component
function ProjectsSection() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <ProjectCard 
          title="Project 1" 
          description="Description of your first project." 
        />
        <ProjectCard 
          title="Project 2" 
          description="Description of your second project." 
        />
      </div>
    </section>
  )
}

// Contact Section Component
function ContactSection() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me at your-email@example.com</p>
    </section>
  )
}

// Main Home Page Component
function HomePage() {
  return (
    <main>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default HomePage