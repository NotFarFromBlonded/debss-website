import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CardLayout extends Component{
    render(){
        return (
            <div id = "blog-card" className="blog-card">
                <div id = "card-content" className="card-content">
                    <h1><Link to = {this.props.link} target="_blank" style={{cursor:this.props.cursor}}>{this.props.title}</Link></h1>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default CardLayout;