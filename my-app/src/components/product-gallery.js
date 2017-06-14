import React, { Component } from 'react';
import '../App.css';
import ListView from './ListView';
import Picture from './picture';
import History from './history';
import {actionChangeTab, actionClickOnAdd, actionUpdateBasket, actionHistory,actionShowBasket} from '../actions/actions.js';
import {connect} from 'react-redux';
import Basket from "./basket";



{/*class ProductGallery extends Component {
  render() {
    return (
     
        <div className="product-gallery">
          <p>I'm the gallery</p>
          {this.props.berryType.map((berryType, i)=> <Image {...this.props} key={i} i={i} berryType={berryType} />)}
        </div>
     
    );
  }
}

export default ProductGallery;*/}


class ProductGallery extends Component {
	constructor(props) {
		super(props);
		this.handleClickAddButton = this.handleClickAddButton.bind(this);
		this.handleClickHistory = this.handleClickHistory.bind(this);
        this.ClickOnAdd = this.ClickOnAdd.bind(this);
        this.toggleBasket = this.toggleBasket.bind(this);
        this.addToBasket = this.addToBasket.bind(this);
	}

	toggleBasket(){
	    //this.setState({showBasket:!this.state.view.showBasket});
        this.props.dispatch(actionShowBasket(!this.props.view.showBasket));
    }

    addToBasket(e){
	    let elm = JSON.parse(e.target.attributes["data-item"].nodeValue);
        this.props.dispatch(actionUpdateBasket(elm));
    }


	render() {
		let view;
		if( this.props.tab === 1 ) {
			view = <ListView
                productsVariable={this.props.products}
                ClickOnAdd={this.ClickOnAdd}
                addToBasket={this.addToBasket}
            />;
		} else if( this.props.tab === 2 ) {
			view = <Picture image={this.props.imageUrl} />;
		} else {
			view = <History history={this.props.history} />;
		}


		return (
			<div className="App">
                <div>
                    <button onClick={this.handleClickHistory}>View history</button>
                    <button onClick={this.toggleBasket}>View basket</button>

                </div>
                <div>
                    {view}
                </div>
                <div>
                    <button onClick={this.handleClickAddButton}>Admin- add product</button>
                </div>
                {this.props.view.showBasket &&
                    <div>
                        <Basket className="basket"
                            basketItems={this.props.basket}
                        />
                    </div>
                }

		  </div>
		);
	}
	handleClickAddButton(e) {
		let action = actionClickOnAdd(42);
		this.props.dispatch( action );
		this.props.dispatch( actionHistory(action) );
	}
	
	handleClickHistory(e) {
		this.changeTab(4);
	}
	changeTab(tab) {
		let action = actionChangeTab(tab);
		this.props.dispatch(action);
		this.props.dispatch( actionHistory(action) );
	}
    ClickOnAdd(name, price, image) {
        let action= actionClickOnAdd(name, price, image); 
        this.props.dispatch(action);
    }
}

function mapStateToProps(state) {
	console.log('state:', state);
	return {
		tab: state.tab,
        products: state.products,
		basket: state.basket,
		history: state.history,
        view:state.view
	}
}

export default connect(mapStateToProps)(ProductGallery);
