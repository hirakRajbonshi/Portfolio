import Typewriter from 'typewriter-effect';
import "./Home.css";
import { useState } from 'react';


export default function Home() {

  const [state] = useState({
    title: "Hello,",
    title2: "I'm Hirak"
  })

  return (
    <div className="home-page" id='home'>
      <div className="text-container">
        <div className="title-container">
          <h1 className="title">{state.title}</h1>
          <h1 className="title2">{state.title2}</h1>
        </div>
          
        <Typewriter 
        options={{loop: "true"}}
          onInit={(typewriter) => {
              typewriter
                .typeString("<span>A Developer.</span>")
                .pauseFor(1000)
                .deleteChars(10)
                .typeString("<span>Coder.</span>")
                .pauseFor(1000)
                .start();
          }}
        />
      </div>
      <div className="image-container">
        <img id="my-image" src="../../../public/PHOTO.jpg" alt="" />

      </div>
    </div>
      
  );
}
