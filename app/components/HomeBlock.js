import React from 'react';
import ReactRouter from 'react-router';

class HomeBlock extends React.Component {

	constructor (props) {
		super(props);
		this.state = { count: 1 };
	}

	openBlock (e) {

		console.log(this.state.count);

	}

	render () {

		return (
			<div className="home-block">
				<div className="block" onClick={this.openBlock.bind(this)}>
				</div>
			</div>
		);

	}

}

export default HomeBlock;