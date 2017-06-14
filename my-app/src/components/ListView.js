import React from 'react';

var items = {name:undefined, price:undefined, image:undefined}

function ListView(props) {
	let i=0;
	const list = props.productsVariable.map( x => 
        <li id={x.productName + x.price} key={i++}>
            <img className="images" src={x.picture} alt={x.productName} />
            <br />
            {x.productName}
            <br />
            price: {x.price}
            <br />
            <button data-item={JSON.stringify({title:x.productName, price: x.price})} onClick={props.addToBasket}>Add to basket</button>
        </li>
    );
    return (
        <div>
		  <ul>{list}</ul>
          <input onChange={addProductName}
                 type="text" placeholder="type of berry"/>
          <input onChange={addProductPrice} 
                 type=""  
                 placeholder="price"/>
          <input onChange={addProductImg} 
                 type="text" placeholder="image"/>
        <button onClick={clickOnAdd}>
            Add product</button>  
        </div>
	);
    
    function addProductName(e){
        let x = e.target.value;
        items.name = x;
    } 
    function addProductPrice(e){
        let x = e.target.value;
        items.price = x;
    } 
    function addProductImg(e){
        let x = e.target.value;
        items.image = x;
    } 
    function clickOnAdd(){
        // func in tab componenet
        props.ClickOnAdd(items.name,items.price,items.image);    
    };
    
    
}
    
export default ListView;