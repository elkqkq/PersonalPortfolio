import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
        <nav className="navbar">
          <h2>Blog Post</h2>
          <div  className="links">
            <Link to="/">Home</Link>
            <Link to="/BlogForm">Newblog</Link>
            </div>
        </nav>
 
);

export default Navbar;