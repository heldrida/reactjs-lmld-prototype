'use strict';

import Logo from '../Logo';

class LogoHomeTop extends Logo {

	constructor(props) {
		super(props);
	}

	createScrollMagicScenes() {

		this.homeLogo = document.querySelector('.content .logo-container');

		// Logo switcher timeline
		let tlLogo = this.getLogoTimeline();

		// declare timeline to controller
		let sc1 = new window.ScrollMagic.Scene({
				triggerElement: this.homeLogo,
				triggerHook: 'onLeave',
				duration: '25%'
			})
			.setTween(tlLogo);

		setTimeout(() => {
			this.props.addToScrollMagicController({ logoDefault: [sc1] });
		}, 0);

	}

}

export default LogoHomeTop;