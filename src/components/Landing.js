
import React, { Component } from 'react';


class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h6 className="display-4">Welcome to CaloriesLog</h6>
                        <p>Manage Your Calories Efficiently</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/calories1.jpg`}  
                        style={{backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}
                         className="img-fluid" alt="Responsive image"></img>
                    </div>
                    </div>
            </div>
         );
    }
}
 
export default Landing;