    import { CHANGE_TAB, CLICK_ON_ADD, UPDATE_BASKET,  UPDATE_HISTORY,VIEW_HISTORY, VIEW_BASKET } from '../actions/actions.js';



    function tabReducer(state = 1, action) {
        switch( action.type ) {
            case CHANGE_TAB:
                return action.tab;
            default:
                return state;
        }
    }

    function productReducer(state = [], action) {
        switch( action.type ) {
            case CLICK_ON_ADD:
                return [...state, action];
            default:
                return state;
        }
    }

    function basketReducer(state = [], action) {
        switch(action.type) {
            case UPDATE_BASKET:
                return [...state, action.product];
            default:
                console.log(state, action);
                return state;

        }
    }


   function historyReducer(state = [], action) {
        switch(action.type) {
            case UPDATE_HISTORY:
                return //show all the actions
                
            default:
                console.log(state, action);
                return state;

        }
    }

    function changeViewReducer(state={}, action){
        switch(action.type){
            case VIEW_BASKET:
                return {...state, showBasket: action.showBasket};
            case VIEW_HISTORY:
                return {...state, showHistory: action.showHistory};
            default:
                return state;
        }
    }



    export { tabReducer, productReducer, basketReducer, historyReducer, changeViewReducer };