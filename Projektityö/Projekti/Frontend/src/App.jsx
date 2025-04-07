import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div>
      {/* Reititykset */}
      <Routes>
        {/* Etusivu */}
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;
