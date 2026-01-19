import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Placeholder imports for views (will implement next)
import Onboarding from './views/Onboarding'
import Garden from './views/Garden'
import Reflection from './views/Reflection'
import Progress from './views/Progress'
import Navigation from './components/Navigation'

function App() {
  const [hasOnboarded, setHasOnboarded] = useState(() => {
    return localStorage.getItem('mindgarden_onboarded') === 'true'
  })

  const [currentTab, setCurrentTab] = useState('garden')

  const completeOnboarding = () => {
    setHasOnboarded(true)
    localStorage.setItem('mindgarden_onboarded', 'true')
  }

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/onboarding" element={
            !hasOnboarded ? <Onboarding onComplete={completeOnboarding} /> : <Navigate to="/" />
          } />
          <Route path="/" element={
            hasOnboarded ? <Garden /> : <Navigate to="/onboarding" />
          } />
          <Route path="/reflect" element={
            hasOnboarded ? <Reflection /> : <Navigate to="/onboarding" />
          } />
          <Route path="/progress" element={
            hasOnboarded ? <Progress /> : <Navigate to="/onboarding" />
          } />
        </Routes>

        {hasOnboarded && <Navigation currentTab={currentTab} />}
      </div>
    </Router>
  )
}

export default App
