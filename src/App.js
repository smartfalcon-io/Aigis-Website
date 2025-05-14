import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Features from './pages/features';
import Contact from './pages/contact';
import Header from './components/header';
import AdminBenefits from './pages/admin_benefits';
import ResidentBenefits from './pages/Resident_benefits';
import Technology from './components/technology';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin_benefits' element={<AdminBenefits />} />
        <Route path='/resident_benefits' element={<ResidentBenefits/>}/>
        <Route path='/technology' element={< Technology/>} />
      </Routes>
    </Router>
  )
}

export default App
