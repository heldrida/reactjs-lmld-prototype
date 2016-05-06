'use strict';

import LogoContainer from '../components/LogoContainer';

class LogoContainerHome extends LogoContainer {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.attachEventListeners();
		this.mainLogo = document.querySelector('.logo-container');
		this.homeLogo = document.querySelector('.content .logo-container');
		this.logoWrapper = document.querySelector('.logo-wrapper');
		this.logoVisibilityHandler();
	}

	attachEventListeners() {

		window.addEventListener('scroll', this.onScrollHandler.bind(this));

	}

	onScrollHandler() {

		this.logoVisibilityHandler();

	}

	logoVisibilityHandler() {

		let mainLogo = this.mainLogo.getBoundingClientRect();
		let homeLogo = this.homeLogo.getBoundingClientRect();

		if (mainLogo.top >= homeLogo.top) {

			// hide `a` and show main logo & header background
			this.mainLogo.style.visibility = '';
			this.homeLogo.style.visibility = 'hidden';
			this.logoWrapper.classList.add('bg');

		} else {

			// show `b` and hide main logo & header background
			this.mainLogo.style.visibility = 'hidden';
			this.homeLogo.style.visibility = '';
			this.logoWrapper.classList.remove('bg');

		}

	}

}

export default LogoContainerHome;