'use strict';

import React from 'react';
import Newsletter from '../components/Newsletter.js';

class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<footer>
				<div className={'get-updates'}>
					<Newsletter />
				</div>
				<div className='links'>
					<div className='left'>
						<nav>
							<a href="#">Work</a>
							<a href="#">About Us</a>
							<a href="#">Join Us</a>
						</nav>
						<div className='bottom'>
							<a href="#">F</a>
							<a href="#">T</a>
							<a href="#">In</a>
						</div>
					</div>
					<div className='right'>
						<div className='bottom'>
							81 Curtain Road, Unit H - EC2A 3AG London<br />
							07534117755 - Google Maps
						</div>
					</div>
				</div>
			</footer>
		);

	}

}

export default Footer;