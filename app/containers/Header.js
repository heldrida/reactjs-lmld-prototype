'use strict';

import React from 'react';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const topLogo = require('../../src/images/top-logo.svg');
		const topLogoAbstract = require('../../src/images/top-logo-abstract.svg');

		return (
			<div>
				<div className={'logo-container'}>
					<img src={topLogo} />
					<img src={topLogoAbstract} />
				</div>
				<div className={'top-block-particle'}></div>
			</div>
		);

	}

}

export default Header;