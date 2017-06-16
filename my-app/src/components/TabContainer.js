import React, {Component} from 'react';
import Shops from './Shops';
import Products from './Products';
import Basket from './Basket';
import History from './History';


import {actionChangeTab,
        ActionAddProduct,
        ActionBasket,
        ActionDeleteFromBasket,
        actionHistory,
        ActionDeleteProduct} 
from '../actions/actions.js';


//  actions
import {connect} from 'react-redux';

class TabComponent extends Component {
	constructor(props) {
		super(props);
		this.handleClickProducts = this.handleClickProducts.bind(this);
        this.handleClickHistory = this.handleClickHistory.bind(this);
        
		this.handleClickShop = this.handleClickShop.bind(this);
		this.Addproduct=this.Addproduct.bind(this);
        
        this.addToBasket=this.addToBasket.bind(this);
        this.handleClickBasket=this.handleClickBasket.bind(this);
        this.handleClickDeleteBasket=this.handleClickDeleteBasket.bind(this);
        
        this.handleClickDeleteProduct = this.handleClickDeleteProduct.bind(this);
        
	}
	render() {
		let view;
		if( this.props.tab === 1 ) {

            view = <Products 
            productsVariable={this.props.products} 
            Addproduct={this.Addproduct} 
            handleClickDeleteProduct={this.handleClickDeleteProduct}
            />;
		} else if( this.props.tab === 2 ) {
            
			view = <Shops 
            productsVariable={this.props.products} 
            addToBasket={this.addToBasket} 
            />;
		
		} else if( this.props.tab === 3 ) {
			view = <History 
            history={this.props.history} />;
		} 
        else if( this.props.tab === 4 ) {
			view = <Basket  
            productsVariable={this.props.basket} 
            handleClickDeleteBasket={this.handleClickDeleteBasket}/>;
		} 
		return (
			<div className="App">
            <div className="tabheader">
				<button onClick={this.handleClickProducts}>Products</button>
				<button onClick={this.handleClickShop}>Shop</button>
				
				<button onClick={this.handleClickHistory}>History</button>
				
                <button onClick={this.handleClickBasket}>Basket</button>
				
			</div>
			<div className="tabbody">
				{view}
			</div>
			<div>
				
			</div>
		  </div>
		);
	}
	
    handleClickProducts(e) {
		this.changeTab(1);
	}
    handleClickShop(e) {
		this.changeTab(2);
	}
	handleClickHistory(e) {
		this.changeTab(3);
	}
    
    handleClickBasket(e) {
		this.changeTab(4);
    }
    
    handleClickDeleteProduct(e) {
        let x = e.target.id;
        let action = ActionDeleteProduct(x);
        this.props.dispatch( action );
        this.props.dispatch( actionHistory(action) );
}
    
    handleClickDeleteBasket(e) {
        let x = e.target.id;
        let action = ActionDeleteFromBasket(x);
        this.props.dispatch( action );
        this.props.dispatch( actionHistory(action) );
}
    
	Addproduct(name, price, image){
     let action= ActionAddProduct(name, price, image); //we make data packaged
        this.props.dispatch(action); //we send the package to post office updates state
        this.props.dispatch(actionHistory(action));

    }
    addToBasket(e){
        let eachProduct = this.props.products;
        //after finding all the product we need to find that specific id, which below u see
          function find(key1, value) {
              //key is the id in object
			    var i = 0;
              //first product in arrey is 0
			    for (var key in eachProduct) {
		        var currentProduct = eachProduct[key];
                    
		        if (currentProduct[key1] === value) {
		            return i;
		        }
		        i++;
			    }
			   return -1;
              } 
              
   let findId= find('id',e); 
    
   let findedProduct = this.props.products[findId];
              
     let action = ActionBasket(findedProduct.id,
                               findedProduct.productName,
                               findedProduct.productPrice,
                               findedProduct.productImg);
        
    this.props.dispatch(action); //we send the package to post office updates state
    this.props.dispatch(actionHistory(action));          
        
}//addToBasket
	
	changeTab(tab) {
		let action = actionChangeTab(tab);
		this.props.dispatch(action);
		this.props.dispatch( actionHistory(action) );
	}
}

function mapStateToProps(state) {
	
	return {
		tab: state.tab,
        products: state.products,
        shops: state.products,
        basket:state.basket,
		history: state.history
		
	}
}

export default connect(mapStateToProps)(TabComponent);


