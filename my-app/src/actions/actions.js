const CHANGE_TAB = 'CHANGE_TAB';
const ADDPRODUCT = 'ADDPRODUCT';
const HISTORY = 'HISTORY';
const DELETEPRODUCT='DELETEPRODUCT';
const CART='CART';
const DELETECART='DELETECART';
function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}

function ActionAddProduct(name, price, image) {
	return {
		type : ADDPRODUCT,
        id:name+price,
		productName: name,
        productPrice:price,
        productImg:image
	}
}

function ActionDeleteProduct(id,name, price, image) {
	return {
		type: DELETEPRODUCT,
        id: id,
		productName: name,
        productPrice:price,
        productImg:image
	}
}
function ActionCart(id,name, price,image) {
	return {
        
		type: CART,
        id:id,
		productName: name,
        productPrice:price,
        productImg:image
        
	}
}
function ActionDeleteCart(id,name, price, image) {
	return {
		type: DELETECART,
        id: id,
		productName: name,
        productPrice:price,
        productImg:image
	}
}

function actionHistory(action) {
	return {
		type: HISTORY,
		action,
        
	}
}


export { CHANGE_TAB, actionChangeTab, 
    ADDPRODUCT,ActionAddProduct,DELETEPRODUCT,ActionDeleteProduct,
    CART,ActionCart,DELETECART,ActionDeleteCart,
    HISTORY, actionHistory,
};



