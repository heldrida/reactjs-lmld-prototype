'use strict';

import React from 'react';
import ReactRouter from 'react-router';
import {Motion, spring} from 'react-motion';

class HomeBlock extends React.Component {

	constructor (props) {

		super(props);

		// Default state
		this.state = {
			open: false
		};

		// Component DOM elements
		this.els = {};

		// The default element position
		this.defaultPosition = {};

	}

	componentDidMount () {

		// Set the default position and everytime the browser resizes
		setTimeout(() => {
			this.setBlockDefaults();
		});

		// Set event listeners

	}

	componentWillUnmount () {

		// Remove event listeners

	}

	setBlockDefaults () {

		for (var key in this.els) {
			this.defaultPosition[key] = this.calcElementPosition(this.els[key]);
		}

	}

	setBlockSize (el) {

		el.style.width = this.defaultPosition[''] + 'px';

	}

	openBlock () {

		this.setState({open: !this.state.open});

		if (this.state.open) {

			// Calculate DOM position
			this.pos = this.calcElementPosition(this.els['block']);


		}

	}

	setElement (key, node) {

		this.els[key] = node;

	}

	calcElementPosition (el) {

		return el.getBoundingClientRect();

	}

	onRestCallback () {

		this.state.open ? this.onBlockOpen() : this.onBlockCollapse();

	}

	onBlockOpen () {

		console.log('onBlockOpen callback');

	}

	onBlockCollapse () {

		console.log('onBlockCollapse callback');

	}

	motionStyleFromTo () {

		return {
			width: spring(this.state.open ? window.innerWidth : 500),
			height: spring(this.state.open ? window.innerHeight : 300),
			top: spring(this.state.open ? -this.defaultPosition['block'].top : 0),
			left: spring(this.state.open ? -this.defaultPosition['block'].left : 0)
		};

	}

	render () {

		return (
			<div className="home-block" onClick={this.openBlock.bind(this)}>
				<div className="block" ref={this.setElement.bind(this, 'block')}>
					<Motion onRest={this.onRestCallback.bind(this)} style={this.motionStyleFromTo()}>
						{style =>
							<div className="content" style={{
								width: `${style.width}px`,
								height: `${style.height}px`,
								top: `${style.top}px`,
								left: `${style.left}px`
								}}>
							</div>
						}
					</Motion>
				</div>
			</div>
		);

	}

}

export default HomeBlock;