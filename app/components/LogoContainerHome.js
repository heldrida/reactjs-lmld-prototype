'use strict';

import LogoContainer from '../components/LogoContainer';

class LogoContainerHome extends LogoContainer {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.attachEventListeners();
		this.mainLogo = document.querySelector('.logo-container');
		this.mainLogoTitle = this.mainLogo.querySelector('.title');
		this.mainLogoTitle.style.opacity = 0;
		this.homeLogo = document.querySelector('.content .logo-container');
		this.homeLogoTitle = this.homeLogo.querySelector('.title');
		this.logoWrapper = document.querySelector('.logo-wrapper');
		//this.app = document.querySelector('.ns-lmld-2016 ');
		this.logoVisibilityHandler();
	}

	attachEventListeners() {

		window.addEventListener('scroll', this.onScrollHandler.bind(this));

	}

	onScrollHandler() {

		this.logoVisibilityHandler();
		this.titleVisibilityHandler();

	}

	titleVisibilityHandler() {

		let maxY = 200;

		if (window.scrollY <= maxY) {

			let p = window.scrollY / maxY * 100;
			let z = p / 100;

			this.homeLogoTitle.style.opacity = 1 - z;

		}

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

		/*
		if (mainLogo.top >= homeLogo.top) {

			// hide `a` and show main logo & header background
			this.app.classList.add('logo-fix');

		} else {

			// show `b` and hide main logo & header background
			this.app.classList.remove('logo-fix');
			this.app.classList.add('home');

		}
		*/

	}

}

export default LogoContainerHome;