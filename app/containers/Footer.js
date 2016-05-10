'use strict';

import React from 'react';

import NewsletterSubscribe from '../components/NewsletterSubscribe.js';

class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<footer>
					<div className={'get-updates'}>
						<h6>Get updates from our latest projects</h6>
						<NewsletterSubscribe />
					</div>
				</footer>
			</div>
		);

	}

}

export default Footer;