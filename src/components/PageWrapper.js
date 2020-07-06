import React, {Component} from 'react';
import Navbar from './common/Navbar';

class PageWrapper extends Component {

    render(){
        

        return(
            <div>
                <Navbar />
                {this.props.children}
            </div>
        );
    }

}

export default PageWrapper;