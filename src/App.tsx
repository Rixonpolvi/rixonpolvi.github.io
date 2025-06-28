import './App.css'

// Header Component - Like a LEGO block for the top of your page
function Header() {
  return (
    <header>
      <h1>Welcome to My GitHub Pages Site</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

// About Section Component
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

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>
  )
}

// Main App Component - This puts all the pieces together!
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
