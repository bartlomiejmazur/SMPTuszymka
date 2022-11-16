import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from '../Pages/About';
import Club from '../Pages/Club';
import Contact from '../Pages/Contact';


const Page = () => {
    return ( 
        <div className="page">
        

        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/club" element={<Club/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
        </div>
        
        );
}
 
export default Page;