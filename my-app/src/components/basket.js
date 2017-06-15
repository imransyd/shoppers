import React, { Component } from 'react';
import '../App.css';
import {removeFromCart} from '../actions/actions.js';


export default class Basket extends Component {
 constructor (props){
    super (props);
    this.removeFromCart=this.removeFromCart.bind(this);
    }
    removeFromCart(){
        
    }
    
    
  render() {
      console.log('basket.js render basketItems=', this.props.basketItems)
      let list = this.props.basketItems.map((item,index)=>{
          console.log('item index show=',item,index)
          return (
              
            <li key={index}>
                <p><img src={item.picture} width={80} height={60} mode='fit'/></p>
                <p>{item.title}</p>
                <p>:-{item.price}SEK</p>
              
                <button className="removebutton" 
                onClick={ () => action.removeFromCart(item)} > 
          Remove 
        </button>
            </li>
          );
      });

    return (
        <div className="basket">
            <p>My Cart</p>
            <ul>
                {list}
            </ul>
        </div>
    );
  }
}

