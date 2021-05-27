import React from 'react';
import CreateFoodCartButton from './CreateFoodCartButton';
import FoodCartItem from './FoodCartItem';
class Dashboard extends React.Component{
      render(){       
        return(           
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">FoodCarts</h1>
                        <br />
                        <CreateFoodCartButton/>
                        <hr />
                       <FoodCartItem/>                   
                    </div>
                </div>
            </div>        
        );
    }
}
export default Dashboard;
