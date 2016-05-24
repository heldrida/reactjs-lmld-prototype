'use strict';

import React from 'react';

class LogoContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

		this.header = document.querySelector('header');
		this.container = document.querySelector('header .logo-container');
		this.signature = this.container.querySelector('.signature');
		this.abstractLogo = this.container.querySelector('.abstract');
		this.trMenu = document.querySelector('.tr-menu');

		// initialise the scroll magic
		// todo: move this to ES6 module `import`
		// currently injected on the html index file
		this.createScrollMagicScenes();

	}

	componentWillUnmount() {
		// Destroy scroll magic scene instances
		this.props.removeSceneFromScrollMagicController('logoDefault');
	}

	createScrollMagicScenes() {

		// Logo switcher timeline
		let tlLogo = this.getLogoTimeline();

		// declare timeline to controller
		let sc1 = new window.ScrollMagic.Scene({
				triggerElement: document.body,
				triggerHook: 'onLeave',
				duration: '25%'
			})
			.setTween(tlLogo);

		setTimeout(() => {
			this.props.addToScrollMagicController({ logoDefault: [sc1] });
		}, 0);

	}

	calcContainerLeftSidebarPos() {

		// get the current padding value dynamically
		let xOffset = window.getComputedStyle(this.header).getPropertyValue('padding-left');
		xOffset = parseInt(xOffset, 10);

		return -(this.container.offsetWidth);
	}

	calcLogoLeftSidebarPos() {

		// get the current padding value dynamically
		let xOffset = window.getComputedStyle(this.header).getPropertyValue('padding-left');
		xOffset = parseInt(xOffset, 10);

		return (xOffset / 2) - (this.abstractLogo.offsetWidth / 2);

	}

	calcLogoVAlign() {

		let y = this.trMenu.getBoundingClientRect().top;

		return y - (this.abstractLogo.offsetHeight / 2);
	}

	getLogoTimeline() {

		// Logo container timeline
		let tl = new window.TimelineLite({
			onStart: null,
			onComplete: null,
			onReverseComplete: null
		});

		tl.to(this.signature, 0.3, {
			css: {
				opacity: 0
			}
		}, 0);

		tl.to(this.container, 1, {
			css: {
				left: this.calcContainerLeftSidebarPos()
				//ease: window.Power2.easeOut
			}
		}, 0.25);

		tl.to(this.abstractLogo, 0.6, {
			css: {
				right: this.calcLogoLeftSidebarPos(),
				top: this.calcLogoVAlign()
			}
		}, 0.25);

		return tl;

	}

	render() {

		const topLogoSignature = require('../../src/images/top-logo-signature.svg?1');
		const topLogoAbstract = require('../../src/images/top-logo-abstract.svg?2');

		return (
			<div className={'logo-container'} onClick={this.props.hideMainContentHandler}>
				<div className={'images'}>
					<img className={'signature'} src={topLogoSignature} />
					<img className={'abstract'} src={topLogoAbstract} />
				</div>
				{this.props.showTitle && (
					<h2 className={'title'}>digital product studio</h2>
				)}
			</div>
		);

	}

}

export default LogoContainer;