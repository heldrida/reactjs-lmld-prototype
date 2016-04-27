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
			<div className="main">
				#Main Section#
				<a href="/#/">Open `home` component!</a>
				<a href="/#/test">Open `Test` component!</a>

				<br />
				<button onClick={this.expandModule}>ExpandModule fn()</button>

				<div className="content">
					{this.props.children}
				</div>

				<Footer />
			</div>
		);

	}

}

export default Main;