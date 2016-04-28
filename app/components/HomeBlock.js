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

		console.log('this.refs', this.refs);

	}

	openBlock () {

		console.log("this.state.open: ", this.state.open);

		this.setState({open: !this.state.open});

	}

	setElement (key, node) {

		this.els[key] = node;

	}

	render () {

		return (
			<div className="home-block" onClick={this.openBlock.bind(this)}>
				<div className="block" ref={this.setElement.bind(this, 'block')}>
					<div className="collapsed">
					</div>
					<Motion style={{ percentage: spring(this.state.open ? 100 : 0) }}>
						{style =>
							<div className="full" style={{
								width: `${style.percentage}vw`,
								height: `${style.percentage}vh`
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