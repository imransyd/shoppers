const CHANGE_TAB = 'CHANGE_TAB';
const ADDPRODUCT = 'ADDPRODUCT';
const HISTORY = 'HISTORY';
const DELETEPRODUCT='DELETEPRODUCT';
const BASKET='BASKET';
const DELETE_FROM_BASKET='DELETE_FROM_BASKET';
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


function ActionBasket(id,name, price,image) {
	return {
        
		type: BASKET,
        id:id,
		productName: name,
        productPrice:price,
        productImg:image
        
	}
}
function ActionDeleteFromBasket(id,name, price, image) {
	return {
		type: DELETE_FROM_BASKET,
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


export { CHANGE_TAB, actionChangeTab, ADDPRODUCT, ActionAddProduct, DELETEPRODUCT, ActionDeleteProduct, BASKET, ActionBasket, DELETE_FROM_BASKET, ActionDeleteFromBasket, HISTORY, actionHistory
};



