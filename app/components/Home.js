'use strict';

import React from 'react';
import HomeBlock from '../components/HomeBlock';
import ProjectFieldIO from '../components/projects/ProjectFieldIO';
import ProjectFloom from '../components/projects/ProjectFloom';
import LogoContainer from '../components/LogoContainer';

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
				component: ProjectFieldIO
			},
			urlHash: 'field',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-1.jpg'),
			title: 'field',
			description: 'We help ambitious brands get noticed,<br/>operating in the space between digital.',
			align: 'left'
		}, {
			location: this.props.location,
			innerComponent: {
				className: 'case-study-2',
				component: ProjectFloom
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
				<LogoContainer />
				{homeBlockList.map((obj, key) =>
					<HomeBlock key={key} location={obj.location} urlHash={obj.urlHash} innerComponent={obj.innerComponent} setNoScroll={obj.setNoScroll}
								posterImg={obj.posterImg} title={obj.title} description={obj.description} align={obj.align} />
				)}
			</div>
		);

	}

}

export default Home;