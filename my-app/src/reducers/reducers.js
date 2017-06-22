import { CHANGE_TAB, ADDPRODUCT,CART,DELETEPRODUCT,DELETECART,HISTORY} from '../actions/actions.js';



function tabReducer(state = 1, action) {
	switch( action.type ) {
		case CHANGE_TAB:
			return action.tab;
		default:
			return state;
	}
}
function productsReducer(state = [], action) {
	switch( action.type ) {
        case ADDPRODUCT:
			return [...state, action];
        case DELETEPRODUCT:
			let Removed =
            //filter trough state and all elements which their is not the same as action.id in delete action     
            state.filter(function(elemenet) {
			return elemenet.id !== action.id;
		});
		    return Removed;
        default:
            return state;
		}
}

function cartReducer(state = [], action) {
	switch(action.type ) {
		case CART:
            //takes the basket which is in state 
          return [...state, action];
        case DELETECART:
            let Removed=
                state.filter(function(element){
                 return element.id !== action.id;    
        });
            return Removed;
		default:
			return state;
	}
}


function historyReducer(state = [], action) {
	switch( action.type ) {
		case HISTORY:
			return [...state, action.action];
		default:
			return state;
	}
}


export {tabReducer,cartReducer, productsReducer, historyReducer};



