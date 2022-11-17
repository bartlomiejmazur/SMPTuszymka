import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


import '../style/About.css'
import stadium from '../Assets/stadium.jpg'
import stadiumSmall from '../Assets/stadium_small.jpg';
import stadiumMedium from '../Assets/stdium_medium.jpg';
import stadiumBig from '../Assets/stadium_big.jpg'
import stadiumHuge from '../Assets/stadium_huge.jpg'
import aboutImg from '../Assets/respect.svg'
import aboutImg2 from '../Assets/motivation.svg'
import aboutImg3 from '../Assets/fun.svg'
import { NavLink } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);



const About = () => {

    

    const jump = (anim) =>{
        gsap.from(anim,{
            duration: 1,
            autoAlpha: 0,
            y: 100,
            scale: 0.5,
            scrollTrigger:{
            trigger: anim,
            
            }
            })
    }
 
    const rightMove = (anim) =>{
        gsap.from(anim,{
            duration: 1,
            x: -2000,
            scrollTrigger:{
            trigger: anim,
            start: "top center",
            end: "bottom top"
            }
            })
    }
    const leftMove = (anim) =>{
        gsap.from(anim,{
            duration: 1,
            x: 2000,
            scale: 1,
            scrollTrigger:{
            trigger: anim,
            start: "top center",
            end: "bottom top"
            }
            })
    }
   
    

    useLayoutEffect(()=>{
        const tl = gsap.timeline({defaults: {ease: "power2"}})
        tl.to(".courtine",{height: 0, duration: 1})
        .from(".about__square-banner", {autoAlpha: 0, y: -50, delay: 0.2})
        jump(".about__content-intro")
        rightMove(".first__animation")
        leftMove(".second__animation")
        rightMove(".third__animation")
        jump(".fourth__animation")
    },[])

   
    


    return ( 
      
        <>
       <div className="courtine"></div>
        <div className="about">
            <div className="about__square">
            
        <picture>
           
           
            <source media="(min-width: 1024px)" srcSet={stadiumHuge} />
             <source media="(min-width: 800px)" srcSet={stadiumBig} />
            <source media="(min-width: 640px)" srcSet={stadiumMedium} />
            <source media="(min-width: 450px)" srcSet={stadiumSmall} />
            
            
            <img  className='about__square-banner' src={stadium} alt="" />
        </picture>
            
            </div>
            <div className="about__content">
            <h1>O nas</h1>
            <div className="about__content-intro" > Jesteśmy drużyną z bogatą historią, która zaczyna się od 1962 roku. W naszych najlepszych latach mierzyliśmy się z takim klubem piłkarskim jak Stal Mielec. Celem głównym klubu jest upowszechnianie kultury fizycznej i sportu wśród dzieci, młodzieży i dorosłych. Promujemy zdrowy tryb życia, edukacje, wychowanie oraz zasady fair play.</div>
            </div>
            <div className='about__title'>Skupiamy się na głównych celach w prowadzeniu zajęć.</div>
            <div className="about__wrapper">
            
                <div className='about__wrapper-respect first__animation'>
                    <div>
                    <h4> <span>1.</span> Szacunek</h4>
                    <p>Obojętnie co się wydarzy, uczmy młode pokolenie szacunku, nawet jeśli piłka nożna okaże się tylko dziecięcą przygodą, to zaszczepiony do innych ludzi szacunek, pozostanie z dzieckiem do końca życia. </p>
                    </div>
                    <div className='about__wrapper-respect__img'><img src={aboutImg} alt="" /></div>
                </div> 
                <div className='about__wrapper-respect second__animation'>
                <div>
                <h4><span>2.</span>  Motywacja</h4>
                    
                    <p>"Sukces to nie przypadek. To ciężka praca, wytrwałość, nauka, nauka, poświęcenie, a przede wszystkim miłość do tego, co robisz lub czego się uczysz. Musisz szanować ludzi i ciężko pracować, aby pozostać w formie".</p>
                    </div>
                    <div className='about__wrapper-respect__img'><img src={aboutImg2} alt="" /></div>
                </div>
                <div className='about__wrapper-respect third__animation'>
                <div><h4><span>3.</span> Dobra zabawa</h4>
                    <p>W tym sporcie zabawa jest najważniejsza. W obecnych czasach dzieci, które chcą wychodzić na boisko sportowe, biegać i kopać w piłke są zdrowsze.</p></div>
                <div className="about__wrapper-respect__img"><img src={aboutImg3} alt=""/></div>
                </div>
                <div className='about__wrapper-respect fourth__animation'>
                <div>
                    <p className='about__wrapper-respect__end'>Chciałbyś do nas dołączyć? Zapraszamy do kontaktu.</p>
                    <NavLink to="/contact">
                    <button className='about__wrapper-btn__contact'>Kontakt</button>
                    </NavLink>
                    </div>
                 </div>
                 </div>
            </div>
            <footer >© autor: Bartłomiej Mazur</footer>
            
           
    
     
       
        
        </>
       
        );
}
 
export default About;