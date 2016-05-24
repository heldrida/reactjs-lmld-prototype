'use strict';

import React from 'react';
import LogoHome from '../components/home/LogoHome';
import LogoHomeTop from '../components/home/LogoHomeTop';
import YellowHello from '../components/home/YellowHello';
import HomeShapes from '../components/home/Shapes';
import Thumbnail from '../components/Thumbnail';
import Studio from '../components/home/Studio';
import ProjectList from '../data/ProjectList';
import _ from 'lodash';

class Home extends React.Component {

	constructor(props) {
		super(props);

		this.thumbnails = null;
	}

	componentWillMount() {
		this.setThumbnailsList();
	}

	componentDidMount() {
		//this.homeLogo = document.querySelector('.logo-home');
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

	setThumbnailsList() {
		this.thumbnails = _
							.chain(ProjectList)
							.filter(o => {
								return o.home;
							})
							.sortBy(o => {
								return o.order.home;
							})
							.value();
	}

	render() {

		return (
			<div className='home-content'>
				<div className='wrapper'>
					<div className='trigger1'></div>
					<div className='logo-home'>
						<HomeShapes />
						<LogoHome
							showTitle={true}
							addToScrollMagicController={this.props.addToScrollMagicController}
							removeSceneFromScrollMagicController={this.props.removeSceneFromScrollMagicController}
							isOnScrollMagicCache={this.props.isOnScrollMagicCache}
						/>
					</div>
					<YellowHello addToScrollMagicController={this.props.addToScrollMagicController} removeSceneFromScrollMagicController={this.props.removeSceneFromScrollMagicController} />
					<div className={'projects'}>
					{this.thumbnails.map((obj, key) =>
						<Thumbnail 	key={key}
									urlHash={obj.urlHash}
									posterImg={obj.posterImg}
									title={obj.title}
									description={obj.description}
									className={obj.className.home} />
					)}
					</div>
				</div>
				<Studio />
			</div>
		);

	}

}

export default Home;