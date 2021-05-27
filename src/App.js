import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FooterComponent from './components/layout/FooterComponent';
import HeaderComponent from './components/layout/HeaderComponent';
import viewFoodCart from './components/foodcart/viewFoodCart';
import UpdateFoodCart from './components/foodcart/UpdateFoodCart';
import AddFoodCart from './components/foodcart/AddFoodCart';
import Dashboard from './components/foodcart/Dashboard';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderComponent/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/addFoodCart" component={AddFoodCart}/>
        <Route exact path="/viewFoodCart/:foodCartId" component={viewFoodCart}/>
        <Route exact path="/updateFoodCart/:foodCartId" component={UpdateFoodCart}/>
        
        <br/>
        <br/>
        <FooterComponent/>
      </Router>
    </Provider>
  );
}

export default App;
