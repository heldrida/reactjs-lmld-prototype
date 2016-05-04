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

		// Create Throttle version of openBlock
		this.openBlockThrottle = _.throttle(this.openBlock, 200);

		// todo: probably better to calc this value dynamically on mount ?
		this.contentOffset = 100;

	}

	componentWillMount () {


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
		history.pushState(null, null, '#/case-study/' + this.props.urlHash);

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

	closeBlock() {
		// before the reverse animation starts
		// the component needs to be dismounted
		this.setState({
			open: false,
			mountContent: false
		});

		setTimeout(() => {
			this.timeline.reverse();
		});

		// this should be moved and treated only for modal elements
		history.pushState(null, null, '#/');

		if (typeof callback === 'function') {
			callback();
		}
	}

	initTimeline() {

		let timeline;

		// Initialise the timeline if not declared yet to cache it
		if (!this.timeline) {

			// Calculate DOM position
			this.pos = this.calcElementPosition(this.els.block);

			// Open the Modal
			let cssBefore = { css: { width: this.pos.width, height: this.pos.height, position: 'absolute', top: 0, left: 0 } };
			let cssAfter = { css : { width: window.innerWidth, height: window.innerHeight, top: -this.pos.top, left: -(this.pos.left + this.contentOffset), position: 'absolute' } };
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

				//this.props.setNoScroll(true);

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

			timeline.fromTo(this.els.block, 0.3, cssBefore, cssAfter);

			timeline.pause();

		}

		return timeline;

	}


	updateTimeline() {

		let timeline;

		if (this.timeline) {
			this.timeline.clear();
			this.timeline = null;
		}

		timeline = this.initTimeline();

		return timeline;

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
		if (this.state.open && e.oldURL && e.oldURL.indexOf('case-study') > -1 && e.newURL && e.newURL.indexOf('case-study') > -1) {

			this.openBlock();

		} else if(this.state.open && e.oldURL && e.oldURL.indexOf('case-study') > -1) {

			this.closeBlock();

		} else if (this.state.open && e.newURL && e.newURL.indexOf('case-study') > -1) {

			this.openBlock();

		} else if (!this.state.open && e.newURL && e.newURL.indexOf('case-study') > -1) {

			this.caseStudyRequestHandler();

		}

		return null;

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

		if (location.pathname && location.pathname.indexOf('case-study') > -1) {

			let arr = location.pathname.split('/');
			let name = arr[2];

			if (this.props.urlHash === name) {
				this.openBlock();
			}

		}

	}

	render() {

		return (
			<div className={ 'home-block' + ' ' + this.props.innerComponent.className }>
				<div className='block' ref={this.setElement.bind(this, 'block')} onClick={this.openBlockThrottle.bind(this)}>
						<div className='content'>
							{this.state.mountContent ? <this.props.innerComponent.component /> : null}
						</div>
				</div>
			</div>
		);

	}

}

export default HomeBlock;