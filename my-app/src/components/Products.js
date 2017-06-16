import React from 'react';


var items = {name:undefined, price:undefined, image:undefined}



function Products(props) {
	 
    let i=0;
	const list = props.productsVariable.map( x => <li id={x.productName+x.productPrice}key={i++}>
                                            
    name: {x.productName}<br />
    price: {x.productPrice} <br />
    <img className="productsImg"src={x.productImg} alt={x.productName}/><br />
                                            
    <button onClick={props.handleClickDeleteProduct} id={x.productName+x.productPrice}>Delete</button><br /><br /></li>)
	return (
        <div className = 'edith1'><h1> Add your own product here</h1>
        
        <ul className="ProductList">{list}</ul>
        
        <div className="Form">
        <input onChange={changename}type="text"  placeholder="product title"/>
        <input onChange={changeprice} type="number"  placeholder="Given Price"/>
        <input onChange={changeimage} type="text"  placeholder="Image Url"/>
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
      
        props.Addproduct(
            items.name,
            items.price,
            items.image
        );
      
    
    };
    
    
    
}

export default Products;

  