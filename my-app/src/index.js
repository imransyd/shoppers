import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import {tabReducer, productsReducer,basketReducer, historyReducer} from './reducers/reducers.js';


let initialState = {
	tab: 1,  // 1=väder, 2=tal
	products:[{
        id:'NewBalance140',
        productName:'NewBalance',
        productPrice: 140,
        productImg: 'https://imransyd.github.io/shoppers/my-app/images/linda-xu-100716.jpg'
     },
        {
        id:'Nike160',
        productName:'Nike',
        productPrice: 160,
        productImg:'https://imransyd.github.io/shoppers/my-app/images/kristian-olsen-114779.jpg'
     },
        {
         id:'Rebok180',
        productName:'Rebok',
        productPrice: 180,
        productImg: 'https://imransyd.github.io/shoppers/my-app/images/joe-johnson-165746.jpg'
     }     ], 
    
      basket:[],
	}


let rootReducer = combineReducers({
	tab: tabReducer,
	products:productsReducer,
    shops:basketReducer,
    basket:basketReducer,
    history:historyReducer
});
const store = createStore(rootReducer, initialState);
 //provider to get hold of store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
