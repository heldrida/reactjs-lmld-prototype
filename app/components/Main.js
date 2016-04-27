import React from 'react';

class Main extends React.Component {

	constructor (props) {
		super(props);
	}

	expandModule () {
		console.log('fn expandModule!');
	}

	render () {

		return (
			<div className='main-container'>
				Hello from Main!
				<br/>
				<button onClick={this.expandModule}>ExpandModule fn()</button>
				<div className="nested">
					{this.props.children}
				</div>
			</div>
		);

	}

}

export default Main;