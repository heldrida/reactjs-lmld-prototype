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

		const caseStudyImg1 = require('../../src/images/case-study/case-study-1.jpg');
		const caseStudyImg2 = require('../../src/images/case-study/case-study-2.jpg');

		const caseStudy1Title = 'field.io';
		const caseStudy1Description = 'We help ambitious brands get noticed,<br/>operating in the space between digital.';
		const caseStudy2Title = 'FLOOM';
		const caseStudy2Description = 'We help ambitious brands get noticed,<br/>operating in the space between digital.';

		return (
			<div>
				<Header component={Header} />
				<HomeBlock location={this.props.location} urlHash={'vans'} innerComponent={homeBlockVans} setNoScroll={ this.props.setNoScroll.bind(this) }
							posterImg={caseStudyImg1} title={caseStudy1Title} description={caseStudy1Description} align={'left'} />
				<HomeBlock location={this.props.location} urlHash={'twix'} innerComponent={homeBlockTwix} setNoScroll={ this.props.setNoScroll.bind(this) }
							posterImg={caseStudyImg2} title={caseStudy2Title} description={caseStudy2Description} align={'right'} />
			</div>
		);

	}

}

export default Home;