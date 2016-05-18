'use strict';

import React from 'react';
import LogoHome from '../components/home/LogoHome';
import YellowHello from '../components/home/YellowHello';
import HomeShapes from '../components/home/Shapes';
import Thumbnail from '../components/Thumbnail';
import LouboutinV3 from '../components/projects/LouboutinV3';
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
			urlHash: 'louboutinv3',
			className: {
				home: 'thumb1'
			},
			posterImg: require('../../src/images/thumbnails/louboutin-v3-2.jpg'),
			title: 'Christian Louboutin',
			description: 'Digital Identity',
			align: {
				home: 'left'
			}
		}, {
			urlHash: 'floom',
			className: {
				home: 'thumb2'
			},
			posterImg: require('../../src/images/thumbnails/floom.jpg'),
			title: 'floom',
			description: 'Digital Identity',
			align: {
				home: 'right'
			}
		}, {
			urlHash: 'field',
			className: {
				home: 'thumb3'
			},
			posterImg: require('../../src/images/thumbnails/field.jpg'),
			title: 'field',
			description: 'Digital Identity',
			align: {
				home: 'left'
			}
		}];

		return (
			<div className='home-content'>
				<div className='wrapper'>
					<div className='trigger1'></div>
					<div className='logo-home'>
						<HomeShapes />
						<LogoHome showTitle={true} addToScrollMagicController={this.props.addToScrollMagicController} removeSceneFromScrollMagicController={this.props.removeSceneFromScrollMagicController} />
					</div>
					<YellowHello addToScrollMagicController={this.props.addToScrollMagicController} removeSceneFromScrollMagicController={this.props.removeSceneFromScrollMagicController} />
					<div className={'projects'}>
					{homeBlockList.map((obj, key) =>
						<Thumbnail 	key={key}
									urlHash={obj.urlHash}
									posterImg={obj.posterImg}
									title={obj.title}
									description={obj.description}
									align={obj.align.home} />
					)}
					</div>
				</div>
				<Studio />
			</div>
		);

	}

}

export default Home;