import { Heading, Iconbar } from "../../components"
import './Contact.css'
export default function Contact() {
    return (
        <div className="contact-page" id="contact">
            <Heading main="Contact Me" sub="Get in Touch" />
            <div className="contact-container">
                <div className="contact-left">
                    <div className="contact-cards">
                        <div className="contact-card">
                            <h1>Whatsapp</h1>
                            <h3>Available Anytime</h3>
                            <a href="">Send a Message</a>
                        </div>
                        <div className="contact-card">
                            <h1>Email</h1>
                            <h3>hrkraj0@gamil.com</h3>
                            <a href="">Send a Mail</a>
                        </div>
                        
                    </div>
                    
                    <h1 id="contact-line">Open for Work</h1>
                    <button className="contact-btn hire-me">Hire Me</button>
                    <button className="contact-btn send">SEND</button>


                </div>
                <div className="contact-right">
                    <input className="input" placeholder="Enter Your Name" type="text" name="" id="" />
                    <input className="input" placeholder="Enter Your Email" type="text" name="" id="" />
                    <textarea className="input textarea-input" placeholder="Write Your Message" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="icons-bar">
                <Iconbar />
            </div>
        </div>
    )
} 