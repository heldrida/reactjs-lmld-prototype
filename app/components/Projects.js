'use strict';

import React from 'react';
import ProjectFieldIO from '../components/projects/ProjectFieldIO.js';
import ProjectFloom from '../components/projects/ProjectFloom.js';

class Projects extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.project = this.projectLoader();
	}

	projectLoader() {

		let $p;

		switch(this.props.params.name) {

			case 'floom':
				$p = ProjectFloom;
			break;

			case 'field':
				$p = ProjectFieldIO;
			break;

			default:
				$p = false;

		}

		return $p;
	}

	render() {

		return (
			<div>
				{<this.project />}
			</div>
		);

	}

}

export default Projects;