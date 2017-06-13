import React from 'react';

function Shops(props) {
    
    let i=0;
	const list = props.productsVariable.map( x => <li id={x.flowersName+x.flowersPrice} key={i++}>name: {x.flowersName} price: {x.flowersPrice} <img className="productsImg" src={x.flowersImg} alt={x.flowersName} /> <button onClick={onClickbasket}>Add to your basket</button></li> )
                                            
	return <ul>{list}</ul>
}

  function onClickbasket (e){
        
    //props.addToBasket(e.target.id);
    console.log('onBasket');
    }                                          
                                            
                                            
export default Shops;