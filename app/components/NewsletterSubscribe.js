'use strict';

import React from 'react';

class NewsletterSubscribe extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div className="newsletter-subscribe">
				<form action="getform.php" method="get">
					<fieldset>
						<input type="email" placeholder="Enter your email" />
					</fieldset>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);

	}

}

export default NewsletterSubscribe;