import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import CVPage from './pages/CVPage/CVPage'
import TimelinePage from './pages/TimelinePage'
import ContactPage from './pages/ContactPage/ContactPage'
import BlogIndexPage from './pages/BlogIndexPage/BlogIndexPage'
import BlogPostPage from './pages/BlogPostPage/BlogPostPage'

function App() {
  return (
    <Router>
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
