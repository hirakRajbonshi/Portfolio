import { Navbar, Navbar2, Footer} from "./components"

import React from 'react'
import Snowfall from 'react-snowfall';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Main, Error} from './pages'

export default function App() {

  return (
      <BrowserRouter>
        <Snowfall style={{position: "fixed"}}/>
        {/* <Navbar2/> */}
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
  )
}
