'use strict';

import React from 'react';
import Header from './Header';
import LogoHomeTop from '../components/home/LogoHomeTop';
import Menu from '../components/Menu';

class HeaderHome extends Header {

	constructor(props) {
		super(props);
	}

	render() {

		let text = this.state.menuOpen ? 'menu open' : 'menu close';

		return (
			<header>
				<div className='wrapper'>
					<div className={'col col-l'}>
						<LogoHomeTop hideMainContentHandler={this.props.hideMainContentHandler}
								showTitle={false}
								addToScrollMagicController={this.props.addToScrollMagicController}
								removeSceneFromScrollMagicController={this.props.removeSceneFromScrollMagicController} />
					</div>
					<div className={'col col-r'}>
						<div className={'tr-menu'} onClick={this.menuClick.bind(this)}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className={text}>
						<Menu menuClick={this.menuClick.bind(this)} />
					</div>
				</div>
			</header>
		);

	}

}

export default HeaderHome;