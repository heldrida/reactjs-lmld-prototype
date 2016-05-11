'use strict';

import React from 'react';
import LogoHome from '../components/home/LogoHome';
import YellowHello from '../components/home/YellowHello';
import Thumbnail from '../components/Thumbnail';
import ProjectField from '../components/projects/ProjectField';
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
				className: 'thumb1',
				component: ProjectField
			},
			urlHash: 'field',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-1.jpg'),
			title: 'field',
			description: 'Digital Identity',
			align: 'left'
		}, {
			location: this.props.location,
			innerComponent: {
				className: 'thumb2',
				component: ProjectFloom
			},
			urlHash: 'floom',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-2.jpg'),
			title: 'floom',
			description: 'Digital Identity',
			align: 'right'
		}, {
			location: this.props.location,
			innerComponent: {
				className: 'thumb3',
				component: ProjectField
			},
			urlHash: 'field',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-1.jpg'),
			title: 'field',
			description: 'Digital Identity',
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
						<Thumbnail key={key} location={obj.location} urlHash={obj.urlHash} innerComponent={obj.innerComponent} setNoScroll={obj.setNoScroll}
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