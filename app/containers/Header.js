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

	// set properties
    this.menu = document.querySelector('.menu');
    this.container = document.querySelector('.menu .container');
	this.header = document.querySelector('header');
	this.trMenu = this.header.querySelector('.tr-menu');
	this.mainLogo = document.querySelector('header .logo-container');
	this.mainLogoTitle = this.mainLogo.querySelector('.title');
	this.homeLogo = document.querySelector('.content .logo-container');
	//this.homeLogoTitle = this.homeLogo.querySelector('.title');

	// initialise scroll magic scenes
	this.createScrollMagicScenes();

	this.setEventListeners();

  }

	componentWillUnmount() {
		// Destroy scroll magic scene instances
		this.props.removeSceneFromScrollMagicController('navbar');
	}

	setEventListeners() {

		window.addEventListener('hashchange', e => this.onHashChange(e), false);

	}

	onHashChange(e) {

		// todo: re-factor to not reset if the hash change
		// is not from home to X or X to home

		this.reInitScrollMagicScenes();

	}

	reInitScrollMagicScenes() {

		// the animations on home are different from the other pages
		// reset first
		this.props.removeSceneFromScrollMagicController('navbar');

		// reinit
		this.createScrollMagicScenes();

	}

	menuClick() {

		this.setState({
			menuOpen: !this.state.menuOpen
		});

		if (this.menu.classList.contains('close')) {

			window.TweenLite.to(this.container, 1, { css: { display: 'block' }, onComplete: () => {
					this.props.setNoScroll(true);
				}
			});

			} else {

			window.TweenLite.to(this.container, 1, { css: { display: 'none' }, onStart: () => {
					this.props.setNoScroll(false);
				}
			});

		}

	}

	calcMenuRightSidebarPos() {

		// get the current padding value dynamically
		let xOffset = window.getComputedStyle(this.header).getPropertyValue('padding-left');
		xOffset = parseInt(xOffset, 10);

		return -(this.trMenu.offsetWidth + ((xOffset / 2) - this.trMenu.offsetWidth / 2));

	}

	getMenuTween() {

		// Logo switcher timeline
		let tl = new window.TimelineLite({
			onStart: null,
			onComplete: null,
			onReverseComplete: null
		});

		tl.to(this.trMenu, 1, {
			css: {
				right: this.calcMenuRightSidebarPos()
				//ease: window.Power2.easeOut
			}
		});

		return tl;

	}

	createScrollMagicScenes() {

		let scenes;

		if (window.location.hash.split('/')[1] === '') {

			scenes = this.createHomeScrollMagicScenes();

		} else {

			scenes = this.createDefaultScrollMagicScenes();

		}

		setTimeout(() => {
			this.props.addToScrollMagicController({ navbar: [scenes] });
		}, 0);

	}

	createHomeScrollMagicScenes() {

		let arr = [];

		// Tween for moving the menu to the right sidebar/gap
		let tweenMenu = this.getMenuTween();

		// declare timeline to controller
		let sc1 = new window.ScrollMagic.Scene({
				triggerElement: this.homeLogo,
				triggerHook: 'onLeave',
				duration: '20%'
			})
			.setTween(tweenMenu);

		arr.push(sc1);

		return arr;

	}

	createDefaultScrollMagicScenes() {

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