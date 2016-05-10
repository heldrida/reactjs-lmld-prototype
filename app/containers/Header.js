'use strict';

import React from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  menuOpen: false
		};
	}

  menuClick(event) {
    this.setState({
    	menuOpen: !this.state.menuOpen
    });
  }

	render() {
		var text = this.state.menuOpen ? 'menu-open' : 'menu-close';
		return (
			<header>
				<div className={'col col-l'}>
					<Logo hideMainContentHandler={this.props.hideMainContentHandler} removeSceneFromScrollMagicController={this.props.removeSceneFromScrollMagicController} />
				</div>
				<div className={'col col-r'}>
					<div className={'tr-menu'} onClick={this.menuClick.bind(this)}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className={text}>
					<Menu />
				</div>
			</header>
		);

	}

}

export default Header;