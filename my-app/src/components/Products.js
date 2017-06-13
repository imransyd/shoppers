import React from 'react';
//
//this is in redux the same as component
// Admin page 
var items = {name:undefined, price:undefined, image:undefined}

function Products(props) {
	 
    let i=0;
	const list = props.productsVariable.map( x => <li id={x.flowersName+x.flowersPrice}key={i++}>name: {x.flowersName} price:    {x.flowersPrice} <img className="productsImg"src={x.flowersImg} alt={x.flowersName} /><button>Delete</button></li> )
	return (
        <div> Admin page
		<ul>{list}</ul>
        <input onChange={changename}type="text"  placeholder="flowersName"/>
        <input onChange={changeprice} type=""  placeholder="flowersName"/>
        <input onChange={changeimage} type="text"  placeholder="flowersName"/>
        <button onClick={addProduct}>Add This Product</button>                                            
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
        // func in tab componenet
        props.Addproduct(items.name,items.price,items.image);
      console.log('test');
    
    };
    
    
    
}

export default Products;