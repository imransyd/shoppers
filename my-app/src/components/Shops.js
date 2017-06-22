import React from 'react';

function Shops(props) {
    
    let i=0;
	const list = props.productsVariable.map( 
        x => <li id={x.productName+x.productPrice} key={i++}>
        
        <img className="productsImg" src={x.productImg} alt={x.productName} /><br/>
        name: {x.productName} <br/>
        price: {x.productPrice} USD<br/>
         
    <button onClick={addToCartShop} id= {x.productName+x.productPrice}> Add to Cart</button></li> )
                                            
	return ( <div><h1> Shopping page</h1>
                                   
            <ul className="ProductList">{list}</ul>
            
            </div>                                
          );

          

  function addToCartShop (e){
        
    props.addToCart(e.target.id);
   
    }                                          
}
                                            
export default Shops;