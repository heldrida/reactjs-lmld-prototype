'use strict';

import React from 'react';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const topLogoSignature = require('../../src/images/top-logo-signature.svg');
		const topLogoAbstract = require('../../src/images/top-logo-abstract.svg');

		return (
			<div>
				<div className={'logo-container'}>
					<img className={'signature'} src={topLogoSignature} />
					<img className={'abstract'} src={topLogoAbstract} />
				</div>
				<div className={'top-block-particle'}></div>
			</div>
		);

	}

}

export default Header;