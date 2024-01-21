import {Home, Home2, Projects, Skills, Contact, About} from '../../sections'
import { Navbar2, Footer} from "../../components"

export default function Main() {
    return (
        <>
            <Navbar2/>
            <Home />
            <About />
            <Skills />
            {/* <Projects /> */}
            <Contact />
            <Footer />

        </>
    )
}