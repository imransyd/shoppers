import React, {Component} from 'react';
import Shops from './Shops';
import Products from './Products';
import Cart from './Cart';
import History from './History';


import {actionChangeTab,ActionAddProduct,ActionCart,ActionDeleteCart,ActionDeleteProduct,actionHistory} from '../actions/actions.js';
//  actions
import {connect} from 'react-redux';

class TabComponent extends Component {
	constructor(props) {
		super(props);
		this.handleClickProducts = this.handleClickProducts.bind(this);
        this.handleClickHistory = this.handleClickHistory.bind(this);
		this.handleClickShop = this.handleClickShop.bind(this);
        
		this.Addproduct=this.Addproduct.bind(this);
        this.handleClickDeleteProduct = this.handleClickDeleteProduct.bind(this);
        
        this.addToCart=this.addToCart.bind(this);
        this.handleClickCart=this.handleClickCart.bind(this);
        this.handleClickDeleteCart=this.handleClickDeleteCart.bind(this);
        
        
        
	}
	render() {
		let view;
		if( this.props.tab === 1 ) {
            //productsVar is what we make here and then in our Producs comp will map into it , this props.products is from functions down which has stat.prod
			view = <Products productsVariable={this.props.products} Addproduct={this.Addproduct} handleClickDeleteProduct={this.handleClickDeleteProduct}/>;
		} else if( this.props.tab === 2 ) {
            
			view = <Shops productsVariable={this.props.products} addToCart={this.addToCart} />;
		
		} else if( this.props.tab === 3 ) {
			view = <History history={this.props.history} />;
		} 
        else if( this.props.tab === 4 ) {
			view = <Cart  productsVariable={this.props.cart} handleClickDeleteCart={this.handleClickDeleteCart}/>;
		} 
		return (
			<div className="App">
            <div className="tabheader">
				<button onClick={this.handleClickProducts}>Products</button>
				<button onClick={this.handleClickShop}>Shop</button>
				
				<button onClick={this.handleClickHistory}>History</button>
				
                <button onClick={this.handleClickCart}>Cart</button>
				
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
    
    handleClickCart(e) {
		this.changeTab(4);
    }
    handleClickDeleteProduct(e) {
        let x = e.target.id;
        let action = ActionDeleteProduct(x);
        this.props.dispatch( action );
        this.props.dispatch( actionHistory(action) );
}
    handleClickDeleteCart(e) {
        let x = e.target.id;
        let action = ActionDeleteCart(x);
        this.props.dispatch( action );
        this.props.dispatch( actionHistory(action) );
}
    
    
	Addproduct(name, price, image){
     let action= ActionAddProduct(name, price, image); //we make data packaged
        this.props.dispatch(action); //we send the package to post office updates state
        this.props.dispatch(actionHistory(action));

    }
    addToCart(e){
        let eachProduct = this.props.products;
        
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
              
     let action = ActionCart(findedProduct.id,findedProduct.productName,findedProduct.productPrice,findedProduct.productImg);
        
    this.props.dispatch(action); 
    this.props.dispatch(actionHistory(action));          
        
}
	
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
        cart:state.cart,
		history: state.history
		
	}
}

export default connect(mapStateToProps)(TabComponent);


