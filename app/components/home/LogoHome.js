'use strict';

import Logo from '../../components/Logo';

class LogoHome extends Logo {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

		this.header = document.querySelector('header');
		this.mainLogo = document.querySelector('header .logo-container');
		this.homeLogo = document.querySelector('.content .logo-container');
		this.homeLogoTitle = this.homeLogo.querySelector('.title');
		this.signature = this.homeLogo.querySelector('.signature');
		this.abstractLogo = this.homeLogo.querySelector('.abstract');
		this.mainLogo.style.opacity = 0;
		this.trMenu = this.header.querySelector('.tr-menu');

		// initialise the scroll magic
		// todo: move this to ES6 module `import`
		// currently injected on the html index file
		setTimeout(() => {
			this.createScrollMagicScenes();
		}, 0);
	}

	componentWillUnmount() {
		// reset visibility
		window.TweenLite.to(this.mainLogo, 0.3, { css: { opacity: 1 } });

		// Destroy scroll magic scene instances
		this.props.removeSceneFromScrollMagicController('logoHome');
	}

	createScrollMagicScenes() {

		const calcLogoLeftSidebarPos = () => {
			// get the current padding value dynamically
			let xOffset = window.getComputedStyle(this.header).getPropertyValue('padding-left');
			xOffset = parseInt(xOffset, 10);

			//return (xOffset / 2) - (this.abstractLogo.offsetWidth / 2);
			return this.homeLogo.offsetWidth - ((xOffset / 2) - this.abstractLogo.offsetWidth / 2);
		};

		const calcLogoVAlign = () => {

			let y = this.trMenu.getBoundingClientRect().top;

			return y - (this.abstractLogo.offsetHeight / 2);
		};

		let logoYOffset = this.homeLogo.getBoundingClientRect().top;

		// Logo switcher timeline
		let tl = new window.TimelineLite({
			onStart: null,
			onComplete: null,
			onReverseComplete: null
		});

		tl.to(this.homeLogoTitle, 0.5, {
			css: {
				opacity: 0
			}
		}, 0);

		tl.to(this.signature, 1, {
			css: {
				opacity: 0
			}
		}, "+=0.5");

		tl.to(this.abstractLogo, 10, {
			css: {
				right: calcLogoLeftSidebarPos(),
				top: calcLogoVAlign()
			}
		}, "-=0.4");

		tl.to(this.mainLogo, 0.1, {
			css: {
				opacity: 1
			}
		});

		tl.to(this.homeLogo, 0.1, {
			css: {
				opacity: 0
			}
		});

		// declare timeline to controller
		let sc1 = new window.ScrollMagic.Scene({
				triggerElement: document.body,
				triggerHook: 'onLeave',
				duration: logoYOffset
			})
			.setTween(tl);

		/*
		let tweenMainLogo = new window.TimelineLite({
			onStart: null,
			onComplete: null,
			onReverseComplete: null
		});

		tweenMainLogo.to(this.mainLogo, 0.1, { opacity: 1 });
		tweenMainLogo.to(this.homeLogo, 0.1, { opacity: 0 });

		let sc2 = new window.ScrollMagic.Scene({
				triggerElement: this.mainLogo,
				triggerHook: 'onLeave',
				duration: "1px"
			})
			.setTween(tweenMainLogo);
		*/

		setTimeout(() => {
			this.props.addToScrollMagicController({ logoHome: [sc1] });
		}, 0);

	}


}

export default LogoHome;