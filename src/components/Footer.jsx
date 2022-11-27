import React from 'react';
import FooterImage from "../assets/Library.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <section id="footer">
        <div className="row">
        <div className="footer-container">
        <figure className="footer-image-wrapper">
        <img src={FooterImage} alt="" className="footer-image" />
        </figure>
        <ul className="footer-links-list">
        <li><Link className="footer-link" to="/" >Home</Link></li>
        <li><Link className="footer-link" to="books">Books</Link></li>
        <li><Link className="footer-link" to="cart"><FontAwesomeIcon icon="shopping-cart" /></Link></li>
        </ul>
        </div>
        </div>
        </section>
    );
}

export default Footer;
