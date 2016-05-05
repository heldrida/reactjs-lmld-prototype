'use strict';

import React from 'react';
import Header from '../containers/Header';
import HomeBlock from '../components/HomeBlock';
import HomeBlockCaseStudy1 from '../components/HomeBlockCaseStudy1';
import HomeBlockCaseStudy2 from '../components/HomeBlockCaseStudy2';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		// Home block list data
		const homeBlockList = [{
			location: this.props.location,
			innerComponent: {
				className: 'case-study-1',
				component: HomeBlockCaseStudy1
			},
			urlHash: 'field.io',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-1.jpg'),
			title: 'field.io',
			description: 'We help ambitious brands get noticed,<br/>operating in the space between digital.',
			align: 'left'
		}, {
			location: this.props.location,
			innerComponent: {
				className: 'case-study-2',
				component: HomeBlockCaseStudy2
			},
			urlHash: 'floom',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-2.jpg'),
			title: 'floom',
			description: 'We help ambitious brands get noticed,<br/>operating in the space between digital.',
			align: 'right'
		}];


		return (
			<div>
				<Header component={Header} />
				{homeBlockList.map((obj, key) =>
					<HomeBlock key={key} location={obj.location} urlHash={obj.urlHash} innerComponent={obj.innerComponent} setNoScroll={obj.setNoScroll}
								posterImg={obj.posterImg} title={obj.title} description={obj.description} align={obj.align} />
				)}
			</div>
		);

	}

}

export default Home;