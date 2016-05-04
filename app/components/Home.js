'use strict';

import React from 'react';
import Header from '../containers/Header';
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

	constructor(props) {
		super(props);

		console.log('this.refs', this.refs);

	}

	render() {

		return (
			<div>
				<Header component={Header} />
				<HomeBlock location={this.props.location} urlHash={'vans'} innerComponent={homeBlockVans} setNoScroll={ this.props.setNoScroll.bind(this) } />
				<HomeBlock location={this.props.location} urlHash={'twix'} innerComponent={homeBlockTwix} setNoScroll={ this.props.setNoScroll.bind(this) } />
			</div>
		);

	}

}

export default Home;