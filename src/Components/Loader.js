import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';

import '../style/Loader.css';

import logo from '../Assets/Tuszymka.png';


const Loader = () => {

    useLayoutEffect(() => {
        const loaderTl = gsap.timeline();
        loaderTl
            .from('.loader p', {y:100, autoAlpha: 0, duration: 0.75, stagger: 0.75})
            .to('.loader p', {y:-100, autoAlpha: 0, duration: 0.75, stagger: 0.75}, 0.75)
       
    }, [])

    return ( 
        <div className="loader">
            <p><img src={logo} alt="" /></p>
            <p></p>
            <p>Pasja ⚽</p>
            <p>Zaangażowanie ⚽</p>
            <p>Motywacja ⚽</p>
            <p>Rywalizacja ⚽</p>
        </div>
        );
}
 
export default Loader;