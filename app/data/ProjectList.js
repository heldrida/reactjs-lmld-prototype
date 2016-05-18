'use strict';

import LouboutinV3 from '../components/projects/LouboutinV3';
import ProjectField from '../components/projects/ProjectField.js';
import ProjectFloom from '../components/projects/ProjectFloom.js';

const ProjectList = {
	'louboutin-v3': {
		title: 'Christian Louboutin',
		description: 'Digital Identity',
		component: LouboutinV3
	},
	'field': {
		title: 'Field',
		description: 'Digital Identity',
		component: ProjectField
	},
	'floom': {
		title: 'Floom',
		description: 'Digital Identity',
		component: ProjectFloom
	}
};

export default ProjectList;