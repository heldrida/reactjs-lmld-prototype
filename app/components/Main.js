'use strict';

import React from 'react';
import Footer from '../containers/Footer';
//import ScrollMagic from 'scrollmagic';
//import Header from '../containers/Header';

class Main extends React.Component {

	constructor(props) {

		super(props);

	}

	setNoScroll(bool) {

		let cl = document.body.classList;

		bool ? cl.add('noscroll') : cl.remove('noscroll');

	}

	render() {

		return(

			<div className="main">
				<div className="content">
					{React.cloneElement(this.props.children, { setNoScroll: this.setNoScroll.bind(this) })}
				</div>

				<Footer />

			</div>
		);

	}

}

export default Main;