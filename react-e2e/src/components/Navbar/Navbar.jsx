import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div style={{paddingBottom: '30px'}}>
            <Link to="/" data-testid="main-link">main</Link><br/>
            <Link to="/about" data-testid="about-link">about</Link><br/>
            <Link to="/users" data-testid="users-link">users</Link>
        </div>
    );
};