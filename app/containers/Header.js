'use strict';

import React from 'react';
import LogoContainer from '../components/LogoContainer';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(){

	}

	render() {

		return (
			<header>
				<div className={'col col-l'}>
					<LogoContainer hideMainContentHandler={this.props.hideMainContentHandler} />
				</div>
				<div className={'col col-r'}>
					<div className={'tr-menu'}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</header>
		);

	}

}

export default Header;