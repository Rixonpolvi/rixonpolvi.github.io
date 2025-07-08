// Home Page Component - Your original content
function AboutSection() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>This is a sample GitHub Pages site. You can customize this content to showcase your work, projects, or personal information.</p>
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
      <ContactSection />
    </main>
  )
}

export default HomePage