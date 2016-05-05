'use strict';

import React from 'react';
import ProjectFieldIO from '../components/projects/ProjectFieldIO.js';

class Projects extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<ProjectFieldIO />
			</div>
		);

	}

}

export default Projects;