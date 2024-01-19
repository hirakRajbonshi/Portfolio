import { Heading } from "../../components"
import './About.css'
export default function About() {
    return (
        <div className="about-page" id="about">
            <Heading main="About Me" sub="Know more" />
            <div className="about-text-container">
                <p>
                    Hello, I'm Hirak Rajbonshi, a undergraduate Computer Science 
                    and Engineering Student at NIT Silchar, Assam. I am a beginner 
                    in the field of software development with a zeal to learn new 
                    technologies and implement my knowledge as much as I can. I am 
                    interested in technologies like the MERN stack, AI-ML etc and I 
                    am learning them right now and also trying to improve my problem 
                    solving skill.
                </p>
            </div>
            
        </div>
    )
}