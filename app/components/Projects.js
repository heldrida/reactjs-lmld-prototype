'use strict';

import React from 'react';
import ProjectsThumbnail from '../components/ProjectsThumbnail';
import ProjectField from '../components/projects/ProjectField.js';
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
			case 'floom': $p = ProjectFloom; break;
			case 'field': $p = ProjectField; break;
			default: $p = false;
		}
		return $p;
	}

	render() {

		// Home block list data
		const homeBlockList = [{
			location: this.props.location,
			innerComponent: {
				className: 'thumb1',
				component: ProjectField
			},
			urlHash: 'field',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-1.jpg'),
			title: 'field',
			description: 'Digital Identity',
			align: 'left'
		}, {
			location: this.props.location,
			innerComponent: {
				className: 'thumb2',
				component: ProjectFloom
			},
			urlHash: 'floom',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-2.jpg'),
			title: 'floom',
			description: 'Digital Identity',
			align: 'right'
		}, {
			location: this.props.location,
			innerComponent: {
				className: 'thumb3',
				component: ProjectField
			},
			urlHash: 'field',
			setNoScroll: this.props.setNoScroll.bind(this),
			posterImg: require('../../src/images/case-study/case-study-1.jpg'),
			title: 'field',
			description: 'Digital Identity',
			align: 'left'
		}];

		return (
			<div className='projects-content'>
				<div className='wrapper'>
					{homeBlockList.map((obj, key) =>
						<ProjectsThumbnail key={key} location={obj.location} urlHash={obj.urlHash} innerComponent={obj.innerComponent} setNoScroll={obj.setNoScroll}
									posterImg={obj.posterImg} title={obj.title} description={obj.description} align={obj.align} />
					)}
				</div>
			</div>
		);

	}

}

export default Projects;