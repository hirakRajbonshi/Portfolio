import { Heading, Card } from "../../components"
import './About.css'
import { aboutData1, aboutData2 } from "./about-data"
export default function About() {
    return (
        <div className="about-page" id="about">
            <Heading main="About Me" sub="Know more" />
            <div className="about-container">
                <div className="about-text-container">
                    <p>
                        Hello, I'm Hirak Rajbonshi, a undergraduate Computer Science 
                        and Engineering Student at NIT Silchar, Assam. I am a beginner 
                        in the field of software development with a zeal to learn new 
                        technologies and implement my knowledge as much as I can. I am 
                        interested in technologies like the MERN stack, DSA etc and I 
                        am learning them right now and also trying to improve my problem 
                        solving skill.
                    </p>
                </div>
                <div className="about-image-container">
                    <img id="about-my-image" src="../../../public/PHOTO.jpg" alt="" />
                </div>

            </div>
            <div className="about-cards-container">
                <Card details={aboutData1} /> 
                <Card details={aboutData2} /> 
            </div>
        </div>
    )
}