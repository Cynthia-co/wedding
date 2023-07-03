import React from 'react';
import logo from '../logo.png';
import Nav from './Nav';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} className="logo" alt="logo" />
            <h1>Cynthia & Dan</h1>
            <Nav/>
        </div>
    );
};

export default Header;