import React from 'react';
//
//this is in redux the same as component
// Admin page 
var items = {name:undefined, price:undefined, image:undefined}

function Products(props) {
	 
    let i=0;
	const list = props.productsVariable.map( x => <li id={x.productName+x.productPrice}key={i++}>
    '
    <img className="productsImg"src={x.productImg} alt={x.productName}/><br/>
    name: {x.productName}<br/>
    price: {x.productPrice} USD<br/>
    
    <button onClick={props.handleClickDeleteProduct} id={x.productName+x.productPrice}>Delete</button></li>)
	return (
        <div><h1> Admin page</h1>
        
        <ul className="ProductList">{list}</ul>
        
        <div className="Form">
        <input onChange={changename}type="text"  placeholder="product Name"/>
        <input onChange={changeprice} type="number"  placeholder="Price"/>
        <input onChange={changeimage} type="text"  placeholder="image Url"/>
        <button onClick={addProduct}>Add This Product</button> </div>                            
        </div>
);
    function changename(e){
        let x = e.target.value;
        items.name = x;
        
    } 
 function changeprice(e){
        let x = e.target.value;
        items.price = x;
        
    } 
     function changeimage(e){
        let x = e.target.value;
        items.image = x;
        
    } 
    function addProduct(){
        // func in tabcontainer componenet
        props.Addproduct(items.name,items.price,items.image);
      
    
    };
    
    
    
}

export default Products;

  