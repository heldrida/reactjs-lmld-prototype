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

	componentDidMount() {
		this.menu = document.querySelector('.menu');
		this.container = document.querySelector('.menu .container');
	}

  menuClick() {
    this.setState({
			menuOpen: !this.state.menuOpen
    });
    if (this.menu.classList.contains('close')) {
			window.TweenLite.to(this.container, 1, { css: { display: 'block' } });
		} else {
			window.TweenLite.to(this.container, 1, { css: { display: 'none' } });
		}
  }

	render() {
		let text = this.state.menuOpen ? 'menu open' : 'menu close';
		return (
			<header>
				<div className='wrapper'>
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
						<Menu menuClick={this.menuClick.bind(this)} />
					</div>
				</div>
			</header>
		);
	}

}

export default Header;