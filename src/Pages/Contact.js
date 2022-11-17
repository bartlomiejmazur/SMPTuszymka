import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';

import '../style/Contact.css'
import contactImg from '../Assets/contact.jpg'
import contactImgMedium from '../Assets/contact_medium.jpg';


const Contact = () => {

    useLayoutEffect(()=>{
        const tl = gsap.timeline()
        tl.to(".courtine",{height: '0', duration: 1, ease:"power2"})
        .from(".contact", {autoAlpha: 0, y: -50, delay: 0.2})
        .from(".contact__title", {autoAlpha: 0, y: -50, delay: 0.2},'-=0.2')
        .from(".contact__info", {autoAlpha: 0, y: -50, delay: 0.2},'-=0.2')
        .from(".contact__info-first", {autoAlpha: 0, y: -50, delay: 0.2},'-=0.2')
        .from(".contact__info-second", {autoAlpha: 0, y: -50, delay: 0.2},'-=0.2')
        .from(".contact__info-third", {autoAlpha: 0, y: -50, delay: 0.2},'-=0.2')

    
    },[])
    return ( 
        <>
        <div className="courtine"></div>
        <div className="contact">
        <div className="contact__title">Kontakt</div>
        <div className="contact__overlay"></div>
        <picture>
       
        <source media="(min-width: 480px)" srcSet={contactImgMedium} />
        
        <img src={contactImg} alt="" className="contact__img" />
        </picture>
       <div className="contact__info">
       
        <div className='contact__info-first'><i className="fa-solid fa-phone"></i>+48 792 191 680</div>
     
        <div className='contact__info-second'><i className="fa-solid fa-location-pin"></i>Adres: Tuszyma 482</div>
        
        <div className='contact__info-third'><i className="fa-solid fa-envelope"></i>Mail: smptuszymka@gmail.com</div>
       
        
        
       </div>
        </div>
        
        </>
        );
}
 
export default Contact;