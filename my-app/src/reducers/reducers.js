   import { REMOVE_FRM_BASKET, CHANGE_TAB, CLICK_ON_ADD, UPDATE_BASKET,  UPDATE_HISTORY,VIEW_HISTORY, VIEW_BASKET } from '../actions/actions.js';



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
                console.log('basketreducer update basket=',state,action)
                return [...state, action.product];
            case REMOVE_FRM_BASKET:
                return state.filter( i => i.id !== action.item.id);
            default:
                console.log('basketReducer state=',
                            state, action);
                //  state === [undefined]
                return state;

        }
    }


   function historyReducer(state = [], action) {
        switch(action.type) {
            case UPDATE_HISTORY:
                return [...state, action.action];
                
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