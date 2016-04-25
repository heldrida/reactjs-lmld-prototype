require('./main.scss');

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: function () {
		return (
			<div><p>Hello World!</p></div>
		)
	}
});

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('app')
);