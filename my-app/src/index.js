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
                 productName: 'Nike',  
                 picture: 'https://imransyd.github.io/shoppers/my-app/images/kristian-olsen-114779.jpg', 
                 price: 4},
                
                {
                 id:2,
                 productName: 'all Star',  
                 picture: 'https://imransyd.github.io/shoppers/my-app/images/camila-damasio-91788.jpg', 
                 price: 3},
                
                {
                 id:3,
                 productName: 'addidas',  
                 picture: 'https://imransyd.github.io/shoppers/my-app/images/goh-rhy-yan-281693.jpg', 
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

