import { CHANGE_TAB, ADD_NUMBER, HISTORY, FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/actions.js';

/*function rootReducer(state = initialState, action) {
	console.log('rootReducer state:', state, action)
	switch( action.type ) {
		case CHANGE_TAB:
			return {
				...state,
				tab: action.tab
			};
		case ADD_NUMBER:
			return {
				...state,
				numbers: [...state.numbers, action.number]
			};
		default:
			return state;
	}
}*/

function tabReducer(state = 1, action) {
	switch( action.type ) {
		case CHANGE_TAB:
			return action.tab;
		default:
			return state;
	}
}
function numbersReducer(state = [], action) {
	switch( action.type ) {
		case ADD_NUMBER:
			return [...state, action.number];
		default:
			return state;
	}
}
function pictureReducer(state = '', action) {
	return state;
}

function historyReducer(state = [], action) {
	switch( action.type ) {
		case HISTORY:
			return [...state, action.action];
		default:
			return state;
	}
}

function fetchReducer(state = {status: 0, data: null}, action) {
	switch( action.type ) {
		case FETCH_STARTED:
			return {
				status: 1,
				data: null
			};
		case FETCH_SUCCESS:
			return {
				status: 2,
				data: action.data
			};
		case FETCH_FAILURE:
			return {
				status: 3,
				data: action.error
			};
		default:
			return state;
	}
}

export {tabReducer, numbersReducer, pictureReducer, historyReducer, fetchReducer};



