'use strict';

import React from 'react';
import LogoHome from '../components/home/LogoHome';
import YellowHello from '../components/home/YellowHello';
import HomeShapes from '../components/home/Shapes';
import Thumbnail from '../components/Thumbnail';
import ProjectField from '../components/projects/ProjectField';
import ProjectFloom from '../components/projects/ProjectFloom';
import Studio from '../components/home/Studio';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.homeLogo = document.querySelector('.logo-home');
		this.yellowHello = document.querySelector('.yellow-hello');

		this.noLagOnMobile();
	}

	noLagOnMobile() {
		let x = window.innerHeight;
		let size1 = x * 0.8 + 'px';
		let size2 = x * 0.7 + 'px';
		if ((window.innerWidth < 600)) {
      this.homeLogo.style.height = size1;
			this.yellowHello.style.height = size2;
    }
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
					<div className='trigger1'></div>
					<div className='logo-home'>
						<HomeShapes addToScrollMagicController={this.props.addToScrollMagicController} removeSceneFromScrollMagicController={this.props.removeSceneFromScrollMagicController} />
						<LogoHome showTitle={true} addToScrollMagicController={this.props.addToScrollMagicController} removeSceneFromScrollMagicController={this.props.removeSceneFromScrollMagicController} />
					</div>
					<YellowHello addToScrollMagicController={this.props.addToScrollMagicController} removeSceneFromScrollMagicController={this.props.removeSceneFromScrollMagicController} />
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