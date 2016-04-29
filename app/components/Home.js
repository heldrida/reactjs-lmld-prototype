'use strict';

import React from 'react';
import ReactRouter from 'react-router';
import HomeBlock from '../components/HomeBlock';
import HomeBlockCaseStudyVans from '../components/HomeBlockCaseStudyVans';

class Home extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div>
				<HomeBlock innerComponent={HomeBlockCaseStudyVans} setNoScroll={ this.props.setNoScroll.bind(this) } />
			</div>
		);

	}

}

export default Home;