import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import close from '../../images/close.svg';
import menu from '../../images/menu.svg';
import logo from '../../images/logo.svg';

class Hamburger extends Component {

    constructor(props){
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            isActive: false
        }
    }

    toggleMenu = () =>{
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render(){
        return(
            <>
                <nav id = "overlay" className={this.state.isActive===true ? "overlay show-menu" : "overlay"}>
                    <img src={close} id = "close-btn" className="close-btn" alt="close" onClick={this.toggleMenu}></img>

                    <ul>
                        <li><Link className="link" to="/about">ABOUT ME</Link></li>
                        <li><Link className="link" to="/projects">PROJECTS</Link></li>
                        <li><Link className="link" to="/blog">BLOG</Link></li>
                        <li><Link className="link" to="/contact">CONTACT</Link></li>
                        <li><a className="link" href="https://www.instagram.com/debashishmajumdar3773" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i>&nbsp;Instagram</a></li>
                        <li><a className="link" href="https://www.twitter.com/offTheOpus" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Twitter</a></li>
                        <li><a className="link" href="https://www.linkedin.com/in/debashish-majumdar-12a2a8190" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i>&nbsp;Linkedin</a></li>
                        <li><a className="link" href="https://www.dribbble.com/NotFarFromBlonded" target="_blank" rel="noopener noreferrer"><i className="fa fa-dribbble" aria-hidden="true"></i>&nbsp;Dribbble</a></li>
                    </ul>
                </nav>
                
                <header id = "header-menu" className="header-menu">
                    <Link className="link" to="/"><img id="logo" className="logo" src={logo} alt = "logo"></img></Link>
                    <img id="menu" className="menu" src={menu} alt= "menu" onClick={this.toggleMenu}></img>
                </header>
            </>
        );
    }
}
export default Hamburger;