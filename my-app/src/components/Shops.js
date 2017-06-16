import React from 'react';

function Shops(props) {
    
    let i=0;
	const list = 
          props.productsVariable.map(x => 
        <li id={x.productName+x.productPrice} key={i++}>
            <img className="productsImg" src={x.productImg} alt={x.productName} /> 
            <br />
              name: {x.productName} <br />
            
              price: {x.productPrice} <br />
            
    <button onClick={addToBasketShop} id= {x.productName+x.productPrice}> Add to cart</button></li> )
                                            
	return ( <div><h1> Shopping page</h1>
                                   
            <ul className="ProductList">{list}</ul>
            
            </div>                                
          );

          

  function addToBasketShop (e){
        
    props.addToBasket(e.target.id);
   
    }                                          
}
                                            
export default Shops;