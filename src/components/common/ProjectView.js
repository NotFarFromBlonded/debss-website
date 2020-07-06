import React, {Component} from 'react';
import CardLayout from './CardLayout';

const content = [
    {title:"GITHUB",description:"My Github repositories",link:"https://www.github.com/NotFarFromBlonded",cursor:"pointer"}
];

class ProjectView extends Component  {


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

export default ProjectView;