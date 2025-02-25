import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import NavBar from './components/NavBar'
function App() {


  return (
    <>
    <NavBar/>
     <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </>
  )
}

export default App
