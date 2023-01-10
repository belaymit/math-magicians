import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter, AiFillInstagram, AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { BsStackOverflow } from 'react-icons/bs';
import Logo from '../../assests/murple_logo.png';
import './footer.scss';

const Footer = () => (
  <section id="footer" className="footer">
    <div className="footer-container">
      <article>
        <Link to="/" className="footer-logo">
          <img src={Logo} alt="full-stack-developer-logo" />
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eum perferendis et laborum error dolorem dolore architecto
          cumque, rem corrupti quis!
        </p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/belay-birhanu-144ba714b/" target="_blank" rel="noreferrer noopener">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/2belamit" target="_blank" rel="noreferrer noopener">
            <AiOutlineTwitter />
          </a>
          <a href="https://github.com/belaymit" target="_blank" rel="noreferrer noopener">
            <AiOutlineGithub />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
            <AiFillInstagram />
          </a>
          <a href="https://stackoverflow.com/users/20688919/belay-birhanu" target="_blank" rel="noreferrer noopener">
            <BsStackOverflow />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
            <FaFacebook />
          </a>
        </div>
      </article>
      <article className="useful-links">
        <h4>Useful Links</h4>
        <Link to="/home">Home</Link>
        <Link to="/calculations">Calculator</Link>
        <Link to="/quotes">Quotes</Link>
      </article>
      <article className="useful-links">
        <h4>Insights</h4>
        <Link to="/#">Blog</Link>
        <Link to="/faqs">FAQs</Link>
      </article>
      <article className="useful-links">
        <h4>Get In Touch</h4>
        <Link to="/#">Contact Us</Link>
        <Link to="/s">Support Me</Link>
      </article>
    </div>
    <div className="footer-copyright">
      <small>2022 Belay Birhanu G. &copy; All Rights Reserved</small>
    </div>
  </section>
);

export default Footer;
