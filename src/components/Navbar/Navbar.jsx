import {useState} from 'react'
import './Navbar.css'

export default function Navbar() {
    const [stop, setStop] = useState(false);

    let toogleStop = () => {
        setStop(!stop);
    }

    return (

        <div className="navbar" >
            {stop && <>
                <div className="nav-options about">About</div>
                <div className="nav-options skill">Skills</div>
                <div className="nav-options home">Home</div>
                <div className="nav-options project">Projects</div>
                <div className="nav-options contact">Contact</div>
            </>}
            <div onClick={toogleStop} className="compass-container">
                <img id='compass-img' src="/compass-2.png" alt="" />
            </div>
            
        </div>
        
    )
}