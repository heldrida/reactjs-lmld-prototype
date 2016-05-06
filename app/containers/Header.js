'use strict';

import React from 'react';
import LogoContainer from '../components/LogoContainer';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<div className={'logo-wrapper'}>
					<LogoContainer />
					<div className={'tr-menu'}>
					</div>
				</div>
			</div>
		);

	}

}

export default Header;