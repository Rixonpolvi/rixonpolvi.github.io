import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import CVPage from './pages/CVPage'
import TimelinePage from './pages/TimelinePage'
//import './App.css'

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
        
      <main className="mx-auto max-w-4xl px-8 py-4"></main>
        {/* This is where different pages will be displayed based on the URL */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  )
}

export default App
