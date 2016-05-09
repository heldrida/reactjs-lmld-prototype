'use strict';

import Logo from '../components/Logo';

class LogoHome extends Logo {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

		this.mainLogo = document.querySelector('header .logo-container');
		this.mainLogoTitle = this.mainLogo.querySelector('.title');
		this.homeLogo = document.querySelector('.content .logo-container');
		this.homeLogoTitle = this.homeLogo.querySelector('.title');
		this.header = document.querySelector('header');
		this.mainLogo.style.opacity = 0;

		// initialise the scroll magic
		// todo: move this to ES6 module `import`
		// currently injected on the html index file
		this.initScrollMagic();

	}

	componentWillUnmount() {
		// reset visibility
		window.TweenLite.to(this.mainLogo, 1.6, { css: { opacity: 1 } });

		// Destroy scroll magic instance
		this.scrollMagicController.destroy(true);
		this.scrollMagicController = null;
	}

	initScrollMagic() {

		this.scrollMagicController = new window.ScrollMagic.Controller();

		// Logo switcher timeline
		let tl = new window.TimelineLite({
			onStart: null,
			onComplete: null,
			onReverseComplete: null
		});

		tl.to(this.mainLogo, 0.1, { opacity: 1 });
		tl.to(this.homeLogo, 0.1, { opacity: 0 });
		tl.set(this.header, { className: '+=bg' });

		// declare timeline to controller
		new window.ScrollMagic.Scene({
				triggerElement: this.homeLogo,
				triggerHook: 'onLeave',
				duration: '1px'
			})
			.setTween(tl)
			.addTo(this.scrollMagicController);

		// title fade tween
		let titleFadeTween = window.TweenLite.to(this.homeLogoTitle, 0.5, { opacity: 0 });

		// declare tween to controller
		new window.ScrollMagic.Scene({
				triggerHook: 'onLeave',
				duration: '25%'
			})
			.setTween(titleFadeTween)
			.addTo(this.scrollMagicController);

	}


}

export default LogoHome;