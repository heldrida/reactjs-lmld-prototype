'use strict';

import React from 'react';
import LogoHome from '../components/home/LogoHome';
import YellowHello from '../components/home/YellowHello';
import HomeBlock from '../components/home/ProjectsHome';
import ProjectFieldIO from '../components/projects/ProjectFieldIO';
import ProjectFloom from '../components/projects/ProjectFloom';
import Studio from '../components/home/Studio';

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
		}, {
			location: this.props.location,
			innerComponent: {
				className: 'case-study-3',
				component: ProjectFieldIO
			},
			urlHash: 'field',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-1.jpg'),
			title: 'field',
			description: 'We help ambitious brands get noticed,<br/>operating in the space between digital.',
			align: 'left'
		}];

		return (
			<div className='home-content'>
				<div className='wrapper'>
					<div className='logo-home'>
						<LogoHome showTitle={true} addToScrollMagicController={this.props.addToScrollMagicController} removeSceneFromScrollMagicController={this.props.removeSceneFromScrollMagicController} />
					</div>
					<YellowHello />
					<div className={'projects'}>
					{homeBlockList.map((obj, key) =>
						<HomeBlock key={key} location={obj.location} urlHash={obj.urlHash} innerComponent={obj.innerComponent} setNoScroll={obj.setNoScroll}
									posterImg={obj.posterImg} title={obj.title} description={obj.description} align={obj.align} />
					)}
					</div>
				</div>
				<Studio />
			</div>
		);

	}

}

export default Home;