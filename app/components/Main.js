'use strict';

import React from 'react';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import BackBlock from '../components/BackBlock';

class Main extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			hideMainContent: false
		};

		this.timelineHideMainContent = null;

		// Component DOM elements
		this.els = {};


		this.scrollMagicMainController = null;

		this.cachedScrollMagicScenes = {};

	}

	componentWillMount() {

	}

	componentDidMount() {

		// initialise the scroll magic
		// todo: move this to ES6 module `import`
		// currently injected on the html index file
		this.scrollMagicMainController = new window.ScrollMagic.Controller({ loglevel: 3 });

	}

	/*
	 * Display the yellow square block animation, mount the requested component
	 * remove the square block, revealing the `main` component content area
	 * only when user press the logo button to go back
	 * @param: componentName
	 * @return: null
	 */
	hideMainContentHandler() {

		const goHomeAction = () => {

			this.timelineHideMainContent = this.generateTimelineHideMainContent();

			this.timelineHideMainContent.play();

		};

		if (this.isHome() !== 'home') {

			goHomeAction();

		} else if (this.isHome() === 'home' && window.location.hash.indexOf('projects') > -1) {

				//window.alert('todo: close active block element differently from the logo go back action, as this is home;');
				goHomeAction();

		}

	}

	generateTimelineHideMainContent() {

		// destroy if exists as we need to recalculate pos
		if (this.timelineHideMainContent !== null) {
			this.timelineHideMainContent.clear();
			this.timelineHideMainContent = null;
		}

		let tl;
		let backBlock = document.querySelector('.back-block');
		let headerOffsetHeight = document.querySelector('header').offsetHeight;
		let content = document.querySelector('.main > .content');
		let mainLogo = document.querySelector('header .logo-container');
		let footer = document.querySelector('footer');

		const onStartCallback = () => {
			backBlock.classList.add('show');
			this.setNoScroll(false);
			this.setState({
				hideMainContent: true
			});
		};

		const onCompleteCallback = () => {
			this.setState({
				hideMainContent: false
			});

			backBlock.style = '';
			backBlock.classList.remove('show');
		};

		const onReverseCompleteCallback = () => {

		};

		let calcWdith = () => {
			let w;
			if ((window.innerWidth < 600)) {
				w = window.innerWidth - 80;
			} else {
				w = window.innerWidth - 120;
			}
			return w;
		};

		let calcHeight = () => {
			return window.innerHeight - headerOffsetHeight;
		};

		tl = new window.TimelineLite({
			onStart: onStartCallback,
			onComplete: onCompleteCallback,
			onReverseComplete: onReverseCompleteCallback
		});

		tl.to(mainLogo, 0.3, { css: { opacity: 0 } }, 0);

		tl.to(content, 0.6, { css: { opacity: 0 }, onComplete: () => {
				window.location.hash = '/';
				//this.setNoScroll(false);
			}
		}, 0);

		tl.to(footer, 0.6, { css: { opacity: 0 } }, 0);

		tl.fromTo(backBlock, 0.3, { css: { width: '0px', height: '0px' }, ease: window.Bounce.easeOut }, { css: { width: '50px', height: '50px' }, ease: window.Bounce.easeOut }, 0);

		tl.to(backBlock, 0.3, { css: { width: calcWdith(), height: calcHeight(), marginTop: (headerOffsetHeight / 2) } }, 0.4);

		tl.to(content, 0.2, { css: { opacity: 1 } });

		tl.to(footer, 0.2, { css: { opacity: 1 } });

		tl.to(backBlock, 0.6, { css: { marginTop: window.innerHeight }, ease: window.Bounce.easeOut }, 1);

		tl.pause();

		return tl;
	}

	setNoScroll(bool) {

		let cl = document.body.classList;

		bool ? cl.add('noscroll') : cl.remove('noscroll');

	}

	isHome() {

		return this.props.location.pathname === '/' ? 'home' : 'lg-bg';

	}

	setElement(key, node) {

		this.els[key] = node;

	}

	addToScrollMagicController(obj) {

		// cache scene by name
		for (let o in obj) {

			if (obj[o]) {

				this.cachedScrollMagicScenes[o] = obj[o];

				// add to the controller
				this.scrollMagicMainController.addScene(obj[o]);

			}

		}

	}

	removeSceneFromScrollMagicController(key) {

		if (this.cachedScrollMagicScenes[key]) {

			this.scrollMagicMainController.removeScene(this.cachedScrollMagicScenes[key]);
			this.cachedScrollMagicScenes[key] = null;

		}

	}

	initScrollMagicController() {
		this.scrollMagicMainController = new window.ScrollMagic.Controller({ loglevel: 3 });
	}

	render() {

		return(
			<div className={'main' + ' ' + this.isHome() + ' ' + (this.state.hideMainContent ? 'hidden' : '')}>
				{ this.isHome() !== 'home' && (
					<Header hideMainContentHandler={this.hideMainContentHandler.bind(this)}
					setNoScroll={this.setNoScroll.bind(this)}
					addToScrollMagicController={this.addToScrollMagicController.bind(this)}
					removeSceneFromScrollMagicController={this.removeSceneFromScrollMagicController.bind(this)} />
				)}
				<BackBlock ref={this.setElement.bind(this, 'backBlock')} />
				<div className="content">
					{React.cloneElement(this.props.children, { setNoScroll: this.setNoScroll.bind(this), addToScrollMagicController: this.addToScrollMagicController.bind(this),
						removeSceneFromScrollMagicController: this.removeSceneFromScrollMagicController.bind(this) })}
				</div>
				<Footer isHome={this.isHome()} />
			</div>
		);
	}

}

export default Main;