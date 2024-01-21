import './Navbar2.css'
import {Link} from 'react-scroll'
import { useState, useEffect, useRef } from "react";

export default function Navbar2() {
    const navbarRef = useRef(null);



    return (
        <nav className="nav-bar" ref={navbarRef}>
            
            <div className="nav-option">
                <a href="/#home">Home</a>
            </div>
          
            <div className="nav-option">
                <a href="/#about">About</a>
            </div>
            <div className="nav-option">
                <a href="/#skills">Skills</a>
            </div>
            <div className="nav-option">
                <a href="/#projects">Projects</a>
            </div>

            <div className="nav-option">
                <a href="/#contact">Contact</a>
            </div>
        </nav>        
    )
}