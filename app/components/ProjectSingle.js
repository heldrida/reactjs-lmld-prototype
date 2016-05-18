'use strict';

import React from 'react';
import ProjectList from '../data/ProjectList';
import NotFound from '../components/projects/404.js';

class ProjectSingle extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			childComponent: null
		};

	}

	componentWillMount() {
		let name = this.props.routeParams.name;
		this.getComponentBySlug(name);
	}

	componentDidMount() {

	}

	getComponentBySlug(name) {

		let o = typeof ProjectList[name] !== 'undefined' ? ProjectList[name] : NotFound;

		this.setState({
			childComponent: o.component
		});

	}

	render() {

		return (
			<div className={'container-project'}>
				{ this.state.childComponent ? <this.state.childComponent /> : NotFound }
			</div>
		);

	}

}

export default ProjectSingle;