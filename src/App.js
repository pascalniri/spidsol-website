import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstSection from './components/FirstSection'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            
            <Route path="/" element={ <FirstSection />}></Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default App