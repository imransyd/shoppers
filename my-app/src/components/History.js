import React from 'react';

function History(props) {
	
	const list = props.history.reverse().map( (x, index) => <li id={x.type} key={index}>{x.type}</li> );
	return <div><h1>History page</h1>: <ul>{list}</ul>          </div>;
}

export default History;