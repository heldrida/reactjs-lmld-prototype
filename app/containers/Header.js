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
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		);

	}

}

export default Header;