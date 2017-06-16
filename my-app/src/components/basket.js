import React, {Component} from 'react';
import '../App.css';

function Basket(props) {
    
    let i=0;
	const list = props.productsVariable.map( 
        x => <li id={x.productName+x.productPrice}  key={i++}>
        name: {x.productName} 
        price: {x.productPrice} 
        <img className="productsImg" 
        src={x.productImg} 
        alt={x.productName} />
    <button onClick={props.handleClickDeleteBasket}
        id={x.productName+x.productPrice}>
        
            X
        
        </button>                                        
    </li> )
     
    var SumTotal = 0 ;
     for(i=0; i<props.productsVariable.length; i++)
    {
        SumTotal= 
            SumTotal + props.productsVariable[i].productPrice;
        
    }
    
                                            
	return ( <div><h1> Cart </h1>
              <div><h1> Sum Total {SumTotal}</h1></div>                         
                                   
            <ul>{list}</ul>
            
            </div>                                
          );

                            
}

    
export default Basket;