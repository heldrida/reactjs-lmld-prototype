'use strict';

import React from 'react';

class Newsletter extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {

		const icon = require('../../src/images/newsletter.svg?234');

		return (
			<div className="updates">
				<div className='icon'>
					<img src={icon} />
				</div>
				<div className='title'>Get updates on our latest project</div>
				<div className='form'>
					<form action="getform.php" method="get">
						<fieldset>
							<input type="email" placeholder="Enter your email" />
						</fieldset>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}

}

export default Newsletter;