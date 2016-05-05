'use strict';

import React from 'react';
import ProjectBlock from '../components/ProjectBlock';
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
		/*
		return (
			<div>

				{ this.project ? (
					<this.project />
				  ) : (
					<p>LIST HERE!</p>
				  )
				}

			</div>
		);
		*/

		// Home block list data
		const homeBlockList = [{
			location: this.props.location,
			innerComponent: {
				className: 'case-study-1',
				component: ProjectFieldIO
			},
			urlHash: 'field',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-1.jpg'),
			title: 'field',
			description: 'We help ambitious brands get noticed,<br/>operating in the space between digital.',
			align: 'left'
		}, {
			location: this.props.location,
			innerComponent: {
				className: 'case-study-2',
				component: ProjectFloom
			},
			urlHash: 'floom',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-2.jpg'),
			title: 'floom',
			description: 'We help ambitious brands get noticed,<br/>operating in the space between digital.',
			align: 'right'
		}];

		return (
			<div>
				{homeBlockList.map((obj, key) =>
					<ProjectBlock key={key} location={obj.location} urlHash={obj.urlHash} innerComponent={obj.innerComponent} setNoScroll={obj.setNoScroll}
								posterImg={obj.posterImg} title={obj.title} description={obj.description} align={obj.align} />
				)}
			</div>
		);

	}

}

export default Projects;