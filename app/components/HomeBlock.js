'use strict';

import React from 'react';

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

	}

	componentDidMount() {

		// Set the default position and everytime the browser resizes
		setTimeout(() => {
			this.setBlockDefaults();
		});

		// Set event listeners
		this.setEventListeners();

	}

	componentWillUnmount() {

		// Remove event listeners

	}

	componentDidUpdate() {

		console.log("componentDidUpdate callback");

		// Update the ZIndex
		//this.setZIndex();

	}

	setEventListeners() {

		// Scroll event listener
		window.addEventListener('scroll', e => this.onScrollHandler(e));

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
		// using hard typed value atm for testing
		history.pushState(null, null, '/#/case-study-vans');

	}

	openBlock() {

		this.setState({open: !this.state.open});

		if (this.state.open) {

			// Calculate DOM position
			this.pos = this.calcElementPosition(this.els.block);

			// this should be moved and treated only for modal elements
			history.pushState(null, null, '/#/');

		} else {

			// refactor to treat only modal elements
			this.updateHash();

		}

	}

	onRestCallback() {

		console.log("onRest!");

		this.state.open ? this.onBlockOpen() : this.onBlockCollapse();

	}

	onBlockOpen() {

		console.log('onBlockOpen callback');

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

	render() {

		return (
			<div className={ 'home-block' + ' ' + this.props.innerComponent.className } onClick={this.openBlock.bind(this)}>
				<div className='block' ref={this.setElement.bind(this, 'block')}>

						<div className='content'>
							{this.state.mountContent ? <this.props.innerComponent.component /> : null}
						</div>
				</div>
			</div>
		);

	}

}

export default HomeBlock;