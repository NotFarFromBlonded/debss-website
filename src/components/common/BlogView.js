import React, {Component} from 'react';
import CardLayout from './CardLayout';

const content = [
    {title:"Welcome to my Site",description:"I'll be posting new stuff soon",link:"#",cursor:"contextMenu"}
];

class BlogView extends Component  {


    render(){


        return(
            <div id = "blog" class = "blog">
                <div id = "blog-container" class="blog-container">
                    <hr></hr>
                    <div id = "blog-view" class = "blog-view">
                        {content.map((c, i)=>{
                            return <CardLayout {...c} key={i}/>
                        })}
                    </div>  
                </div>
            </div>
        );
    }
}

export default BlogView;