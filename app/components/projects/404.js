'use strict';

import React from 'react';
import { Link } from 'react-router';

class ProjectFloom extends React.Component {

	constructor(props) {
		super(props);

		this.hStyle = {
			fontSize: '42px',
			letterSpacing: '2px',
			lineHeight: '48px',
			textTransform: 'uppercase'
		};

		this.cStyle = {
			width: '100vw',
			height: '100vh'
		};

	}

	render() {

		return (
			<div className={'project-container not-found'} style={this.cStyle}>
				<h1 style={this.hStyle}>404 - NOT FOUND</h1>
				<h1 style={this.hStyle}>404 - NOT FOUND</h1>
				<h1 style={this.hStyle}>404 - NOT FOUND</h1>
				<h1 style={this.hStyle}>404 - NOT FOUND</h1>
				<h1 style={this.hStyle}>404 - NOT FOUND</h1>
				<h1 style={this.hStyle}>404 - NOT FOUND</h1>
				<h1 style={this.hStyle}>404 - NOT FOUND</h1>
				<h1 style={this.hStyle}>404 - NOT FOUND</h1>
			</div>
		);

	}

}

export default ProjectFloom;