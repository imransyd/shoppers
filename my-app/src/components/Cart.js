import React, { Component } from 'react';
import '../App.css';

function Cart(props) {
    
    let i=0;
	const list = 
        props.productsVariable.map( x => <li id=
            {x.productName+x.productPrice} key={i++}>
                                   
            <img className="productsImg" src={x.productImg} alt={x.productName} /><br/>
            name: {x.productName} <br/>
            price: {x.productPrice} USD <br/>
            
                                   
    <button onClick={props.handleClickDeleteCart} id={x.productName+x.productPrice}>Delete</button>                                        
    </li> )
     
    var totalPrice = 0 ;
     for(i=0; i<props.productsVariable.length; i++){
        totalPrice= totalPrice + props.productsVariable[i].productPrice;
        
    }
    
                                            
	return ( <div><h1>Shopping Cart</h1>
              <div><h1> Total price : {totalPrice} USD</h1></div>                         
                                   
            <ul  className="ProductList">{list}</ul>
            
            </div>                                
          );

                            
}

    
export default Cart;