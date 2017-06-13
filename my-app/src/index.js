import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import {tabReducer, productsReducer,shopsReducer, historyReducer} from './reducers/reducers.js';


let initialState = {
	tab: 1,  // 1=väder, 2=tal
	products:[{
        id:'Rose40',
        flowersName:'Rose',
        flowersPrice:40,
        flowersImg: 'https://imransyd.github.io/shoppers/my-app/images/StockSnap_63GOMU1L9M.jpg'
     },
        {
        id:'Orchid60',
        flowersName:'Orchid',
        flowersPrice:60,
        flowersImg:'https://imransyd.github.io/shoppers/my-app/images/StockSnap_63GOMU1L9M.jpg'
     },
        {
         id:'Pretoria40',
        flowersName:'Pretoria',
        flowersPrice:40,
        flowersImg: 'https://imransyd.github.io/shoppers/my-app/images/StockSnap_63GOMU1L9M.jpg'
     }     ], 
    
      basket:[],
	}


let rootReducer = combineReducers({
	tab: tabReducer,
	products:productsReducer,
    shops:shopsReducer,
    basket:shopsReducer,
    history:historyReducer
});
const store = createStore(rootReducer, initialState);
 //provider to get hold of store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
       
/*	return (
			<div>
				<TopBar />
				<Header />

				<section id="content">
					<Router	config={routesConfiguration} />
				</section>

				<Footer/>

				<Popup />
			</div>
		);
*/
