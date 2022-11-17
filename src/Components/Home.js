import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';

import '../style/Home.css';

import footbalVideo from '../Assets/football-video.mp4';
import TuszymkaLogo from '../Assets/Tuszymka.png';

const Home = () => {
      
    useLayoutEffect(() =>{
        
        const tl = gsap.timeline({defaults: {ease: "power2"}})
        tl.to("video", {height: '100vh', duration: 1.3, delay: 0.4})
        .from("h1", {autoAlpha: 0, y: -50, delay: 0.2})
        .from("h2", {autoAlpha: 0, y: -50}, '-=0.2')
        .from("img", {autoAlpha: 0, y: -100}, '-=0.2')
      }, [])
      
    

    return ( 
        <>
        <div className="home">
            <div className="overlay"></div>
                <video autoPlay muted loop playsInline>
                    <source src={footbalVideo} type="video/mp4"/>
                </video>
                <div className="home-content">
                    <h1  >Szkółka Młodego Piłkarza </h1>
                    <h2>Tuszymka</h2>
                    <img  src={TuszymkaLogo} alt="logo" className='team-logo' />
                    
                </div>
            
        </div>
        
        </>
        );
}
 
export default Home;