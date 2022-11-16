import React from 'react';
import { NavLink } from 'react-router-dom';


import '../style/Navigation.css';

const list = [
{name: "Home", path: "/"},
{name: "O nas", path: "/about"},
{name: "Klub", path: "/club"},
{name: "Kontakt", path: "/contact"}
]


const Navigation = () => {

    


    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink
           
            // style={({isActive}) => ({borderBottom: isActive ? "" : ''})}
            to={item.path}
            >{item.name}</NavLink>
        </li>
        ))

    return ( 
        <nav>
            <div className="container-nav">
              {menu}
            </div>
        </nav>
        );
}
 
export default Navigation;