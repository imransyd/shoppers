import React, {Component} from 'react';
import {actionFetchStarted, actionFetchSuccess, actionFetchFailure} from '../actions/actions.js';
import {connect} from 'react-redux';

class Fetch extends Component {
	constructor(props) {
		super(props);
		//this.componentDidMount = this.componentDidMount.bind(this);
		this.state = {};
	}
	componentDidMount() {
		let self = this;
		console.log('Before fetch');
		fetch('https://www.forverkliga.se/JavaScript/api/simple.php?world')
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			console.log('Fetch success: ', json);
			self.props.dispatch( actionFetchSuccess(json) );
		})
		.catch(function(error) {
			console.log('Fetch failure', error);
			self.props.dispatch( actionFetchFailure(error) );
		});
		console.log('Fetch started');
		this.props.dispatch( actionFetchStarted() );
	}
	render() {
		if( this.props.status === 0 ) {
			return <p>Fetch har inte börjat</p>;
		}else if( this.props.status === 1 ) {
			return <p>Fetch påbörjad</p>
		}else if( this.props.status === 2 ) {
			// Framtida förbättring: gör en funktionell komponent, <Country>, som kan rendera ett element i data-objektet. Gör om this.props.data till en lista med Country-komponenter.
			return <p>Fetch success. Data: {JSON.stringify(this.props.data)}</p>
		}else if( this.props.status === 3 ) {
			return <p>Fetch fail. Fel: {this.props.data.message}</p>
		}
		return <p>fetch</p>
	}
}

function mapStateToProps(state) {
	return {
		status: state.fetch.status,
		data: state.fetch.data
	}
}
export default connect(mapStateToProps)(Fetch);






