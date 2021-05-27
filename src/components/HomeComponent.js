import React from 'react';
import background from './../background.jpg';
class HomeComponent extends React.Component{
    render(){
        return(
            <div>
               <h1 className="display-4 text-center">Food Delivery Application</h1> 
               <br/>
               <center><img src={background} alt="picture" ></img></center>
            </div>
        );
    }
}
export default HomeComponent;