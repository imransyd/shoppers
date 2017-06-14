const CHANGE_TAB = 'CHANGE_TAB';
const CLICK_ON_ADD = 'CLICK_ON_ADD';
const UPDATE_BASKET = 'UPDATE_BASKET';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const VIEW_HISTORY = 'VIEW_HISTORY';
const VIEW_BASKET = 'VIEW_BASKET';

function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	};
}

function actionClickOnAdd(name, price, image) {
    return {
        type: CLICK_ON_ADD,
        productName: name,
        price:price,
        picture:image
        
    };
}

function actionUpdateBasket(product) {
    return {
        type: UPDATE_BASKET,
        product
    };
}

function actionHistory(action) {
	return {
		type: UPDATE_HISTORY,
		action
	};
}

function actionShowBasket(showBasket){
    return{
        type: VIEW_BASKET,
        showBasket
    };
}

export { CHANGE_TAB, actionChangeTab, CLICK_ON_ADD, actionClickOnAdd, UPDATE_BASKET, actionUpdateBasket, UPDATE_HISTORY, actionHistory,VIEW_HISTORY,VIEW_BASKET,actionShowBasket };