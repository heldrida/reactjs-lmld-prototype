'use strict';

import React from 'react';
import Logo from '../components/Logo';

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
					<Logo hideMainContentHandler={this.props.hideMainContentHandler} />
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