import { FrameLogo, Heading } from '../../components'
import {skill1, skill2, skill3,skill4, skill5, skill6} from './data'
import  './Skills.css'
export default function Skills() {
    return (
        
        <section className='skills-page' id='skills'> 
            <Heading main="These Skills" sub="I am learning and improving" />
            <div className="skills-box">

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