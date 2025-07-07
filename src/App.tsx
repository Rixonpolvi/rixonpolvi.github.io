import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import CVPage from './components/CVPage'
import './App.css'
import './components/CVPage.css'

// Header Component with Navigation
function Header() {
  return (
    <header>
      <h1>Welcome to My GitHub Pages Site</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cv">CV</Link></li>
        </ul>
      </nav>
    </header>
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

// Main App Component with Routing!
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        {/* This is where different pages will be displayed based on the URL */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
