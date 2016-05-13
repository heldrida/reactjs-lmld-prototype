'use strict';

import React from 'react';

class LogoContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const topLogoSignature = require('../../src/images/top-logo-signature.svg?1');
		const topLogoAbstract = require('../../src/images/top-logo-abstract.svg?2');

		return (
			<div className={'logo-container'} onClick={this.props.hideMainContentHandler}>
				<div className={'images'}>
					<img className={'signature'} src={topLogoSignature} />
					<img className={'abstract'} src={topLogoAbstract} />
				</div>
				{this.props.showTitle && (
					<h2 className={'title'}>digital product studio</h2>
				)}
			</div>
		);

	}

}

export default LogoContainer;