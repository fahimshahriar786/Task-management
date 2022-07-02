import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calender">Calender</Link></li>
        <li><Link to="/about"> About</Link></li>
    </>
    return (
        
    );
};

export default Header;