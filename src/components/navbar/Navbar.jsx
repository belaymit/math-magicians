import React from 'react';
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
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
