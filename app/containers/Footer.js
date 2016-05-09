'use strict';

import React from 'react';
import Studio from '../components/Studio.js';
import NewsletterSubscribe from '../components/NewsletterSubscribe.js';

class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const studio1 = require('../../src/images/studio1.jpg');
		const studio2 = require('../../src/images/studio2.jpg');

		return (
			<div>
				<footer>
					{this.props.isHome && (
						<Studio />
					)}
					<div className="discover">
						<span className="icon" />
						<p>
							Strategy, UI/UX design, and development<br/>
							for startups and leading brands ment<br/>
							for startups and leading brands.
						</p>
						<button>discover more</button>
					</div>
					<div class="get-updates">
						<h6>Get updates from our latest projects</h6>
						<NewsletterSubscribe />
					</div>
				</footer>
			</div>
		);

	}

}

export default Footer;