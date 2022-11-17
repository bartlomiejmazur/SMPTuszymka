import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';

import '../style/Club.css';
import clubImg from '../Assets/Club.jpg';
import clubImgMedium from '../Assets/club_medium.jpg'
import clubImgBig from '../Assets/club_big.jpg'




const Club = () => {

    useLayoutEffect(()=>{
        const tl = gsap.timeline()
        tl.from(".club", {autoAlpha: 0, y: -50, delay: 0.2})
        .from(".club__title", {autoAlpha: 0, y: -50, delay: 0.2},'-=0.2')

    
    },[])

    return ( 
        <div className="container">
        <div className="club">
        <div className="club__overlay"></div>
        <div className="club__title">Nasze grupy treningowe</div>
        <picture>
        <source media="(min-width: 1024px)" srcSet={clubImgBig} />
        <source media="(min-width: 640px)" srcSet={clubImgMedium} />
        <img src={clubImg} alt="" className="club__baner-img" />
        </picture>
        </div>
        <div className="container__info">
            <div className='container__info-group'>
            <h4>Dzieci</h4>
           <i className="fa-solid fa-star"></i>
            <p>Dzieci trenujące na obiektach sportowych muszą mieć ukończone 6 lat.</p>
            </div>
            <div className='container__info-group'>
            <h4>Juniorzy</h4>
            <i className="fa-solid fa-star">
            <i className="fa-solid fa-star"></i>
            </i>
            <p>W skład juniorów młodszych wchodzi młodzież w wieku 13 lat - 17 lat (w zależności od rekrutacji klubu optymalnie 14 lat - 16 lat).</p>
            </div>
            <div className='container__info-group'>
                <h4>Seniorzy</h4>
                <i className="fa-solid fa-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </i>
                <p>W seniorach zawodnicy obowiązkowo muszą mieć ukończone 16 lat aby zagrać w ligowym meczu.</p>
            </div>
        </div>
        <footer >© autor: Bartłomiej Mazur</footer>
        </div>
        );
        
}
 
export default Club;