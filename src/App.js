import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstSection from './components/FirstSection'
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            
            <Route path="/" element={ <FirstSection />}></Route>
            <Route path="/footer" element={  <Footer /> }></Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default App