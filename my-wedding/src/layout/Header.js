import React from 'react';
import logo from '../logo.png';
import Nav from './Nav';


const Header = () => {
    return (
        <div className='header' id="home">
            <img src={logo} className="logo" alt="logo" />
            <h1>Dan & Cynthia</h1>
            <Nav/>
            
        </div>
    );
};

export default Header;