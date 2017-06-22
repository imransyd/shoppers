import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import {tabReducer, productsReducer,cartReducer, historyReducer} from './reducers/reducers.js';


let initialState = {
	tab: 1,  // 1=väder, 2=tal
	products:[{
        id:'Converse100',
        productName:'Converse',
        productPrice:100,
        productImg: 'https://imransyd.github.io/shoppers/my-app/images/camila-damasio-91788.jpg'
     },
        {
        id:'Nike120',
        productName:'Nike',
        productPrice:120,
        productImg:'https://imransyd.github.io/shoppers/my-app/images/imani-clovis-234736.jpg'
     },
        {
         id:'NewBalance140',
        productName:'NewBalance',
        productPrice:140,
        productImg: 'https://imransyd.github.io/shoppers/my-app/images/linda-xu-100716.jpg'
     }     ], 
    
      cart:[],
	}


let rootReducer = combineReducers({
	tab: tabReducer,
	products:productsReducer,
    shops:cartReducer,
    cart:cartReducer,
    history:historyReducer
});
const store = createStore(rootReducer, initialState);
 //provider to get hold of store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
