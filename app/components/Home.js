'use strict';

import React from 'react';
import ReactRouter from 'react-router';
import HomeBlock from '../components/HomeBlock';
import HomeBlockCaseStudyVans from '../components/HomeBlockCaseStudyVans';
import HomeBlockCaseStudyTwix from '../components/HomeBlockCaseStudyTwix';

const homeBlockVans = {
	className: 'case-study-vans',
	component: HomeBlockCaseStudyVans
};

const homeBlockTwix = {
	className: 'case-study-twix',
	component: HomeBlockCaseStudyTwix
};

class Home extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div>
				<HomeBlock innerComponent={homeBlockVans} setNoScroll={ this.props.setNoScroll.bind(this) } />
				<HomeBlock innerComponent={homeBlockTwix} setNoScroll={ this.props.setNoScroll.bind(this) } />
			</div>
		);

	}

}

export default Home;