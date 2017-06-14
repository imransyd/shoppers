import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {tabReducer, productReducer, basketReducer, historyReducer,changeViewReducer} from './reducers/reducers.js';


let initialState = {
    tab: 1,
     products: [
                {
                 id:4,
                 productName: 'rasberries',  
                 picture: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Raspberry11.jpg', 
                 price: 4},
                
                {
                 id:2,
                 productName: 'blueberries',  
                 picture: 'https://cdn.authoritynutrition.com/wp-content/uploads/2015/02/three-blueberries.jpg', 
                 price: 3},
                
                {
                 id:3,
                 productName: 'strawberries',  
                 picture: 'http://i.dailymail.co.uk/i/pix/2015/05/18/00/24BA71B400000578-0-image-a-24_1431906929382.jpg', 
                 price: 2}
              ],
    basket: [],
    history: [{type: 'TEST'}],
    view: {
        showBasket: false,
        showHistory:false
    }
     
};

let rootReducer = combineReducers({
	tab: tabReducer,
    products: productReducer,
    basket: basketReducer,
	history: historyReducer,
    view:changeViewReducer
});
const store = createStore(rootReducer, initialState);


ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root')
);
registerServiceWorker();

