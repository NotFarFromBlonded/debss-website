import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../images/logo.svg';
import Hamburger from './Hamburger';


class Navbar extends Component {
    render() {
        return(
            <div id = "navigation" className="navigation">
                <div id = "toggle" className="toggle">
                    <Hamburger />
                </div>
                <header id = "header" className="header">
                    <NavLink exact to="/" ><img className="logo" src={logo} alt = "logo"></img></NavLink>
                    <nav>
                        <ul id = "nav-links" className="nav-links">
                            <li><NavLink className="link" to="/about">ABOUT ME</NavLink></li>
                            <li><NavLink className="link" to="/projects">PROJECTS</NavLink></li>
                            <li><NavLink className="link" to="/blog">BLOG</NavLink></li>
                            <li><NavLink className="link" to="/contact">CONTACT</NavLink></li>
                        </ul>
                    </nav>
                    <ul id = "social-links" className="social-links">
                        <li><a className="link" href="https://www.instagram.com/debashishmajumdar3773" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a className="link" href="https://www.twitter.com/offTheOpus" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a className="link" href="https://www.linkedin.com/in/debashish-majumdar-12a2a8190" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        <li><a className="link" href="https://www.dribbble.com/NotFarFromBlonded" target="_blank" rel="noopener noreferrer"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                    </ul>
                </header>
            </div>
        );
    }
}
export default Navbar;