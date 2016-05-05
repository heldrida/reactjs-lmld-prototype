'use strict';

import React from 'react';
import { Link } from 'react-router';

class ProjectFieldIO extends React.Component {

	constructor(props) {
		super(props);

		const posterImg = require('../../../src/images/case-study/case-study-1.jpg');

		this.posterStyle = {
			backgroundImage: 'url(' + posterImg + ')',
			backgroundPosition: 'center center',
			backgroundSize: 'cover'
		};
	}

	render() {

		return (
			<div className={'project-container' + ' ' + 'project-field-io'}>
				<div className={'poster'} style={this.posterStyle}></div>
				<div className={'content'}>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				{this.props.showBackBtn && (
					<Link className={'go-back'} to="/projects">{'<< Go back to projects'}</Link>
				)}
			</div>
		);

	}

}

export default ProjectFieldIO;