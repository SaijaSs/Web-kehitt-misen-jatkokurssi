import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import Suosituimmat from './pages/Suosituimmat';
import Uusimmat from './pages/Uusimmat';
import Kaikki from './pages/Kaikki';
import Aloitakeskustelu from './pages/Aloitakeskustelu';
import Meista from './pages/Meista';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div>
      {/* Reititykset */}
      <Routes>
        {/* Etusivu */}
        <Route path="/" element={<Homepage />} />
        <Route path="/Suosituimmat" element={<Suosituimmat />} /> 
        <Route path="/Uusimmat" element={<Uusimmat />} /> 
        <Route path="/Kaikki" element={<Kaikki />} /> 
        <Route path="/Aloitakeskustelu" element={<Aloitakeskustelu />} />
        <Route path="/Meista" element={<Meista />} />  
   
      </Routes>
    </div>
  </Router>
  )
}

export default App;
