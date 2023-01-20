import React from 'react';
import { Link } from 'react-router-dom';
import { TbMathFunction } from 'react-icons/tb';
import menuList from './menuList';
import './navbar.scss';

const Navbar = () => (
  <nav>
    <div className="nav-container">
      <a href="/" className="nav-logo">
        <h2>Math Magician</h2>
        <span><TbMathFunction className="icon" /></span>
      </a>
      <ul className="nav-menu">
        {menuList.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
