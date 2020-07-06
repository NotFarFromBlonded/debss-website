import React, {Component} from 'react';
class About extends Component{
    
    render(){



        return(
            <div>
                <div id = "about" className="about">
                    <div id="about-content" className="about-content">
                        <div id= "quote" className="quote">
                            <p>“ I hate wasted potential, that shit crushes your spirit. 
                                It really does, it crushes your soul</p>
                            <div id="author" className="author"><span>- Jarrod Carmichael</span></div>
                            
                        </div>
                        <div id ="me" class= "me">
                            <p>
                                Debashish Majumdar, is a full stack JavaScript developer, 
                                a full stack web developer, an UI/UX designer, and a 
                                XR enthusiast.
                            </p>
                            <p>
                                He is skilled in HTML, CSS, jquery, Python, Java, C, JS, React.Js, 
                                Node.Js, Express.Js, C++, flutter and C#
                            </p>
                            <p>
                                Currently, he is a student and is pursuing a degree in
                                B.Tech C.S.E.(Computer Science).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default About;