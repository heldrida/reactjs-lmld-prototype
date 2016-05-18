'use strict';

import React from 'react';
import ProjectsThumbnail from '../components/ProjectsThumbnail';
import ProjectList from '../data/ProjectList';
import _ from 'lodash';

class Projects extends React.Component {

	constructor(props) {
		super(props);

		this.projectsList = null;

	}

	componentWillMount() {
		this.setProjectList();
	}

	setProjectList() {

		this.projectsList = _
							.chain(ProjectList)
							.filter(o => {
								return o.component;
							})
							.sortBy('title')
							.value();
	}

	render() {

		return (
			<div className='projects-content'>
				<div className='wrapper'>
					{this.projectsList.map((obj, key) =>
						<ProjectsThumbnail 	key={key}
											location={obj.location}
											urlHash={obj.urlHash}
											innerComponent={obj.innerComponent}
											setNoScroll={obj.setNoScroll}
											posterImg={obj.posterImg}
											title={obj.title}
											description={obj.description}
											align={obj.align.projects}
											className={obj.className.projects} />
					)}
				</div>
			</div>
		);

	}

}

export default Projects;