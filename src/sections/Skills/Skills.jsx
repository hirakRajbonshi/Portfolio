import { FrameLogo, Heading } from '../../components'
import {skill1, skill2, skill3,skill4, skill5, skill6} from './data'
import  './Skills.css'
export default function Skills() {
    return (
        
        <section className='skills-page' id='skills'> 
            <Heading main="These Skills" sub="I am learning and improving" />
            <div className="skills-box">
                {/* <div className="left-box skill-container">
                    <h1>Technical Skills</h1>
                    <ul>
                        <li>C</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                    </ul>
                </div>
                <div className="right-box skill-container">
                    <h1>Other Skills</h1>
                </div> */}

                <div className="skill-container">
                    <FrameLogo data={skill1}/>
                </div>
                <div className="skill-container">
                    <FrameLogo data={skill2}/>
                </div>
                <div className="skill-container">
                    <FrameLogo data={skill3}/>
                </div>
                <div className="skill-container">
                    <FrameLogo data={skill4}/>
                </div>
                <div className="skill-container">
                    <FrameLogo data={skill5}/>
                </div>
                <div className="skill-container">
                    <FrameLogo data={skill6}/>
                </div>
            </div>
        </section>
    )
}