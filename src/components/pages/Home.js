import React, {Component} from 'react';
import line2 from '../../images/line2.svg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

class Home extends Component {

    render() {
        return(
            <motion.div
                initial ={{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{duration:3}}
                exit={{opacity:0}}
            >
                <div id = "home" className="home">
                    <div id = "landing-page" className="landing-page">
                        <div id = "landing-container" className="landing-container">
                            <div id = "landing-view" className="landing-view">
                                <div id = "landing-intro" className="landing-intro ">
                                    <h1 className="iam animate-this">I am</h1>
                                    <h3 className="debashish animate-this">Debashish</h3>
                                    <h4 className="majumdar animate-this">Majumdar</h4>
                                    <Link className='link' to= "./about"><button class="know">Know more</button></Link>
                                </div>
                                <div id = "landing-picture" className="landing-picture animate-this">
                                    <img src={line2} id="selfie" className="selfie" alt='selfie'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

}
export default Home;