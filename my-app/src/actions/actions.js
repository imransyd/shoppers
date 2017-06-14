const CHANGE_TAB = 'CHANGE_TAB';
const ADD_NUMBER = 'ADD_NUMBER';
const HISTORY = 'HISTORY';

function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}

function actionAddNumber(x) {
	return {
		type: ADD_NUMBER,
		number: x
	}
}

function actionHistory(action) {
	return {
		type: HISTORY,
		action
	}
}
const FETCH_STARTED = 'FETCH_STARTED', FETCH_SUCCESS = 'FETCH_SUCCESS', FETCH_FAILURE = 'FETCH_FAILURE';
function actionFetchStarted() {
	return {
		type: FETCH_STARTED
	}
}
function actionFetchSuccess(data) {
	return {
		type: FETCH_SUCCESS,
		data: data
	}
}
function actionFetchFailure(error) {
	return {
		type: FETCH_FAILURE,
		error: error
	}
}

export { CHANGE_TAB, actionChangeTab, ADD_NUMBER, actionAddNumber, HISTORY, actionHistory,
actionFetchStarted, actionFetchSuccess, actionFetchFailure, FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE };



