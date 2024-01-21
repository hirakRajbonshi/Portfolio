
import { Heading, Frame } from '../../components'
import {project1, project2, project3, project4, project5, project6} from './data.js'
import './Projects.css'
export default function Projects() {

    return (
        <div className='project-page' id='projects'>  
            <Heading main="These Projects" sub="I have done" />
            <div className='projects-container'>
                <div className="project-container">
                    <Frame data={project1}/>
                </div>
                <div className="project-container">
                    <Frame data={project2}/>
                </div>
                <div className="project-container">
                    <Frame data={project3}/>
                </div>
                <div className="project-container">
                    <Frame data={project4}/>
                </div>
                <div className="project-container">
                </div>
                <div className="project-container" id='b2'>
                    <Frame data={project5}/>
                </div>
                <div className="project-container" id='b3'>
                    <Frame data={project6}/>
                </div>
                <div className="project-container">
                </div>
            </div>  
        </div>
        
    )
}