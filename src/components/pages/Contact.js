import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Contact extends Component {


    render(){
        return(
        <div>
            <div id = "contact" className = "contact">
                <div id = "contact-container" className="contact-container">
                    <div id = "contact-view" className = "contact-view">
                        <h1><a href="mailto:majumdardebashish@ymail.com">Mail Me</a></h1>
                        <h6>Made with &nbsp;<a href="https://www.youtube.com/watch?v=aHylrIIdX5Q" target="_blank" rel="noopener noreferrer"><i class="fa fa-heart" style = {{fontSize: "12px"}}></i></a>&nbsp; by Debashish Majumdar</h6>
                    </div>  
                </div>
            </div>
        </div>
        );
    }
}

export default Contact;