import Typewriter from 'typewriter-effect';
import "./Home2.css";
export default function Home() {
  return (
    <div className="home-page">
      <div className="main-container">
        <div className="info">
          <div className="name-container">
            <h1>Hello, I'm Lorem</h1>   
          </div> 
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: ['<h2>A Fullstack Web Developer</h2>', '<h2>A Softwere Developer</h2>'],
                autoStart: true,
                loop: true,
              }}
            />
            {/* <Typewriter
                  onInit={(typewriter) => {
                      typewriter
                          .typeString("<h2>A Fullstack Web Developer</h2>")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("<h2>A Softwere Developer</h2>")
                          .start();
                  }}
              /> */}
          </div>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam 
            laborum voluptatum natus, temporibus illum quos sint, vitae culpa 
            doloribus, optio perspiciatis vel blanditiis cum accusantium? Maiores, 
            nostrum? Molestias perspiciatis obcaecati laudantium architecto dolor 
            natus aut eligendi vero? Doloremque pariatur accusamus, illum aperiam 
            perspiciatis aliquid, ad explicabo eius ratione, adipisci odio?
          </p>
        </div>
        <div className="img-container">
          <img id="my-img" src="../../../public/PHOTO.jpg" alt="" />
        </div>
      </div>
    </div>
      
  );
}
