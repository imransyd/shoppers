import React, {Component} from 'react';
import Shops from './Shops';
import Products from './Products';
import History from './History';

// ny komponent
import {actionChangeTab,ActionAddProduct,ActionBasket,actionHistory} from '../actions/actions.js';
// nya actions
import {connect} from 'react-redux';

class TabComponent extends Component {
	constructor(props) {
		super(props);
		this.handleClickProducts = this.handleClickProducts.bind(this)
        this.handleClickHistory = this.handleClickHistory.bind(this)
		this.handleClickShop = this.handleClickShop.bind(this)
		this.Addproduct=this.Addproduct.bind(this);
        this.addToBasket=this.addToBasket.bind(this);
	}
	render() {
		let view;
		if( this.props.tab === 1 ) {
            //productsVar is what we make here and then in our Producs comp will map into it , this props.products is from functions down which has stat.prod
			view = <Products productsVariable={this.props.products} Addproduct={this.Addproduct}/>;
		} else if( this.props.tab === 2 ) {
            
			view = <Shops productsVariable={this.props.products} addToBasket={this.addToBasket}/>;
		
		} else if( this.props.tab === 3 ) {
			view = <History history={this.props.history} />;
		} 
		return (
			<div className="App">
            <div className="tabheader">
				<button onClick={this.handleClickProducts}>Products</button>
				<button onClick={this.handleClickShop}>Shop</button>
				
				<button onClick={this.handleClickHistory}>History</button>
				
				
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
    
    // called in products
	Addproduct(name, price, image){
     let action= ActionAddProduct(name, price, image); //we make data packaged
        this.props.dispatch(action); //we send the package to post office updates state
        this.props.dispatch(actionHistory(action));

    }
    addToBasket(id){
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
   let findId= find('id',id); 
   let findedProduct = this.props.products[findId];
     let action = ActionBasket(findedProduct.flowersName,findedProduct.flowersPrice); 
    this.props.dispatch(action); //we send the package to post office updates state
    this.props.dispatch(actionHistory(action));          
  console.log(findedProduct);
}  
        
    }
	
	changeTab(tab) {
		let action = actionChangeTab(tab);
		this.props.dispatch(action);
		this.props.dispatch( actionHistory(action) );
	}
}

function mapStateToProps(state) {
	console.log('state:', state);
	return {
		tab: state.tab,
        products: state.products,
        shops: state.products,
		history: state.history
		
	}
}

export default connect(mapStateToProps)(TabComponent);