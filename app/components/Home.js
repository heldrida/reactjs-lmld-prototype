'use strict';

import React from 'react';
import HomeBlock from '../components/HomeBlock';
import ProjectFieldIO from '../components/projects/ProjectFieldIO';
import ProjectFloom from '../components/projects/ProjectFloom';
import LogoContainerHome from '../components/LogoContainerHome';

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

		const studio1 = require('../../src/images/studio1.jpg');
		const studio2 = require('../../src/images/studio2.jpg');
	
		return (
			<div>
				<LogoContainerHome showTitle={true} />
				<div className={'projects'}>
				{homeBlockList.map((obj, key) =>
					<HomeBlock key={key} location={obj.location} urlHash={obj.urlHash} innerComponent={obj.innerComponent} setNoScroll={obj.setNoScroll}
								posterImg={obj.posterImg} title={obj.title} description={obj.description} align={obj.align} />
				)}
				</div>
				<div className='studio'>
					<div className='trigger2' />
					<div className='text'>Strategy, UI/UX design, and development for startups and leading brands ment for startups and leading brands.</div>
					<img className='studio1' src={studio1} />
					<img className='studio2' src={studio2} />
				</div>
			</div>
		);

	}

}

export default Home;