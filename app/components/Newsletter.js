'use strict';

import React from 'react';

class Newsletter extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="updates">
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