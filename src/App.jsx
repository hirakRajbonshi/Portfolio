import { Navbar, Navbar2} from "./components"

// import { Home, Home2, Projects, Skills, Contact, About} from "./sections"
import React from 'react'
import Snowfall from 'react-snowfall';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Main, Error} from './pages'

export default function App() {

  return (
    <>
    <BrowserRouter>
    <Snowfall style={{position: "fixed"}}/>
    <Navbar2/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
        {/* <Navbar2 />
        <Main /> */}
        {/* <Home />
        <Skills />
        <Projects />
        <About />
        <Contact /> */}
    </>
  )
}
