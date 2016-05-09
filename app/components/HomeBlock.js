'use strict';

import React from 'react';
import _ from 'lodash';

class HomeBlock extends React.Component {

	constructor(props) {

		super(props);

		// Default state
		this.state = {
			open: false,
			mountContent: false,
			zIndex: null
		};

		// Component DOM elements
		this.els = {};

		// The default element position
		this.defaultPosition = {};

		this.timeline = false;

		// Create Throttled versions to improve performance
		this.openBlockThrottle = _.throttle(this.openBlock, 200);
		this.onWindowResizeHandlerThrottle = _.throttle(this.onWindowResizeHandler, 200);

		this.posterStyle = {
			backgroundImage: 'url(' + this.props.posterImg + ')',
			backgroundPosition: 'center center',
			backgroundSize: 'cover'
		};

		// the default location hash name
		this.defaultLocationHashName = '';

		// header elements
		this.headerBg = null;
		this.headerLogo = null;

	}

	componentWillMount() {

	}

	componentDidMount() {

		// Set the default position and everytime the browser resizes
		setTimeout(() => {
			this.setBlockDefaults();
			this.caseStudyRequestHandler();
		});

		// Set event listeners
		this.setEventListeners();

	}

	componentWillUnmount() {

		// Remove event listeners

	}

	componentDidUpdate() {


	}

	setEventListeners() {

		// Scroll event listener
		window.addEventListener('scroll', e => this.onScrollHandler(e));

		// Handle hash change
		window.addEventListener('hashchange', e => this.onHashChangeHandler(e), false);

		// On window resize handler
		window.addEventListener('resize', e => this.onWindowResizeHandlerThrottle(e), false);

	}

	removeEventListeners() {

		window.removeEventListeners('scroll', this.onScrollHandler);

	}

	setBlockDefaults() {

		for (const key in this.els) {
			if (this.defaultPosition[key]) {
				this.defaultPosition[key] = this.calcElementPosition(this.els[key]);
			}
		}

	}

	setBlockSize(el) {

		el.style.width = this.defaultPosition[''] + 'px';

	}

	setElement(key, node) {

		this.els[key] = node;

	}

	calcElementPosition(el) {

		return el.getBoundingClientRect();

	}

	updateHash() {

		// the hash value needs to be passed to props
		history.pushState(null, null, '#/projects/' + this.props.urlHash);

	}

	openBlock(callback = false) {

		if (this.state.open) {

			this.closeBlock();

		} else {

			this.setState({
				open: true
			});

			// get updated timeline with correct position
			// the user may have scrolled
			this.timeline = this.updateTimeline();

			this.els.block.parentNode.style.zIndex = 999;

			this.timeline.play();

		}

	}

	closeBlock(callback = false) {
		// before the reverse animation starts
		// the component needs to be dismounted
		this.setState({
			open: false,
			mountContent: false
		});

		// hide header elements
		this.headerBg.classList.remove('bg');
		this.headerLogo.style.opacity = 0;

		setTimeout(() => {
			this.timeline.reverse();
		});

		// this should be moved and treated only for modal elements
		history.pushState(null, null, '#/' + this.defaultLocationHashName);

		if (typeof callback === 'function') {
			callback();
		}
	}

	initTimeline() {

		let timeline;

		// Initialise the timeline if not declared yet to cache it
		if (!this.timeline) {

			let c = document.querySelector('.content');
			let offset = window.getComputedStyle(c, null).getPropertyValue('margin-left');
			offset = parseInt(offset, 0);


			// Calculate DOM position
			this.pos = this.calcElementPosition(this.els.block);

			this.headerBg = document.querySelector('header');
			this.headerLogo = document.querySelector('header .logo-container');

			// Open the Modal
			let cssBefore = { css: { width: this.pos.width, height: this.pos.height, position: 'absolute', top: 0, left: (this.props.align === 'left' ? 0 : (window.innerWidth - this.pos.width - (offset * 2))) } };
			let cssAfter = { css : { width: window.innerWidth, height: window.innerHeight, top: -this.pos.top, left: -(this.props.align === 'left' ? this.pos.left : offset), position: 'absolute' } };
			const onStartCallback = () => {
				this.props.setNoScroll(true);
			};

			const onCompleteCallback = () => {

				this.setState({
					open: true,
					mountContent: true
				});

				// refactor to treat only modal elements
				this.updateHash();

				// show header elements
				this.headerBg.classList.add('bg');
				this.headerLogo.style.opacity = 1;

			};
			const onReverseCompleteCallback = () => {
				this.els.block.parentNode.style.zIndex = '';
				this.props.setNoScroll(false);
				this.setState({
					open: false,
					mountContent: false
				});
			};
			timeline = new window.TimelineLite({
				onStart: onStartCallback,
				onComplete: onCompleteCallback,
				onReverseComplete: onReverseCompleteCallback
			});

			//timeline.to(this.els.title, 0.2, { css: { left: '100px' } });
			//timeline.to(this.els.description, 0.2, { css: { left: '100px' } });
			timeline.to(this.els.titleContainer, 0.3, { css: { opacity: 0 } });

			timeline.fromTo(this.els.block, 0.2, cssBefore, cssAfter);

			timeline.pause();

		}

		return timeline;

	}


	updateTimeline() {

		let timeline;

		if (this.timeline) {
			this.clearTimeline();
		}

		timeline = this.initTimeline();

		return timeline;

	}

	clearTimeline() {
		this.timeline.clear();
		this.timeline = null;
	}

	reinitTimeline() {
		this.clearTimeline();
		this.timeline = this.updateTimeline();
	}

	onBlockOpen() {

		// Set block element to fix position
		this.props.setNoScroll(true);

		// Update children mount state
		this.setState({
			mountContent: true
		});

	}

	onBlockCollapse() {

		// Set block element to fix position
		this.props.setNoScroll(false);

		// Update children mount state
		this.setState({
			mountContent: false
		});

	}

	onScrollHandler() {

	}

	onHashChangeHandler(e) {

		// When handling case study requests, close if state open,
		// then callback the case study request handler
		if (this.state.open && e.oldURL && e.oldURL.indexOf('projects') > -1 && e.newURL && e.newURL.indexOf('projects') > -1) {

			this.openBlock();

		} else if(this.state.open && e.oldURL && e.oldURL.indexOf('projects') > -1) {

			this.closeBlock();

		} else if (this.state.open && e.newURL && e.newURL.indexOf('projects') > -1) {

			this.openBlock();

		} else if (!this.state.open && e.newURL && e.newURL.indexOf('projects') > -1) {

			this.caseStudyRequestHandler();

		}

		return null;

	}

	onWindowResizeHandler(e) {

		// Reset the timeline and remove any styles set by GSAP
		// and also recalc the timeline
		if (this.els.block.getAttribute('style') !== null) {
			this.clearTimeline();
			this.els.block.style = null;
		}

	}

	setZIndex() {

		let zIndex = null;

		if (this.state.open) {

			zIndex = 999;

		} else {

			zIndex = null;

		}

		this.setState({
			zIndex: zIndex
		});

		return null;

	}

	caseStudyRequestHandler() {

		let location = this.props.location;

		if (location.pathname && location.pathname.indexOf('projects') > -1) {

			let arr = location.pathname.split('/');
			let name = arr[2];

			if (this.props.urlHash === name) {
				this.openBlock();
			}

		}

	}

	render() {

		return (
			<div className={ 'home-block' + ' ' + this.props.innerComponent.className + ' ' + (this.props.align === 'left' ? 'left' : 'right') }>
				<div className='block' ref={this.setElement.bind(this, 'block')} onClick={this.openBlockThrottle.bind(this)}>
						<div className={'title-container'} ref={this.setElement.bind(this, 'titleContainer')}>
							<h4 ref={this.setElement.bind(this, 'title')}>{this.props.title}</h4>
							<p ref={this.setElement.bind(this, 'description')} dangerouslySetInnerHTML={{__html:this.props.description}}></p>
						</div>
						<div className='content' style={this.posterStyle}>
							{this.state.mountContent ? <this.props.innerComponent.component /> : null}
						</div>
				</div>
			</div>
		);

	}

}

export default HomeBlock;