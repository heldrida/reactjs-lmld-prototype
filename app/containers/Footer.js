'use strict';

import React from 'react';
import Newsletter from '../components/Newsletter.js';
import { Link } from 'react-router'

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
							<Link to={'/projects'}>{'Work'}</Link>
							<Link to={'/about-us'}>{'About us'}</Link>
							<Link to={'/jobs'}>{'Join us'}</Link>
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
							07534117755 - <a href="#">Google Maps</a>
						</div>
					</div>
				</div>
			</footer>
		);

	}

}

export default Footer;