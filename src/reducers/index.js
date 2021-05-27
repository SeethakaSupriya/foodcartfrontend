import {combineReducers} from 'redux';
//import customersReducer from './customersReducer';
import errorReducer from './errorReducer';
import foodcartReducer from './foodcartReducer';
//import categoryReducer from './categoryReducer';
//import supplierReducer from './supplierReducer'
export default combineReducers({
   errors:errorReducer,
   //customers:customersReducer,
   foodcarts:foodcartReducer,
   //suppliers : supplierReducer,
   //categories : categoryReducer
});