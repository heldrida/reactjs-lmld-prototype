'use strict';

import React from 'react';
import ReactRouter from 'react-router';
import {Motion, spring} from 'react-motion';

class HomeBlock extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			open: false
		};

		// Component DOM elements
		this.els = {};

		// The default element position
		this.defaultPosition = {};

	}

	componentDidMount() {

		console.log('HomeBlock Component mounted');

		// Set the default position and everytime the browser resizes
		setTimeout(() => {
			this.setBlockDefaults();
		});

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

		console.log("this.state.open: ", this.state.open);

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

	render () {

		return (
			<div className="home-block" onClick={this.openBlock.bind(this)}>
				<div className="block" ref={this.setElement.bind(this, 'block')}>
					<Motion style={{ percentage: spring(this.state.open ? 100 : 0), top: spring(this.state.open ? -this.defaultPosition['block'].top : 0), left: spring(this.state.open ? -this.defaultPosition['block'].left : 0) }}>
						{style =>
							<div className="content" style={{
								width: `${style.percentage}vw`,
								height: `${style.percentage}vh`,
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