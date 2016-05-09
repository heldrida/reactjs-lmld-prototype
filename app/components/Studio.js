'use strict';

import React from 'react';

class Studio extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const studio1 = require('../../src/images/studio1.jpg');
		const studio2 = require('../../src/images/studio2.jpg');

		return (
			<div className='studio'>
				<div className='trigger2' />
				<div className='text'>Strategy, UI/UX design, and development for startups and leading brands ment for startups and leading brands.</div>
				<img className='studio1' src={studio1} />
				<img className='studio2' src={studio2} />
			</div>
		);

	}

}

export default Studio;