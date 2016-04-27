import React from 'react';
import Footer from '../containers/Footer';

class Main extends React.Component {

	constructor (props) {
		super(props);
	}

	expandModule () {
		console.log('fn expandModule!');
	}

	render () {

		return (
			<div>
				#Main Section#

				<br />
				<button onClick={this.expandModule}>ExpandModule fn()</button>

				{this.props.children}

				<Footer />
			</div>
		);

	}

}

export default Main;